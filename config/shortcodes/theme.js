module.exports = async function (eleventyConfig) {
    eleventyConfig.addShortcode("heading", function (size, title, subtitle) {
        let sub = '';
        if (typeof subtitle !== 'undefined') {
            sub = `<span class="theme__heading__subtitle">${subtitle}</span>`
        };
        // <div class="design_decor design__decor--top"></div>
        return `<div class="theme__heading layout__flex-block__stack theme__block--accent theme__card--border">
				<${size} class="theme__heading__title">${title}</${size}>` + sub + `</div>`;
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
    
    eleventyConfig.addShortcode("divider-center", function (content) {
        return `<div class="design_decor design__divider--center"></div>`;
    });
}