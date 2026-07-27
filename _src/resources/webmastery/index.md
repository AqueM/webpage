---
mainMenu: true
linkName: Webmastery
subtitle: tutorials, links, code snippets
---
{%- flex-columns -%}
{%- flex-item -%}
<section>
{% heading "h2", "Notes: Eleventy" %}

There's a lot of good Eleventy tutorials out there. But they're also usually complicated and expect you to have much more coding knowledge than I would expect from a typical fledgling indie webmaster. They surely proved difficult with my limited expertise with javascript! So I decided to take notes as I go about making this website, and share them.

<ul>
{% for post in collections.eleventy %}
<li><a href="{{post.url}}">{{post.data.linkName}}</a> (<time>{{post.date | date: "%d/%m/%Y"}}</time>)</li>
{% endfor %}
</ul>
</section>
{%- endflex-item -%}
<!-- {% flex-item %}
<section>
{% heading "h2", "Notes: JavaScript" %}

I am by no means an expert in JS, but I did learn a lot while trying to solve my problems during development.

<ul>
{% for post in collections.javascript %}
<li><a href="{{post.url}}">{{post.data.linkName}}</a> (<time>{{post.date | date: "%d/%m/%Y"}}</time>)</li>
{% endfor %}
</ul>
</section>
{%- endflex-item %} -->
{%- endflex-columns -%}

<section>
{% heading "h2", "Resources", "useful links" %} 

Need help coding? Looking for assets? Here's where I get mine.

<ul>
{% for item in misc.web-links %}
<li><a href="{{item.url}}" target="_blank">{{item.name}}</a></li>
{% endfor %}
</ul>
</section>
