---
layout: layouts/_page
linkName: Lista życzeń
permalink: /wishlist/index.html
---
Używane rzeczy są zawsze OK (tam gdzie ma to sens).

{%- assign wishlist = about.wishlist | sort: "cena" -%}
{%- assign categories = wishlist.kategoria | uniq %}
{{categories}}
{%- for category in categories -%}
{%- assign {{category}}items = wishlist | where: "kategoria", category -%}
{%- endfor -%}
<table><thead>
  <tr>
    <th><span>nazwa</span></th>
    <th><span style="hyphens: unset;">orientacyjna cena</span></th>
    <th><span>link</span></th>
    <th><span>komentarz</span></th>   
  </tr></thead>
<tbody>
{%- for category in categories -%}
<thead>
  <tr>
    <th><span>{{category}}</span></th></tr></thead>
{%- for item in category.items -%}
  <tr>
    <td><span>{{item.nazwa}}</span></td>
    <td><span>{% if item.cena %}{{item.cena}}+ PLN{% else %}—{% endif %}</span></td>
    <td>{% if item.link %}<a href="{{item.link}}" target="_blank" rel="external nofollow">link</a>{% else %}<span>—</span>{% endif %}</td>
    <td><span>{% if item.komentarz %}{{item.komentarz}}{% else %}—{% endif %}</span></td>
  </tr>
  {%- endfor -%}
{%- endfor -%}
</tbody>
</table>
