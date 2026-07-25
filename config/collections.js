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

    eleventyConfig.addCollection("menuPages", function (collectionApi) {
        return collectionApi.getAll().filter((item) => item.data.mainMenu);
    });

    // by https://joshtronic.com/2025/09/07/eleventy-category-tag-pages/

    eleventyConfig.addCollection('meta', (collectionApi) => {
        const collection = { posts: { categories: {}, tags: {} } };
        const categories = new Set();
        const tags = new Set();
        const posts = collectionApi.getAll().reverse();
        posts.forEach((post) => {
            if (post.data.category) {
                if (!collection.posts.categories[post.data.category]) {
                    collection.posts.categories[post.data.category] = [];
                }
                collection.posts.categories[post.data.category].push(post);
                categories.add(post.data.category);
            }
            if (post.data.tags) {
                post.data.tags.forEach((tag) => {
                    if (!collection.posts.tags[tag]) {
                        collection.posts.tags[tag] = [];
                    }
                    tags.add(tag);
                    collection.posts.tags[tag].push(post);
                });
            }
        })
        collection.categories = [...categories].sort();
        collection.tags = [...tags].sort();
        return collection;
    });
}