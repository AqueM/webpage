module.exports = async function (eleventyConfig) {
    eleventyConfig.addCollection("thoughtsTagList", function (collectionApi) {
        const tagList = new Set();
        collectionApi.getFilteredByTags("thoughts").map(item => {
            item.data.tags.map(tag => tagList.add(tag))
        });
        return Array.from(tagList);
    });

    eleventyConfig.addCollection("tutorialsTagList", function (collectionApi) {
        const tagList = new Set();
        collectionApi.getFilteredByTags("tutorials").map(item => {
            if (item.data.tags) { // handle pages that don't have tags
                item.data.tags.map(tag => tagList.add(tag))
            }
        });
        return Array.from(tagList);
    });

    //     eleventyConfig.addCollection("eleventyTutorials", function (collectionApi) {
    //     const collection = new Set();
    //     collectionApi.getFilteredByTags("eleventy").map(item => {
    //         if (item.data.tags) { // handle pages that don't have tags
    //             item.data.tags.map(tag => collection.add(tag))
    //         }
    //     });
    //     return Array.from(collection);
    // });

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


    // eleventyConfig.addCollection('categories', (collectionApi) => {
    //     const categories = new Set();
    //     const pages = collectionApi.getAll();
    //     pages.forEach((page) => {
    //         if (page.data.category) {
    //             categories.add(page.data.category);
    //         }
    //     });
    //     return Array.from(categories);
    // });
}