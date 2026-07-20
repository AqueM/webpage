---
tags: 
  - nav
displayName: Community
order: 3
---
{% heading "h1", "Other people online" %}
{% heading "h2", "neighbours", "cool websites from non-corporate web" %}
{%- flex-columns -%}
{%- for webring in about.neighbours -%}
    {% neighbour webring %}
{%- endfor -%}
{%- endflex-columns -%}  

{% heading "h2", "Webrings & Databases" %}

### that I am a part of

{% flex-stack-centered %}
{% include "content/_webrings-active.html" %}
{% endflex-stack-centered %}

### that I'm waiting to be added to

{% flex-stack-centered -%}
{% include "content/_webrings-inactive.html" %}
{%- endflex-stack-centered -%}


