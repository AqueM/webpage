module.exports = async function (eleventyConfig) {
    const markdown = require("markdown-it")({
        html: true,
        breaks: true,
        linkify: true,
    });
    eleventyConfig.addFilter("markdown", function (rawString) {
        return markdown.renderInline(rawString);
    });

    eleventyConfig.addFilter("sort", function (collection) {
        return collection.sort(function (a, b) {
            return a.data.order - b.data.order;
        });
    });

    eleventyConfig.addFilter("exclude", function (list, excludeString) {
        return list.filter(el => el != excludeString)
    });
}