---
tags: 
  - nav
linkName: Bio
order: 1
priority: 0.7
eleventyComputed:
  pageTitle: "Basics about Aque"
---
{%- flex-columns -%}

{%- flex-item -%}<section>
<a href="https://picrew.me/en/image_maker/1322863" rel="external" class="design__floated--left noformat"><img src="/assets/images/picrew.png" alt="cartoony portrait of a person with light skin and short brown hair, against the nonbinary flag background" title="click to go to the picrew used to make this!" class="image--round image--small"></a>

My main focus are various arts and crafts, and I'm always ready to help where I can. I'm a strong believer in universal human rights, including queer rights and intersectional feminism, evidence-based science and medicine, bodily autonomy, the separation of church and state, and generally in the concept that we should be good and understanding to each other.
<div class="layout__flex-block__row layout__flex-block__row--small layout__flex-block--space-around">
{%- for image in collections.idImages -%}
<img src="{{image}}">
{%- endfor -%}
</div>
</section>{%- endflex-item -%}

{%- flex-aside %}<section>

- **Languages:** Polish, English, German
- **Location:** Silesia, Poland, EU
- **Age:** in my {{"now" | date: "%Y" | minus: 1991 | divided_by: 10  | floor | times: 10 }}s
- **Pronouns:** they/them in English, any in Polish
- **Identity:** triple-A human ([what?](/longform/thoughts/2026/my-queerness.html))

</section>{%- endflex-aside %}

{%- flex-break-newrow -%}

{% flex-item %}<section>
{% heading "h2", "Interests", "Talking about any of these will almost always grab my attention" %}

- **stories:** cartoons, fantasy, sci-fi, comics, anime/manga, worldbuilding
- linguistics
- information retrieval query languages
- gemstones and minerals
- videogames
- prepping
- herbalism
- **visual arts:** pencil drawing, digital drawing, anime style
- character design
- indie VTubers
</section>{%- endflex-item -%}
{% flex-item %}<section>
{% heading "h2", "Likes", "always appreciated as gifts or offerings" %}

- cats and frogs
- rock music
- shanties and work songs
- folk music
- science fiction stories, especially involving **androids**
- fantasy stories, especielly involving **the Fae**
- the color blue
- **the sea**, and swimming, and just being in water
- window-shopping and browsing items (except clothing)
- art noveau style</section>{% endflex-item %}
 
<div class="layout__flex-block__row layout__flex-block__row--small layout__flex-block--space-around">
{%- for image in collections.fandomImages -%}
<img src="{{image}}">
{%- endfor -%}
</div>
{%- endflex-columns -%}

{% divider-center %}


<section>
<div class="layout__flex-block__row layout__flex-block__row--small layout__flex-block--space-around">
{%- for image in collections.buttonImages -%}
<img src="{{image}}">
{%- endfor -%}
</div>

<p></p>

<div class="layout__flex-block__row layout__flex-block__row--small layout__flex-block--space-around">
{%- for image in collections.blinkieImages -%}
<img src="{{image}}">
{%- endfor -%}
</div>
</section>


