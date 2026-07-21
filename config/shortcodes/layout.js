module.exports = async function (eleventyConfig) {
    eleventyConfig.addPairedShortcode("flex-columns", function (content) {
        return `<div class="layout__flex-block__row layout__flex-block--space-around">${content}</div>`;
    });
    eleventyConfig.addPairedShortcode("flex-columns-centered", function (content) {
        return `<div class="layout__flex-block__row layout__flex-block--center">${content}</div>`;
    });
    eleventyConfig.addPairedShortcode("flex-stack-centered", function (content) {
        return `<div class="layout__flex-block__stack layout__flex-block--center">${content}</div>`;
    });
    eleventyConfig.addPairedShortcode("flex-stack", function (content) {
        return `<div class="layout__flex-block__stack">${content}</div>`;
    });

    eleventyConfig.addPairedShortcode("flex-item", function (content) {
        return `<div class="layout__flex-item">${content}</div>`;
    });
    eleventyConfig.addPairedShortcode("flex-aside", function (content) {
        return `<div class="layout__flex-item__aside">${content}</div>`;
    });

    eleventyConfig.addShortcode("flex-break-newrow", function (content) {
        return `<div class="layout__flex-item-break-row"></div>`;
    });
    
    eleventyConfig.addPairedShortcode("gallery", function (content) {
        return `<div class="gallery layout__grid-block pswp-gallery">${content}</div>`;
    });

    eleventyConfig.addPairedShortcode("indent", function (content) {
        return `<div class="design__indent">${content}</div>`;
    });
}