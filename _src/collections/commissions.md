---
layout: layouts/_gallery
tags: 
  - nav
displayName: Commissions
---
{% heading "h1", "Art I've commissioned" %}
Click on the image to see a bigger version and details, including artist and year of purchase.
<section>
{% heading "h2", "DnD characters" %}
{% gallery %}{% for item in myCollections.commissions.dnd %}{% image item %}{% endfor %}{% endgallery %}
</section>
<section>
{% heading "h2", "OCs" %}
{% gallery  %}{% for item in myCollections.commissions.ocs %}{% image item %}{% endfor %}{% endgallery %}
</section>
<section>
{% heading "h2", "Other RPG characters" %}
{% gallery  %}{% for item in myCollections.commissions.rpg %}{% image item %}{% endfor %}{% endgallery %}
</section>
<section>
{% heading "h2", "Batman-related fanart" %}
{% gallery %}{% for item in myCollections.commissions.batfam %}{% image item %}{% endfor %}{% endgallery %}
</section>
<section>
{% heading "h2", "Misc" %}
{% gallery %}{% for item in myCollections.commissions.misc %}{% image item %}{% endfor %}{% endgallery %}
</section>
