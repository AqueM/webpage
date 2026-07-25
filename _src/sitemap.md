---
layout: layouts/_page
changeFreq: always
linkName: "sitemap"
---
<section>
{% for navigationCategory in navCategories %}
{{navigationCategory}}
{% for item in collections.all %}
    {% if item.data.category == navigationCategory %}
    {{item.date.linkName}}
    {% endif %}
{% endfor %}
{% endfor %}

</section>