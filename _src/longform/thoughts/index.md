---
mainMenu: true
linkName: Thoughts
pagination:
  data: collections.thoughts
  size: 10
  alias: pageItems
  reverse: true
eleventyComputed:
  permalink: "/longform/thoughts/page-{{pagination.pageNumber | plus: 1}}/index.html"
  subtitle: "longer-form non-fiction"
---
{% include "partials/_pagination.html" %}

<ul>
{% for post in pageItems %}
<li><a href="{{post.url}}">{{post.data.linkName}}</a> (<time>{{post.date | date: "%d/%m/%Y"}}</time>)</li>
{% endfor %}
</ul>