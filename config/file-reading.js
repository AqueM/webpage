module.exports = async function (eleventyConfig) {
    const fs = require('fs');
    let path = require("path");

    

    eleventyConfig.addCollection("queerImages", function (collectionApi) {
        const files = fs.readdirSync('_src/_assets/images/blinkies/queer');
        const targetPath = "/assets/images/blinkies/queer/";
        files.forEach((x, i) => files[i] = targetPath.concat(x));
        return files;
    });

    eleventyConfig.addCollection("blinkieImages", function (collectionApi) {
        const files = fs.readdirSync('_src/_assets/images/blinkies');
        const targetPath = "/assets/images/blinkies/";
        const currentFolder = "./_src/_assets/images/blinkies/"
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
}