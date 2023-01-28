use anyhow::Result;
use const_format::formatcp;
use xshell::{cmd, Shell};

use crate::dispatch::{get_ref_from_env, names::CORE};

pub struct Binary<'s> {
    pub artifact: &'s str,
    pub platform: &'s str,
}

impl<'s> Binary<'s> {
    pub fn asset(&self) -> String {
        format!("{}-{}", CORE, self.platform)
    }

    pub fn archive(&self) -> String {
        self.asset() + ".tar.gz"
    }
}

pub enum BinaryBuilder<'s> {
    Native(Binary<'s>),

    /// A [`Binary`] generated by cross compilation.
    Cross {
        bin: Binary<'s>,
        rust_target: &'s str,
    },
}

impl<'s> BinaryBuilder<'s> {
    pub fn bin(&self) -> &Binary {
        match self {
            BinaryBuilder::Native(bin) | BinaryBuilder::Cross { bin, .. } => bin,
        }
    }

    pub fn build(&self) -> Result<()> {
        println!(":: Building the binary in `release` mode...");
        let s = Shell::new()?;
        match self {
            BinaryBuilder::Native(_) => {
                cmd!(s, "cargo build --verbose --bin {CORE} --release --locked").run()?;
            }
            BinaryBuilder::Cross { rust_target, .. } => {
                cmd!(s, "rustup target add {rust_target}").run()?;
                cmd!(
                    s,
                    "cargo build --verbose --bin {CORE} --release --locked --target={rust_target}"
                )
                .run()?;
            }
        }
        Ok(())
    }

    pub fn bin_dir(&self) -> String {
        if let BinaryBuilder::Cross { rust_target, .. } = self {
            format!("./target/{rust_target}/release/")
        } else {
            "./target/release/".to_owned()
        }
    }

    pub fn zip(&self) -> Result<()> {
        println!(":: Zipping the binary...");
        let s = Shell::new()?;
        let bin = self.bin();
        let asset = &bin.asset();
        let artifact = &bin.artifact;
        let bin_dir = self.bin_dir();
        cmd!(s, "tar czvf {asset}.tar.gz -C {bin_dir} {artifact}").run()?;

        println!(":: Generating sha256...");
        let shasum = cmd!(s, "openssl dgst -r -sha256 {asset}.tar.gz").read()?;
        s.write_file(format!("{asset}.tar.gz.sha256"), shasum)?;
        Ok(())
    }

    pub fn upload(&self) -> Result<()> {
        println!(":: Uploading binary and sha256...");
        let s = Shell::new()?;
        let tag = get_ref_from_env()?;
        let asset = self.bin().asset();
        cmd!(
            s,
            "gh release upload {tag} {asset}.tar.gz {asset}.tar.gz.sha256"
        )
        .run()?;
        Ok(())
    }
}

pub const WIN_X64: Binary = Binary {
    artifact: formatcp!("{CORE}.exe"),
    platform: "windows-amd64",
};

pub const MAC_X64: Binary = Binary {
    artifact: CORE,
    platform: "macos-amd64",
};

pub const MAC_ARM: Binary = Binary {
    artifact: CORE,
    platform: "macos-aarch64",
};

pub const MAC_UNIV: Binary = Binary {
    artifact: CORE,
    platform: "macos-universal",
};

pub const LINUX_X64: Binary = Binary {
    artifact: CORE,
    platform: "linux-amd64",
};
