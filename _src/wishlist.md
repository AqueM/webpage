---
layout: layouts/_page
linkName: Lista życzeń
permalink: /wishlist/index.html
---
Używane rzeczy są zawsze OK (tam gdzie ma to sens).

{%- assign wishlist = about.wishlist | sort_natural: "cena" -%}
<table><thead>
  <tr>
    <th><span>nazwa</span></th>
    <th><span style="hyphens: unset;">orientacyjna cena</span></th>
    <th><span>link</span></th>
    <th><span>komentarz</span></th>   
  </tr></thead>
<tbody>
{%- for item in wishlist -%}
  <tr>
    <td><span>{{item.nazwa}}</span></td>
    <td><span>{% if item.cena %}{{item.cena}}+ PLN{% else %}—{% endif %}</span></td>
    <td>{% if item.link %}<a href="{{item.link}}" target="_blank" rel="external nofollow">link</a>{% else %}<span>—</span>{% endif %}</td>
    <td><span>{% if item.komentarz %}{{item.komentarz}}{% else %}—{% endif %}</span></td>
  </tr>
{%- endfor -%}
</tbody>
</table>
