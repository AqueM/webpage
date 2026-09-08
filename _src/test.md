---
layout: layouts/_page
category: home
linkName: "test"
eleventyComputed:
  pageTitle:  "Test page don't worry"
---
{%- assign character = home.test -%}
<aside class="infobox">
<div class="infobox-title">Information</div>
{%- assign portrait = "/assets/images/placeholder.webp" -%}
{%- if character.image -%}
  {%- assign portrait = character.image -%}
{%- endif -%}
<div class="infobox-figure" style="background:url('{{portrait}}')"></div>
<div class="infobox-element">
  <div class="infobox-element-title">Fullname</div>
  <div class="infobox-element-content">{{character.name}}</div>
</div>
{%- if character.alias -%}
  <div class="infobox-element">
          <div class="infobox-element-title">Aliases</div>
          <div class="infobox-element-content"><ul class="infobox-list">
          {%- for alias in character.alias -%}<li>{{alias}}</li>{%- endfor -%}</ul>
  </div></div>
{%- endif -%}
  
{%- for group in character.data -%}
  <div class="infobox-sub-title"><strong>{{group[0]}}</strong></div>
  {%- for element in group[1] -%}
  <div class="infobox-element">
    {% assign subelements = element[1] %}
    {%- if subelements.first -%}
          <div class="infobox-element-title">{{element[0]}}</div>
          <div class="infobox-element-content">
          <ul class="infobox-list">
          {%- for subelement in subelements -%}
            <li>{{subelement}}</li>
          {%- endfor -%}
          </ul>
        {%- else -%}
          {%- if subelements.size > 2 %}
            {%- if subelement[1].link -%}has link{%-else-%}
            <div class="infobox-element-title">- {{element[0]}}</div>
        <div class="infobox-element-content">-+ {{element[1].link}}</div>{%- endif -%}
            {%- else -%}
        <div class="infobox-element-title">- {{element[0]}}</div>
        <div class="infobox-element-content">-+ {{element[1]}}</div>
            {%- endif -%}
      {%- endif -%}
    {%- endfor -%}
    </div>
  </div>
{%- endfor -%}

</aside>
