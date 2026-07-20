module.exports = async function (eleventyConfig) {
    eleventyConfig.addCollection("thoughtsTagList", function (collectionApi) {
        const tagList = new Set();
        collectionApi.getFilteredByTags("thoughts").map(item => {
            if (item.data.tags) { // handle pages that don't have tags
                item.data.tags.map(tag => tagList.add(tag))
            }
        });
        return Array.from(tagList);
    });
}