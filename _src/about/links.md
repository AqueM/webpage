---
mainMenu: true
linkName: Outlinks
order: 2
priority: 0.7
eleventyComputed:
  pageTitle: "Aque online"
---
<section>

Here are some places you can find me, from most to least likely that I'll be responsive and active there. They all open in a new tab!

<div class="layout__flex-block__row layout__flex-block__row--small layout__flex-block--space-around">
{% for platform in about.other_platforms %}
<div class="theme__border-oval desing__decor-link design__center">
			{% include "partials/_decor-sides.html" %}
	<a href="{{platform.url}}" target="_blank"><span class="icon icon--left" style="--layout-img: url('{{platform.icon}}');"></span>{{platform.name}}</a>
</div>
{%- endfor -%}
</div>
</section>
<section>

Want to contact me directly?

<div class="layout__flex-block__row layout__flex-block__row--small layout__flex-block--space-around">
{% for contact in about.contact %}
<div class="theme__border-oval desing__decor-link design__center">
			{% include "partials/_decor-sides.html" %}
			<a href="{{contact.url}}" target="_blank"><span class="icon icon--left" style="--layout-img: url('{{contact.icon}}');"></span>{{contact.name}}</a>
</div>
{%- endfor -%}
</div>
</section>
<section>

I also have these sites! They're already linked in the sidebar menu, but here they are again.


<div class="layout__flex-block__row layout__flex-block__row--small layout__flex-block--space-around">
{%- for link in about.other_sites %}
<div class="theme__border-oval desing__decor-link design__center">
			{% include "partials/_decor-sides.html" %}
	<a href="{{link.url}}" target="_blank">{{link.name}} [{{link.hosting}}]</a>
</div>
{%- endfor -%}
</div>
</section>
<section>
{% include "content/_link-back.html" %}
</section>
