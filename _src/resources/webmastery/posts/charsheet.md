---
linkName: "code snippet: DnD Character Sheet" 
tags: 
  - html
  - css
  - 'code snippet'
date: 2026-08-08
---
<section>

This is how it will look — colors up to you, of course.

<div class="design--center-align-vertical">

[![Screenshot of the Character Sheet on my Bio page](/assets/images/webmastery/charsheet.webp "click to enlarge")](/assets/images/webmastery/charsheet.webp)
</div>

Or you can also check it out live on [my Bio page](/about)

</section>
<section>
{% heading "h2", "raw HTML" %}

Want the Eleventy code that will calculate and populate stuff for you instead? [Eleventy: DnD character sheet](/resources/webmastery/code-snippet-dnd-character-sheet.html)

{% raw %}
```HTML
<section>
  <div class="character-sheet__block layout__character-sheet layout__flex-block__stack">
    <div class="layout__flex-block__row">
      <span class="character-sheet__label character-sheet__name character-sheet__stat--big">AQUE</span>
      <div
        class="character-sheet__block character-sheet__block--inner layout__flex-block--space-around layout__flex-block__row layout__flex-item">
        <div class="layout__flex-item"><span class="character-sheet__label">Class & level:</span> lvl 6 Cleric
          (Knowledge Domain)</div><div class="layout__flex-item-break-row"></div><div class="layout__flex-item"><span class="character-sheet__label">Background:</span> Rewarded</div>
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
          class="character-sheet__stat--big">+1</span>
      </div>
      <div
        class="character-sheet__block character-sheet__block--inner character-sheet_numbers layout__flex-item__aside">
        <span class="character-sheet__label">Proficiency</span><span
          class="character-sheet__stat--big">+3</span>
      </div>
    </div>
    <div class="layout__flex-block__row">
      <div class="layout__flex-item__aside layout__flex-block__stack layout__flex-block--start">
        <div>
          <div
            class="character-sheet__block character-sheet__block--inner character-sheet__stat character-sheet_numbers">
            <span class="character-sheet__label">STRENGTH</span>
            <span class="character-sheet__stat--big">10</span><span
              class="character-sheet__stats__bonus">+0</span>
          </div>
          <div
            class="character-sheet__block character-sheet__block--inner character-sheet__stat character-sheet_numbers">
            <span class="character-sheet__label">DEXTERITY</span>
            <span class="character-sheet__stat--big">12</span><span
              class="character-sheet__stats__bonus">+1</span>
          </div>
          <div
            class="character-sheet__block character-sheet__block--inner character-sheet__stat character-sheet_numbers">
            <span class="character-sheet__label">CONSTITUTION</span>
            <span class="character-sheet__stat--big">13</span><span
              class="character-sheet__stats__bonus">+1</span>
          </div>
          <div
            class="character-sheet__block character-sheet__block--inner character-sheet__stat character-sheet_numbers">
            <span class="character-sheet__label">INTELLIGENCE</span>
            <span class="character-sheet__stat--big">14</span><span
              class="character-sheet__stats__bonus">+2</span>
          </div>
          <div
            class="character-sheet__block character-sheet__block--inner character-sheet__stat character-sheet_numbers">
            <span class="character-sheet__label">WISDOM</span>
            <span class="character-sheet__stat--big">18</span><span
              class="character-sheet__stats__bonus">+4</span>
          </div>
          <div
            class="character-sheet__block character-sheet__block--inner character-sheet__stat character-sheet_numbers">
            <span class="character-sheet__label">CHARISMA</span><span
              class="character-sheet__stat--big">11</span><span
              class="character-sheet__stats__bonus">+0</span>
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
          <ul class="design__list-no-decor">
            <li><span class="icon icon--left"
                style="--layout-img: url('/assets/images/layout/font-awesome/circle-regular-full.svg');"></span>
              +1 Acrobatics</li>
            <li><span class="icon icon--left"
                style="--layout-img: url('/assets/images/layout/font-awesome/circle-regular-full.svg');"></span>
              +4 Animal Handling</li>
            <li><span class="icon icon--left"
                style="--layout-img: url('/assets/images/layout/font-awesome/circle-solid-full.svg');"></span>
              +5 Arcana</li>
            <li><span class="icon icon--left"
                style="--layout-img: url('/assets/images/layout/font-awesome/circle-regular-full.svg');"></span>
              +0 Athletics</li>
            <li><span class="icon icon--left"
                style="--layout-img: url('/assets/images/layout/font-awesome/circle-solid-full.svg');"></span>
              +3 Deception</li>
            <li><span class="icon icon--left"
                style="--layout-img: url('/assets/images/layout/font-awesome/circle-solid-full.svg');"></span>
              +5 History</li>
            <li><span class="icon icon--left"
                style="--layout-img: url('/assets/images/layout/font-awesome/circle-solid-full.svg');"></span>
              +7 Insight</li>
            <li><span class="icon icon--left"
                style="--layout-img: url('/assets/images/layout/font-awesome/circle-regular-full.svg');"></span>
              +0 Intimidation</li>
            <li><span class="icon icon--left"
                style="--layout-img: url('/assets/images/layout/font-awesome/circle-solid-full.svg');"></span>
              +7 Medicine</li>
            <li><span class="icon icon--left"
                style="--layout-img: url('/assets/images/layout/font-awesome/circle-solid-full.svg');"></span>
              +7 Nature</li>
            <li><span class="icon icon--left"
                style="--layout-img: url('/assets/images/layout/font-awesome/circle-regular-full.svg');"></span>
              +4 Perception</li>
            <li><span class="icon icon--left"
                style="--layout-img: url('/assets/images/layout/font-awesome/circle-regular-full.svg');"></span>
              +0 Performance</li>
            <li><span class="icon icon--left"
                style="--layout-img: url('/assets/images/layout/font-awesome/circle-regular-full.svg');"></span>
              +0 Persuasion</li>
            <li><span class="icon icon--left"
                style="--layout-img: url('/assets/images/layout/font-awesome/circle-regular-full.svg');"></span>
              +2 Religion</li>
            <li><span class="icon icon--left"
                style="--layout-img: url('/assets/images/layout/font-awesome/circle-regular-full.svg');"></span>
              +1 Sleight of Hand</li>
            <li><span class="icon icon--left"
                style="--layout-img: url('/assets/images/layout/font-awesome/circle-regular-full.svg');"></span>
              +1 Stealth</li>
            <li><span class="icon icon--left"
                style="--layout-img: url('/assets/images/layout/font-awesome/circle-solid-full.svg');"></span>
              +7 Survival</li>
          </ul>
        </div>
        <div class="character-sheet__block character-sheet__block--inner layout__flex-item">
          <div><span class="character-sheet__label character-sheet__label--big">PROFICIENCIES</span>
            <ul class="design__list-no-decor">
              <li>Painter's Supplies</li>
              <li>Scribe's Supplies</li>
              <li>Webmaster's Tools</li>
              <li>Scholar's Pack</li>
            </ul>
          </div>
          <div><span class="character-sheet__label">LANGUAGES</span>
            <ul class="design__list-no-decor">
              <li>Polish (native)</li>
              <li>English (near-native)</li>
              <li>Onlinese (near-native)</li>
              <li>German (A1)</li>
              <li>Silesian (basic)</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="layout__flex-item__aside layout__flex-block__stack">
        <div
          class="character-sheet__block character-sheet__block--inner layout__flex-item__aside layout__flex-block__stack layout__flex-block--space-between">
          <div><span class="character-sheet__label character-sheet__label--big">equipment</span>
            <ul class="design__list-no-decor">
              <li>ink pen</li>
              <li>bottle of ink</li>
              <li>five sheets of paper</li>
              <li>clothes, common</li>
              <li>dice set</li>
              <li>pouch (17 gp)</li>
              <li>hip pouch</li>
              <li>book of lore</li>
              <li>small knife</li>
              <li>handful of pebbles</li>
              <li>2 days of rations (snacks)</li>
              <li>waterskin</li>
            </ul>
          </div>
          <div class="layout__flex-block--end">See also: <a href="/tools/edc">EDC</a></div>
        </div>
        <div class="character-sheet__block character-sheet__block--inner">
          <span class="character-sheet__label character-sheet__label--big">attuned items</span><div class="character-sheet__text"><span class="character-sheet__label">rings of marriage</span>
            <p>A pair of magical rings made of silver. One of them has an amber gemstone inset, the other is a plain band. A creature can only attune to them by participating in the spell <em>Ceremony</em>. When a creature is attuned to them, they provide the following benefits: +1 bonus to Armor Class and saving throws, the creature is unharmed by cold temperatures.</p>
          </div><div class="character-sheet__text"><span class="character-sheet__label">Tablet of knowledge</span>
            <p>This magical item enables the attuned creature to retrieve information or use the spell <em>Sending</em> by expending a charge. The item regenerates 5d6 charges at dawn. Each time it is used, there's a 1d100 chance the user will take 1d4 psychic damage.</p>
          </div></div>
      </div>
      <div class="layout__flex-item__aside layout__flex-block__stack layout__flex-block--start">
        <div class="character-sheet__block character-sheet__block--inner  layout__flex-item">
          <span class="character-sheet__label character-sheet__label--big">FEATURES & FEATS</span><div class="character-sheet__text"><span class="character-sheet__label">Lucky</span>
            <p>You have inexplicable luck that seems to kick in at just the right moment.</p>
          </div><div class="character-sheet__text"><span class="character-sheet__label"><a href='https://steamcommunity.com/sharedfiles/filedetails/?id=1145223801' target='_blank' rel='nofollow external'>Ability to Read</a></span>
            <p>You seem to find information much easier than other people, especially when it involves referencing a written text.</p>
          </div></div>
      </div>
</section>
```
{% endraw %}
</section>
<section>

{% heading "h2", "raw CSS" %}

It uses Flexboxes and is fully responsive, i.e. collapses into a newat stack on smaller screens, and unfolds into a grid on bigger ones, taking the entire container it is in. It's all achieved with this CSS:

{% raw %}
```CSS
/* default for all elements */
* {
    box-sizing: border-box;
}

/* flexbox classes */
.layout__flex-block__stack {
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 1rem;
}

.layout__flex-block__row {
	display: flex;
	flex-direction: column;
	align-items: center;

	gap: 1rem;
	flex-wrap: nowrap;

	@media only screen and (min-width: 768px) {
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
	}
}

.layout__flex-block--space-between {
	justify-content: space-between;
}

.layout__flex-block--start{
	justify-content: flex-start;
}

.layout__flex-item {
	flex: 2 1 30%;
	align-self: stretch;
}

.layout__flex-item__aside {
	flex: 1 1 5%;
	align-self: stretch;
}

/* this is a blank item that is only used to force a new row in flexbox */
.layout__flex-item-break-row {
	flex-basis: 100%;
	height: 0;
}

/* charactersheet specific classes */
.character-sheet__block {
    border: var(--border-width) solid var(--color-borders);
    border-radius: var(--border-radius-single);
    background-color: var(--color-secondrary-transparent);
}

.character-sheet__block--inner {
    padding: 1rem;
    margin: 0.2rem;
}

.layout__character-sheet {
    @media only screen and (min-width: 600px) {
        padding: 1rem;
    }
}

.character-sheet__stat {
    position: relative;
    margin-bottom: 1.5rem;
}

.character-sheet_numbers {
    text-align: center;
}

.character-sheet__stats__bonus {
    text-align: center;
    position: absolute;
    bottom: -1.1rem;
    left: calc(50% - 1.25rem);
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    z-index: 1;
    line-height: 2.5rem;
    border: var(--border-width) solid var(--color-borders);
    background-color: var(--color-primary);
}

.character-sheet__label {
    text-transform: uppercase;
    font-weight: bold;
    display: block;
}

.character-sheet__label--big {
    font-size: 150%;
}

.character-sheet__name {
    padding: 0 1rem;
    font-family: var(--font-title);
}

.character-sheet__stat--big {
    font-size: 300%;
}

.character-sheet__text {
    margin: 1rem 0;
}

/* icon classes - only used in the skill list */
.icon {
	display: inline-block;
	width: 1em;
	height: 1em;
	vertical-align: center;
	background-size: 1em;
	background-repeat: no-repeat;
	background-image: var(--layout-img);
}

.icon--left {
	margin-right: 0.3rem;
}

/* list styling */

.design__list-no-decor {
	list-style-type: none;
}

```
{% endraw %}

Notice the variables used to reference pre-determined color, font and width values: `color-borders`, `color-primary`, `color-secondrary-transparent`, `font-title`, `border-width` and `border-radius-single`. You will need to replace them with actual values, or create variables in `:root` for them to get the values. None of them really change much about the layout, so use whatever style you want! — only the numerical values matter for anything. `border-width` is 1px by default in my code, and `border-radius-single` is 1rem.

Also remember to download and put into proper folders the images used in the skill list. The ones I used are from Font Awesome: [regular-circle](https://fontawesome.com/icons/classic/regular/circle){target=_blank}{rel="nofollow external"} and [solid-circle](https://fontawesome.com/icons/classic/solid/circle){target=_blank}{rel="nofollow external"}.
</section>