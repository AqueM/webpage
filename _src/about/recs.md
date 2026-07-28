---
mainMenu: true
linkName: Recs
eleventyComputed:
  pageTitle: "Recommendations"
---
Things I liked and probably regularly return to.
{%- flex-columns -%}<section class="layout__flex-item">
{%- heading "h2", "Webcomics" -%}
<ul>
{%- for link in about.recs.webcomics -%}
<li><a href="{{link.url}}" target="_blank">{{link.name}}</a> ({{link.type}})</li>
{%- endfor -%}
</ul>
</section>

<section class="layout__flex-item">
{% heading "h2", "YouTube Channels" %}

<ul>
{%- for link in about.recs.youtube -%}
<li><a href="{{link.url}}" target="_blank">{{link.name}}</a> ({{link.type}})</li>
{%- endfor -%}
</ul>
</section>

<section class="layout__flex-item">
{% heading "h2", "Books" %}

<ul>
{%- for link in about.recs.books -%}
<li><a href="{{link.url}}" target="_blank">{{link.name}}</a> ({{link.type}})</li>
{%- endfor %}
</ul>
</section>

<section class="layout__flex-item">
{% heading "h2", "Games" %}
<ul>
{%- for link in about.recs.games -%}
<li><a href="{{link.url}}" target="_blank">{{link.name}}</a> ({{link.type}})</li>
{%- endfor %}
</ul>
</section>

<section class="layout__flex-item">
{% heading "h2", "Movies" %}
<ul>
{%- for link in about.recs.movies -%}
<li><a href="{{link.url}}" target="_blank">{{link.name}}</a> ({{link.type}})</li>
{%- endfor %}
</ul>
</section>

<section class="layout__flex-item">
{% heading "h2", "Series" %}
<ul>
{%- for link in about.recs.series -%}
<li><a href="{{link.url}}" target="_blank">{{link.name}}</a> ({{link.type}})</li>
{%- endfor %}
</ul>
</section>
{%- endflex-columns -%}