var katex = require("katex");

module.exports = {
    book: {
        assets: "./static",
        js: [],
        css: [
            "katex.min.css"
        ]
    },
    ebook: {
        assets: "./static",
        css: [
            "katex.min.css"
        ]
    },
    blocks: {
        display_math: {
            shortcuts: {
                parsers: ["markdown", "asciidoc", "restructuredtext"],
                start: "$$",
                end: "$$"
            },
            process: function(blk) {
                var tex = blk.body;
                var output = katex.renderToString(tex, {
                    displayMode: true
                });

                return output;
            }
        },
        inline_math: {
            shortcuts: {
                parsers: ["markdown", "asciidoc", "restructuredtext"],
                start: "$",
                end: "$"
            },
            process: function(blk) {
                var tex = blk.body;
                var output = katex.renderToString(tex, {
                    displayMode: false
                });

                return output;
            }
        },
    }
};
