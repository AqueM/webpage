module.exports = async function (eleventyConfig) {
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
}