---
linkName: site changelog
---
<ul class="logs">
    {%- for element in tools.changelog -%}
    <li>
        <time><strong>{{element.date}}</strong></time> - {{element.log}}
    </li>
    {%- endfor -%}
</ul>