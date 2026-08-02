---
mainMenu: true
linkName: Characters
order: 1
CC: true
---
<section>

Here are some characters I've made, and think they might be useful for others — either as inspiration, or used wholesale as needed in projects like fiction, worldbuilding or role-playing games. 
</section>

{%- flex-columns -%}
<section class="layout__flex-item">
{% heading "h2", "Deities" %}

These are characters I've designed to be used in fantasy settings as gods, spirits or deities. They're mostly a way for me to immortalize my RPG characters that I felt achieved enough to become deified — or not enough at all, leaving me wanting more time with them.

<ul class="design__list-no-decor">
{%- for element in collections.deities -%}
<li><div class="theme__border-oval desing__decor-link design__center">
			{% include "partials/_decor-sides.html" %}
    <a href="{{element.url}}">{{element.data.linkName}}</a></div></li>
{%- endfor -%}
</ul>
</section>
<section class="layout__flex-item">
{% heading "h2", "Wanderers" %}

These are characters are quirky, standalone characters that I simply have no desire to use, or they don't spark enough joy to rotate them further. They are ideal as supporting cast in a story, be it written or TTRPG.

**WIP!**

<ul class="design__list-no-decor">
{%- for element in collections.wanderers -%}
<li><div class="theme__border-oval desing__decor-link design__center">
			{% include "partials/_decor-sides.html" %}
    <a href="{{element.url}}">{{element.data.linkName}}</a></div></li>
{%- endfor -%}
</ul>
</section>
<section class="layout__flex-item">
{% heading "h2", "IPRE members" %}

These are characters are all part of my fictional organization <abbr title="Interplanar Partnership for Research and Exploration">IPRE</abbr> and are great if you are in need of some wacky scholars.

**WIP!**

<ul class="design__list-no-decor">
{% assign ipre = collections.ipre | sort: "data.order" %}
{%- for element in ipre %}
<li><div class="theme__border-oval desing__decor-link design__center">
			{% include "partials/_decor-sides.html" %}
    <a href="{{element.url}}">{{element.data.linkName}}</a></div></li>
{% endfor %}
</ul>
</section>
{%- endflex-columns -%}