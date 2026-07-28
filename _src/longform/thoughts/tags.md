---
pagination:
  data: collections.thoughtsTagList
  size: 1
  alias: tag
  filter:
  - thoughts
  addAllPagesToCollections: true
tags: thoughtsTag
eleventyComputed:
  linkName: "thoughts tagged '{{tag}}'"
  permalink: "/longform/thoughts/tags/{{tag | slugify}}.html"
---
{%- capture title -%}thoughts tagged '{{tag}}'{%- endcapture -%}
<ul>
{% for post in collections[tag] | reverse %}
<li><a href="{{post.url}}">{{post.data.linkName}}</a> ({{post.date | date: "%d/%m/%Y"}})</li>
{% endfor %}
</ul>

<div class="theme__border-oval desing__decor-link design__center">
			{% include "partials/_decor-sides.html" %}
    <a href="/longform/thoughts/page-1" class="pagination__link">back to Thoughts list</a>
</div>