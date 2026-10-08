---
linkName: "eleventy: navigation"
tags: 
  - liquidJS
  - javascript
disclaimers: liquidJS
date: 2026-07-03
---
<section>
{% heading "h2", "active link styling" %}

Here's a quick snippet on how to automatically style the active link/link to current page in Eleventy.

{% raw %}
```liquidJS
{% for navLink in collections.menuLinks %}
<a href="{{navLink.url}}" class="navigation-menu-link {% if navLink.url==page.url %} navigation-menu-active{% endif %}>{{navLink.title}}</a>
{% endfor %}
```
{% endraw %}

Note that you'll have to add styling for the `navigation-menu-active` class yourself! Here's an example:
{% raw %}
```css
.navigation-menu-active {
	text-transform: uppercase;
	letter-spacing: 0.1rem;
	font-weight: bolder;
}
```
{% endraw %}
</section>
<section>
{% heading "h2", "categories" %}

If you, like me, like sorting things into categories — here's how to do it to your menu links.

First, create a category collection. You can do that by sticking a json file into your global *data* folder like so:
{% raw %}
```json
[
    "about",
    "resources",
    "tools",
    "collections",
    "creations",
    "longform"
]
```
{% endraw %}

(that's what I did, because it allows me to control the order in which they display more easily)

Then you can use it in your navigation:

{% raw %}
```liquidJS
{% for navCat in collections.categories %}
<div class="navigation-category">
<span class="navigation-category-name">{{navCat.name}}</span>
    <ul class="navigation-menu">
    {% for navLink in collections.menuLinks %}
        {% if navLink.category == navCat %}
        <li><a href="{{navLink.url}}" class="navigation-menu-link {% if navLink.url==page.url %} navigation-menu-active{% endif %}>{{navLink.title}}</a></li>
        {% endif %}
    {% endfor %}
    </ul>
</div>
{% endfor %}
```
{% endraw %}
</section>
<section>
{% heading "h2", "external link" %}

Sometimes, you want to include an external link, or otherwise one not generated from Eleventy pages, in your navigation. I use it to include my other sites in the menu! Here's how.

I create a fake page template for each link I want to add.

{% raw %}
```yaml
---
category: CategoryName
tags: menuLinks
title: Link without page
link: http://www.wikipedia.org
permalink: false
---
```
{% endraw %}

The important parts are the *link* and the *permalink*. The latter prevents Eleventy from creating a page from it, and the former allows us to store an URL. Normally, a page's URL is stored in `page.url` but that cannot be overwritten like `page.date` can, so we have to create a new parameter. 

And then account for it in the navigation!
{% raw %}
```liquidJS
{% for navLink in collections.menuLinks %}
    <a href="{% if navLink.url %}{{ navLink.url }}{% else %}{{ navLink.data.link }}{% endif %}"
        class="navigation-menu-link {% if navLink.url==page.url %} navigation-menu-active{% endif %}>
        {{navLink.title}}</a>
{% endfor %}
```
{% endraw %}
</section>
