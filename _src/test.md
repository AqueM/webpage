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
    {% assign contents = element[1] %}
    {%- assign name = element[0] -%}
    {%- if contents.first -%}
          <div class="infobox-element-title">{{name}}</div>
          <div class="infobox-element-content">
          <ul class="infobox-list">
          {%- for subelement in contents -%}
            <li>{{subelement}}</li>
          {%- endfor -%}
          </ul>
        {%- else -%}
            {%- if contents[1] -%}
              <div class="infobox-element-title">- {{name}}</div>
              <div class="infobox-element-content">-+ {{contents}}</div>
            {%- else -%}
              {%- if contents.link -%}
              <div class="infobox-element-title">- <a href="{{element.link}}">{{name}}</a></div>
              {%-else-%}
              <div class="infobox-element-title">- {{name}}</div>
              {%- endif -%}
            <div class="infobox-element-content">-+ {{subelements.relation}}</div>
            {%- endif -%}
      {%- endif -%}
    {%- endfor -%}
    </div>
  </div>
{%- endfor -%}

</aside>
