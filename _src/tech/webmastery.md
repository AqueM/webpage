---
tags: 
  - nav
displayName: Webmastery
order: 1
---
{% heading "h1", "About this website" %}
<section>

Looking for my buttons to link back? [Outlinks](/about/links/){class=design__link--round}

{% flex-columns -%}
{%- flex-item %}
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
<section>
{% heading "h2", "Credits", "resources used to create this website" %}

This website was made with the use of the following resources:

**Engine:** [Eleventy v.3.1.6](https://www.11ty.dev/){rel=external}{target=_blank}

{%- flex-columns -%}
        {%- for category in tech.credits -%}{%- flex-item %}
        {%- heading "h3", category.name -%}
        <ul>
        {%- for item in category.items -%}
        <li><a href="{{item.url}}" target="_blank" rel="external">{{item.name}}</a>{% if item.comment != blank %} - {{item.comment}}{% endif %}</li>
        {%- endfor -%}
        </ul>
        {%- endflex-item -%}
        {%- endfor -%}
{%- endflex-columns -%}
</section>