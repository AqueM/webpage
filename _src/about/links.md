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
{% heading "h2", "Link back" %}
<section>

If you want to link back, you can use these buttons :) I recommend uploading them to your own site, but hotlinking is okay!

<div class="columns">
	<div class="stack">
	<span>static version</span>
	<a href="https://aque.fyi/" target="_blank" class="noformat"><img src="https://aque.fyi/assets/images/by-aque/site-buttons/aques_pond_button_88x33_static.gif" alt="Aque's pond"></a>
	<textarea class="code-textarea" rows="5" aria-label="link-back code"><a href="https://aque.fyi/" target="_blank"><img src="https://aque.fyi/assets/images/by-aque/site-buttons/aques_pond_button_88x33_static.gif" alt="Aque's pond"></a></textarea>
	</div>
	<div class="stack">
	<span>animated version</span>
	<a href="https://aque.fyi/" target="_blank" class="noformat"><img src="https://aque.fyi/assets/images/by-aque/site-buttons/aques_pond_button_88x33.gif" alt="Aque's pond" class="animated"></a>
	<textarea class="code-textarea" rows="5" aria-label="link-back code"><a href="https://aque.fyi/" target="_blank"><img src="https://aque.fyi/assets/images/by-aque/site-buttons/aques_pond_button_88x33.gif" alt="Aque's pond"></a></textarea>
	</div>
</div>

These two were made by combining <a href="https://phewcumber.itch.io/froglet" target="_blank">Froglet by Phewcumber</a> and a lily gif from <a href="https://bettysgraphics.neocities.org/plants" target="_blank">Betty's graphics</a>

</section>