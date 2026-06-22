---
layout: _page.html
tags: collections
displayName: Commissions
---

// based on https://stefanbohacek.com/blog/making-a-free-image-gallery-with-neocities-org/
<div id="gallery">
    {% for image in myCollections.commissions %}<figure class="pswp-gallery__item">
        <a href="{{image.src}}" data-pswp-width="{{image.width}}" data-pswp-height="{{image.height}}" target="_blank">
            <img src="{{image.src}}" title="{{image.title}}" alt="{{image.alt}}" /></a>
            <figcaption class="pswp-caption-content">{{image.caption}}, by <a href="{{image.authorLink}}" target="_blank">{{image.artist}}</a></figcaption>
        </a>
    </figure>{% endfor %}
</div>
