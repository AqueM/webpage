---
mainMenu: true
linkName: EDC
eleventyComputed:
  pageTitle: "Everyday Carry"
---
<section>

## What's an EDC?

EDC stands for Everyday Carry and refers to items you carry with you daily, or at least regularly. What should be included in that list differs extremely depending on who you ask; some are good with just their phone, some feel naked without fifteen gadgets and a knife.

Here's a nice article about EDCs: [What is EDC? Everyday Carry: The Ultimate Beginner’s Guide](https://everydaycarry.com/what-is-edc-everyday-carry-guide/){rel=external}{target=_blank}

## Why showcase it?

It's a community tradition, to show your "pocket dump" to inspire others or share things that have worked for you. I also want to brag about my cute stuff, alright.

Check out other pocket dumps at [r/EDC](https://www.reddit.com/r/EDC/){rel=external}{target=_blank}
</section>

{%- assign date = page.date | date: "%m / %Y" -%}
{%- assign subtitle = "Last updated: <strong>" | append: date | append:
    "</strong>"-%}
  <section>
{% heading "h2", "Current EDC", subtitle %}

{% flex-columns -%}
{%- flex-item %}
{% subheading "h3", "Containers" %}

{% gallery %}{% for item in tools.edc.images.containers %}{% photoMine item %}{% endfor %}{% endgallery %}
{%- endflex-item -%}

{%- flex-break-newrow -%}
{% subheading "h3", "Hardware" %}
{%- flex-item %}

DAP, headphones, phone with a [Tech-Protect C6S Rope Wrist Strap](https://tech-protect.eu/pl/products/tech-protect-c6s-rope-crossbody-cargo-khaki-165357.html?query_id=3){target=_blank}{rel=external} lanyard (can be swapped between 'bracelet' length or over the shoulder length). To see details, go to [Hardware](/tools/hardware)

Powerbank with a short USB to USB-C cable (randomly chosen, this is the one thing I was too lazy to research into)
{%- endflex-item -%}

{%- flex-aside -%}
{% gallery %}{% photoMine tools.edc.images.edc.hardware %}{% endgallery %}
{%- endflex-aside -%}

{%- flex-break-newrow -%}
{% subheading "h3", "Wallet" %}
{%- flex-item %}

Debit card, IDs and loyalty cards, of course, but also note with my social number, note with my phone number.

I do not carry any physical money in this wallet, curiously. When I need cash on hand, I either stas it under my phonecase, or use this adorable froggy coin purse.

{%- endflex-item -%}

{%- flex-aside -%}
{% gallery %}{% photoMine tools.edc.images.edc.wallet %}{% endgallery %}
{%- endflex-aside -%}

{%- flex-break-newrow -%}
{% subheading "h3", "Misc" %}
{%- flex-item %}

<ul>
{% for item in tools.edc.misc-list %}<li>{{item | markdown }}</li>{% endfor %}
</ul>
{%- endflex-item -%}

{%- flex-aside -%}
{% gallery %}{% photoMine tools.edc.images.edc.misc %}{% endgallery %}
{%- endflex-aside -%}

{%- flex-break-newrow -%}
{% subheading "h3", "Decor" %}
{%- flex-item %}

<ul>
{% for item in tools.edc.decor-list %}<li>{{item | markdown }}</li>{% endfor %}
</ul>
{%- endflex-item -%}

{%- flex-aside -%}
{% gallery %}{% photoMine tools.edc.images.edc.decor %}{% endgallery %}
{%- endflex-aside -%}

{%- endflex-columns %}
</section>
  
{% include "partials/_photoswipe-script.html" %}
