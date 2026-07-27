---
layout: layouts/_page
linkName: "sitemap"
---
<section>

**Last updated:** <time>{{page.date | date: "%m/%Y"}}</time>

{% assign poems = collections.poems | sort | reverse %}
{% assign thoughts = collections.thoughts | sort | reverse %}
{% assign thoughtsTags = collections.thoughtsTag %}
{% assign deities = collections.deities %}
{% assign ipre = collections.ipre %}
{% assign wanderers = collections.wanderers %}
{% assign tutorials = collections.tutorials %}
{% assign tutorialsTags = collections.tutorialsTag %}

- <a href="/">homepage/index</a>
- <a href="/colophon">colophon</a>
- <a href="/about/">about</a>
  - <a href="/about/community/">community</a>
  - <a href="/about/links/">outlinks</a>
  - <a href="/about/recs/">recs</a>
- resources
  - <a href="/resources/characters/">characters</a>
    - deities
{%- for item in deities %}
        - <a href="{{item.url}}">{{item.data.pageTitle}}</a> {% endfor %}
    - IPRE
{%- for item in ipre %}
        - <a href="{{item.url}}">{{item.data.pageTitle}}</a> {% endfor %}
    - wanderers
{%- for item in wanderers %}
        - <a href="{{item.url}}">{{item.data.pageTitle}}</a> {% endfor %}
  - <a href="/resources/misc/">misc</a>
  - <a href="/resources/webmastery/">webmastery</a>
{%- for item in tutorials %}
    - <a href="{{item.url}}">{{item.data.pageTitle}}</a> {% endfor %}
    - tags
    {%- for item in tutorialsTags %}
      - <a href="{{item.url}}">{{item.data.pageTitle}}</a> {% endfor %}
- tools
  - <a href="/tools/changelog/">site changelog</a>
  - <a href="/tools/edc/">edc</a>
  - <a href="/tools/hardware/">hardware</a>
  - <a href="/tools/software/">software</a>
- collections
  - <a href="/collections/commissions/">commissions</a>
  - <a href="/collections/shinies/">shinies</a>
  - treasures
    - <a href="/collections/treasures/page-1/">page-1</a>
    - <a href="/collections/treasures/page-2/">page-2</a>
    - <a href="/collections/treasures/page-3/">page-3</a>
- creations
    - <a href="/creations/art/">art</a>
    - <a href="/creations/poetry/">poetry</a>
{%- for item in poems %}
        - <a href="{{item.url}}">{{item.data.pageTitle}}</a> {% endfor %}
- longform
  - <a href="/longform/longerletters/">longer letters</a>
  - <a href="/longform/thoughts/page-1/">thoughts</a>
{%- for item in thoughts %}
      - <a href="{{item.url}}">{{item.data.pageTitle}}</a> {% endfor %}
    - tags
    {%- for item in thoughtsTags %}
      - <a href="{{item.url}}">{{item.data.pageTitle}}</a> {% endfor %}
- <a href="/404.html">404.html</a>
- <a href="/sitemap/">sitemap</a> (you're here!)

</section>