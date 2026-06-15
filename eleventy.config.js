module.exports = async function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");

    // // Copy `css/fonts/` to `_site/css/fonts/`
    // // Keeps the same directory structure.
    // eleventyConfig.addPassthroughCopy("css/fonts");

    // // Copy any .jpg file to `_site`, via Glob pattern
    // // Keeps the same directory structure.
    // eleventyConfig.addPassthroughCopy("**/*.jpg");

    const { parse } = require("csv-parse/sync");

    eleventyConfig.addDataExtension("csv", (contents) => {
        const records = parse(contents, {
            columns: true,
            skip_empty_lines: true,
            relax_column_count: true,
            delimiter: ";",
            trim: true,
        });
        return records;
    });

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
    eleventyConfig.addFilter("readableMonth", dateObj => {
        return dateObj.toLocaleString("en-GB", optionsMonth)
    });
    eleventyConfig.addFilter("readableYear", dateObj => {
        return dateObj.toLocaleString("en-GB", optionsYear)
    });
}