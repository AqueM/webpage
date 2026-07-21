---
tags: 
  - nav
linkName: Community
order: 3
pageTitle: "Other people online"
---
<section>
{% heading "h2", "neighbours", "cool websites from non-corporate web" %}
{%- flex-columns -%}
{%- for webring in about.neighbours -%}
    {% neighbour webring %}
{%- endfor -%}
{%- endflex-columns -%}  
</section>
<section>
{% heading "h2", "Webrings & Databases" %}

### that I am a part of

{% flex-stack-centered %}
{% include "content/_webrings-active.html" %}
{% endflex-stack-centered %}

### that I'm waiting to be added to

{% flex-stack-centered -%}
{% include "content/_webrings-inactive.html" %}
{%- endflex-stack-centered -%}
</section>

