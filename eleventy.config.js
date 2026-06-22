module.exports = async function (eleventyConfig) {

    // SETUP

    eleventyConfig.addPassthroughCopy("_src/assets");
    eleventyConfig.addPassthroughCopy("_src/robots.txt");
    eleventyConfig.addPassthroughCopy("_src/ai.txt");
    eleventyConfig.addPassthroughCopy({
      "node_modules/photoswipe/dist": "assets/photoswipe"
     });
    eleventyConfig.setInputDirectory("_src");

    // add markdown attributes lib
    let markdownIt = require("markdown-it");
    var markdownItAttrs = require('markdown-it-attrs');
    let mdOptions = {
        html: true,
        breaks: true,
        linkify: true
    };
    let markdownLib = markdownIt(mdOptions).use(markdownItAttrs);
    eleventyConfig.setLibrary("md", markdownLib);

    eleventyConfig.addFilter("order", function (collection) {
        return collection.sort(function (a, b) {
            return a.data.order - b.data.order;
        });
    });

    // SHORTCODES

    // shortcodes for styled content
    eleventyConfig.addShortcode("heading", function (size, title, subtitle) {
        let sub = '';
        if (typeof subtitle !== 'undefined') {
            sub = `<span class="subtitle">
				${subtitle}
				</span>`
        };
        return `<div class="heading">
				<${size} class="title">${title}</${size}>`
            + sub +
            `</div>`;
    });
    eleventyConfig.addPairedShortcode("columns", function (content) {
        return `<section class="columns">
        ${content}
        </section>`;
    });
    eleventyConfig.addPairedShortcode("column", function (content) {
        return `<div class="column">
        ${content}
        </div>`;
    });
    eleventyConfig.addPairedShortcode("columns-spaced", function (content) {
        return `<div class="columns columns-spaced">
        ${content}
        </div>`;
    });
    eleventyConfig.addPairedShortcode("column-side", function (content) {
        return `<div class="column-side">
        ${content}
        </div>`;
    });

    eleventyConfig.addPairedShortcode("fancy-border", function (content) {
        return `<div class="fancy-border">
			<div class="corner top left"></div>
			<div class="corner top right"></div>
			<div class="corner bottom left"></div>
			<div class="corner bottom right"></div>
        ${content}
        </div>`;
    });

    // source https://www.bash.lk/posts/tech/1-elventy-image-gallery/
    
    const sharp = require('sharp');
    const Image = require('@11ty/eleventy-img');

    const GALLERY_IMAGE_WIDTH = 192;
    const LANDSCAPE_LIGHTBOX_IMAGE_WIDTH = 2000;
    const PORTRAIT_LIGHTBOX_IMAGE_WIDTH = 720;

    async function galleryImageShortcode(src, alt) {
        let lightboxImageWidth = LANDSCAPE_LIGHTBOX_IMAGE_WIDTH;

        const metadata = await sharp(src).metadata();

        if (metadata.height > metadata.width) {
            lightboxImageWidth = PORTRAIT_LIGHTBOX_IMAGE_WIDTH;
        }

        const options = {
            formats: ['jpeg'],
            widths: [GALLERY_IMAGE_WIDTH, lightboxImageWidth],
            urlPath: "/assets/images/commissions",
            outputDir: './_site/assets/images/commissions/'
        }

        const genMetadata = await Image(src, options);

        return `
        <a href="${genMetadata.jpeg[1].url}" 
        data-pswp-width="${genMetadata.jpeg[1].width}" 
        data-pswp-height="${genMetadata.jpeg[1].height}" 
        target="_blank">
            <img src="${genMetadata.jpeg[0].url}" alt="${alt}" />
        </a>
    `.replace(/(\r\n|\n|\r)/gm, "");;
    }

    eleventyConfig.addLiquidShortcode('galleryImage', galleryImageShortcode);

    // FILTERS

    // date filters
    const options = {
        year: 'numeric', month: 'numeric', day: 'numeric',
        hour: undefined,
        minute: undefined,
        second: undefined,
    };
    const optionsMonth = {
        year: 'numeric', month: 'numeric', day: undefined,
        hour: undefined,
        minute: undefined,
        second: undefined,
    };
    const optionsYear = {
        year: 'numeric', month: undefined, day: undefined,
        hour: undefined,
        minute: undefined,
        second: undefined,
    };
    eleventyConfig.addFilter("readableDate", dateObj => {
        return dateObj.toLocaleString("en-GB", options)
    });
    eleventyConfig.addFilter("readableMonth", dateObj => {
        return dateObj.toLocaleString("en-GB", optionsMonth)
    });
    eleventyConfig.addFilter("readableYear", dateObj => {
        return dateObj.toLocaleString("en-GB", optionsYear)
    });
}
