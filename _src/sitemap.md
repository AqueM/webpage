---
layout: layouts/_page
linkName: "sitemap"
eleventyComputed:
  subtitle: "<strong>Last updated:</strong> <time>{{page.date | date: '%d/%m/%Y'}}</time>"
---
{% assign poems = collections.poems | sort | reverse %}
{% assign thoughts = collections.thoughts | sort | reverse %}
{% assign thoughtsTags = collections.thoughtsTag %}
{% assign deities = collections.deities %}
{% assign ipre = collections.ipre %}
{% assign wanderers = collections.wanderers %}
{% assign tutorials = collections.tutorials %}
{% assign tutorialsTags = collections.tutorialsTag %}
<!-- after each <details>, additional indent needed in markdown to properly align the ULs -->
<section>

### Technical

- <a href="/">homepage/index</a>
- <a href="/colophon">colophon</a>
- <a href="/404.html">404.html</a>
- <a href="/sitemap/">sitemap</a> **(you're here!)**

### Site content

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
  - <a href="/resources/webmastery/">webmastery</a><details name="subpages"><summary>See subpages</summary>{%- for item in tutorials %}
    - <a href="{{item.url}}">{{item.data.pageTitle}}</a>{% endfor %}</details> 
      - tags
        {%- for item in tutorialsTags %}
        - <a href="{{item.url}}">{{item.data.pageTitle}}</a>{% endfor %}
  - tools
    - <a href="/tools/changelog/">site changelog</a>
    - <a href="/tools/edc/">edc</a>
    - <a href="/tools/hardware/">hardware</a>
    - <a href="/tools/software/">software</a>
  - collections
    - <a href="https://raw-quotes.nekoweb.org/" target="_blank" rel="external">raw quotes</a> (outgoing link)
    - <a href="/collections/commissions/">commissions</a>
    - <a href="/collections/shinies/">shinies</a>
    - treasures
      - <a href="/collections/treasures/page-1/">page-1</a>
      - <a href="/collections/treasures/page-2/">page-2</a>
      - <a href="/collections/treasures/page-3/">page-3</a>
  - creations
      - <a href="https://konstellarium.neocities.org/" target="_blank" rel="external">konstellarium</a> (outgoing link)
      - <a href="/creations/art/">art</a>
      - <a href="/creations/poetry/">poetry</a><details name="subpages"><summary>See subpages</summary>{%- for item in poems %}
        - <a href="{{item.url}}">{{item.data.pageTitle}}</a>{%- endfor %}</details>
    - longform
      - <a href="/longform/longerletters/">longer letters</a>
      - <a href="/longform/thoughts/page-1/">thoughts</a><details name="subpages"><summary>See subpages</summary>{%- for item in thoughts %}
          - <a href="{{item.url}}">{{item.data.pageTitle}}</a>{%- endfor %}</details>
            - tags
              {%- for item in thoughtsTags %}
              - <a href="{{item.url}}">{{item.data.pageTitle}}</a>{%- endfor %}
</section>