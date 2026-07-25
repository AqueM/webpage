module.exports = async function (eleventyConfig) {
    eleventyConfig.addShortcode("neighbour", function (neighbour) {
        let className = "";
        if (neighbour.isAnimated) {
            className = "animated"
        };
        if (neighbour.img) {
            return `<a href="${neighbour.url}" target="_blank" rel="external"><img class="${className}" src="${neighbour.img}" alt="${neighbour.alt}"></a>`
        }
        return `<div class="design__link--round"><a href="${neighbour.url}" target="_blank" rel="external">${neighbour.alt}</a></div>`;
    });

    eleventyConfig.addShortcode("image", function (image) {
        return `<div class="pswp-gallery__item"><figure>
        <a href="${image.src}" data-pswp-width="${image.width}" data-pswp-height="${image.height}" class="gallery__anchor" target="_blank">
            <img loading="lazy" src="${image.src}" title="${image.title}" alt="${image.alt}" class="gallery__item gallery__item--square gallery__item--scale"/></a>
        </a>
        <figcaption class="pswp-caption-content"><p><strong>${image.title}</strong></p><p>${image.caption}, by <cite><a href="${image.authorLink}" target="_blank">${image.artist}</a></cite></p>
        <p class="image-caption">${image.alt}</p></figcaption>
        </figure></div>`;
    });

    eleventyConfig.addShortcode("imageMine", function (image) {
        return `<div class="pswp-gallery__item"><figure>
        <a href="${image.src}" data-pswp-width="${image.width}" data-pswp-height="${image.height}" class="gallery__anchor" target="_blank">
            <img loading="lazy" src="${image.src}" title="${image.title}" alt="${image.alt}" class="gallery__item"></a>
        </a>
        <figcaption class="pswp-caption-content"><p><strong>${image.title}</strong></p><p>${image.date}</p></figcaption>
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
        <a href="${image.src}" data-pswp-width="${image.width}" data-pswp-height="${image.height}" class="gallery__anchor" target="_blank">
            <img loading="lazy" src="${image.src}" title="${image.title}" alt="${image.alt}" class="gallery__item gallery__item--square"/></a>
        </a>
        <figcaption class="pswp-caption-content"><p><strong>`+ title + `</strong></p>` + caption + `</figcaption>
        </figure></div>`;
    });

    eleventyConfig.addShortcode("treasure", function (image) {
        return `<div class="pswp-gallery__item"><figure>
        <a href="${image.src}" data-pswp-width="${image.width}" data-pswp-height="${image.height}" class="gallery__anchor" target="_blank">
            <img loading="lazy" src="${image.src}" title="${image.title}" alt="${image.alt}" class="gallery__item gallery__item--square gallery__item--scale"></a>
        </a>
        <figcaption class="pswp-caption-content"><p><strong>${image.title}</strong><br>(${image.date})</p><p>by <cite>${image.artist}</cite></p>
        <p><a href="${image.link}" target="_blank">source</a>
        <p class="image-caption">${image.alt}</p></figcaption>
        </figure></div>`;
    });

    eleventyConfig.addShortcode("ao3Link", function (link) {
        return `<a href="${link}" target="_blank" rel="external"><span class="icon" style="--layout-img: url('/assets/images/layout/ao3-mono.svg');"></span></a>`;
    });
    eleventyConfig.addShortcode("tumblrLink", function (link) {
        return `<a href="${link}" target="_blank" rel="external"><span class="icon" style="--layout-img: url('/assets/images/layout/font-awesome/tumblr-brands-solid-full.svg');"></span></a>`;
    });
}