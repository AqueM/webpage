---
displayName: Thoughts
tags:
  - nav
pagination:
  data: collections.thoughts
  size: 10
  alias: thoughts
  reverse: true
eleventyComputed:
  permalink: "longform/thoughts/page-{% if pagination.pageNumber==0 %}{{pagination.pageNumber | plus: 1}}{% else %}{{pagination.pageNumber | times: pagination.size | plus: 1}}{% endif %}/index.html"
---
{% heading "h1", "Thoughts", "longer-form non-fiction" %}
{% include "partials/_pagination.html" %}

<ul>
{% assign thoughtsPage = thoughts | sort: "date" %}
{% for post in thoughtsPage %}
<li><a href="{{post.url}}">{{post.data.displayName}}</a> (<time>{{post.date | date: "%d/%m/%Y"}}</time>)</li>
{% endfor %}
</ul>
