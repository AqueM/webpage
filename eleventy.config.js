module.exports = async function (eleventyConfig) {
  const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");
  const path = require("node:path");

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
    sharpOptions: {
      animated: true,
    },

    // output image widths
    widths: ["auto"],
    urlPath: "/assets/images/optimized/",
    filenameFormat: function (id, src, width, format, options) {
      return `${path.dirname(src)}_${path.basename(src, path.extname(src))}__${width}.${format}`;
    },

    // optional, attributes assigned on <img> nodes override these values
    htmlOptions: {
      imgAttributes: {
        alt: "",
        loading: "lazy",
        decoding: "async",
      },
      pictureAttributes: {},
    },
  });
};
