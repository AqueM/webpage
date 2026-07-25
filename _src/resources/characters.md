---
tags: 
  - nav
linkName: Characters
order: 1
---
<section>

Here are some characters I've made, and think they might be useful for others - either as inspiration, or used wholesale as needed in projects like fiction, worldbuilding or role-playing games. 

{% include "content/_CC-disclaimer.html" %}
</section>

<section>
{% heading "h2", "Deities" %}

These are characters I've designed to be used in fantasy settings as gods, spirits or deities. They're mostly a way for me to immortalize my RPG characters that I felt achieved enough to become deified - or not enough at all, leaving me wanting more time with them.

{% flex-columns -%}
{%- for element in collections.deities -%}
<div class="design__link--round">
    <a href="{{element.url}}">{{element.data.linkName}}</a>
</div>
{%- endfor -%}
{%- endflex-columns -%}
</section>
<section>
{% heading "h2", "Wanderers" %}

These are characters are quirky, standalone characters that I simply have no desire to use, or they don't spark enough joy to rotate them further. They are ideal as supporting cast in a story, be it written or TTRPG.

**WIP!**

{% flex-columns -%}
{%- for element in collections.wanderers -%}
<div class="design__link--round">
    <a href="{{element.url}}">{{element.data.linkName}}</a>
</div>
{%- endfor -%}
{%- endflex-columns -%}
</section>
<section>
{% heading "h2", "IPRE members" %}

These are characters are all part of my fictional organization <abbr title="Interplanar Partnership for Research and Exploration">IPRE</abbr> and are great if you are in need of some wacky scholars.

**WIP!**

{% flex-columns -%}
{% assign ipre = collections.ipre | sort %}
{%- for element in ipre -%}
<div class="design__link--round">
    <a href="{{element.url}}">{{element.data.linkName}}</a>
</div>
{%- endfor -%}
{%- endflex-columns -%}
</section>