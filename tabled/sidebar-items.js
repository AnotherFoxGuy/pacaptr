initSidebarItems({"derive":[["Tabled",""]],"enum":[["Alignment","Alignment represent a horizontal and vertical alignemt setting for any cell on a [crate::Table]."],["AlignmentHorizontal","AlignmentHorizontal represents an horizontal aligment of a cell content."],["AlignmentVertical","AlignmentVertical represents an vertical aligment of a cell content."],["Disable","Disable removes particular rows/columns from a [Table]."],["Rotate","Rotate can be used to rotate a table by 90 degrees."]],"mod":[["builder","Builder module provides a [Builder] type which helps building a [Table] dynamically."],["display",""],["formatting_settings","This module contains settings for render strategy of papergrid."],["object",""],["style","This module contains a list of Styles which can be applied to change [crate::Table] styles."]],"struct":[["Concat","Concat concatenate tables along a particular axis [Horizontal | Vertical]. It doesn’t do any key or column comparisions like SQL’s join does."],["Extract","Returns a new Table that reflects a segment of the referenced Table"],["Footer","Footer renders a [Panel] at the bottom. See [Panel]."],["Format","Formatting function of particular cells on a [Grid]."],["FormatWithIndex","FormatWithIndex is like a [Format] an abstraction over a function you can use agains a cell."],["Header","Header inserts a [Panel] at the top. See [Panel]."],["Highlight","Highlight modifies a table style by changing a border of a target [Table] segment."],["Margin","Margin is responsible for a left/right/top/bottom outer indent of a grid."],["MaxWidth","MaxWidth allows you to set a max width of an object on a [Grid], using different strategies. It also allows you to set a MaxWidth for a whole table."],["MinWidth","MinWidth changes a content in case if it’s length is lower then the boundry."],["Modify","Modify structure provide an abstraction, to be able to apply a set of [CellOption]s to the same object."],["Padding","Padding is responsible for a left/right/top/bottom inner indent of a particular cell."],["Panel","Panel allows to add a Row which has 1 continues Cell to a [Table]."],["Span","Span represent a horizontal/column span setting for any cell on a [crate::Table]."],["Table","Table structure provides an interface for building a table for types that implements [Tabled]."],["Truncate","Truncate cut the string to a given width if its length exeeds it. Otherwise keeps the content of a cell untouched."],["Wrap","Wrap wraps a string to a new line in case it exeeds the provided max boundry. Otherwise keeps the content of a cell untouched."]],"trait":[["CellOption","A trait for configuring a single cell. Where cell represented by ‘row’ and ‘column’ indexes."],["TableIteratorExt","A trait for [IntoIterator] whose Item type is bound to [Tabled]. Any type implements [IntoIterator] can call this function directly"],["TableOption","A trait which is responsilbe for configuration of a [Grid]."],["Tabled","Tabled a trait responsible for providing a header fields and a row fields."]]});