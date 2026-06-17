---
layout: _page.html
tags: resources
displayName: Misc
---
{% heading "h1", "Miscellanous resources" %}

{% heading "h2", "EPIC the movie playlist" %} 

I've made playlist of fan-made animatics for the [EPIC musical](https://en.wikipedia.org/wiki/EPIC:_The_Musical){target=_blank} by Jorge Rivera-Herrans, arranged in song order so that it can be viewed as if it was a continous movie. 

[Youtube](https://youtube.com/playlist?list=PLB39U-vzXdiM&si=YKsy1NWDjCw3P6Of){target=_blank}{.round-link}

A similar concept in one video is this [compilation by Danneymation](https://www.youtube.com/watch?v=jJ9vtKtilG8){target=_blank}

### List of videos
In case the Youtube playlist is somehow inaccessible, here's a list of links to individual videos in it. 
<details>
<summary>Expand</summary>
<ul>
{% for video in misc.epic-playlist %}
<li><a href="http://www.youtube.com/watch?v={{video.id}}" target="_blank">"{{video.title}}" by {{video.channel}}</a></li>
{% endfor %}
</ul>
</details>

