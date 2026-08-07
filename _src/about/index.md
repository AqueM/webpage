---
mainMenu: true
linkName: Bio
order: 1
priority: 0.7
eleventyComputed:
pageTitle: "Basics about Aque"
---
{%- flex-columns -%}

<section class="layout__flex-item">
  <a href="https://picrew.me/en/image_maker/1322863" rel="external" class="design__floated--left noformat"><img
      src="/assets/images/picrew.png"
      alt="cartoony portrait of a person with light skin and short brown hair, against the nonbinary flag background"
      title="click to go to the picrew used to make this!" class="image--round image--small"></a>

  My main focus are various arts and crafts, and I'm always ready to help where I can. I'm a strong believer in
  universal human rights, including queer rights and intersectional feminism, evidence-based science and medicine,
  bodily autonomy, the separation of church and state, and generally in the concept that we should be good and
  understanding to each other.
  <div class="layout__flex-block__row layout__flex-block__row--small layout__flex-block--space-around">
    {%- for image in collections.idImages -%}
    <img src="{{image}}">
    {%- endfor -%}
  </div>
</section>

<section class="layout__flex-item--aside">

  - **Languages:** Polish, English, German
  - **Location:** Silesia, Poland, EU
  - **Age:** in my {{"now" | date: "%Y" | minus: 1991 | divided_by: 10 | floor | times: 10 }}s
  - **Pronouns:** they/them in English, any in Polish
  - **Identity:** triple-A human ([what?](/longform/thoughts/2026/my-queerness))

</section>

{%- flex-break-newrow -%}

<section class="layout__flex-item">
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
</section>
<section class="layout__flex-item">
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
  - art nouveau style</section>

<div class="layout__flex-block__row layout__flex-block__row--small layout__flex-block--space-around">
  {%- for image in collections.fandomImages -%}
  <img src="{{image}}">
  {%- endfor -%}
</div>
{%- endflex-columns -%}
{% divider-lines %}
<section>
  <div class="layout__flex-block__row layout__flex-block__row--small layout__flex-block--space-around">
    {%- for image in collections.buttonImages -%}
    <img src="{{image}}">
    {%- endfor -%}
  </div>

  <p></p>

  <div class="layout__flex-block__row layout__flex-block__row--small layout__flex-block--space-around">
    {%- for image in collections.blinkieImages -%}
    <img src="{{image}}" class="image__blinkie">
    {%- endfor -%}
  </div>
</section>
{% divider-lines %}
<section>
  {% assign proficiency = 3 %}
  <div class="character-sheet__block layout__character-sheet layout__flex-block__stack">
    <div class="layout__flex-block__row">
      <span class="character-sheet__label character-sheet__name character-sheet__stat--big">AQUE</span>
      <div
        class="character-sheet__block character-sheet__block--inner layout__flex-block--space-around layout__flex-block__row layout__flex-item">
        <div class="layout__flex-item"><span class="character-sheet__label">Class & level:</span> lvl 6 Cleric
          (Knowledge Domain)</div>
        {%- flex-break-newrow -%}
        <div class="layout__flex-item"><span class="character-sheet__label">Background:</span> Rewarded</div>
        <div class="layout__flex-item"><span class="character-sheet__label">Race:</span> changeling</div>
        <div class="layout__flex-item"><span class="character-sheet__label">Alignment:</span> neutral good</div>
      </div>
    </div>
    <div class="layout__flex-block__row layout__flex-block--space-around">
      <div
        class="character-sheet__block character-sheet__block--inner character-sheet_numbers layout__flex-item__aside">
        <span class="character-sheet__label">HP</span><span class="character-sheet__stat--big">23/35</span>
      </div>
      <div
        class="character-sheet__block character-sheet__block--inner character-sheet_numbers layout__flex-item__aside">
        <span class="character-sheet__label">AC</span><span class="character-sheet__stat--big">12</span>
      </div>
      <div
        class="character-sheet__block character-sheet__block--inner character-sheet_numbers layout__flex-item__aside">
        <span class="character-sheet__label">Speed</span><span class="character-sheet__stat--big">30</span>
      </div>
      <div
        class="character-sheet__block character-sheet__block--inner character-sheet_numbers layout__flex-item__aside">
        <span class="character-sheet__label">Initiative</span><span
          class="character-sheet__stat--big">+{{about.charsheet.stats.dex | minus: 10.5 | divided_by: 2 | round
          }}</span>
      </div>
      <div
        class="character-sheet__block character-sheet__block--inner character-sheet_numbers layout__flex-item__aside">
        <span class="character-sheet__label">Proficiency</span><span
          class="character-sheet__stat--big">+{{proficiency}}</span>
      </div>
    </div>
    <div class="layout__flex-block__row">
      <div class="layout__flex-item__aside layout__flex-block__stack layout__flex-block--start">
        <div>
          <div
            class="character-sheet__block character-sheet__block--inner character-sheet__stat character-sheet_numbers">
            <span class="character-sheet__label">STRENGTH</span>
            <span class="character-sheet__stat--big">{{about.charsheet.stats.str}}</span><span
              class="character-sheet__stats__bonus">+{{about.charsheet.stats.str | minus: 10.5 | divided_by: 2 | round
              }}</span>
          </div>
          <div
            class="character-sheet__block character-sheet__block--inner character-sheet__stat character-sheet_numbers">
            <span class="character-sheet__label">DEXTERITY</span>
            <span class="character-sheet__stat--big">{{about.charsheet.stats.dex}}</span><span
              class="character-sheet__stats__bonus">+{{about.charsheet.stats.dex | minus: 10.5 | divided_by: 2 | round
              }}</span>
          </div>
          <div
            class="character-sheet__block character-sheet__block--inner character-sheet__stat character-sheet_numbers">
            <span class="character-sheet__label">CONSTITUTION</span>
            <span class="character-sheet__stat--big">{{about.charsheet.stats.con}}</span><span
              class="character-sheet__stats__bonus">+{{about.charsheet.stats.con | minus: 10.5 | divided_by: 2 | round
              }}</span>
          </div>
          <div
            class="character-sheet__block character-sheet__block--inner character-sheet__stat character-sheet_numbers">
            <span class="character-sheet__label">INTELLIGENCE</span>
            <span class="character-sheet__stat--big">{{about.charsheet.stats.int}}</span><span
              class="character-sheet__stats__bonus">+{{about.charsheet.stats.int | minus: 10.5 | divided_by: 2 | round
              }}</span>
          </div>
          <div
            class="character-sheet__block character-sheet__block--inner character-sheet__stat character-sheet_numbers">
            <span class="character-sheet__label">WISDOM</span>
            <span class="character-sheet__stat--big">{{about.charsheet.stats.wis}}</span><span
              class="character-sheet__stats__bonus">+{{about.charsheet.stats.wis | minus: 10.5 | divided_by: 2 | round
              }}</span>
          </div>
          <div
            class="character-sheet__block character-sheet__block--inner character-sheet__stat character-sheet_numbers">
            <span class="character-sheet__label">CHARISMA</span><span
              class="character-sheet__stat--big">{{about.charsheet.stats.cha}}</span><span
              class="character-sheet__stats__bonus">+{{about.charsheet.stats.cha | minus: 10.5 | divided_by: 2 | round
              }}</span>
          </div>
        </div>
        <div class="character-sheet__block character-sheet__block--inner layout__flex-item">
          <div class="character-sheet__text"><span class="character-sheet__label">personality trait</span>
            I am horribly, horribly awkward in social situations.</div>
          <div class="character-sheet__text"><span class="character-sheet__label">IDEAL</span>
            Empathy. No creature should be made to suffer. (Good)</div>
          <div class="character-sheet__text"><span class="character-sheet__label">bond</span>
            My good fortune means I can lift others up as well.<br>No one else should have to endure the hardships I've
            been through.</div>
          <div class="character-sheet__text"><span class="character-sheet__label">flaw</span>
            I am inflexible in my thinking.</div>
        </div>
      </div>
      <div class="layout__flex-item__aside layout__flex-block__stack layout__flex-block--start">
        <div class="character-sheet__block character-sheet__block--inner">
          <span class="character-sheet__label character-sheet__label--big">skills</span>
          <ul class="design__list-no-decor">{% for skill in about.charsheet.skills %}{% capture statNumber
            %}{{about.charsheet.stats[skill.stat] | minus: 10.5 | divided_by: 2 | round}}{% endcapture %}
            <li>{% if skill.prof %}<span class="icon icon--left"
                style="--layout-img: url('/assets/images/layout/font-awesome/circle-solid-full.svg');"></span>
              +{{statNumber | plus: proficiency}}{% else %}<span class="icon icon--left"
                style="--layout-img: url('/assets/images/layout/font-awesome/circle-regular-full.svg');"></span>
              +{{statNumber}}{%endif%} {{skill.name}}</li>{% endfor %}
          </ul>
        </div>
        <div class="character-sheet__block character-sheet__block--inner  layout__flex-item">
          <div><span class="character-sheet__label character-sheet__label--big">PROFICIENCIES</span>
            <ul class="design__list-no-decor">{% for item in about.charsheet.proficiencies %}
              <li>{{item}}</li>{% endfor %}
            </ul>
          </div>
          <div><span class="character-sheet__label">LANGUAGES</span>
            <ul class="design__list-no-decor">{% for item in about.charsheet.languages %}
              <li>{{item}}</li>{% endfor %}
            </ul>
          </div>
        </div>
      </div>
      <div class="layout__flex-item__aside layout__flex-block__stack">
        <div
          class="character-sheet__block character-sheet__block--inner layout__flex-item__aside layout__flex-block__stack layout__flex-block--space-between">
          <div><span class="character-sheet__label character-sheet__label--big">equipment</span>
            <ul class="design__list-no-decor">{% for item in about.charsheet.equipment %}
              <li>{{item}}</li>{% endfor %}
            </ul>
          </div>
          <div class="layout__flex-block--end">See also: <a href="/tools/edc">EDC</a></div>
        </div>
        <div class="character-sheet__block character-sheet__block--inner">
          <span class="character-sheet__label character-sheet__label--big">attuned items</span>
          {%- for item in about.charsheet.attuned -%}
          <div class="character-sheet__text"><span class="character-sheet__label">{{item.name}}</span>
            <p>{{item.text}}</p>
          </div>
          {%- endfor -%}
        </div>
      </div>
      <div class="layout__flex-item__aside layout__flex-block__stack layout__flex-block--start">
        <div class="character-sheet__block character-sheet__block--inner  layout__flex-item">
          <span class="character-sheet__label character-sheet__label--big">FEATURES & FEATS</span>
          {%- for feat in about.charsheet.feats -%}
          <div class="character-sheet__text"><span class="character-sheet__label">{{feat.name}}</span>
            <p>{{feat.text}}</p>
          </div>
          {%- endfor -%}
        </div>
      </div>
</section>