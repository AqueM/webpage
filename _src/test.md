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
  <div class="infobox-sub-title">{{group[0]}}</div>
  {%- for element in group[1] -%}
  <div class="infobox-element">
  {%- if element[1].first -%}
      {%- for subelement in element[1] -%}
        {%- if subelement[1].first -%}
        {%- if subelement.link -%}
          <div class="infobox-element-title">has link - <a href="{{subelement.link}}"><em>{{subelement[0]}}</em></a></div>
          {%- else -%}
          <div class="infobox-element-title">no link - <em>{{subelement[0]}}</em></div>
        {%- endif -%}
        <div class="infobox-element-content">
          {%- if subelement.relation -%}
          {{subelement.relation}}
        {%- else -%}
          <ul class="infobox-list">
          {%- for listelement in subelement[1] -%}
            <li>{{listelement}}</li>
          {%- endfor -%}</ul>
          {%- endif -%}
      {%- endfor -%}        
    {%- endfor -%}
    </div>
    {%- else -%}
    <div class="infobox-element-title">{{element[0]}}</div>
    <div class="infobox-element-content">{{element[1]}}</div>
    {%- endif -%}
    </div>
    {%- endfor -%}
{%- endfor -%}
