---
category: tools
mainMenu: true
linkName: Colophon
order: 1
eleventyComputed:
  pageTitle: "About this website"
permalink: /colophon/index.html
---
<section>
<figure class="design__disclaimer">

<dfn>colophon</dfn> (noun) is a page or section (typically in a footer) of a site that describes how the site is made, with what tools, supporting what technologies, and often published on personal sites at a top level <code>/colophon</code> page.

<figcaption><cite>

— [IndieWeb](https://indieweb.org/colophon){target=_blank}{rel=external}</cite></figcaption></figure>

This website was created out of the desire to archive my online presence in one place and provide one address at which I would always be findable. I have lived through many site takedowns and fandom collapses, and lost plenty of friends, artwork and memories due to social media or other corporate services going down (or simply going out of fashion). In that sense, I loosely follow the principles of [IndieWeb](https://indieweb.org/why){target=_blank}{rel=external} — aim to own my data and reclaim my agency on the web. 

It's also sort of a arts&crafts project for me. I just enjoy tinkering with code.
</section>
<section>
{% flex-columns -%}
{%- flex-item %}
{% heading "h2", "Changelog", "last 5 updates" %}

<ul class="logs">
    {%- for element in tools.changelog limit: 5 -%}
    <li>
        <time><strong>{{element.date}}</strong></time> - {{element.log}}
    </li>
    {%- endfor -%}
</ul>

[see entire changelog](/tools/changelog)

{%- endflex-item -%}

{%- flex-item -%}
{% heading "h2", "To-Do", "plans for the future" %}
<ul class="logs">
    {%- for element in tools.todo -%}
    <li>
        {{element.name}}{% if element.comment %} - {{element.comment}}{%endif%}
    </li>
    {%- endfor -%}
</ul>
{%- endflex-item -%}
{%- endflex-columns -%}
</section>

<section>
{% heading "h2", "Standards", "that I'm working on meeting" %}
{% flex-columns -%}
{%- flex-item %}

- [Valid HTML](https://validator.w3.org/nu/?doc=https%3A%2F%2Fwww.aque.fyi%2F){rel="external nofollow"}{target=_blank} according to W3's HTML Validator
- [Valid CSS](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fwww.aque.fyi%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en-US){rel="external nofollow"}{target=_blank} according to W3's CSS Validator
- [a good grade grade](https://developer.mozilla.org/en-US/observatory/analyze?host=www.aque.fyi){rel="external nofollow"}{target=_blank} according to Mozilla's Observatory report

{% endflex-item -%}
{% flex-item %}

- [complete accessibility checklists](https://learntheweb.courses/topics/accessibility-checklist/){rel="external nofollow"}{target=_blank} at Learn the Web
- [good AIM score](https://wave.webaim.org/report#/aque.fyi){rel="external nofollow"}{target=_blank} according to WAVE
- [complete accessibility checklists](https://www.ashleysheridan.co.uk/a11y-checklist){rel="external nofollow"}{target=_blank} at Ashley Sheridan​ A11ty Checklist
- [good contrast](https://webaim.org/resources/contrastchecker/){rel="external nofollow"}{target=_blank} according to WebAIM

{% endflex-item -%}
{%- endflex-columns -%}
</section>
<section>
{% heading "h2", "Disclaimers" %}
{% flex-columns -%}
{% include "content/_access-disclaimer.html" %}
<div class="design__disclaimer layout__flex-item">
<h2 class="design__disclaimer__title">Content warnings</h2>

This site is safe for work and for minors. However, since this is also an archive of my art, some pages may contain links to sensitive material, including of sexual nature. That content is clearly marked.

I’m what people call a <dfn>pro-shipper</dfn>, that is, I’m against censorship of dark fiction and ‘problematic’ art. If you have a problem with that or any other opinion I may express here, please keep that to yourself. If you can do that, you’re free to stay — otherwise please leave the site. 

If you interact with me and my art on your own accord and you later find out about this opinion of mine, and you don’t like it — that’s a *you* problem.
</div>
<div class="design__disclaimer layout__flex-item">
<h2 class="design__disclaimer__title">Other</h2>

- there was no AI/LLM used in creation of this website at any point
- javascript is used sparsely and [graceful degradation](https://en.wikipedia.org/wiki/Fault_tolerance){rel="external nofollow"}{target=_blank} of it is prioritized
- the author cares about following proper licensing; all external resources are credited and linked to their original authors. If that's not possible (authorship lost to time), it is also stated.
</div>
{%- endflex-columns -%}
</section>
<section>
{% heading "h2", "Credits", "resources used to create this website" %}

- **Static Site Generator:** [Eleventy v.3.1.6](https://www.11ty.dev/){rel="external nofollow"}{target=_blank}
- **Hosting:** [Vercel](https://vercel.com){rel="external nofollow"}{target=_blank}


{% flex-columns -%}
        {%- for category in tools.credits -%}{%- flex-item %}
        {%- heading "h3", category.name -%}
        <ul>
        {%- for item in category.items -%}
        <li><div {% if item.font-face %}style="font-family:{{item.font-face}};"{% endif %}>{% if item.url %}<a href="{{item.url}}" target="_blank" rel="external">{{item.name}}</a>{% else %}{{item.name}}{% endif %}{% if item.comment %} — {{item.comment}}{% endif %}</div></li>
        {%- endfor -%}
        </ul>
        {%- endflex-item -%}
        {%- endfor -%}
{%- endflex-columns -%}
</section>
<section>
{% include "content/_link-back.html" %}
</section>
<section>
</section>