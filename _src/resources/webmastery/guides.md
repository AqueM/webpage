---
linkName: all guides
---
{% assign tutorials = collections.tutorials | reverse %}
<ul>
{% for post in tutorials %}
<li><a href="{{post.url}}">{{post.data.linkName}}</a> (<time>{{post.date | date: "%d/%m/%Y"}}</time>)</li>
{% endfor %}
</ul>
