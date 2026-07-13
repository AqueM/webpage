module.exports = async function (eleventyConfig) {

    // SETUP
    eleventyConfig.addPassthroughCopy({ "_src/_assets": "assets" });
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

    eleventyConfig.addPairedShortcode("gallery", function (content) {
        return `<div class="gallery pswp-gallery">
                    ${content}
                </div>`;
    });

    eleventyConfig.addShortcode("image", function (image) {
        return `<div class="pswp-gallery__item square"><figure>
        <a href="${image.src}" data-pswp-width="${image.width}" data-pswp-height="${image.height}" class="noformat">
            <img loading="lazy" src="${image.src}" title="${image.title}" alt="${image.alt}" class="noformat" /></a>
        </a>
        <figcaption class="pswp-caption-content"><p><strong>${image.title}</strong></p><p>${image.caption}, by <cite><a href="${image.authorLink}" target="_blank">${image.artist}</a></cite></p>
        <p class="image-caption">${image.alt}</p></figcaption>
        </figure></div>`;
    });

    eleventyConfig.addShortcode("imageMine", function (image) {
        return `<div class="pswp-gallery__item square"><figure>
        <a href="${image.src}" data-pswp-width="${image.width}" data-pswp-height="${image.height}" class="noformat">
            <img loading="lazy" src="${image.src}" title="${image.title}" alt="${image.alt}" class="noformat"/></a>
        </a>
        <figcaption class="pswp-caption-content"><p><strong>${image.title}</strong></p><p><cite>{{image.author}}</cite> <span>${image.caption}</span></p></figcaption>
        </figure></div>`;
    });
    eleventyConfig.addShortcode("photoMine", function (image) {
        let title = image.title;
        if (image.url){
            title = `<a href="${image.url}" target="_blank">${image.title}</a>`;
        }
        let caption = "";
        if (image.caption){
            caption = `<span>${image.caption}</span>`;
        }
        return `<div class="pswp-gallery__item square"><figure>
        <a href="${image.src}" data-pswp-width="${image.width}" data-pswp-height="${image.height}" class="noformat">
            <img loading="lazy" src="${image.src}" title="${image.title}" alt="${image.alt}" class="noformat"/></a>
        </a>
        <figcaption class="pswp-caption-content"><p><strong>`+ title + `</strong></p>` + caption + `</figcaption>
        </figure></div>`;
    });
    eleventyConfig.addShortcode("treasure", function (image) {
        return `<div class="pswp-gallery__item square"><figure>
        <a href="${image.src}" data-pswp-width="${image.width}" data-pswp-height="${image.height}" class="noformat">
            <img loading="lazy" src="${image.src}" title="${image.title}" alt="${image.alt}" class="noformat" /></a>
        </a>
        <figcaption class="pswp-caption-content"><p><strong>${image.title}</strong><br>(${image.date})</p><p>by <cite>${image.artist}</cite></p>
        <p><a href="${image.link}" target="_blank">source</a>
        <p class="image-caption">${image.alt}</p></figcaption>
        </figure></div>`;
    });

}
