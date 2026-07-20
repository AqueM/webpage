---
pagination:
  data: collections.thoughtsTagList
  size: 1
  alias: tag
  filter:
  - thoughts
eleventyComputed:
  displayName: "thoughts tagged '{{tag}}'"
  permalink: "longform/thoughts/tags/{{tag | slugify}}.html"
---
{%- capture title -%}thoughts tagged '{{tag}}'{%- endcapture -%}
{% heading "h1", title %}

<ul>
{% for post in collections[tag] | reverse %}
<li><a href="{{post.url}}">{{post.data.displayName}}</a> ({{post.date | date: "%d/%m/%Y"}})</li>
{% endfor %}
</ul>