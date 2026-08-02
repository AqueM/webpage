---
mainMenu: true
linkName: Misc
eleventyComputed:
  pageTitle: "Miscellanous resources"
order: 100
---
<section>
Things I made for others that don't fit anywhere else, and are too small to warrant a separate page.
</section>
<section>
{% heading "h2", "Character questions for TTRPG" %} 

I came up with this for a Dungeons and Dragons campaign. The intention was to ask one of these to a random player about their player-character every-so-often, to simulate what characters would've learned about each other by just being around one another during travel and co-habitation.

1. What are your Character's bedtime habits?
2. What is their general disposition? Their poise, composure, their way of being, their ***aura***?
3. Are there any accessories, trinkets, jewelry that your Character wears usually? Colors that stand out in their outfits?
4. What are your Character's sleeping/trancing habits, usual position?
5. What are their habits around food? Preferred foods, habits around snacking, quirks around eating?
6. How does your Character laugh, if they laugh at all? What makes them laugh?
7. How do they treat their equipment? Is it well-taken off?
8. Does your Character have any unusual equipment or tools?
9. Do they have any stims, quirks, any repeating eccentricities?
10. Do they have any immediately visible scars or marks?
11. Do they possess any immediately visible devotional items? Are they obvious with their faith or have any faith-related habits?
12. Is your Character right- or left-handed?
</section>
<section>
{% heading "h2", "EPIC the movie playlist" %} 

I've made playlist of fan-made animatics for the [EPIC musical](https://en.wikipedia.org/wiki/EPIC:_The_Musical){target=_blank}{rel="external nofollow"} by Jorge Rivera-Herrans, arranged in song order so that it can be viewed as if it was a continous movie. 

<div class="design__box">
<p>Here's the link directly to the</p><div class="theme__border-oval desing__decor-link design__center">
			{% include "partials/_decor-sides.html" %} <a href="https://youtube.com/playlist?list=PLB39U-vzXdiM&si=YKsy1NWDjCw3P6Of" target="_blank" rel="external nofollow"><span class="icon icon--left" style="--layout-img: url('/assets/images/layout/font-awesome/youtube-brands-solid-full.svg"></span>Youtube Playlist</a></div>
</div>

A similar concept in one video is this [compilation by Danneymation](https://www.youtube.com/watch?v=jJ9vtKtilG8){target=_blank}{rel="external nofollow"}
{% divider-lines %}

### List of videos
In case the Youtube playlist is somehow inaccessible, here's a list of links to individual videos in it. 
<details>
<summary>Expand</summary>
<ul>
{% for video in resources.epic-playlist %}
<li><a href="http://www.youtube.com/watch?v={{video.id}}" target="_blank">"{{video.title}}" by {{video.channel}}</a></li>
{% endfor %}
</ul>
</details>
</section>
<section>
{% heading "h2", "Job interview questions" %} 

I put these together around 2020 when I was doing a lot of interviews for one reason or another.

These are primarily geared towards my own industry — IT — and probably much more employee-centric than most other jobs, so they may not be useful to regular people. I figured they may come in handy to prep before interviews nonetheless.

- How did the company handle the COVID-19 pandemic?
- How did the company handle financial crises, like the global slowdown of the economy in 2020?
- Why is the position open? Growth or replacement?
- What issues or goals has this position been created to address?
- Why did the person I'm replacing leave the company?
- How long do people in this position stay in the company on average?
- How is performance measured for this position?
- What does success look like for this role?
- Imagine you've filled this role. It's a year later and the person you've hired exceeded your expectations. What have they done to do so? What does that look like?
- What do induction and first days at the company look like?
- What about employee training and growth?
- Can you describe the typical working day at your firm?
- Who will I report to directly? In work matters? In HR matters? What's the management hierarchy?
- How big is the team I would belong to?
- What are the next steps in the interview process? When will I hear back?
- How many women work in the team I would be working with, or in a similar job position?
- What is the company's approach to diversity and hiring people with disabilities or from different cultural backgrounds?

<!-- - Jakie kroki podjęła firma aby zapewnić bezpieczeństwo pracowników w czasie pandemii COVID-19?
- Jak firma poradziła sobie z większymi kryzysami finansowymi, takimi jak globalne spowolnienie gospodarki w 2020 roku?
- Czemu trwa rekrutacja na to stanowisko? Czy jest to kwestia rozwoju zespołu czy zastępstwo za odchodzącego pracownika?
- Jakie problemy ma rozwiązać lub jakie cele zrealizować to stanowisko?
- Czemu poprzednik odszedł?
- Średnio, jak długo osoby pracują w firmie na tym stanowisku? Czy kończy się ono najczęściej awansem czy zmianą pracy?
- Jak mierzy się wydajność na tym stanowisku?
- Jak wygląda sukces dla pracownika na tym stanowisku?
- Prosze sobie wyobrazić, że zatrudnili Państwo kogoś na to stanowisko. Po roku okazuje się, że ta osoba nie tylko spełnia, ale przeszła Państwa czekiwania. Co to oznacza? Co zrobiła ta osoba? Co osiągnęła?
- Jak wygląda wprowadzenie i pierwsze dni pracy?
- Jak wygląda kwestia doszkalania pracowników?
- Jak wygląda typowy dzień pracy w firmie?
- Komu bezpośrednio będę raportować? W sprawach projektowych? W sprawach kadrowych? Jak wygląda hierarchia zarządzania w firmie?
- Jak duży jest zespół, do którego będę należeć?
- Jakie są następne kroki rekrutacji? Kiedy mogę spodziewać się odzewu?
- Ile kobiet jest zatrudnionych w zespole, w którym będę pracować, lub na podobnym stanowisku?
- Jak firma odnosi się do kwestii różnorodności pracowników — zatrudniania osób niepełnosprawnych, z innych krajów lub kultur? -->
</section>
