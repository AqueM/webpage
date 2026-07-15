---
layout: layouts/_page
pagination:
  data: collections.thoughtsTagList
  size: 1
  alias: tag
  filter:
  - thoughts
permalink: "longform/thoughts/tags/{{tag | slugify}}.html"
---
<div class="heading"><h1 class="title">thoughts tagged '{{tag}}'</h1></div>

<ol>
{% for post in collections[tag] | reverse %}
<li><a href="{{post.url}}">{{post.data.displayName}}</a> ({{post.date | date: "%d/%m/%Y"}})</li>
{% endfor %}
</ol>