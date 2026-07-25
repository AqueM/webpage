---
linkName: Changelog
---
<ul class="logs">
    {%- for element in tech.changelog -%}
    <li>
        <time><strong>{{element.date}}</strong></time> - {{element.log}}
    </li>
    {%- endfor -%}
</ul>