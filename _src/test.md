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
    {%- if element[1].first -%}
          <div class="infobox-element-title">{{element[0]}}</div>
          <div class="infobox-element-content">
          <ul class="infobox-list">
          {%- for subelement in element[1] -%}
            <li>{{subelement}}</li>
          {%- endfor -%}
          </ul>
        {%- else -%}
          {%- if element[1].link %}
            <div class="infobox-element-title">- {{element[0]}}</div>
        <div class="infobox-element-content">-+ {{element[1]}}</div>
            {%- else -%}
        <div class="infobox-element-title">- {{element[0]}} lnk </div>
        <div class="infobox-element-content">-+ {{element[1].link}}</div>
            {%- endif -%}
      {%- endif -%}
    {%- endfor -%}
    </div>
  </div>
{%- endfor -%}

</aside>
