module.exports = async function (eleventyConfig) {
    eleventyConfig.addShortcode("heading", function (size, title, subtitle) {
        let sub = '';
        if (typeof subtitle !== 'undefined') {
            sub = `<span class="theme__heading__subtitle">${subtitle}</span>`
        };
        // <div class="design__decor design__decor--top"></div>
        return `<div class="theme__heading layout__flex-block__stack theme__block--accent theme__block--border">
				<${size} class="theme__heading__title">${title}</${size}>` + sub + `</div>`;
    });

    eleventyConfig.addPairedShortcode("theme__border-square", function (content) {
        return `<div class="theme__border-square">
			<div class="theme__border-square__decor theme__border-square__decor--top theme__border-square__decor--left"></div>
			<div class="theme__border-square__decor theme__border-square__decor--top theme__border-square__decor--right"></div>
			<div class="theme__border-square__decor theme__border-square__decor--bottom theme__border-square__decor--left"></div>
			<div class="theme__border-square__decor theme__border-square__decor--bottom theme__border-square__decor--right"></div>
        ${content}
        </div>`;
    });

    eleventyConfig.addPairedShortcode("theme__border-square--reduced", function (content) {
        return `<div class="theme__border-square">
			<div class="theme__border-square__decor theme__border-square__decor--top theme__border-square__decor--left"></div>
			<div class="theme__border-square__decor theme__border-square__decor--top theme__border-square__decor--right"></div>
			<div class="theme__border-square__decor theme__border-square__decor--bottom theme__border-square__decor--left"></div>
			<div class="theme__border-square__decor theme__border-square__decor--bottom theme__border-square__decor--right"></div>
        ${content}
        </div>`;
    });

    eleventyConfig.addPairedShortcode("theme__border-oval", function (content) {
        return `<div class="theme__border-oval">
			<span class="theme__border-oval__decor theme__border-oval__decor--left"></span>
            <span class="theme__border-oval__decor theme__border-oval__decor--right"></span>
        ${content}
        </div>`;
    });

    eleventyConfig.addShortcode("divider-center", function (content) {
        return `<div class="design__decor design__divider--center"></div>`;
    });
}