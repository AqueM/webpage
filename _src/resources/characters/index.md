---
layout: layouts/_main
category: resources
tags: 
  - nav
displayName: Characters
---
{% heading "h1", "Characters" %}
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
    <a href="{{element.url}}">{{element.data.displayName}}</a>
</div>
{%- endfor -%}
{%- endflex-columns -%}
</section>
