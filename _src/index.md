---
layout: layouts/_longform.html
category: home
changeFreq: always
priority: 0.8
---
<section>
{% heading "h1", "Aque's pond" %}

Hi, welcome to my website! My name's Aque and I'm a mixed/multi-media artist mostly involved in various fandoms, fantasy worldbuilding and tabletop RPG. Among friends, I'm most known to love frogs and androids.

If you'd like to learn more about me, go snoop through the **About** section. If you'd like to see what things I made for the benefit of others, see **Resources**. **Creations** are about what I've made, and **Collections** hold, well, my collections, both digital and physical.

**Longer Letters** is a work-in-progress section for a Youtube channel that I'm in the proccess of making.

**Technology** is the place to go if you'd like to see how I work, including info about the making of this page. 
{% include "content/_access-disclaimer.html" %}
</section>
<section>{% heading "h2", "current affairs"%}
<div class="columns">
    <div class="column">
        <div>{% heading "h3", "I am..."%}
            {%- for item in home.current -%}
            <ul> <strong>...{{item.verb}}:</strong>
                {%- for thing in item.items -%}
                <li>{{thing.name}}{% if thing.author !=blank %} by {{thing.author}}{%endif%}{% if thing.type !=blank %} ({{thing.type}}){%endif%}{% if thing.comment !=blank %} - {{thing.comment}}{%endif%}</li>
                {%- endfor %}
            </ul>
            {%- endfor %}
        </div>
    </div>
<div class="column">
    <div>{% heading "h3", "open projects"%}
        <ul>
            {%- for project in home.projects -%}
            <li>{% if project.url !=blank %}<a href="{{project.url}}" target="_blank">{%endif%}{{project.name}}{% if project.url !=blank %}</a>{%endif%}{% if project.comment !=blank %} {{ project.comment }}{%endif%}</li>
            {%- endfor %}
        </ul>
    </div>
</div>
</div>
<div>
    {% heading "h2", "unsorted", "internet things I recently found interesting" %}
    <ul class="horizontal horizontal-decor">
        {%- for link in home.unsorted -%}
        <li><a href="{{link.url}}" target="_blank">{{link.name}}</a> by {{link.author}} [{{link.type}}]</li>
        {%- endfor %}
    </ul>
</div>