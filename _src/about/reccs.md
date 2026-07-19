---
layout: layouts/_page
tags: about
displayName: Recs
order: 4
---
{% heading "h2", "Recommendations" %}

Things I liked and probably regularly return to.

{%- flex-columns -%}
{%- flex-item %}
## Webcomics

<ul>
{%- for link in about.recs.webcomics -%}
<li><a href="{{link.url}}" target="_blank">{{link.name}}</a> ({{link.type}})</li>
{%- endfor -%}
</ul>
{%- endflex-item -%}

{% flex-item %}

## YouTube Channels

<ul>
{%- for link in about.recs.youtube -%}
<li><a href="{{link.url}}" target="_blank">{{link.name}}</a> ({{link.type}})</li>
{%- endfor -%}
</ul>
{%- endflex-item -%}

{%- flex-break-newrow -%}

{% flex-item %}

## Books

<ul>
{%- for link in about.recs.books -%}
<li><a href="{{link.url}}" target="_blank">{{link.name}}</a> ({{link.type}})</li>
{%- endfor %}
</ul>
{%- endflex-item -%}

{% flex-item %}

## Games
<ul>
{%- for link in about.recs.games -%}
<li><a href="{{link.url}}" target="_blank">{{link.name}}</a> ({{link.type}})</li>
{%- endfor %}
</ul>
{%- endflex-item -%}

{%- flex-break-newrow -%}

{% flex-item %}

## Movies
<ul>
{%- for link in about.recs.movies -%}
<li><a href="{{link.url}}" target="_blank">{{link.name}}</a> ({{link.type}})</li>
{%- endfor %}
</ul>
{%- endflex-item -%}

{% flex-item %}

## Series
<ul>
{%- for link in about.recs.series -%}
<li><a href="{{link.url}}" target="_blank">{{link.name}}</a> ({{link.type}})</li>
{%- endfor %}
</ul>
{%- endflex-item %}
{%- endflex-columns -%}
