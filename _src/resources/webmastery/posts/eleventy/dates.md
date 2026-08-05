---
linkName: eleventy: dates
tags: liquidJS
disclaimers: liquidJS
---
Here's some tricks about dealing with dates in Eleventy.

<section>
{% heading "h2", "get the right date" %}

Eleventy has some pre-made data in the front matter for each page it creates. That includes *date*, which is a very useful variable. But! There's two exposed in the page variables and you need to remember to use the right one. 

{% raw %}`{{date}}`{% endraw %} resolves to *{{date}}* (the literal text) if you don't set the date yourself in front matter, like this:
{% raw %}
```yaml
---
date: 2000-01-20
---
```
{% endraw %}
in which case it will resolve to that date. Setting a date manually is useful for back-dating pages!

{% raw %}`{{page.date}}`{% endraw %} always resolves to the actual date of last modification.
</section>

<section>
{% heading "h2", "get current date" %}

Useful for 'last updated' displays, because just referencing `page.date` resolves to file's modification date — and you don't always change the exact file where you display your "last updated" note. This will always populate at build time.


{% raw %}
```liquidJS
{{"now" | date}}
```
{% endraw %}

</section>

<section>
{% heading "h2", "display formatted date" %}

Out of the box, Eleventy returns `page.date` as this long unweildy string: *{{page.date}}*. To make it more human-readable, we need to tell Eleventy how to format it with a filter:

{% raw %}
```liquidJS
{% page.date | date: "%d/%m/%Y" %}
```
{% endraw %}

This means providing the *date* filter as well as the format in quotations. I usually use some variation of `"%d/%m/%Y"` for full dates or `"%m/%Y"` when I only need the month (like in my Last Updated tags). 

The formatting follows rules of [strftime](https://strftime.net/){target=_blank}{rel="external no follow"}, so you can really do some weird things with your dates if you want to. 
</section>

<section>
{% heading "h2", "sort collection by date" %}

Out of the box, Eleventy sadly doesn't seem to implement the "sort" LiquidJS filter. When you fetch a collection, though, it is sorted by `page.date` by default, so you don't need to worry about it. You can also slap a `reverse` filter on it to toggle between ascending/descending sort.

{% raw %}
```liquidJS
{% collections.collectionName %}

{% collections.collectionName | reverse %}
```
{% endraw %}

Want to sort by something else than date? [Check out my other guides](/resources/tutorials)
</section>
