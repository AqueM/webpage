---
linkName: Thoughts
tags:
  - nav
pagination:
  data: collections.thoughts
  size: 10
  alias: thoughts
  reverse: true
eleventyComputed:
  permalink: "longform/thoughts/page-{{pagination.pageNumber | plus: 1}}/index.html"
  subtitle: "longer-form non-fiction"
---
{% include "partials/_pagination.html" %}

<ul>
{% assign thoughtsPage = thoughts | sort: "date" %}
{% for post in thoughtsPage %}
<li><a href="{{post.url}}">{{post.data.linkName}}</a> (<time>{{post.date | date: "%d/%m/%Y"}}</time>)</li>
{% endfor %}
</ul>
