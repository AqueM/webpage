---
linkName: basic Photoswipe implementation
tags: 
  - html
  - javascript
  - css
---
<section>
{% heading "h2", "What is Photoswipe?" %}

[Photoswipe](https://photoswipe.com/){target=_blank}{rel="external nofollow"} is a javascript image gallery and lightbox library. It allows for easy creation of galleries that open bigger images when clicked, all nice and pretty.

I use it with the optional [Dynamic Caption Plugin](https://github.com/dimsemenov/photoswipe-dynamic-caption-plugin){target=_blank}{rel="external nofollow"} that allows me to display information next to the enlarged image. 

For a demo of the effects, see [Tomb Treasures](/collections/treasures/page-1).
</section>
<section>
{% heading "h2", "Initialization imports" %}

This script needs to be included *somewhere* on every page where you want to have a gallery. It uses javascript packages from [UNPKG](https://unpkg.com/){target=_blank}{rel="external nofollow"}, a site that hosts the library-related files for you so that you don't have to upload them to your site (though it is advised if you can and know how to!). 

{% raw %}
```javascript
<script type="module">
    import PhotoSwipeLightbox from 'https://unpkg.com/photoswipe/dist/photoswipe-lightbox.esm.js';
    import PhotoSwipeDynamicCaption from 'https://unpkg.com/photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.esm.js';
    const lightbox = new PhotoSwipeLightbox({
        gallerySelector: '.gallery', //selector for your gallery element
        childSelector: 'figure', //selector for your single image element
        pswpModule: () => import('https://unpkg.com/photoswipe'),
    });

    const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
        // Plugins options, for example:
        type: 'auto',
    });

    // make sure you init photoswipe core after plugins are added
    lightbox.init();
</script>
```
{% endraw %}

You will also need to include the basic CSS for the Photoswipe elements in your `<head>`, as such:
{% raw %}
```HTML
<head>

<link rel="stylesheet" href="https://unpkg.com/photoswipe/dist/photoswipe.css">
<link rel="stylesheet" href="https://unpkg.com/photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css">

</head>
```
{% endraw %}

Also hosted on UNPKG as you see.
</section>
<section>
{% heading "h2", "Gallery page" %}

This is how the code for the page where you want a gallery should look like.

{% raw %}
```HTML
//all images go inside this gallery div
<div class="gallery">

	//every image goes into a new pswp-gallery__item div
	<div class="pswp-gallery__item">
	<figure>
        	<a href="${image.src}" data-pswp-width="${image.width}" data-pswp-height="${image.height}" target="_blank">
            	<img loading="lazy" src="${image.src}" title="${image.title}" alt="${image.alt}"></a>
        	</a>
        	<figcaption class="pswp-caption-content">${image.caption}</figcaption>
        	<noscript>
			<figcaption>${image.caption}</figcaption>
		</noscript>
        </figure>
	</div>
// repeat the 'pswp-gallery__item' div with however many images you want
</div>
```
{% endraw %}

Take note of the `${}` elements — that is where you should put in your own data! At minimum, Photoswipe needs the URL (src) of the image and the dimensions (height and width). The title, alt and caption are optional.

Note that this particular format is not set in stone, either. It is the `pswp` classes that make it work for Photoswipe, and the selectors you provided in the JS code mentioned earlier. Using `figure` tag is not obligatory, it's just good semantic HTML.

See also that this code includes a `<noscript>` element. It is a fall-back for if javascript does not work (if it's turned off, for example). In that case, the lightbox wouldn't work, and the caption wouldn't be available. For that reason, the caption is displayed under the image if JS fails. This is also not a neccessary component, just proper accessibility. 

A finished, filled-out gallery block with two images would look something like this:

{% raw %}
```HTML
//all images go inside this gallery div
<div class="gallery">

	<div class="pswp-gallery__item">
	<figure>
        	<a href="/assets/images/by-aque/inkarra-23march2023.webp" data-pswp-width="1200" data-pswp-height="2000" target="_blank">
            	<img loading="lazy" src="/assets/images/by-aque/inkarra-23march2023.webp" title="Inkarra, the Guiding Star" alt="Digital art illustration of a statue standing on an elevated boulder, with starry night sky behind. It portrays a feminine humanoid with no sex characteristics, naked, with arms apread ourtwards and head tilted up. She has long, flowing hair. There are lighted candles at her feet and on her hair."></a>
        	</a>
        	<figcaption class="pswp-caption-content"><p>Inkarra, the Guiding Star</p><p>2023</p><p>Digital art illustration of a statue standing on an elevated boulder, with starry night sky behind. It portrays a feminine humanoid with no sex characteristics, naked, with arms apread ourtwards and head tilted up. She has long, flowing hair. There are lighted candles at her feet and on her hair.</p></figcaption>
        	<noscript>
			<figcaption><p>Inkarra, the Guiding Star</p><p>2023</p><p>Digital art illustration of a statue standing on an elevated boulder, with starry night sky behind. It portrays a feminine humanoid with no sex characteristics, naked, with arms apread ourtwards and head tilted up. She has long, flowing hair. There are lighted candles at her feet and on her hair.</p></figcaption>
		</noscript>
        </figure>
	</div>

	<div class="pswp-gallery__item">
		<figure>
	        	<a href="/assets/images/commissions/RPG/sorin_ares-xix.webp" data-pswp-width="1719" data-pswp-height="1215" target="_blank">
	            	<img loading="lazy" src="/assets/images/commissions/RPG/sorin_ares-xix.webp" title="Sorin the White" alt="Digital illustration of a fantasy character, from the hips up, in limited palette of greyscale, gold and red against a grey background. There is a golden sun disc behind the character's head. The character is leaning against a decorative wrought iron railing and looking to the right with a smile. He has two feathery wings, one black and one white. He also has two sets of black horns, one set on the forehead curling back, and one above ears, curling to the front like ram horns. He is dressed in dark shirt with loose sleeves and dark pants. He has a lot off gold jewelry and accessories, as well as a white cravat with a big, red gemstone decorating it. His hair is long and black. He has shiny scales on his cheeks. His eyes are red."></a>
	        	</a>
	        	<figcaption class="pswp-caption-content"><p>Sorin the White</p><p>2017, by <cite><a href="https://www.patreon.com/ares_xix" target="_blank">Ares XIX</a></cite></p>
        <p>Digital illustration of a fantasy character, from the hips up, in limited palette of greyscale, gold and red against a grey background. There is a golden sun disc behind the character's head. The character is leaning against a decorative wrought iron railing and looking to the right with a smile. He has two feathery wings, one black and one white. He also has two sets of black horns, one set on the forehead curling back, and one above ears, curling to the front like ram horns. He is dressed in dark shirt with loose sleeves and dark pants. He has a lot off gold jewelry and accessories, as well as a white cravat with a big, red gemstone decorating it. His hair is long and black. He has shiny scales on his cheeks. His eyes are red.</p></figcaption>
	        	<noscript>
				<figcaption><p>Sorin the White</p><p>2017, by <cite><a href="https://www.patreon.com/ares_xix" target="_blank">Ares XIX</a></cite></p>
        <p>Digital illustration of a fantasy character, from the hips up, in limited palette of greyscale, gold and red against a grey background. There is a golden sun disc behind the character's head. The character is leaning against a decorative wrought iron railing and looking to the right with a smile. He has two feathery wings, one black and one white. He also has two sets of black horns, one set on the forehead curling back, and one above ears, curling to the front like ram horns. He is dressed in dark shirt with loose sleeves and dark pants. He has a lot off gold jewelry and accessories, as well as a white cravat with a big, red gemstone decorating it. His hair is long and black. He has shiny scales on his cheeks. His eyes are red.</p></figcaption>
			</noscript>
	        </figure>
		</div>
</div>
```
{% endraw %}
</section>

<section>
{% heading "h2", "styling the gallery" %}

You can style the `.gallery` element and the image-containing `figure` however you want. Here's an example of how I did it, to achieve the grid and enlargement on hover.

{% raw %}
```CSS
/* will display the images in a grid, fitting the amount of images to the page width */
.gallery {
	display: grid;
	gap: 1rem 1rem;
	justify-content: center;
	margin: 0 auto;
	place-items: center;
	grid-template-columns: repeat(auto-fit, minmax(min-content, 30vw));

	@media only screen and (min-width: 768px) {
		grid-template-columns: repeat(auto-fit, minmax(20vw, min-content));

	}
}
/* makes the image fill the entire grid cell */
figure {
  padding: 0;
  margin: 0;
  position: relative;
}

.gallery-image {
  object-fit: cover;
  transition: transform 0.2s;
  cursor: pointer;
  margin: 0;
  /* makes the images square and about 1/3 of the screen size */
  width: 30vw;
  height: 30vw;

  /* makes the images only about 1/4 of screen size on bigger screens */
  @media only screen and (min-width: 768px) {
    width: 20vw;
    height: 20vw;
  }

  /* enlarges the images when they're hovered over */
  &:hover {
    position: relative;
    z-index: 10;
    transform: scale(1.2);
  }
}

```
{% endraw %}

All you need to do for this to work is to include it in your CSS stylesheet somewhere. 
</section>
<section>
{% heading "h2", "final notes" %}

You can fit many images on one page with this setup, but remember that it will make the page very slow to load. I recommend dividing the gallery into separate pages and linking them together if you have a lot of pictures to display.

Remember to also compress your image files! Converting to `webp` format can help the filesize a lot. Photoswipe is also not designed to handle images bigger than 3000x3000px, so scale your images down, too (nobody really needs to see the raw 5000x5000px uncompressed JPG of your drawing, to be honest).
</section>
