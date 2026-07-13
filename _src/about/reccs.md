---
layout: layouts/_page.html
category: about
tags: nav
displayName: Recs
order: 4
---
{% heading "h1", "Recommendations" %}

Things I liked and probably regularly return to.
{% columns %}
{% column %}
## Webcomics
<ul>
{%- for link in about.recs.webcomics -%}
<li><a href="{{link.url}}" target="_blank">{{link.name}}</a> ({{link.type}})</li>
{%- endfor %}
</ul>

## YouTube Channels
<ul>
{%- for link in about.recs.youtube -%}
<li><a href="{{link.url}}" target="_blank">{{link.name}}</a> ({{link.type}})</li>
{%- endfor %}
</ul>
{% endcolumn %}    
{% column %}

## Books
<ul>
{%- for link in about.recs.books -%}
<li><a href="{{link.url}}" target="_blank">{{link.name}}</a> ({{link.type}})</li>
{%- endfor %}
</ul>

## Movies
<ul>
{%- for link in about.recs.movies -%}
<li><a href="{{link.url}}" target="_blank">{{link.name}}</a> ({{link.type}})</li>
{%- endfor %}
</ul>

## Series
<ul>
{%- for link in about.recs.series -%}
<li><a href="{{link.url}}" target="_blank">{{link.name}}</a> ({{link.type}})</li>
{%- endfor %}
</ul>

## Games
<ul>
{%- for link in about.recs.games -%}
<li><a href="{{link.url}}" target="_blank">{{link.name}}</a> ({{link.type}})</li>
{%- endfor %}
</ul>
{% endcolumn %}
{% endcolumns %}