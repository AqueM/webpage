---
layout: _page.html
category: about
tags:
  - nav
displayName: Outlinks
order: 2
priority: 0.7
---
{% heading "h1", "Aque online" %}
Here are some places you can find me, from most to least likely that I'll be responsive and active there. They all open in a new tab.
<div class="box">
	<div class="link-list">
	{%- for platform in about.other_platforms -%}
		<div class="round-link">
			<a href="{{platform.url}}" target="_blank"><span class="icon" style="background-image: url('{{platform.icon}}');"></span>{{platform.name}}</a>
		</div>
	{%- endfor %}
	</div>
</div>


I also have these sites! They're already linked in the sidebar menu, but here they are again.

<div class="box">
	<div class="link-list">
		{%- for link in about.other_sites -%}
		<div class="round-link">
			<a href="{{link.url}}" target="_blank">
				{{link.name}} [{{link.hosting}}]</a>
		</div>
		{%- endfor %}
	</div>
</div>