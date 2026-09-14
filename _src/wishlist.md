---
layout: layouts/_page
linkName: Lista życzeń
permalink: /wishlist/index.html
---
<table><thead>
  <tr>
    <th><span>nazwa</span></th>
    <th><span>orientacyjna cena</span></th>
    <th><span>link</span></th>
    <th><span>komentarz</span></th>   
  </tr></thead>
<tbody>
{%- for item in about.wishlist -%}
  <tr>
    <td><span>{{item.nazwa}</span></td>
    <td><span>{{item.cena}}</span></td>
    <td>{% if item.link %}<a href="{{item.link}}">link</a>{% endif %}</td>
    <td><span>{{item.komentarz}}</span></td>
  </tr>
{%- endfor -%}
</tbody>
</table>
