---
layout: layouts/_page
category: home
changeFreq: always
priority: 0.8
linkName: ""
eleventyComputed:
  pageTitle:  "Aque's Pond"
---
<section>
<img src="/assets/images/hello-grabill54.gif" alt="simplistic, blue icon of a person, animated to wave" class="animated image--round design__floated--left image--small">

Hi, welcome to my website! My name's Aque and I'm a mixed/multi-media artist mostly involved in various fandoms, fantasy worldbuilding and tabletop RPG. Among friends, I'm most known to love frogs and androids.

If you'd like to learn more about me, go snoop through the **About** section. If you'd like to see what things I made for the benefit of others, see **Resources**. **Creations** are about what I've made, and **Collections** hold, well, my collections, both digital and physical.

**Longform** is a section for my longer, essay-sh thoughts, as well as an archive for a Youtube channel that I'm in the proccess of making.

**Technology** is the place to go if you'd like to see how I work, including info about the making of this page. 
</section>

<section>{% divider-center %}{% include "content/_access-disclaimer.html" %}{% divider-center %}</section>

<section>
{% heading "h2", "current affairs", "I am..." %}
{%- flex-columns %}
{%- for item in home.current -%}
{%- flex-item -%}
    <ul> <strong>...{{item.verb}}:</strong>
        {%- for thing in item.items -%}
        <li>{{thing.name}}{% if thing.author %} by {{thing.author}}{%endif%}{% if thing.type %} ({{thing.type}}){%endif%}{% if thing.comment %} - {{thing.comment}}{%endif%}</li>        {%- endfor %}
    </ul>
{%- endflex-item -%}
{%- endfor -%}


{% divider-center %}

{%- flex-item -%}
{% heading "h2", "unsorted", "internet things I recently found interesting" %}
<ul class="design__list--horizontal design__list--horizontal--decor">
{%- for link in home.unsorted -%}
    <li><a href="{{link.url}}" target="_blank">{{link.name}}</a> by {{link.author}} [{{link.type}}]</li>
{%- endfor %}
</ul>
{%- endflex-item -%}
{%- endflex-columns -%}