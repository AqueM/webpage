---
tags: 
  - nav
linkName: Poetry
eleventyComputed:
  pageTitle: "My poetry"
---
<section>

Poems dated to 01/01/2009 are ones I lost the dates on. They're from my youth, probably written during university.

Poems dated to 01/01/2007 I also can't date properly, but they're even older, from my teenagehood, probably written in high school.

<div class="design__box--small">

**Currently archived poems:** {{collections.poems.length}}</div>

<table class="table__poetry"><thead>
  <tr>
    <th>Title</th>
    <th>Date</th>
    <th>Language</th>
  </tr></thead>
<tbody>
{% assign poetry = collections.poems | sort: "date" | reverse -%}
{%- for item in poetry -%}
  <tr>
    <td><cite><a href="{{item.url}}">{{item.data.linkName}}</a></cite></td>
    <td><time>{{item.date | date: "%d/%m/%Y"}}</time></td>
    <td>{{item.data.lang}}</td>
  </tr>
{% endfor %}
</tbody>
</table>
</section>