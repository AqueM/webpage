---
layout: layouts/_page
category: resources
tags: nav
displayName: Misc
---
{% heading "h1", "Miscellanous resources" %}
Things I made for others that don't fit anywhere else, and are too small to warrant a separate page.

{% heading "h2", "'EPIC: The Musical' the movie" %}

I've made playlist of fan-made animatics for the [Epic: The Musical](https://en.wikipedia.org/wiki/EPIC:_The_Musical){target=_blank} by Jorge Rivera-Herrans, arranged in song order so that it can be viewed as if it was a continous movie. A similar concept in one video is this [compilation by Danneymation](https://www.youtube.com/watch?v=jJ9vtKtilG8){target=_blank}

<div class="box">
<p>Here's the link directly to the <a href="https://youtube.com/playlist?list=PLB39U-vzXdiM&si=YKsy1NWDjCw3P6Of" target="_blank" class="round-link"><span class="icon" style="background-image: url('/assets/images/layout/font-awesome/youtube-brands-solid-full.svg"></span>Youtube Playlist</a></p>
</div>

In case the Youtube playlist is somehow inaccessible, here's a list of links to individual videos in it. 
<details>
<summary>List of videos</summary>
<ul>
{% for video in misc.epic-playlist %}
<li><a href="http://www.youtube.com/watch?v={{video.id}}" target="_blank">"{{video.title}}" by {{video.channel}}</a></li>
{% endfor %}
</ul>
</details>

Last updated on **07/2026**

