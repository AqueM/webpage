---
layout: layouts/_page
category: technology
tags: 
  - nav
displayName: Webmastery
order: 1
---
{% heading "h1", "About this website" %}

If you want to link back to me, check [Outlinks](/about/links/)!

<div>
{% heading "h2", "Credits", "resources used to create this website" %}
<ul>
    {%- for link in tech.credits -%}
    <li><a href="{{link.url}}" target="_blank">{{link.name}}</a> {{ link.comment }}</li>
    {%- endfor %}
</ul>
</div>
<section>
<div class="columns">
    <div class="column">
{% heading "h2", "Changelog", "latest updates" %}
<ul class="logs">
    {%- for element in tech.changelog -%}
    <li>
        <strong>{{element.date}}</strong> - {{element.log}}
    </li>
    {%- endfor %}
</ul>
</div>
<div class="column">
{% heading "h2", "To-Do", "plans for the future" %}
<ul class="logs">
    {%- for element in tech.todo -%}
    <li>
        {{element.name}}{% if element.comment !=blank %} - {{element.comment}}{%endif%}
    </li>
    {%- endfor %}
</ul>
</div>
</div>