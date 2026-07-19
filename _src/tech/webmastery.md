---
layout: layouts/_page
category: technology
tags: 
  - nav
displayName: Webmastery
order: 1
---
{% heading "h1", "About this website" %}
<section>

If you want to link back to me, check [Outlinks](/about/links/)!

{%- flex-columns -%}
{%- flex-item %}
{% heading "h2", "Credits", "resources used to create this website" %}
<ul>
    {%- for link in tech.credits -%}
    <li><a href="{{link.url}}" target="_blank">{{link.name}}</a> {{ link.comment }}</li>
    {%- endfor %}
</ul>
{%- endflex-item -%}

{%- flex-break-newrow -%}

{% flex-item %}
{% heading "h2", "Changelog", "latest updates" %}
<ul class="logs">
    {%- for element in tech.changelog -%}
    <li>
        <time><strong>{{element.date}}</strong></time> - {{element.log}}
    </li>
    {%- endfor -%}
</ul>
{%- endflex-item -%}

{% flex-item %}
{% heading "h2", "To-Do", "plans for the future" %}
<ul class="logs">
    {%- for element in tech.todo -%}
    <li>
        {{element.name}}{% if element.comment !=blank %} - {{element.comment}}{%endif%}
    </li>
    {%- endfor -%}
</ul>
{%- endflex-item -%}
{%- endflex-columns -%}
</section>