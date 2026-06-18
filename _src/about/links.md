---
layout: _page.html
tags: about
displayName: Other Platforms
order: 2
priority: 0.7
---
{% heading "h1", "Aque online" %}

Here are some places you can find me, from most to least likely that I'll be responsive and active there. They all open in a new tab.

<div class="link-list">
{%- for platform in about.other_platforms -%}
	<div class="round-link">
		<div class="tooltip">{% if platform.icon == 'fas fa-question-circle' %}<span class="tooltiptext">FontAwesome doesn't share the right logo among their free icons :(</span>{% endif %}<a href="{{platform.url}}" target="_blank"><span class="icon"><i class="{{platform.icon}}"></i></span>{{platform.name}}</a></div>
	</div>
{%- endfor %}
</div>


I also have these sites! They're already linked in the sidebar menu, but here they are again.

<div class="link-list">
	{%- for link in about.other_sites -%}
	<div class="round-link">
		<a href="{{link.url}}" target="_blank">
			{{link.name}} [{{link.hosting}}]</a>
	</div>
	{%- endfor %}
</div>