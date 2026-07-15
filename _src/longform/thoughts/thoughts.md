---
layout: layouts/_page
category: longform
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
<div class="box-small columns"><span>Page {% if pagination.pageNumber==0 %}{{pagination.pageNumber | plus: 1}}{% else %}{{pagination.pageNumber | times: pagination.size | plus: 1}}{% endif %} out of {{ pagination.pages.length}}</span><span>{% if pagination.href.previous %}<a href=" {{ pagination.href.previous }}"><< Previous</a>{% endif %}{% if pagination.href.next %} / <a href=" {{ pagination.href.next }}">Next >></a>{% endif %}</span></div>

<ul>
{% assign thoughs = collections.thoughts | orderByDate %}
{% for post in thoughts %}
<li><a href="{{post.url}}">{{post.data.displayName}}</a> (<time>{{post.date | date: "%d/%m/%Y"}}</time>)</li>
{% endfor %}
</ul>
