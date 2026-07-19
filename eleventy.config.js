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
    eleventyConfig.addFilter("orderByDate", function (collection) {
        return collection.sort(function (a, b) {
            return new Date(a.date) - new Date(b.date);
        });
    });

    // content
    const fs = require('fs')

    eleventyConfig.addCollection("queerImages", function (collectionApi) {
        const files = fs.readdirSync('_src/_assets/images/blinkies/queer');
        const targetPath = "/assets/images/blinkies/queer/";
        files.forEach((x, i) => files[i] = targetPath.concat(x));
        return files;
    });

    eleventyConfig.addCollection("blinkieImages", function (collectionApi) {
        const files = fs.readdirSync('_src/_assets/images/blinkies');
        const targetPath = "/assets/images/blinkies/";
        const filesFiltered =
            files.filter(
                item => item.includes('.'));
        filesFiltered.forEach((x, i) => filesFiltered[i] = targetPath.concat(x));
        return filesFiltered;
    });

    eleventyConfig.addCollection("thoughtsTagList", function (collectionApi) {
        const tagList = new Set();
        collectionApi.getFilteredByTags("thoughts").map(item => {
            if (item.data.tags) { // handle pages that don't have tags
                item.data.tags.map(tag => tagList.add(tag))
            }
        });
        return Array.from(tagList);
    });

    eleventyConfig.addFilter("exclude", function (list, excludeString) {
        return list.filter(el => el != excludeString)
    });

    // SHORTCODES

    // shortcodes for styled content
    eleventyConfig.addShortcode("heading", function (size, title, subtitle) {
        let sub = '';
        if (typeof subtitle !== 'undefined') {
            sub = `<span class="theme__heading__subtitle">${subtitle}</span>`
        };
                        // <div class="design_decor design__decor--top"></div>
        return `<div class="theme__heading layout__flex-block__stack theme__block--accent theme__card--border">
				<${size} class="theme__heading__title">${title}</${size}>` + sub + `</div>`;
    });
    eleventyConfig.addPairedShortcode("flex-columns", function (content) {
        return `<div class="layout__flex-block__row layout__flex-block--space-around">
        ${content}
        </div>`;
    });
    eleventyConfig.addPairedShortcode("flex-columns-centered", function (content) {
        return `<div class="layout__flex-block__row layout__flex-block--center">
        ${content}
        </div>`;
    });
    eleventyConfig.addPairedShortcode("flex-stack-centered", function (content) {
        return `<div class="layout__flex-block__stack layout__flex-block--center">
        ${content}
        </div>`;
    });
    eleventyConfig.addPairedShortcode("flex-stack", function (content) {
        return `<div class="layout__flex-block__stack layout__flex-block--center"> ${content}</div>`;
    });
    
    eleventyConfig.addPairedShortcode("flex-item", function (content) {
        return `<div class="layout__flex-item">
        ${content}
        </div>`;
    });
    eleventyConfig.addPairedShortcode("flex-aside", function (content) {
        return `<div class="layout__flex-item__aside">
        ${content}
        </div>`;
    });

    eleventyConfig.addShortcode("flex-break-newrow", function (content) {
        return `<div class="layout__flex-item-break-row"></div>`;
    });

    eleventyConfig.addPairedShortcode("theme__border-card", function (content) {
        return `<div class="theme__border-card">
			<div class="design__border-card__decor design__border-card__decor--top design__border-card__decor--left"></div>
			<div class="design__border-card__decor design__border-card__decor--top design__border-card__decor--right"></div>
			<div class="design__border-card__decor design__border-card__decor--bottom design__border-card__decor--left"></div>
			<div class="design__border-card__decor design__border-card__decor--bottom design__border-card__decor--right"></div>
        ${content}
        </div>`;
    });

    eleventyConfig.addPairedShortcode("gallery", function (content) {
        return `<div class="gallery layout__grid-block pswp-gallery">${content}</div>`;
    });

    // Shortcodes for content

    eleventyConfig.addShortcode("neighbour", function (neighbour) {
        let className = "";
        if (neighbour.isAnimated) {
            className = "animated"
        };
        if (neighbour.img) {
            return `<a href="${neighbour.url}" target="_blank"><img class="${className}" src="${neighbour.img}" alt="${neighbour.alt}"></a>`
        }
        return `<div class="design__link--round"><a href="${neighbour.url}" target="_blank" rel="external">${neighbour.alt}</a></div>`;
    });

    eleventyConfig.addShortcode("divider-center", function (content) {
        return `<div class="design_decor design__divider--center"></div>`;
    });

    eleventyConfig.addShortcode("image", function (image) {
        return `<div class="pswp-gallery__item square"><figure>
        <a href="${image.src}" data-pswp-width="${image.width}" data-pswp-height="${image.height}" class="noformat">
            <img loading="lazy" src="${image.src}" title="${image.title}" alt="${image.alt}" class="noformat gallery__item gallery__item--square"/></a>
        </a>
        <figcaption class="pswp-caption-content"><p><strong>${image.title}</strong></p><p>${image.caption}, by <cite><a href="${image.authorLink}" target="_blank">${image.artist}</a></cite></p>
        <p class="image-caption">${image.alt}</p></figcaption>
        </figure></div>`;
    });

    eleventyConfig.addShortcode("imageMine", function (image) {
        return `<div class="pswp-gallery__item"><figure>
        <a href="${image.src}" data-pswp-width="${image.width}" data-pswp-height="${image.height}" class="noformat">
            <img loading="lazy" src="${image.src}" title="${image.title}" alt="${image.alt}" class="noformat gallery__item"/></a>
        </a>
        <figcaption class="pswp-caption-content"><p><strong>${image.title}</strong></p><p>${image.date}</p></figcaption>
        </figure></div>`;
    });
    eleventyConfig.addShortcode("imageMineSquare", function (image) {
        return `<div class="pswp-gallery__item"><figure>
        <a href="${image.src}" data-pswp-width="${image.width}" data-pswp-height="${image.height}" class="noformat">
            <img loading="lazy" src="${image.src}" title="${image.title}" alt="${image.alt}" class="noformat gallery__item gallery__item--square"/></a>
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
        return `<div class="pswp-gallery__item"><figure>
        <a href="${image.src}" data-pswp-width="${image.width}" data-pswp-height="${image.height}" class="noformat">
            <img loading="lazy" src="${image.src}" title="${image.title}" alt="${image.alt}" class="noformat gallery__item gallery__item--square"/></a>
        </a>
        <figcaption class="pswp-caption-content"><p><strong>`+ title + `</strong></p>` + caption + `</figcaption>
        </figure></div>`;
    });
    eleventyConfig.addShortcode("treasure", function (image) {
        return `<div class="pswp-gallery__item"><figure>
        <a href="${image.src}" data-pswp-width="${image.width}" data-pswp-height="${image.height}" class="noformat">
            <img loading="lazy" src="${image.src}" title="${image.title}" alt="${image.alt}" class="noformat gallery__item gallery__item--square" /></a>
        </a>
        <figcaption class="pswp-caption-content"><p><strong>${image.title}</strong><br>(${image.date})</p><p>by <cite>${image.artist}</cite></p>
        <p><a href="${image.link}" target="_blank">source</a>
        <p class="image-caption">${image.alt}</p></figcaption>
        </figure></div>`;
    });
}
