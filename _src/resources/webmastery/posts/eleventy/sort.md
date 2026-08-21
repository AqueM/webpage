---
linkName: "eleventy: sorting and ordering"
tags: liquidJS
disclaimers: liquidJS
date: 2026-07-03
---
<section>

By default, all collections are sorted by **date** in Eleventy. 

If you want to sort a collection by any other sortable variable (like a name) your pages have, you'll have to use the LiquidJS filter `sort`. It allows you to sort a collection by any variable, including the custom ones you add to page front matter. 

Here's how I sort my main menu pages to make sure they display in the order I want!
</section>
{% heading "h2", "custom ordering" %}

If a page doesn't have the variable I'm sorting for, it will default to 0, so first I set a different default one in my main template:

{% raw %}
```yaml
---
title: My Page
order: 99
---
```
{% endraw %}

Then, for pages I want to actually order, I change it on template/page level. I mostly only care about what comes up first, so I just change the `order` to 1 for the prioritized page:

{% raw %}
```yaml
---
title: My Priority Page
order: 1
---
```
{% endraw %}

And this allows you also to easily put pages at the end of the list without caring for the order of the rest:

{% raw %}
```yaml
---
title: My Last Page
order: 100
---
```
{% endraw %}

Then, you use it as such. Note that the "order" parameter is a custom one, so it lives in `page.data` instead being directly available at `page.order` front data. Only pre-defined Eleventy variables are available at the root level of front matter. 
{% raw %}
```liquidJS
{% assign sortedByOrder = collections.posts | sort: "data.order" %}
{% for item in sortedByOrder %}
  {{item.title}}
{% endfor %}

{% assign sortedByName = collections.posts | sort: "title" %}
{% for item in sortedByName %}
  {{item.title}}
{% endfor %}
```
{% endraw %}

<div class="design__disclaimer">Notice that I <strong>first sort</strong> the collection and assign it to a variable, and only then iterate over it — it's a quirk of Eleventy (or LiquidJS, I hadn't managed to figure that out) that it will not allow you to sort in the iteration declaration:

{% raw %}
```liquidJS
THIS WILL NOT WORK
{% for item in collections.posts | sort: "data.order" %}
  {{item.title}}
{% endfor %}
```
{% endraw %}
</div>
</section>
