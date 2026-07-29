---
linkName: tags and tag pages
tags: liquidJS
disclaimers: liquidJS
---
<section>
{% heading "h2", "tag pages" %}

You will need to start by getting a collection of your tags. To get it, you need this in your *eleventy.config.js* file:

{% raw %}
```javascript
eleventyConfig.addCollection("tagList", function (collectionApi) {
        const tagList = new Set();
        collectionApi.getAll().map(item => {
            if (item.data.tags) { // handle pages that don't have tags
                item.data.tags.map(tag => tagList.add(tag))
            }
        });
        return Array.from(tagList);
    });
```
{% endraw %}

Then you can create pages for each tag. We'll use Eleventy's pagination for this. It'll iterate over a given collection, and spit out a portion of it as a page. If we tell it the portion should be of size 1, then each tag will get it's own page.

{% raw %}
```yaml
---
pagination:
  data: collections.tagList
  size: 1
  alias: tag
permalink: "../tags/{{tag | slugify}}.html"
---
```
{% endraw %}

And then the page content can be something like this:

{% raw %}
```liquidJS
<span class="title">pages tagged '{{tag}}'</span>
<ol>
    {% for post in collections[tag]  %}
    <li><a href="{{post.url}}">{{post.title}}</a></li>
    {% endfor %}
</ol>
```
{% endraw %}
</section>
<section>
{% heading "h2", "tag list" %}

This is what lives at the top of every page of mine where I use tags for categorizin content — including this one!

{% raw %}
```liquidJS
<div class="tags">
    <span>tagged under:</span>
    <div class="tagList">
        {% for tag in tags %} 
        <a href="../tags/{{tag}}/">{{tag}}</a>
        {% endfor %}
    </div>
</div>
```
{% endraw %}

There's a lot that one can be confused about when it comes to Eleventy's tags, so hopefully this snippet can help you. Take note of the `src` of the tag link — you'll have to adjust it for your folder structure! And, of course, you will need tag pages to link to.
</section>
<section>
{% heading "h2", "taglist with excluded tags" %}

I use tags for some backend categorising, not just for user-facing tags, so most of the time I want to exclude the 'housekeeping' tags from listing on posts. Here's how I do it. 

First, I make a filter in the *eleventy.config.js* file to exclude tags from a tag collection.

{% raw %}
```javascript
eleventyConfig.addFilter("exclude", function (list, excludeString) {
    return list.filter(el => el != excludeString)
});
```
{% endraw %}

Then I apply it to the taglist I iterate over on a post:

{% raw %}
```liquidJS
<div class="tags">
    <span>tagged under:</span>
    <div class="tagList">
        {% assign tagsList = tags | exclude: "excludedTag" %}
        {% for tag in tagList %} 
        <a href="../tags/{{tag}}/">{{tag}}</a>
        {% endfor %}
    </div>
</div>
```
{% endraw %}
</section>

<section>
{% heading "h2", "tags only for part of website" %}

I have separate tagging systems used for **Tutorials** and **Thoughts**, but both use the same front matter field: `page.tags`. When I make tag pages, I don't want them mixing the posts or creating empty tag pages. So I had to separate them.

I added this for every "section" I wanted to have:

{% raw %}
```javascript
eleventyConfig.addCollection("thoughtsTagList", function (collectionApi) {
    const tagList = new Set();
    collectionApi.getFilteredByTags("thoughts").map(item => {
        item.data.tags.map(tag => tagList.add(tag))
    });
    return Array.from(tagList);
});
```
{% endraw %}

This creates a tag list like normal, but only for pages with the tag "thoughts". Then I apply the Eleventy `filter` to the pagination front matter to filter out the tag from tag pages (otherwise I've have a `/tags/thoughts.html`) 

{% raw %}
```yaml
---
pagination:
  data: collections.tagList
  size: 1
  alias: tag
  filter:
    - thoughts
  addAllPagesToCollections: true
permalink: "/tags/{{tag | slugify}}.html"
---
```
{% endraw %}

and use the `exclude` filter on the tag pages:

{% raw %}
```liquidJS
<div class="tags">
    <span>tagged under:</span>
    <div class="tagList">
        {% assign tagsList = tags | exclude: "thoughts" %}
        {% for tag in tagList %} 
        <a href="../tags/{{tag}}/">{{tag}}</a>
        {% endfor %}
    </div>
</div>
```
{% endraw %}

This *probably* can be achieved with a clever `if()` in the `addCollection("thoughtsTagList")` code itself, but I don't know enough javascript yet to do it, and this works, too.
</section>