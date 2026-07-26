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
  permalink: "/resources/tutorials/tags/{{tag | slugify}}.html"
---
{%- capture title -%}tutorials tagged '{{tag}}'{%- endcapture -%}
<ul>
{% for post in collections[tag] | reverse %}
<li><a href="{{post.url}}">{{post.data.linkName}}</a> ({{post.date | date: "%d/%m/%Y"}})</li>
{% endfor %}
</ul>

<div class="design__box--small">
  <div class="design__link--round">
    <a href="/resources/tutorials" class="pagination__link">back to Tutorials</a>
  </div>
</div>