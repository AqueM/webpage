---
mainMenu: true
linkName: Webmastery
subtitle: tutorials, links, code snippets
---
{% heading "h2", "Tutorials" %}
{%- flex-columns -%}
<div class="layout__flex-item layout__flex-block__row layout__flex-block--space-around">
{% assign tutorials = collections.tutorials | reverse %}
<ul>
{% for post in tutorials %}
<li><a href="{{post.url}}">{{post.data.linkName}}</a> (<time>{{post.date | date: "%d/%m/%Y"}}</time>)</li>
{% endfor %}
</ul>

<div class="disclaimers  layout__flex-item">
    <div class="design__disclaimer">

### Note about Eleventy guides
    There's a lot of good Eleventy tutorials out there. But they're also usually complicated and expect you to have much more coding knowledge than I would expect from a typical fledgling indie webmaster. They surely proved difficult with my limited expertise with javascript! So I decided to take notes as I go about making this website, and share them.

    </div>
</div>
</div>
{%- flex-break-newrow -%}
<section class="layout__flex-item">
{% heading "h2", "Resources", "useful links" %} 

Need help coding? Looking for assets? Here's where I get mine.

<ul>
{% for item in resources.web-links %}
<li><a href="{{item.url}}" target="_blank">{{item.name}}</a></li>
{% endfor %}
</ul>
</section>
{%- endflex-columns -%}
