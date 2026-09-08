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
{%- for object in character.data -%}
  <div class="infobox-sub-title">{{object[0]}} - name</div>
  {%- for element in object[1] -%}
  <div class="infobox-element">
  {%- if element.first -%}
  <div class="infobox-element-content">
    {%- for subelement in element[1] -%}
      <ul class="infobox-list">
      {%- if subelement.first -%}
        {%- if subelement[1].link-%}
        <li><a href="{{subelement.link}}"><em>{{subelement[0]}}</em></a> ({{subelement[1].relation}})</li>
        {%- else -%} 
        <li><em>{{subelement[0]}}</em> ({{subelement[1].relation}})</li>
        {%- endif -%}
      {%- else -%}
      <li>{{subelement[1]}}</li>
      {%- endif -%}
    </ul>
    {%- endfor -%}
    </div>
    {%- else -%}
    <div class="infobox-element-title">{{element[0]}}</div>
    <div class="infobox-element-content">{{element[1]}}</div>
    {%- endif -%}
    </div>
    {%- endfor -%}
{%- endfor -%}
