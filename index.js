var katex = require("katex");

module.exports = {
    // book: {
        // assets: "./static",
        // js: [],
        // css: [
            // "katex.min.css"
        // ]
    // },
    // ebook: {
        // assets: "./static",
        // css: [
            // "katex.min.css"
        // ]
    // },
    // blocks: {
        // display_math: {
            // shortcuts: {
                // parsers: ["markdown"],
                // start: "$$",
                // end: "$$"
            // },
            // process: function(blk) {
                // var tex = blk.body;
                // var output = katex.renderToString(tex, {
                    // displayMode: true
                // });

                // return output;
            // }
        // },
        // inline_math: {
            // shortcuts: {
                // parsers: ["markdown"],
                // start: "\\(",
                // end: "\\)"
            // },
            // process: function(blk) {
                // var tex = blk.body;
                // var output = katex.renderToString(tex, {
                    // displayMode: false
                // });

                // return output;
            // }
        // },
    // }
    hooks: {
        "page": function(section) {
            section.content += '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.css"> <script src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.6.0/katex.min.js"></script>script>';

            return section;
        }
    }
};
