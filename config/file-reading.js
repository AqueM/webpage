module.exports = async function (eleventyConfig) {
    const fs = require('fs');
    let path = require("path");


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