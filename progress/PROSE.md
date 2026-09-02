# ITP PROSE REFACTOR — SHARED GROUND TRUTH

Read this whole file before writing or judging a word. It governs *how the copy
reads*. It does not govern facts, layout, colour or markup — for those,
`progress/BRIEF.md` and the architectural document still rule, and they outrank
this file on every collision.

The job: the prose across this repo reads as though a machine produced it. Fix
that. Polish copy in the seven mockups, English copy in `progress/`.

---

## 1 · THE BAR

Polish: **apple.com/pl**. English: **apple.com**.

Fetch the live pages. Do not work from a description of them, and do not work
only from the saved copies. Saved captures sit in `ref/apple/pl/*.html` and
`ref/apple/en/*.html` (ten pages each: homepage, iPhone, MacBook Air, Watch,
AirPods Pro, iPad Pro, Apple Intelligence, Privacy, Environment, iPhone 17 Pro).
Use the saved set for measurement, the live page for judgement.

Measured, from those captures, with `scripts/prose.py`:

| | apple.com/pl | apple.com | ours at round 0 (pl / en) |
|---|---|---|---|
| em-dashes per 1000 words | **0.19** | **4.65** | 25.79 / 16.10 |
| any clause dash per 1000 words | **4.57** | **4.65** | 26.17 / 16.70 |
| tier-A banned constructions | 9 (legal boilerplate) | 2 | 0 / 0 |
| advisory buzzwords per 1000 | 1.60 | 1.11 | 0.76 / 0.00 |
| mean sentence length | 7.5 | 8.9 | 6.7 / 7.7 |
| sentence-length sd | 5.7 | 7.2 | 4.4 / 4.4 |
| sentences of 1–5 words | 55.8 % | 48.8 % | 54.2 % / 36.0 % |
| sentences of 16+ words | 10.8 % | 16.8 % | 5.2 % / 4.7 % |
| headlines shaped `Noun: clause` | **0.2 %** | **0.3 %** | 6.0 % / 14.5 % |
| sentence-spread EMD vs bar | — | — | 16.5 / 47.1 |

Sentence statistics run over sentences of **three words or more**, on both sides.
Button labels, nav words and one-word chips are not prose, and counting them
would let either corpus win the spread comparison on chrome alone.

Read those numbers as a description of a voice, not as a scoring rubric. Apple
writes very short declaratives, then lets one long sentence carry the technical
load. It almost never uses a dash to weld two half-thoughts together, and it
almost never titles anything with a colon.

Polish note: apple.com/pl uses the em-dash essentially never (0.19 per 1000).
Where Polish typography wants a dash at all it uses the spaced en-dash `–`, and
even that lands only 4.6 times per 1000 words. Our Polish copy currently reaches
for `—` **twenty-six times per 1000 words**. That single habit is the loudest
machine signal in the repo.

---

## 2 · GATES

Run `python3 scripts/prose.py compare` for the corpus, or
`python3 scripts/prose.py file mockups/hero.html --lang pl --hits` for one file.

A piece passes when **all** of these hold against its language's bar. The first
seven existed at round 1. The last six were added because critics found habits
the first seven could not see, which is the whole history of this campaign.

| # | gate | limit | bar pl | bar en |
|---|---|---|---|---|
| 1 | `em/1k` | < 3.0 | 0.19 | 4.65 |
| 2 | `dash/1k` | ≤ bar + 1 | 4.57 | 4.65 |
| 3 | tier-A banned | == 0 | — | — |
| 4 | `soft/1k` | ≤ bar | 1.60 | 1.11 |
| 5 | sentence-spread EMD | ≤ 25 | — | — |
| 6 | `colon%` | ≤ bar + 5 | 0.2 | 0.3 |
| 7 | `opener%` | ≤ bar + 3 | 9.5 | 3.1 |
| 8 | `weld/1k` clause welds | ≤ bar + 1 | 2.17 | 7.64 |
| 9 | `neg/1k` defensive negations | ≤ bar + 0.7 | 0.33 | 0.15 |
| 10 | `kick%` blocks exiting on a punch | ≤ bar + 8 | 28.1 | 18.2 |
| 11 | `gloss/1k` czyli and comma-relatives | ≤ bar + 1.5 | 3.67 | 0.69 |
| 12 | `cresc%` blocks exiting on their longest sentence | ≤ bar + 12 | 47.6 | 51.3 |
| 13 | `exp/1k` explainer tails | ≤ bar + 1 | 1.18 | 1.11 |
| 14 | `front%` blocks opening on a punch | ≤ bar + 8 | 22.6 | 16.0 |
| 15 | `load%` sentences of 16+ words | **≥ bar − 4** (a floor) | 10.7 | 16.8 |
| 16 | `medial%` 3+ sentence blocks peaking in the middle | ≤ bar + 12 | 29.8 | 30.1 |
| 17 | `addr%` blocks that speak to the reader | **≥ bar − 8** (floor, Polish only) | 47.9 | 61.8 |

Gate 17 is scoped to the seven customer-facing Polish mockups. `BRIEF.md` is a
spec and `state.js` is a status board; neither addresses a visitor, and holding
an internal document to apple.com's 61.8 % would be a dishonest ruler rather
than a strict one. It is reported for those two files and not gated.

Gates are necessary, never sufficient. Round 1 cleared all seven and lost six of
nine. Round 2 cleared all nine and lost nine of nine. A piece is done when the
critic, reading blind, picks ours.

---

## 2b · WHAT THREE ROUNDS OF CRITICS ACTUALLY FOUND

Every round removed a habit and grew a replacement in the same slot. The list is
worth reading in order, because it is one disease with five costumes:

1. **Round 0** wrote with em-dashes. 25.79 per thousand against a bar of 0.19.
2. **Round 1** deleted the dashes and welded the same half-thoughts back together
   with `, a`. Weld rate 7.78 against 2.17.
3. **Round 1** also reached for `X, nie Y`, setting up a wrong reading in order to
   knock it down. 3.98 against 0.33.
4. **Round 2** cut both and replaced them with the gloss (`czyli`, `, który`) and
   the explainer tail (`, bo`, `, because`, `, which is`). A technical noun was
   still never allowed to stand alone.
5. **Round 2** also made every block land: 57 % of ours exit on a punch against a
   bar of 28 %, and the quiz ended every single block on its longest sentence.
6. **Round 3** was told to let sentences be boring. It deleted the clinchers from
   the end of the block and moved them to the front, where nothing was watching.
   Polish front-punch 42.7 % against a bar of 22.6 %; `progress/state.js` 86.6 %
   against 16.0 %, with one template running 58 of its 67 blocks.
7. **Round 3** also deleted the long sentences along with the clinchers. The
   Polish long tail fell to 4.5 % against a bar of 10.7 %, and `result.html` has
   no prose sentence over 18 words. Gate 15 is therefore a floor, not a ceiling:
   it is the first gate a piece can fail by writing too little rather than too
   much.

8. **Round 4** put the long sentences back and moved the weight to the middle of
   the block. Every three-or-more-sentence block on the BioSNEDS page put its
   longest sentence in position two and stepped down, seven times without
   exception. Polish medial peak 47.4 % against a bar of 29.8 %. Round 2 put the
   clincher at the end, round 3 at the front, round 4 buried it in the middle.

Round 3 closed with one win in nine, round 4 with none in eight. The lesson is
not a new habit list. It is that **a ceiling-only ruler rewards deletion** and a
floor rewards padding, and every round has produced a new uniformity somewhere
the previous round was not looking.

---

## 2c · THE ROUND 4 FAILURE: WRITING TO THE METER

Round 4 cleared a floor gate. Its critics caught how, and the how is now the
main thing to avoid. Quoted findings:

- **Three sentences of 13, 15 and 13 words each gained exactly three words** and
  landed on or just over the 16-word line. *Round 4 did not write longer; it
  lengthened.*
- A 17-word "long sentence" on the product page was **four params-table rows
  concatenated with commas**. It added one word of information, and it was half
  of what that card contributed to the load figure.
- On the blog, two clean sentences were **welded with `, a`** into one 19-word
  sentence. No fact was added. It scored +1 load, +1 weld and +1 crescendo.
- In the brief, a full stop was **traded for a `so`** to move the explainer rate,
  and a 33-word sentence was built on a restated table cell plus two
  unfalsifiable claims.
- On the progress page, **eight foundation labels came out at exactly five
  words**, subject-verb-object with a full stop. One metronome for another.
- On the affiliate page the range was real in the histogram and absent from the
  page: every short unit was a card title, a chip or a caption. *What round 4
  fixed is the histogram. What it did not fix is the paragraph.*

So, from round 5 on:

> **Never edit a sentence to move a number.** Every clause you add must carry a
> fact that is not already on the page. If a gate is failing and you have nothing
> true left to add, delete something instead and let the gate fail. Report it.

And the positive form of the same instruction, which is what the bar actually
does:

> **Put the short sentence inside the paragraph.** Apple's register jump is
> `I to bez iPhone'a.`, four words sitting in a paragraph whose other sentences
> run 15, 24 and 21, in one breath. Our short units are all titles, chips and
> captions. A histogram cannot tell the difference. A reader can.

---

## 2d · THE NINTH HABIT: THE PAGE TALKS TO NOBODY

Round 5 obeyed the no-padding rule and still lost eight of eight, but two pieces
won the blind read 4-0 and lost only on information. Two critics then found the
same fault from opposite ends, and both measured it.

**Address.** Counting a multi-sentence block as addressing the reader if any
sentence carries a second-person pronoun, a second-person verb inflection or an
imperative, across all ten saved Polish bar pages against `biosneds.html`:

| | blocks | sentences |
|---|---|---|
| apple.com/pl | **57.3 %** | **36.8 %** |
| ours | 21.4 % | 8.6 % |

P(≤3 of 14 blocks, given p = 0.573) = **0.0045**. Corpus-wide we run 31.4 %
against 47.9 %. It was invisible to all sixteen preceding gates. The critic's
words: *the page describes a mechanism to nobody.*

Every guard clause on that page was in the third person. `Parametr mówi, jaka
część dawki jest dostępna dla organizmu` says *dla organizmu* where the bar
says *dla Ciebie*. Exactly one sentence turned to the reader inside a boundary,
and it was the line that beat privacy.html in a hand-built pair.

**Cohesion.** In Apple's multi-sentence Polish paragraphs, **33 of 35
non-initial sentences continue the previous sentence's subject or topic**, by
zero-subject continuation, a pronoun, or a connective. That device is what lets
`I to bez iPhone'a.` work as a sentence. Ours frequently start a new topic
instead. The verdict on round 5's own fix: *the short sentence is now inside the
paragraph but not inside the thought.*

These are one fault. Our copy is a sequence of true statements addressed to no
one, each starting fresh. The instruction is not to sprinkle `Twój`. It is to
write from the reader's side of the transaction and let each sentence pick up
the subject the last one left.

**Two displacement mechanisms round 5 invented, now banned by name:**
- *The deictic back-reference.* Drop a term, then explain it in a separate
  sentence opening `Tyle …`. The gloss with its comma promoted to a full stop,
  invisible to gate 11, and it flatters the histogram by looking like a register
  jump. 3.68 per 1000 on the product page.
- *The permutation.* Rotate sentences inside a block so the extreme one leaves
  the tightly gated slot for a loosely gated one, with zero information change.
  Four of six medial peaks in the brief were resolved this way, one by simply
  truncating a tail so the peak became a crescendo.

**And the standing lesson from two rounds of over-deletion:** deletion is not
automatically safe. Round 3 cut facts along with clinchers, and round 5 did it
again in three pieces. Before cutting a sentence, ask what it carries that
nothing else on the page carries.

The underlying fault, named independently by five critics in round 2:

> **No sentence is allowed to be inert.**

Apple's Polish and English are full of sentences that do nothing but carry a
fact. *Wody wykorzystujemy ponownie podczas anodyzacji obudowy.* *Usuwa
identyfikatory śledzące z adresów URL podczas przeglądania prywatnego.* Nobody
wrote those to be admired. They are on the page because the fact had to be.

Ours has almost none. Every unit is working: a reveal, an inversion, a snap, a
verdict. Read one and it is excellent. Read thirteen and you stop hearing a
writer and start hearing an instruction. The critic on the blog put it exactly:
*a library that never once bores you is a library that is selling.*

So the instruction for every writer from round 3 on is the opposite of the usual
one. **Let sentences be boring.** Let a paragraph end on a flat fact with nothing
riding on it. Delete the clincher. Delete the reveal. If a block already said the
thing, stop the block.

---

## 3 · BANNED CONSTRUCTIONS (tier A — must be zero)

Encoded in `scripts/prose.py`. The regex is a floor, not a ceiling: the critic
also bans anything with the same smell that the regex missed.

**Shape**
- `nie tylko X, ale Y` / `not just X, but Y`
- `to nie X, to Y` / `it's not X, it's Y`
- `więcej niż tylko` / `more than just`
- `nie chodzi o X, chodzi o Y`
- `whether you're X or Y`

**Essay connectives** — Co więcej, Ponadto, Dodatkowo, Podsumowując, Warto
zaznaczyć/podkreślić/zauważyć, Jeśli chodzi o; Moreover, Furthermore,
Additionally, Ultimately, In conclusion, That said, It's worth noting, Notably,
At the end of the day, When it comes to.

**Set-ups** — `w dzisiejszym świecie` / `in today's …`, `Rozumiemy, że` /
`we understand that`, `that's where X comes in`, `i właśnie dlatego powstało X`.

**Clichés** — podróż/ścieżka ku zdrowiu and the health-journey metaphor,
`wsłuchaj się w swoje ciało`, `zasługujesz` / `you deserve`, `przejmij kontrolę
nad swoim` / `take control of your`, `szyte na miarę` / `tailored to your unique
needs`, `odkryj/uwolnij potencjał` / `unlock the power`, `na wyższy poziom` /
`next level`, `kompleksowe rozwiązanie` / `comprehensive solution`, `holistyczne
podejście` / `holistic approach`, `elevate your`, `transform your X`.

**Advisory (tier B, keep under the bar's rate)** — przełomowy, rewolucyjny,
innowacyjny, holistyczny, światowej klasy, najwyższej jakości, naprawdę,
niezwykle, wyjątkowo, idealnie, prawdziwie, absolutnie; seamless, robust,
cutting-edge, game-changing, leverage, harness, empower, meticulous, testament
to, realm of, landscape of, truly, incredibly, remarkably.

**Rhythm habits the regex cannot see, and the critic must hunt**
- Every teaser built on the same skeleton: statement, dash, `i dlaczego …`.
- Headlines all shaped `Term: explanation`. Apple does this in 3 headlines out
  of 1000. Our blog index does it in six of twelve.
- Three consecutive sentences opening on the same word.
- Rule-of-three lists everywhere, especially triads of adjectives.
- A paragraph that answers a question nobody asked, then restates its own
  first sentence as its last.
- Perfectly balanced pairs: two clauses of near-identical length either side of
  a dash or a comma, over and over.
- Any sentence whose only job is to announce that the next sentence is coming.

---

## 4 · WHAT TO DO INSTEAD

- Cut the dash. Most of ours are doing one of three jobs, each with a better
  fix: a **label separator** (`Stres — 74%`) becomes markup or a colon-free
  layout; an **appositive** becomes a second sentence; a **rhetorical pivot**
  gets deleted along with the pivot.
- Let sentence length actually vary. Apple's spread is wide: a three-word
  fragment next to a twenty-eight-word technical sentence. Ours is flat.
- Prefer the concrete noun and the plain verb. Polish marketing copy drifts to
  abstract nouns (`wsparcie`, `optymalizacja`, `dbałość`); Apple's Polish stays
  verbal (`Kupisz`, `Odkryjesz`, `poradzisz się`).
- Second person, direct, unhedged. Apple's Polish uses `Twój`/`Ty` forms without
  apologising for it.
- One idea per sentence. If two ideas need welding, they needed two sentences.
- Technical numbers stay exactly as documented and go in mono. Never soften a
  number to improve a rhythm.

---

## 5 · FACT LOCK — never bend these to win a sentence

Every one of these is documented in `progress/BRIEF.md` and outranks any
stylistic improvement. If good prose and a documented fact collide, the fact
wins and you find different prose.

- BioSNEDS™ absorption: **od 40× do 100× w zależności od składnika**. Never 43×.
  Per ingredient: EllagiSol™ 10 000 % (100×), NADPro™ 4 440 %, ResveraSol™
  4 330 %, CurcuSol™ 4 020 %.
- Prices: **249 zł** open store, **179 zł / szt.** inside a personalised set.
- Formula names, taglines and compositions exactly as in BRIEF §3.2, including
  every dose in mg.
- The legal line, verbatim: *Platforma ma charakter edukacyjny i rekomendacyjny
  i nie zastępuje konsultacji lekarskiej.*
- Human-in-the-loop: every recommendation is validated by a real specialist.
  Stage I reply is manual, within 48 h.
- Commissions: specialists 20 %, retail partners 10–15 %, white-label 10 %.
- Trust bar line, hero headline, hero sub-headline, both product CTAs and the
  email-gate line are quoted from the document. Rhythm around them may change.
  Their wording may not.
- No invented study, journal, author, citation or chart series. Ever.

The meter exempts these strings from the banned-construction scan so that
nobody is tempted to reword a fact to clear a gate.

---

## 6 · PIECES

Each piece is judged on its own by its own critic.

| id | file | language | owner |
|---|---|---|---|
| `hero` | `mockups/hero.html` | pl | writer + critic |
| `quiz` | `mockups/quiz.html` | pl | writer + critic |
| `result` | `mockups/result.html` | pl | writer + critic |
| `product` | `mockups/product.html` | pl | writer + critic |
| `biosneds` | `mockups/biosneds.html` | pl | writer + critic |
| `blog` | `mockups/blog.html` | pl | writer + critic |
| `affiliate` | `mockups/affiliate.html` | pl | writer + critic |
| `brief` | `progress/BRIEF.md` | en | writer + critic |
| `progress` | `progress/index.html`, `progress/state.js` | en | orchestrator + critic |

A writer touches only its own files. Markup, classes, ids, scripts, layout and
every anchor stay working: this is a prose pass, not a redesign. If a dash has
to go and the markup needs a `<span>` to carry the label instead, that is a
legitimate edit. Ripping out a section is not.

---

## 7 · THE CRITIC PROTOCOL

1. Fetch the live Apple page for your piece's language. Read it as a reader.
2. Extract our piece's prose (`python3 scripts/prose.py file <path> --lang <l> --hits`)
   and put a comparable stretch of the Apple copy beside it, **labels stripped**,
   in randomised order, so you do not know which is which while you read.
3. Write the verdict before you decode: which panel would a native reader trust
   more, and why, in the reader's terms.
4. Decode. Report the tally.
5. Name **the single biggest remaining gap** in our piece. One gap, specific,
   with the offending sentence quoted.
6. Report the gate table.

Praise is not useful. A tie is a loss. If ours does not clearly win, say so and
hand the piece back to its writer with the gap. Never accept a fix that bent a
documented fact, a price, a dose or a legal line — if you find one, the piece
fails regardless of how it reads.
