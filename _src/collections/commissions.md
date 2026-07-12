---
layout: layouts/_gallery.html
category: collections
tags: 
  - nav
  - gallery
displayName: Commissions
---
{% heading "h1", "Art from others" %}

This is a gallery of all the art I've gotten from others, including commissions, gifts and exchanges.

Click on the image to see a bigger version and details, including artist and year of acquisition.
<section>
{% heading "h2", "DnD characters" %}
{% gallery %}{% for item in myCollections.commissions.dnd %}{% image item %}{% endfor %}{% endgallery %}
</section>
<section>
{% heading "h2", "Original Characters" %}
{% gallery  %}{% for item in myCollections.commissions.ocs %}{% image item %}{% endfor %}{% endgallery %}
</section>
<section>
{% heading "h2", "Batman-related fanart" %}
{% gallery %}{% for item in myCollections.commissions.batfam %}{% image item %}{% endfor %}{% endgallery %}
</section>
<section>
{% heading "h2", "Other RPG characters" %}
{% gallery  %}{% for item in myCollections.commissions.rpg %}{% image item %}{% endfor %}{% endgallery %}
</section>
<section>
{% heading "h2", "Misc" %}
{% gallery %}{% for item in myCollections.commissions.misc %}{% image item %}{% endfor %}{% endgallery %}
</section>
