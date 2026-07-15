---
layout: layouts/_gallery
category: collections
tags: 
  - nav
displayName: Tomb Treasures
---
{% heading "h1", "Tomb Treasures" %}

A "tomb treasure" is something that I'd like to be buried with if my grave was to be found in the future by archeologists. Items that are beautiful and mesmerizing and potentially could survive centuries buried underground. Works of art that I've fallen in love with, and would love to possess for no other purpose than to appreciate them existing. 

I stumble upon them mostly through tumblr posts these days, but I try to archive them here in case tumblr finally explodes.

Click on the image to see a bigger version and details.

{% gallery %}{% for item in myCollections.tomb_treasures %}{% treasure item %}{% endfor %}{% endgallery %}