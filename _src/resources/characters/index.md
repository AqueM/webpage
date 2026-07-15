---
layout: layouts/_page
category: resources
tags: nav
order: 1
displayName: Characters
---
{% heading "h1", "Characters" %}

These are characters I've designed to be used in fantasy settings as gods, spirits or deities. They're mostly a way for me to immortalize my RPG characters that I felt achieved enough to become deified - or not enough at all, leaving me wanting more time with them.

For free use them in non-commercial projects like fiction, worldbuilding or role-playing games.

{% include "content/_CC-disclaimer.html" %}

<ul class="link-list noformat">{%- for element in collections.characters -%}
    <li class="round-link">
        <a href="{{element.url}}">{{element.data.displayName}}</a>
    </li>{%- endfor %}
</ul>