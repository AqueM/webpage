---
pagination:
  data: collections.tutorialsTagList
  size: 1
  alias: tag
  filter:
  - tutorials
  addAllPagesToCollections: true
tags: tutorialsTag
eleventyComputed:
  linkName: "tutorials tagged '{{tag}}'"
  permalink: "/resources/webmastery/tags/{{tag | slugify}}.html"
---
{%- capture title -%}tutorials tagged '{{tag}}'{%- endcapture -%}
{% assign guides = collections[tag] | reverse %}
<ul>
{% for post in guides %}
<li><a href="{{post.url}}">{{post.data.linkName}}</a> ({{post.date | date: "%d/%m/%Y"}})</li>
{% endfor %}
</ul>

<div class="theme__border-oval desing__decor-link design__center">
			{% include "partials/_decor-sides.html" %}
    <a href="/resources/webmastery" class="pagination__link">back to Webmastery</a>
</div>
