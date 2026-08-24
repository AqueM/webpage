---
mainMenu: true
linkName: Poetry
eleventyComputed:
  pageTitle: "My poetry"
---
<section>

Poems dated to 01/01/2009 are ones I lost the dates on. They're from my youth, probably written during university.

Poems dated to 01/01/2007 I also can't date properly, but they're even older, from my teenagehood, probably written in high school.

<div class="design__box design__center"><strong>Currently archived poems:</strong> {{collections.poems.length}}</div>
</section>
<table class="table__poetry"><thead>
  <tr>
    <th><span>Title</span></th>
    <th><span>Date</span></th>
    <th><span>Language</span></th>
  </tr></thead>
<tbody>
{% assign poetry = collections.poems | sort: "date" | reverse -%}
{%- for item in poetry -%}
  <tr>
    <td><span><cite><a href="{{item.url}}">{{item.data.linkName}}</a></cite></span></td>
    <td><span><time>{{item.date | date: "%d/%m/%Y"}}</time></span></td>
    <td><span>{{item.data.lang}}</span></td>
  </tr>
{% endfor %}
</tbody>
</table>
</section>
