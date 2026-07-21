---
tags: 
  - nav
linkName: Poetry
eleventyComputed:
  pageTitle: "My poetry"
---
<section>
<ul>
{% assign poems = collections.poems | sort: "date" | reverse -%}
{%- for item in poems -%}
<li><a href="{{item.url}}">{{item.data.linkName}}</a> (written: <time>{{item.date | date: "%d/%m/%Y"}}</time>, language: {{item.data.lang}})</li>
{%- endfor -%}
</ul>

Still WIP, I have more poems in the drawer.
</section>