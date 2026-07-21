module.exports = async function (eleventyConfig) {

    // SETUP
    eleventyConfig.setInputDirectory("_src");
    eleventyConfig.addPassthroughCopy({ "_src/_assets": "assets" });
    eleventyConfig.addPassthroughCopy("_src/robots.txt");
    eleventyConfig.addPassthroughCopy("_src/ai.txt");
    eleventyConfig.addPassthroughCopy({
        "node_modules/photoswipe/dist": "assets/photoswipe"
    });
    eleventyConfig.setLiquidOptions({
		jsTruthy: true,
	});

    require("./config/filters.js")(eleventyConfig);
    require("./config/file-reading.js")(eleventyConfig);
    require("./config/shortcodes/content.js")(eleventyConfig);
    require("./config/shortcodes/theme.js")(eleventyConfig);
    require("./config/shortcodes/layout.js")(eleventyConfig);
    require("./config/collections.js")(eleventyConfig);
}
