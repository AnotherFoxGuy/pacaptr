#![doc = docs_self!()]

use std::io::Write;

use async_trait::async_trait;
use futures::prelude::*;
use indoc::indoc;
use once_cell::sync::Lazy;
use tap::Pipe;

use super::{Pm, PmHelper, PmMode, PromptStrategy, Strategy};
use crate::{
    dispatch::Config,
    error::{Error, Result},
    exec::{Cmd, StatusCode},
    print::print_err,
};

macro_rules! docs_self {
    () => {
        indoc! {"
            The [X Binary Package System](https://github.com/void-linux/xbps)
        "}
    };
}

const PKG_NOT_FOUND_CODE: StatusCode = 2;

#[doc = docs_self!()]
#[derive(Debug)]
pub(crate) struct Xbps {
    cfg: Config,
}

static STRAT_PROMPT: Lazy<Strategy> = Lazy::new(|| Strategy {
    prompt: PromptStrategy::native_no_confirm(&["--yes"]),
    ..Strategy::default()
});

impl Xbps {
    #[must_use]
    #[allow(missing_docs)]
    pub(crate) fn new(cfg: Config) -> Self {
        Xbps { cfg }
    }
}

#[async_trait]
impl Pm for Xbps {
    /// Gets the name of the package manager.
    fn name(&self) -> &str {
        "xbps"
    }

    fn cfg(&self) -> &crate::dispatch::Config {
        &self.cfg
    }

    /// Q generates a list of installed packages.
    async fn q(&self, kws: &[&str], flags: &[&str]) -> Result<()> {
        if kws.is_empty() {
            return self
                .run(Cmd::new(&["xbps-query", "-l"]).kws(kws).flags(flags))
                .await;
        }

        let lines: Vec<_> = stream::iter(kws)
            .map(Ok)
            .and_then(|&pkg| async {
                let cmd = Cmd::new(&["xbps-query", "--property", "pkgver", pkg]).flags(flags);
                self.check_output(cmd, PmMode::Mute, &Strategy::default())
                    .await
                    .map_err(|err| (pkg.to_string(), err))
            })
            .collect()
            .await;

        let mut stdout = std::io::stdout();
        let mut pkg_not_found_detected = false;
        for line in lines {
            match line {
                Ok(line) => {
                    stdout.write_all(&line)?;
                }
                Err((
                    pkg,
                    err @ Error::CmdStatusCodeError {
                        code: PKG_NOT_FOUND_CODE,
                        ..
                    },
                )) => {
                    pkg_not_found_detected = true;
                    let msg = format!("package '{}' was not found", pkg);
                    print_err(err, &msg);
                }
                Err((_, other)) => return Err(other),
            };
        }

        if pkg_not_found_detected {
            return Err(Error::CmdStatusCodeError {
                code: PKG_NOT_FOUND_CODE,
                output: vec![],
            });
        }

        Ok(())
    }

    /// Qe lists packages installed explicitly (not as dependencies).
    async fn qe(&self, kws: &[&str], flags: &[&str]) -> Result<()> {
        if kws.is_empty() {
            return self
                .run(Cmd::new(&["xbps-query", "-m"]).kws(kws).flags(flags))
                .await;
        }

        let lines: Vec<_> = stream::iter(kws)
            .filter(|&&pkg| async {
                let check_cmd =
                    Cmd::new(&["xbps-query", "--property", "automatic-install", pkg]).flags(flags);
                let result = self
                    .check_output(check_cmd, PmMode::Mute, &Strategy::default())
                    .await;

                // if a package is manually installed then the automatic-install field is empty
                match result {
                    Ok(auto_status) => auto_status.is_empty(),
                    _ => true,
                }
            })
            .map(Ok)
            .and_then(|&pkg| async {
                let cmd = Cmd::new(&["xbps-query", "--property", "pkgver", pkg]).flags(flags);
                self.check_output(cmd, PmMode::Mute, &Strategy::default())
                    .await
                    .map_err(|err| (pkg.to_string(), err))
            })
            .collect()
            .await;

        let mut stdout = std::io::stdout();
        let mut pkg_not_found_detected = false;
        for line in lines {
            match line {
                Ok(line) => {
                    stdout.write_all(&line)?;
                }
                Err((
                    pkg,
                    err @ Error::CmdStatusCodeError {
                        code: PKG_NOT_FOUND_CODE,
                        ..
                    },
                )) => {
                    pkg_not_found_detected = true;
                    let msg = format!("package '{}' was not found", pkg);
                    print_err(err, &msg);
                }
                Err((_, other)) => return Err(other),
            }
        }

        if pkg_not_found_detected {
            return Err(Error::CmdStatusCodeError {
                code: PKG_NOT_FOUND_CODE,
                output: vec![],
            });
        }

        Ok(())
    }

    /// Qi displays local package information: name, version, description, etc.
    async fn qi(&self, kws: &[&str], flags: &[&str]) -> Result<()> {
        self.run(Cmd::new(&["xbps-query", "-S"]).kws(kws).flags(flags))
            .await
    }

    /// Ql displays files provided by local package.
    async fn ql(&self, kws: &[&str], flags: &[&str]) -> Result<()> {
        self.run(Cmd::new(&["xbps-query", "-f"]).kws(kws).flags(flags))
            .await
    }

    /// Qs searches locally installed package for names or descriptions.
    async fn qs(&self, kws: &[&str], flags: &[&str]) -> Result<()> {
        self.run(Cmd::new(&["xbps-query", "-s"]).kws(kws).flags(flags))
            .await
    }

    /// R removes a single package, leaving all of its dependencies installed.
    async fn r(&self, kws: &[&str], flags: &[&str]) -> Result<()> {
        Cmd::with_sudo(&["xbps-remove"])
            .kws(kws)
            .flags(flags)
            .pipe(|cmd| self.run_with(cmd, PmMode::default(), &STRAT_PROMPT))
            .await
    }

    /// Rs removes a package and its dependencies which are not required by any other installed package,
    /// and not explicitly installed by the user.
    async fn rs(&self, kws: &[&str], flags: &[&str]) -> Result<()> {
        Cmd::with_sudo(&["xbps-remove", "-R"])
            .kws(kws)
            .flags(flags)
            .pipe(|cmd| self.run_with(cmd, PmMode::default(), &STRAT_PROMPT))
            .await
    }

    /// S installs one or more packages by name.
    async fn s(&self, kws: &[&str], flags: &[&str]) -> Result<()> {
        Cmd::with_sudo(&["xbps-install"])
            .kws(kws)
            .flags(flags)
            .pipe(|cmd| self.run_with(cmd, PmMode::default(), &STRAT_PROMPT))
            .await
    }

    /// Sc removes all the cached packages that are not currently installed, and the unused sync database.
    async fn sc(&self, kws: &[&str], flags: &[&str]) -> Result<()> {
        Cmd::with_sudo(&["xbps-remove", "-O"])
            .kws(kws)
            .flags(flags)
            .pipe(|cmd| self.run_with(cmd, PmMode::default(), &STRAT_PROMPT))
            .await
    }

    /// Si displays remote package information: name, version, description, etc.
    async fn si(&self, kws: &[&str], flags: &[&str]) -> Result<()> {
        self.run(Cmd::new(&["xbps-query", "-RS"]).kws(kws).flags(flags))
            .await
    }

    /// Sii displays packages which require X to be installed, aka reverse dependencies.
    async fn sii(&self, kws: &[&str], flags: &[&str]) -> Result<()> {
        self.run(Cmd::new(&["xbps-query", "-RX"]).kws(kws).flags(flags))
            .await
    }

    /// Ss searches for package(s) by searching the expression in name, description, short description.
    async fn ss(&self, kws: &[&str], flags: &[&str]) -> Result<()> {
        self.run(Cmd::new(&["xbps-query", "-Rs"]).kws(kws).flags(flags))
            .await
    }

    /// Suy refreshes the local package database, then updates outdated packages.
    async fn suy(&self, kws: &[&str], flags: &[&str]) -> Result<()> {
        Cmd::with_sudo(&["xbps-install", "-Su"])
            .kws(kws)
            .flags(flags)
            .pipe(|cmd| self.run_with(cmd, PmMode::default(), &STRAT_PROMPT))
            .await
    }

    /// Sy refreshes the local package database.
    async fn sy(&self, kws: &[&str], flags: &[&str]) -> Result<()> {
        self.run(Cmd::new(&["xbps-install", "-S"]).kws(kws).flags(flags))
            .await
    }

    /// Sw retrieves all packages from the server, but does not install/upgrade anything.
    async fn sw(&self, kws: &[&str], flags: &[&str]) -> Result<()> {
        Cmd::with_sudo(&["xbps-install", "-D"])
            .kws(kws)
            .flags(flags)
            .pipe(|cmd| self.run_with(cmd, PmMode::default(), &STRAT_PROMPT))
            .await
    }

    /// Su updates outdated packages.
    async fn su(&self, kws: &[&str], flags: &[&str]) -> Result<()> {
        Cmd::with_sudo(&["xbps-install", "-u"])
            .kws(kws)
            .flags(flags)
            .pipe(|cmd| self.run_with(cmd, PmMode::default(), &STRAT_PROMPT))
            .await
    }
}