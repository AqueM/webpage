---
mainMenu: true
linkName: Prose
pagination:
  data: collections.prose
  size: 20
  alias: pageItems
  reverse: true
eleventyComputed:
  pageTitle: "My prose"
  permalink: "/creations/prose/page-{{pagination.pageNumber | plus: 1}}/index.html"
---
<section>
{% if pagination.pageNumber==0 %}
Archive of fiction I've written, both fan fiction and original fiction. Mostly a mirror for Archive of Our Own. 
<div class="design__box design__center"><strong>Currently archived works:</strong> {{collections.prose.length}}</div>
</section>
{%endif%}
<section>
{% include "partials/_pagination.html" %}


Mind the <span class="design__error">warnings</span> and <span class="design__warning">completion status</span>!
<table class="table__prose"><thead>
  <tr>
    <th><span>Title</span></th>
    <th><span>Notes</span></th>
    <th><span>Warnings</span></th>
    <th><span>Genre</span></th>
    <th><span>Words</span></th>
    <th><span>Ao3 Link</span></th>
    <th><span>PDF link</span></th>
    <th><span>Series</span></th>
    <th><span>Date</span></th>
  </tr></thead>
<tbody>
{%- for item in pageItems -%}
{%- assign basePath = "/assets/pdf/prose/" -%}
  <tr>
    <td><span><cite>"{{item.title}}"</cite></span> {% if item.finished == false %}<span class="design__warning">unfinished!</span>{% endif %}</td>
    <td><span>{{ item.caption | markdown }}</span></td>
    <td>{% assign last = item.warnings | last %}{% for warning in item.warnings %}<span class="design__error">{{warning}}</span>{% if warning != last %} {% endif %}{% endfor %}</td>
    <td>{% assign last = item.genres | last %}{% for genre in item.genres %}<span>{{genre}}{% if genre != last %}, {% endif %}</span>{% endfor %}</td>
    <td><span>{{item.words}}</span></td>
    <td>{% if item.ao3Src %}{% ao3Link item.ao3Src %}{% endif %}</td>
    <td>{% if item.downloadable %}<a href="{{basePath}}{{item.title | underscorize}}.pdf" target="_blank" class="link__download"><img src="/assets/images/layout/download.gif" alt="download link"></a>{% endif %}</td>
    <td>{%if item.series %}<span><cite>"{{item.series}}"</cite></span>{% endif %}</td>
    <td><span><time>{{item.date}}</time></span></td>
  </tr>
{% endfor %}
</tbody>
</table>

{% include "partials/_pagination.html" %}
</section>
