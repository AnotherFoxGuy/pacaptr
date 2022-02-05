initSidebarItems({"derive":[["StructOpt","Deprecated, replaced with [`Parser`] Generates the `Parser` implementation."]],"enum":[["AppSettings","Application level settings, which affect how `App` operates"],["ArgSettings","Various settings that apply to arguments and may be set, unset, and checked via getter/setter methods `Arg::setting`, `Arg::unset_setting`, and `Arg::is_set`. This is what the `Arg` methods which accept a `bool` use internally."],["ColorChoice","Represents the color preferences for program output"],["ErrorKind","Command line argument parser kind of error"],["ValueHint","Provide shell with hint on how to complete an argument."]],"macro":[["app_from_crate","Allows you to build the `App` instance from your Cargo.toml at compile time."],["arg","Create an `Arg` from a usage string."],["arg_enum","Deprecated, replaced with [`ArgEnum`][crate::ArgEnum]"],["clap_app","Deprecated, replaced with [`clap::Parser`][crate::Parser] and [`clap::arg!`][crate::arg] (Issue clap-rs/clap#2835)"],["crate_authors","Allows you to pull the authors for the app from your Cargo.toml at compile time in the form: `\"author1 lastname <author1@example.com>:author2 lastname <author2@example.com>\"`"],["crate_description","Allows you to pull the description from your Cargo.toml at compile time."],["crate_name","Allows you to pull the name from your Cargo.toml at compile time."],["crate_version","Allows you to pull the version from your Cargo.toml at compile time as `MAJOR.MINOR.PATCH_PKGVERSION_PRE`"],["value_t","Deprecated, replaced with [`ArgMatches::value_of_t`][crate::ArgMatches::value_of_t]"],["value_t_or_exit","Deprecated, replaced with [`ArgMatches::value_of_t_or_exit`][crate::ArgMatches::value_of_t_or_exit]"],["values_t","Deprecated, replaced with [`ArgMatches::values_of_t`][crate::ArgMatches::value_of_t]"],["values_t_or_exit","Deprecated, replaced with [`ArgMatches::values_of_t_or_exit`][crate::ArgMatches::value_of_t_or_exit]"]],"struct":[["App","Build a command-line interface."],["Arg","The abstract representation of a command line argument. Used to set all the options and relationships that define a valid argument for the program."],["ArgGroup","Family of related arguments."],["ArgMatches","Container for parse results."],["Error","Command Line Argument Parser Error"],["Indices","Iterate over indices for where an argument appeared when parsing, via `ArgMatches::indices_of`"],["OsValues","Iterate over multiple values for an argument via `ArgMatches::values_of_os`."],["PossibleValue","A possible value of an argument."],["SubCommand","Deprecated, replaced with [`App::new`], unless you were looking for [Subcommand]"],["Values","Iterate over multiple values for an argument via `ArgMatches::values_of`."]],"trait":[["ArgEnum","Parse arguments into enums."],["Args","Parse a set of arguments into a user-defined container."],["FromArgMatches","Converts an instance of [`ArgMatches`] to a user-defined container."],["IntoApp","Create an [`App`] relevant for a user-defined container."],["Parser","Parse command-line arguments into `Self`."],["StructOpt","Parse command-line arguments into `Self`."],["Subcommand","Parse a sub-command into a user-defined enum."]],"type":[["Result","Short hand for `Result` type"]]});