module.exports = async function (eleventyConfig) {
    const fs = require('fs');
    let path = require("path");
    const smallPixels =
        fs.readdirSync('_src/_assets/images/pixels/small').filter(
            item => fs.statSync("./_src/_assets/images/pixels/small/" + item).isFile());
    smallPixels.forEach((x, i) => smallPixels[i] = "/assets/images/pixels/small/".concat(x));

    const widePixels =
        fs.readdirSync('_src/_assets/images/pixels/wide').filter(
            item => fs.statSync("./_src/_assets/images/pixels/wide/" + item).isFile());
    widePixels.forEach((x, i) => widePixels[i] = "/assets/images/pixels/wide/".concat(x));

    const bigPixels =
        fs.readdirSync('_src/_assets/images/pixels/big').filter(
            item => fs.statSync("./_src/_assets/images/pixels/big/" + item).isFile());
    bigPixels.forEach((x, i) => bigPixels[i] = "/assets/images/pixels/big/".concat(x));

    const tallPixels =
        fs.readdirSync('_src/_assets/images/pixels/tall').filter(
            item => fs.statSync("./_src/_assets/images/pixels/tall/" + item).isFile());
    tallPixels.forEach((x, i) => tallPixels[i] = "/assets/images/pixels/tall/".concat(x));

    eleventyConfig.addCollection("buttonImages", function (collectionApi) {
        const files = fs.readdirSync('_src/_assets/images/badges/buttons');
        const targetPath = "/assets/images/badges/buttons/";
        const currentFolder = "./_src/_assets/images/badges/buttons/"
        const filesFiltered =
            files.filter(
                item => fs.statSync(currentFolder + item).isFile());
        filesFiltered.forEach((x, i) => filesFiltered[i] = targetPath.concat(x));
        return filesFiltered;
    });
    eleventyConfig.addCollection("idImages", function (collectionApi) {
        const files = fs.readdirSync('_src/_assets/images/badges/id/');
        const targetPath = "/assets/images/badges/id/";
        const currentFolder = "./_src/_assets/images/badges/id/"
        const filesFiltered =
            files.filter(
                item => fs.statSync(currentFolder + item).isFile());
        filesFiltered.forEach((x, i) => filesFiltered[i] = targetPath.concat(x));
        return filesFiltered;
    });
    eleventyConfig.addCollection("fandomImages", function (collectionApi) {
        const files = fs.readdirSync('_src/_assets/images/badges/fandoms');
        const targetPath = "/assets/images/badges/fandoms/";
        const currentFolder = "./_src/_assets/images/badges/fandoms/"
        const filesFiltered =
            files.filter(
                item => fs.statSync(currentFolder + item).isFile());
        filesFiltered.forEach((x, i) => filesFiltered[i] = targetPath.concat(x));
        return filesFiltered;
    });
    eleventyConfig.addCollection("blinkieImages", function (collectionApi) {
        const files = fs.readdirSync('_src/_assets/images/badges/blinkies');
        const targetPath = "/assets/images/badges/blinkies/";
        const currentFolder = "./_src/_assets/images/badges/blinkies/"
        const filesFiltered =
            files.filter(
                item => fs.statSync(currentFolder + item).isFile());
        filesFiltered.forEach((x, i) => filesFiltered[i] = targetPath.concat(x));
        return filesFiltered;
    });

    eleventyConfig.addCollection("prose", function (collectionApi) {
        let prose = [];

        fs.readdirSync('_src/_data/myArt/prose').forEach(function (file) {
            let contents = require(path.resolve('_src/_data/myArt/prose/' + file));
            prose.push(contents);
        });

        prose.sort((a, b) => {
            return a.date > b.date ? 1 : -1;
        })
        return prose;
    });

    eleventyConfig.addShortcode("pixel-decor-small", function () {
        var randomPixel = smallPixels[Math.floor((Math.random() * smallPixels.length))];
        return `<div class="layout__image layout__image-pixel layout__image-pixel--small" style="--layout-img: url('${randomPixel}');"></div>`;
    });
    eleventyConfig.addShortcode("pixel-decor-wide", function () {
        var randomPixel = widePixels[Math.floor((Math.random() * widePixels.length))];
        return `<div class="layout__image layout__image-pixel layout__image-pixel--wide" style="--layout-img: url('${randomPixel}');"></div>`;
    });
    eleventyConfig.addShortcode("pixel-decor-big", function () {
        var randomPixel = bigPixels[Math.floor((Math.random() * bigPixels.length))];
        return `<div class="layout__image layout__image-pixel layout__image-pixel--big" style="--layout-img: url('${randomPixel}');"></div>`;
    });
    eleventyConfig.addShortcode("pixel-decor-tall", function () {
        var randomPixel = tallPixels[Math.floor((Math.random() * tallPixels.length))];
        return `'${randomPixel}'`;
    });

    // eleventyConfig.addCollection("poetry", function (collectionApi) {
    //         let poetry = [];

    //         fs.readdirSync('_src/_data/myArt/poetry').forEach(function (file) {
    //             let contents = require(path.resolve('_src/_data/myArt/poetry/' + file));
    //             poetry.push(contents);
    //         });

    //         poetry.sort((a, b) => {
    //             return a.date > b.date ? 1 : -1;
    //         })
    //         return poetry;
    //     });

    // const indexifier = require('indexifier');
    // eleventyConfig.addShortcode("generateSitemap", function (image) {
    //     console.log(__dirname);
    //     const tree = indexifier("./_site", {
    //         fileTypes: ['.html'],
    //         exclude: "assets",
    //         isHtml: true,            
    //         linkFolders: false
    //     });
    //     console.log(tree);
    //     return tree;
    // });
}