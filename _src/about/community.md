---
mainMenu: true
linkName: Community
order: 3
pageTitle: "Other people online"
---
<section>
{% heading "h2", "neighbours", "cool websites from non-corporate web" %}
<div class="layout__flex-block__row layout__flex-block__row--small layout__flex-block--space-around">
{%- for webring in about.neighbours -%}
    {% neighbour webring %}
{%- endfor -%}
</div>
</section>
<section>
{% heading "h2", "Webrings & Databases" %}

### that I am a part of

{% flex-stack-centered %}
{% include "content/_webrings-active.html" %}
{% endflex-stack-centered %}

### that I'm waiting to be added to
<details><summary>View</summary>
{% flex-stack-centered -%}
{% include "content/_webrings-inactive.html" %}
{%- endflex-stack-centered -%}
</details>
</section>

