initSidebarItems({"enum":[["DryRunStrategy","How a dry run is dealt with."],["NoCacheStrategy","How the cache is cleaned when `no_cache` is set to `true`."],["PmMode","Different ways in which a command shall be dealt with. This is a [`Pm`] specified version intended to be used along with [`Strategy`]."],["PromptStrategy","How the prompt is dealt with when running the package manager."]],"macro":[["_decor_pm",""],["decor_pm","Send `methods!()` to `_decor_pm`, that is:"],["make_op_body",""]],"mod":[["apk","The Alpine Linux package management system."],["apt","The Advanced Package Tool."],["brew","The Homebrew Package Manager."],["choco","The Chocolatey Package Manager."],["conda","The Conda Package Manager."],["dnf","The Dandified YUM."],["emerge","The Portage Package Manager."],["pip","The Python Package Installer."],["port","The MacPorts Package Manager."],["scoop","The Scoop CLI Installer."],["tlmgr","The TexLive Package Manager."],["unknown","An empty mapping for unidentified package managers."],["zypper","The Zypper Package Manager."]],"struct":[["Strategy","A set of intrinsic properties of a command in the context of a specific package manager, indicating how it is run."]],"trait":[["Pm","The feature set of a Package Manager defined by `pacman` commands."],["PmHelper","Extra implementation helper functions for [`Pm`], focusing on the ability to run commands ([`Cmd`]s) in a configured and [`Pm`]-specific context."]]});