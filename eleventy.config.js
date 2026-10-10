module.exports = async function (eleventyConfig) {
  const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");
  // SETUP
  eleventyConfig.setInputDirectory("_src");
  eleventyConfig.addPassthroughCopy({ "_src/assets": "assets" });
  eleventyConfig.addPassthroughCopy("_src/robots.txt");
  eleventyConfig.addPassthroughCopy("_src/ai.txt");
  eleventyConfig.addPassthroughCopy({
    "node_modules/photoswipe/dist": "assets/photoswipe",
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

  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    // output image formats
    formats: ["webp"],
    outputDir: "./_site/assets/images/",

    // output image widths
    widths: ["auto"],

    // optional, attributes assigned on <img> nodes override these values
    htmlOptions: {
      imgAttributes: {
        filenameFormat: function (id, src, width, format, options) {
          const extension = path.extname(src);
          const name = path.basename(src, extension);

          return `${name}-${width}w.${format}`;
        },
        alt: "",
        loading: "lazy",
        decoding: "async",
      },
      pictureAttributes: {},
    },
  });
};
