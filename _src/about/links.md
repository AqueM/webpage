---
layout: layouts/_page
category: about
tags: 
  - nav
displayName: Other Platforms
order: 2
priority: 0.7
---
{% heading "h1", "Aque online" %}
<section>

Here are some places you can find me, from most to least likely that I'll be responsive and active there. They all open in a new tab!

{% flex-columns-centered -%}
{% for platform in about.other_platforms %}
<div class="design__link--round">
	<a href="{{platform.url}}" target="_blank"><span class="icon icon--left" style="--layout-img: url('{{platform.icon}}');"></span>{{platform.name}}</a>
</div>
{%- endfor -%}
{% endflex-columns-centered %}


I also have these sites! They're already linked in the sidebar menu, but here they are again.

{%- flex-columns-centered -%}
{%- for link in about.other_sites %}
<div class="design__link--round">
	<a href="{{link.url}}" target="_blank">{{link.name}} [{{link.hosting}}]</a>
</div>
{%- endfor -%}
{%- endflex-columns-centered -%}
</section>

<section>
{% heading "h2", "Link back" %}

If you want to link back, you can use these buttons :) I recommend uploading them to your own site, but hotlinking is okay!

{% flex-columns-centered -%}
{%- flex-stack-centered -%}
static version
<a href="https://aque.fyi/" target="_blank" class="noformat"><img src="https://aque.fyi/assets/images/by-aque/site-buttons/aques_pond_button_88x33_static.gif" alt="Aque's pond button" title="Aque's pond" class="noformat"></a>
<textarea class="code-textarea" rows="5" aria-label="link-back code"><a href="https://aque.fyi/" target="_blank"><img src="https://aque.fyi/assets/images/by-aque/site-buttons/aques_pond_button_88x33_static.gif" alt="Aque's pond button" title="Aque's pond"></a></textarea>{% endflex-stack-centered %}
{%- flex-stack-centered -%}
animated version
<a href="https://aque.fyi/" target="_blank" class="noformat"><img src="https://aque.fyi/assets/images/by-aque/site-buttons/aques_pond_button_88x33.gif" alt="Aque's pond button" title="Aque's pond" class="animated noformat"></a>
<textarea class="code-textarea" rows="5" aria-label="link-back code"><a href="https://aque.fyi/" target="_blank"><img src="https://aque.fyi/assets/images/by-aque/site-buttons/aques_pond_button_88x33.gif" alt="Aque's pond button" title="Aque's pond"></a></textarea>
{%- endflex-stack-centered -%}
{%- endflex-columns-centered %}

These two were made by combining <a href="https://phewcumber.itch.io/froglet" target="_blank">Froglet by Phewcumber</a> and a lily gif from <a href="https://bettysgraphics.neocities.org/plants" target="_blank">Betty's graphics</a>

</section>
