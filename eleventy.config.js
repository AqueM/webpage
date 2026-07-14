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
        eleventyConfig.addPairedShortcode("columns-wrap", function (content) {
        return `<section class="columns wrap">
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

    // Shortcodes for content

    eleventyConfig.addShortcode("neighbour", function (neighbour) {
        let className = "";
        if (neighbour.isAnimated) {
            className = "animated"
        };
        if(neighbour.img){
            return `<div class="badge"><a href="${neighbour.url}" target="_blank"><img class="${className}" src="${neighbour.img}" alt="${neighbour.alt}"></a></div>`
        } 
        return `<div class="round-link"><a href="${neighbour.url}" target="_blank">${neighbour.alt}</a></div>`;
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
        return `<div class="pswp-gallery__item"><figure>
        <a href="${image.src}" data-pswp-width="${image.width}" data-pswp-height="${image.height}" class="noformat">
            <img loading="lazy" src="${image.src}" title="${image.title}" alt="${image.alt}" class="noformat"/></a>
        </a>
        <figcaption class="pswp-caption-content"><p><strong>${image.title}</strong></p><p>${image.date}</p></figcaption>
        </figure></div>`;
    });
    eleventyConfig.addShortcode("imageMineSquare", function (image) {
        return `<div class="pswp-gallery__item square"><figure>
        <a href="${image.src}" data-pswp-width="${image.width}" data-pswp-height="${image.height}" class="noformat">
            <img loading="lazy" src="${image.src}" title="${image.title}" alt="${image.alt}" class="noformat"/></a>
        </a>
        <figcaption class="pswp-caption-content"><p><strong>${image.title}</strong></p><p>by Aque, ${image.date}</p></figcaption>
        </figure></div>`;
    });
    eleventyConfig.addShortcode("photoMine", function (image) {
        let title = image.title;
        if (image.url) {
            title = `<a href="${image.url}" target="_blank">${image.title}</a>`;
        }
        let caption = "";
        if (image.caption) {
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
