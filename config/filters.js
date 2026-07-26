module.exports = async function (eleventyConfig) {
    const markdown = require("markdown-it")({
        html: true,
        breaks: true,
        linkify: true,
    });
    var markdownItAttrs = require('markdown-it-attrs');
    let markdownLib = markdown.use(markdownItAttrs);
    eleventyConfig.setLibrary("md", markdownLib);
    eleventyConfig.addFilter("markdown", function (rawString) {
        return markdown.renderInline(rawString);
    });


    eleventyConfig.addFilter("exclude", function (list, excludeString) {
        return list.filter(el => el != excludeString)
    });

    eleventyConfig.addFilter("underscorize", function (string) {
        return string.replace(/[^a-zA-Z0-9 ]/g, '').split(' ').join('_')
    });
}