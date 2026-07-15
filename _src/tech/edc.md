---
layout: layouts/_longform
date: Last Modified
changeFreq: yearly
category: technology
tags: 
  - nav
displayName: EDC
---
{% heading "h1", "Everyday Carry" %}

## What's an EDC?

EDC stands for Everyday Carry and refers to items you carry with you daily, or at least regularly. What should be included in that list differs extremely depending on who you ask; some are good with just their phone, some feel naked without fifteen gadgets and a knife.

Here's a nice article about EDCs: [What is EDC? Everyday Carry: The Ultimate Beginner’s Guide](https://everydaycarry.com/what-is-edc-everyday-carry-guide/){target=_blank}

## Why showcase it?

It's a community tradition, to show your "pocket dump" to inspire others or share things that have worked for you. I also want to brag about my cute stuff, alright.

Check out other pocket dumps at [r/EDC](https://www.reddit.com/r/EDC/){target=_blank}

{%- assign date = page.date | date: "%m/%Y" -%}
{%- capture subtitle %}Last updated: <time><strong>{{date}}</strong></time> {% endcapture %}
{% heading "h2", "Current EDC", subtitle %}

### Containers

{% gallery %}{% for item in tech.edc.images.containers %}{% photoMine item %}{% endfor %}{% endgallery %}

### Hardware
{% columns-spaced %}{% column %}
DAP, headphones, phone with a [Tech-Protect C6S Rope Wrist Strap](https://tech-protect.eu/pl/products/tech-protect-c6s-rope-crossbody-cargo-khaki-165357.html?query_id=3){target=_blank} lanyard (can be swapped between 'bracelet' length or over the shoulder length). To see details, go to [Hardware  →](/tech/hardware)

Powerbank with a short USB to USB-C cable (randomly chosen, this is the one thing I was too lazy to research into)
{% endcolumn %}{% column-side %}
{% gallery %}{% photoMine tech.edc.images.edc.hardware %}{% endgallery %}{% endcolumn-side %}{% endcolumns-spaced %}

### Wallet
{% columns-spaced %}{% column %}

I carry three bundles of cards: loyalty cards I use often, loyalty cards I don't use much and giftcards, actual payment cards +  note with my social number and note with my phone number (some loyalty cards use phone number as an ID, and I don't want to say it out lout every time. Same for social number, used to check you out at a pharmacy).

The payment cards live in a pull-out compartment that was originally a part of a wallet, which I've ditched in favor of carrying bundles of cards, as I don't use cash a lot.  When I need cash on hand, I either stash a bill under my phonecase, or use the adorable froggy coin purse (which I don't usually carry with me, it lives in my gym bag, 'cause my gym prefers cash payments).

{% endcolumn %}{% column-side %}
{% gallery %}{% photoMine tech.edc.images.edc.wallet %}{% endgallery %}{% endcolumn-side %}{% endcolumns-spaced %}

### Misc
{% columns-spaced %}{% column %}
<ul>
{% for item in tech.edc.misc-list %}<li>{{item | markdown }}</li>{% endfor %}
</ul>
{% endcolumn %}{% column-side %}
{% gallery %}{% photoMine tech.edc.images.edc.misc %}{% endgallery %}{% endcolumn-side %}{% endcolumns-spaced %}

### Decor
{% columns-spaced %}{% column %}
<ul>
{% for item in tech.edc.decor-list %}<li>{{item | markdown }}</li>{% endfor %}
</ul>
{% endcolumn %}{% column-side %}
{% gallery %}{% photoMine tech.edc.images.edc.decor %}{% endgallery %}{% endcolumn-side %}{% endcolumns-spaced %}
  
{% include "partials/_photoswipe-script.html" %}
