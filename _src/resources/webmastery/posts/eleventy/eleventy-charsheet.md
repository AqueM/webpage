---
linkName: "eleventy code snippet: DnD Character Sheet" 
tags: 
  - liquidJS
  - 'code snippet'
disclaimers: liquidJS
date: 2026-08-08
---
<section>

In reality, [my Bio page](/about) character sheet doesn't (exclusively) use static data. Once set-up, I don't have to edit the page itself at all. A good portion of the numbers and lists is fed from Eleventy global data files, and the rest is calculated on the page itself. Here's how. 

</section>

<section>
{% heading "h2", "Data structure" %}

<div class="design--center-align-vertical">

[![Screenshot of the file tree in VSCode](/assets/images/webmastery/charsheet-data.webp "click to enlarge")](/assets/images/webmastery/charsheet-data.webp)
</div>

All of the data lives in these JSON files. Some of them are simple arrays with string lists — like the equipment, proficiencies or languages ones. 

{% raw %}
```json
[ 
    "Painter's Supplies",
    "Scribe's Supplies",
    "Webmaster's Tools",
    "Scholar's Pack"
]
```
{% endraw %}

The others are simple dictionaries of key-value pairs, occassionally with a third value.
{% raw %}
```json
{
    "str": 10,
    "dex": 12,
    "con": 13,
    "int": 14,
    "wis": 18,
    "cha": 11
}
```
{% endraw %}

{% raw %}
```json
[
  {
    "name": "Acrobatics",
    "prof": false,
    "stat": "dex"
  },
  {
    "name": "Animal Handling",
    "prof": false,
    "stat": "wis"
  },
  (etc ...)
]
```
{% endraw %}

Things that are static/hard coded are mostly in the header: the name, class, background, HP, speed etc. They're simply not used anywhere. The only number referenced in other places that is static is **Proficiency bonus**. It's declared at the beginning and displayed by referencing the variable.

{% raw %}
```liquidJS
{% assign proficiency = 3 %}
  (...)
<div class="character-sheet__block character-sheet__block--inner character-sheet_numbers layout__flex-item__aside">
    <span class="character-sheet__label">Proficiency</span>
    <span class="character-sheet__stat--big">+{{proficiency}}</span>
</div>
```
{% endraw %}

</section>
<section>
{% heading "h2", "Ability scores" %}

They're all displayed by referencing the `stats.json` file from global data files. The fun comes in when they're used to calculate the bonus in the little circle.

{% raw %}
```liquidJS
<div class="character-sheet__block character-sheet__block--inner character-sheet__stat character-sheet_numbers">
    <span class="character-sheet__label">STRENGTH</span>
    <span class="character-sheet__stat--big">{{about.charsheet.stats.str}}</span>
    <span class="character-sheet__stats__bonus">+{{about.charsheet.stats.str | minus: 10.5 | divided_by: 2 | round }}</span>
</div>
```
{% endraw %}

I substract 10.5 because the liquid filter `round` doesn't allow for rounding down — when the result is 2.5, it will always round up (as actual maths dictates). To achieve the correct bonuses, I had to account for this.

</section>
<section>
{% heading "h2", "Skill bonuses" %}

I wanted to calculate the skill bonus, which is ability score bonus for the relevant ability + proficiency bonus (if proficient). That meant I had to know which ability score is relevant, and if there's proficiency. The latter is easy — just doing an `if` on the skill's 'prof' variable is enough. But to know the correct ability score bonus without typing it as a number in the JSON itself required a little *magic*.

{% raw %}
```liquidJS
<div class="character-sheet__block character-sheet__block--inner">
    <span class="character-sheet__label character-sheet__label--big">skills</span>
    <ul class="design__list-no-decor">
    {%- for skill in about.charsheet.skills -%}
    {%- capture statNumber -%}{{about.charsheet.stats[skill.stat] | minus: 10.5 | divided_by: 2 | round}}{%- endcapture -%}
        <li>
        {%- if skill.prof -%}<span class="icon icon--left"style="--layout-img: url('/assets/images/layout/font-awesome/circle-solid-full.svg');"></span> +{{statNumber | plus: proficiency}}
        {%- else -%}<span class="icon icon--left" style="--layout-img: url('/assets/images/layout/font-awesome/circle-regular-full.svg');"></span> +{{statNumber}}{%- endif -%} {{skill.name}}
        </li>
    {%- endfor -%}
    </ul>
</div>
```
{% endraw %}

What's happening there is this: for each skill, I calculate the ability score bonus with the same equation I used, using square brackets [ ] to enable refering to the correct ability score based on what's in the 'stat' key of a skill. I capture that calculation into a variable within LiquidJS itself. Then, I use that captured value to add proficiency if applicable. I could technically do it all in one go as {% raw %}`+{{about.charsheet.stats[skill.stat] | minus: 10.5 | divided_by: 2 | round | plus: proficiency}}`{% endraw %} but then I'd have to repeat it again to use in the non-proficient `else` right after. Like this I can just use `statNumber`.

</section>
<section>
{% heading "h2", "The rest" %}

All other parts are pretty straight-forward lists referencing the global data files.

{% raw %}
```liquidJS
<div class="character-sheet__block character-sheet__block--inner  layout__flex-item">
    <div>
        <span class="character-sheet__label character-sheet__label--big">PROFICIENCIES</span>
        <ul class="design__list-no-decor">
            {%- for item in about.charsheet.proficiencies -%}
            <li>{{item}}</li>
            {%- endfor -%}
        </ul>
    </div>
    <div>
        <span class="character-sheet__label">LANGUAGES</span>
        <ul class="design__list-no-decor">
            {%- for item in about.charsheet.languages -%}
            <li>{{item}}</li>
            {%- endfor -%}
        </ul>
    </div>
</div>
```
{% endraw %}

{% raw %}
```liquidJS
<div class="character-sheet__block character-sheet__block--inner layout__flex-item__aside layout__flex-block__stack layout__flex-block--space-between">
    <span class="character-sheet__label character-sheet__label--big">equipment</span>
    <ul class="design__list-no-decor">
        {%- for item in about.charsheet.equipment -%}
        <li>{{item}}</li>
        {%- endfor -%}
    </ul>
</div>
<div class="character-sheet__block character-sheet__block--inner">
    <span class="character-sheet__label character-sheet__label--big">attuned items</span>
    {%- for item in about.charsheet.attuned -%}
        <div class="character-sheet__text">
            <span class="character-sheet__label">{{item.name}}</span>
            <p>{{item.text}}</p>
        </div>
    {%- endfor -%}
</div>
```
{% endraw %}

{% raw %}
```liquidJS
<div class="character-sheet__block character-sheet__block--inner  layout__flex-item">
    <span class="character-sheet__label character-sheet__label--big">FEATURES & FEATS</span>
    {%- for feat in about.charsheet.feats -%}
    <div class="character-sheet__text">
        <span class="character-sheet__label">{{feat.name}}</span>
        <p>{{feat.text}}</p>
    </div>
    {%- endfor -%}
</div>
```
{% endraw %}
</section>
<section>
{% heading "h2", "entire code" %}

Here's the whole code exactly as it is used by Eleventy, for your reference.

{% raw %}
```liquidJS
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
        <span class="character-sheet__label">AC</span><span class="character-sheet__stat--big">13</span>
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
</div>
```
{% endraw %}
</section>