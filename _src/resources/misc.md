---
mainMenu: true
linkName: Misc
eleventyComputed:
  pageTitle: "Miscellanous resources"
---
<section>
Things I made for others that don't fit anywhere else, and are too small to warrant a separate page.
</section>
<section>
{% heading "h2", "EPIC the movie playlist" %} 

I've made playlist of fan-made animatics for the [EPIC musical](https://en.wikipedia.org/wiki/EPIC:_The_Musical){target=_blank} by Jorge Rivera-Herrans, arranged in song order so that it can be viewed as if it was a continous movie. 

<div class="design__box">
<p>Here's the link directly to the <a href="https://youtube.com/playlist?list=PLB39U-vzXdiM&si=YKsy1NWDjCw3P6Of" target="_blank" class="design__link--round"><span class="icon icon--left" style="--layout-img: url('/assets/images/layout/font-awesome/youtube-brands-solid-full.svg"></span>Youtube Playlist</a></p>
</div>

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
- Jak firma odnosi się do kwestii różnorodności pracowników - zatrudniania osób niepełnosprawnych, z innych krajów lub kultur? -->
</section>
