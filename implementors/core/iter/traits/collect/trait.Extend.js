(function() {var implementors = {};
implementors["bytes"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt; for <a class=\"struct\" href=\"bytes/struct.BytesMut.html\" title=\"struct bytes::BytesMut\">BytesMut</a>","synthetic":false,"types":["bytes::bytes_mut::BytesMut"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt; for <a class=\"struct\" href=\"bytes/struct.BytesMut.html\" title=\"struct bytes::BytesMut\">BytesMut</a>","synthetic":false,"types":["bytes::bytes_mut::BytesMut"]}];
implementors["either"] = [{"text":"impl&lt;L, R, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;A&gt; for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;A&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;A&gt;,&nbsp;</span>","synthetic":false,"types":["either::Either"]}];
implementors["futures_util"] = [{"text":"impl&lt;Fut:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;Fut&gt; for <a class=\"struct\" href=\"futures_util/stream/struct.FuturesOrdered.html\" title=\"struct futures_util::stream::FuturesOrdered\">FuturesOrdered</a>&lt;Fut&gt;","synthetic":false,"types":["futures_util::stream::futures_ordered::FuturesOrdered"]},{"text":"impl&lt;Fut&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;Fut&gt; for <a class=\"struct\" href=\"futures_util/stream/struct.FuturesUnordered.html\" title=\"struct futures_util::stream::FuturesUnordered\">FuturesUnordered</a>&lt;Fut&gt;","synthetic":false,"types":["futures_util::stream::futures_unordered::FuturesUnordered"]},{"text":"impl&lt;St:&nbsp;<a class=\"trait\" href=\"futures_util/stream/trait.Stream.html\" title=\"trait futures_util::stream::Stream\">Stream</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;St&gt; for <a class=\"struct\" href=\"futures_util/stream/struct.SelectAll.html\" title=\"struct futures_util::stream::SelectAll\">SelectAll</a>&lt;St&gt;","synthetic":false,"types":["futures_util::stream::select_all::SelectAll"]}];
implementors["hashbrown"] = [{"text":"impl&lt;K, V, S, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.tuple.html\">(K, V)</a>&gt; for <a class=\"struct\" href=\"hashbrown/hash_map/struct.HashMap.html\" title=\"struct hashbrown::hash_map::HashMap\">HashMap</a>&lt;K, V, S, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Allocator + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["hashbrown::map::HashMap"]},{"text":"impl&lt;'a, K, V, S, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.reference.html\">&amp;'a </a>K, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.reference.html\">&amp;'a </a>V)&gt; for <a class=\"struct\" href=\"hashbrown/hash_map/struct.HashMap.html\" title=\"struct hashbrown::hash_map::HashMap\">HashMap</a>&lt;K, V, S, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Allocator + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["hashbrown::map::HashMap"]},{"text":"impl&lt;T, S, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;T&gt; for <a class=\"struct\" href=\"hashbrown/hash_set/struct.HashSet.html\" title=\"struct hashbrown::hash_set::HashSet\">HashSet</a>&lt;T, S, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Allocator + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["hashbrown::set::HashSet"]},{"text":"impl&lt;'a, T, S, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.reference.html\">&amp;'a </a>T&gt; for <a class=\"struct\" href=\"hashbrown/hash_set/struct.HashSet.html\" title=\"struct hashbrown::hash_set::HashSet\">HashSet</a>&lt;T, S, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: 'a + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Allocator + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,&nbsp;</span>","synthetic":false,"types":["hashbrown::set::HashSet"]}];
implementors["indexmap"] = [{"text":"impl&lt;K, V, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(K, V)</a>&gt; for <a class=\"struct\" href=\"indexmap/map/struct.IndexMap.html\" title=\"struct indexmap::map::IndexMap\">IndexMap</a>&lt;K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,&nbsp;</span>","synthetic":false,"types":["indexmap::map::IndexMap"]},{"text":"impl&lt;'a, K, V, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'a </a>K, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'a </a>V)&gt; for <a class=\"struct\" href=\"indexmap/map/struct.IndexMap.html\" title=\"struct indexmap::map::IndexMap\">IndexMap</a>&lt;K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,&nbsp;</span>","synthetic":false,"types":["indexmap::map::IndexMap"]},{"text":"impl&lt;T, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;T&gt; for <a class=\"struct\" href=\"indexmap/set/struct.IndexSet.html\" title=\"struct indexmap::set::IndexSet\">IndexSet</a>&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,&nbsp;</span>","synthetic":false,"types":["indexmap::set::IndexSet"]},{"text":"impl&lt;'a, T, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'a </a>T&gt; for <a class=\"struct\" href=\"indexmap/set/struct.IndexSet.html\" title=\"struct indexmap::set::IndexSet\">IndexSet</a>&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + 'a,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html\" title=\"trait core::hash::BuildHasher\">BuildHasher</a>,&nbsp;</span>","synthetic":false,"types":["indexmap::set::IndexSet"]}];
implementors["proc_macro2"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"enum\" href=\"proc_macro2/enum.TokenTree.html\" title=\"enum proc_macro2::TokenTree\">TokenTree</a>&gt; for <a class=\"struct\" href=\"proc_macro2/struct.TokenStream.html\" title=\"struct proc_macro2::TokenStream\">TokenStream</a>","synthetic":false,"types":["proc_macro2::TokenStream"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"proc_macro2/struct.TokenStream.html\" title=\"struct proc_macro2::TokenStream\">TokenStream</a>&gt; for <a class=\"struct\" href=\"proc_macro2/struct.TokenStream.html\" title=\"struct proc_macro2::TokenStream\">TokenStream</a>","synthetic":false,"types":["proc_macro2::TokenStream"]}];
implementors["syn"] = [{"text":"impl&lt;T, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;T&gt; for <a class=\"struct\" href=\"syn/punctuated/struct.Punctuated.html\" title=\"struct syn::punctuated::Punctuated\">Punctuated</a>&lt;T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,&nbsp;</span>","synthetic":false,"types":["syn::punctuated::Punctuated"]},{"text":"impl&lt;T, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"enum\" href=\"syn/punctuated/enum.Pair.html\" title=\"enum syn::punctuated::Pair\">Pair</a>&lt;T, P&gt;&gt; for <a class=\"struct\" href=\"syn/punctuated/struct.Punctuated.html\" title=\"struct syn::punctuated::Punctuated\">Punctuated</a>&lt;T, P&gt;","synthetic":false,"types":["syn::punctuated::Punctuated"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"struct\" href=\"syn/parse/struct.Error.html\" title=\"struct syn::parse::Error\">Error</a>&gt; for <a class=\"struct\" href=\"syn/parse/struct.Error.html\" title=\"struct syn::parse::Error\">Error</a>","synthetic":false,"types":["syn::error::Error"]}];
implementors["tabled"] = [{"text":"impl&lt;D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;D&gt; for <a class=\"struct\" href=\"tabled/builder/struct.Builder.html\" title=\"struct tabled::builder::Builder\">Builder</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a>,&nbsp;</span>","synthetic":false,"types":["tabled::builder::Builder"]}];
implementors["tokio_stream"] = [{"text":"impl&lt;K, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(K, V)</a>&gt; for <a class=\"struct\" href=\"tokio_stream/struct.StreamMap.html\" title=\"struct tokio_stream::StreamMap\">StreamMap</a>&lt;K, V&gt;","synthetic":false,"types":["tokio_stream::stream_map::StreamMap"]}];
implementors["toml"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;(<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"enum\" href=\"toml/value/enum.Value.html\" title=\"enum toml::value::Value\">Value</a>)&gt; for <a class=\"struct\" href=\"toml/map/struct.Map.html\" title=\"struct toml::map::Map\">Map</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>, <a class=\"enum\" href=\"toml/value/enum.Value.html\" title=\"enum toml::value::Value\">Value</a>&gt;","synthetic":false,"types":["toml::map::Map"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()