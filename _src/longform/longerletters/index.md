---
mainMenu: true
linkName: Longer Letters
order: 1
---
Archive of resources related to my Youtube Channel, Longer Letters.
<section>
{% heading "h2", "Videos" %}
<div class="design__box">
<p>To view the videos online, go to <a href="https://www.youtube.com/@LongerLetters" target="_blank" class="design__lin--round"><span class="icon" style="background-image: url('/assets/images/layout/font-awesome/youtube-brands-solid-full.svg"></span>channel</a></p>
</div>

If you want to view them offline, here's a list of downloadable files.

<details>
<summary>Files</summary>

None yet!

<ul>
{% for video in collections.videos %}
<li><a href="{{video.url}}" target="_blank" rel="external">{{video.linkName}}</a><img src="/assets/images/layout/download.gif"></li>
{% endfor %}
</ul>
</details>
</section>

<section>
{% heading "h2", "Transcripts" %}

Archive of the scripts and other files related to the videos, if anyone needs text to follow along or prefers reading.

<details>
<summary>Expand</summary>

None yet!

<ul>
{% for script in collections.transcripts %}
<li><a href="{{script.permalink}}" target="_blank">{{script.linkName}}</a></li>
{% endfor %}
</ul>
</details>
</section>