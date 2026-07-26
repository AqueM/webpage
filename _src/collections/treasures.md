---
layout: layouts/_gallery
mainMenu: true
linkName: Tomb Treasures
pagination:
  data: myCollections.tomb_treasures
  size: 10
  alias: pageItems
eleventyComputed:
  permalink: "/collections/treasures/page-{{pagination.pageNumber | plus: 1}}/index.html"
---
{% if pagination.pageNumber==0 %}
<section>

A "tomb treasure" is something that I'd like to be buried with if my grave was to be found in the future by archeologists. Items that are beautiful and mesmerizing and potentially could survive centuries buried underground. Works of art that I've fallen in love with, and would love to possess for no other purpose than to appreciate them existing. 

I stumble upon them mostly through tumblr posts these days, but I try to archive them here in case tumblr finally explodes.

Click on the image to see a bigger version and details.
</section>
{%endif%}
<section>
{% include "partials/_pagination.html" %}

{% gallery %}{% for item in pageItems %}{% treasure item %}{% endfor %}{% endgallery %}

{% include "partials/_pagination.html" %}
</section>