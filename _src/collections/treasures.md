---
layout: layouts/_gallery
tags: 
  - nav
linkName: Tomb Treasures
pagination:
  data: myCollections.tomb_treasures
  size: 10
  alias: treasuresPage
eleventyComputed:
  permalink: "collections/treasures/page-{% if pagination.pageNumber==0 %}{{pagination.pageNumber | plus: 1}}{% else %}{{pagination.pageNumber | times: pagination.size | plus: 1}}{% endif %}/index.html"

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

{% gallery %}{% for item in treasuresPage %}{% treasure item %}{% endfor %}{% endgallery %}

{% include "partials/_pagination.html" %}
</section>