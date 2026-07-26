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
<div class="design__box--small">

**Currently archived works:** {{collections.prose.length}}</div>
</section>
{%endif%}
<section>
{% include "partials/_pagination.html" %}


Mind the <span class="design__error">warnings</span> and <span class="design__warning">completion status</span>!
<table class="table__prose"><thead>
  <tr>
    <th>Title</th>
    <th>Notes</th>
    <th>Warnings</th>
    <th>Genre</th>
    <th>Words</th>
    <th>Ao3 Link</th>
    <th>PDF link</th>
    <th>Series</th>
    <th>Date</th>
  </tr></thead>
<tbody>
{%- for item in pageItems -%}
{%- assign basePath = "/assets/pdf/prose/" -%}
  <tr>
    <td><cite>"{{item.title}}"</cite> {% if item.finished == false %}<p class="design__warning">unfinished!</p>{% endif %}</td>
    <td>{{ item.caption | markdown }}</td>
    <td>{% assign last = item.warnings | last %}{% for warning in item.warnings %}<span class="design__error">{{warning}}</span>{% if warning != last %}, {% endif %}{% endfor %}</td>
    <td>{% assign last = item.genres | last %}{% for genre in item.genres %}{{genre}}{% if genre != last %}, {% endif %}{% endfor %}</td>
    <td>{{item.words}}</td>
    <td>{% if item.ao3Src %}{% ao3Link item.ao3Src %}{% endif %}</td>
    <td>{% if item.downloadable %}<a href="{{basePath}}{{item.title | underscorize}}.pdf" target="_blank" class="link__download"><img src="/assets/images/layout/download.gif" alt="download link"></a>{% endif %}</td>
    <td>{%if item.series %}<cite>"{{item.series}}"</cite>{% endif %}</td>
    <td><time>{{item.date}}</time></td>
  </tr>
{% endfor %}
</tbody>
</table>

{% include "partials/_pagination.html" %}
</section>