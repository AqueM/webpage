---
mainMenu: true
linkName: Tutorials
---
<section>
{% heading "h2", "about: Eleventy" %}

There's a lot of good Eleventy tutorials out there. But they're also usually complicated and expect you to have much more coding knowledge than I would expect from a typical fledgling indie webmaster. They surely proved difficult with my limited expertise with javascript! So I decided to take notes as I go about making this website, and share them.

<ul>
{% for post in collections.eleventy %}
<li><a href="{{post.url}}">{{post.data.linkName}}</a> (<time>{{post.date | date: "%d/%m/%Y"}}</time>)</li>
{% endfor %}
</ul>
</section>