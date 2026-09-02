# PERSONA PDP RESTYLE — SHARED GROUND TRUTH

Read all of this before touching a file. Where it conflicts with anything inside an
existing mockup, **this file wins**. Where it conflicts with `progress/BRIEF.md` on
*content* (prices, doses, legal, names), **`progress/BRIEF.md` wins** — content is
frozen, only style and layout move.

Repo root: `/home/hyneria/Documents/wattvibe/ITP`

---

## 0 · THE JOB

Restyle the PERSONA product pages onto the style and layout of
**https://organimo.com/seamoss/**.

That page is the bar. It is captured on disk. **Look at the captures. Do not
imagine them.**

| Capture | What it holds |
|---|---|
| `ref/organimo/desktop-1440-00.png` … `-07.png` | 1440×900 viewport slices, top to bottom |
| `ref/organimo/desktop-1440-h01.png` … `-h08.png` | the same page on a 450px half-offset, so no seam is missed |
| `ref/organimo/desktop-open-00.png` … `-16.png` | every accordion forced open — the Benefits / Additional Info / FAQ interiors |
| `ref/organimo/mobile-390-00.png` … `-08.png` | 390×844 viewport slices, dsf 2 |
| `ref/organimo/spec.json` | computed type, colour, radius and font census read off the live DOM |
| `ref/organimo/geometry.json` | measured boxes, hairlines, section padding, grid offsets |

The page runs a Lenis scroll container, so `window.scrollTo` does nothing. To
capture it yourself:

```js
document.querySelector('main.scroll-container').scrollTop = y;
```

---

## 1 · WHAT ORGANIMO ACTUALLY DOES · MEASURED AT 1440

Everything in this table was read off the live DOM, not guessed.

| Property | Organimo | What we do |
|---|---|---|
| Ground | cool magnolia `#E7E6F0`, alt panel `#E6E7F1`, cards `#FFF`, one black band `#171717` | our ivory `--ivory` / `--ivory-bright` / `--ivory-white`, navy band `--navy-900` |
| Ink | primary `#2D2F36`, body `#565A69` | `--navy-900` / `--ink-muted` |
| Metal accent | gold `#CEA154`, hairline icon medallions only | formula colour `--f1..f4` + `--cyan` for technology only |
| Structural hairline | **1px solid ink `#2D2F36` at full strength**, 14 bottom + 11 top + 8 vertical | 1px solid `--navy-900` at full strength. Not a faint 8 % grey. This is the single loudest structural signature of the page |
| Inner hairline | 1px solid **white** on the badge grids (30 uses) | 1px `--ivory-white` on sunk panels |
| Display H1 | 72.8px / lh 58.2 (**0.80**) / ls −3.64 (**−0.05em**) / weight 400 | our Inter Black at the same size, lh 0.82, ls −0.04em |
| Section H2 | 56px / lh 61.6 / ls −2.80 (−0.05em) | same metrics |
| Big lead paragraph | 37.3px / lh 42 / weight 600 / ls −0.03em | same metrics. This oversized statement paragraph is a device we must steal |
| Card / item title | 22.4px / lh 26.9 / weight 600 / ls −0.03em | same |
| Body | 14.9px / lh 22.4 / weight 400 | 15px / 22.5px |
| Micro-label | 13.06px weight 600 uppercase ls 0.02em; small variant 11.2px | Space Mono 13px / 11px, ls 0.02em, uppercase |
| Accordion row title | 37.3px weight 600, centred, padding 23.3 / 28.0, hairline top and bottom, full bleed | same |
| Radii | pill `100%` (**80 uses**), circle `50%` (26), large panel `77.4px`, medium `14.9px`, small `7.5px` | `--r-pill`, 50 %, 72px, 16px, 8px |
| Container | padding-inline 46.65px at 1440, **no max-width** — content is full-bleed inside a 32-column grid | padding-inline `clamp(20px, 3.24vw, 47px)`, 32-column grid, no max-width |
| Hero gallery box | x 175, w 536, square 536×536 → `offset-3/32`, `w-13/32` | same offsets |
| Hero copy box | x 735, w 512 | same |
| Section rhythm | padding-block 74.6px; testimonial band 149 top / 93 bottom | `--pdp-sec` 76px, feature band 150 / 94 |
| Sticky buy bar | 62px tall, white, **bottom** of viewport, full bleed: wordmark left, product name + price centre, CTA pill right | same |
| Header | slim gradient promo bar, then a floating **pill nav** left, centred wordmark, right cluster: text link, currency pill, cart pill with count badge | same shape, our content |

### 1.1 · Devices to steal outright

1. **Hard 1px ink hairlines, full bleed**, dividing every section, plus a *vertical*
   hairline splitting two-column sections edge to edge. No shadows, no soft greys.
2. **Sticky bottom buy bar** that appears once the hero buy box scrolls away.
3. **Square gallery** with a thumbnail strip below and a dot pager on the image.
4. **A one-line trust strip directly above the H1** — stars on theirs, a specialist
   line on ours — then the giant display title.
5. **Three icon bullets** under the sub-headline, each a small mark plus one line.
6. **One dominant pill CTA**, not a row of competing buttons.
7. **Oversized statement paragraph** (37px / weight 600) introduced by a micro-label
   with a pill-outlined last word: `PACKED WITH ⟨NUTRITION⟩`.
8. **Full-bleed accordion rows** with giant centred titles, opening onto a
   two-column grid of items, each with a **112px hairline circular medallion**,
   a 22px title, a one-line summary, body copy, and a `Read more` toggle with a
   circular ± button.
9. **Full-bleed image or colour band** carrying a single centred statement.
10. **Edge-to-edge marquee line** of display type on a contrasting band.
11. **Testimonial block**: overlapping circular avatars, one giant centred quote,
    mono attribution, two circular prev/next buttons.
12. **Three-card news row** with a date pill, a title, and a `READ MORE` pill on a
    dimmed image.
13. **Dark closing footer**: wordmark, one row of uppercase micro links, the legal
    line, social marks.

### 1.2 · Where we deliberately diverge

- **Palette and typefaces stay ITP.** Navy `#0B1F3A`, ivory `#F7F6F1`, electric cyan
  `#00CFFF`, Inter for display and body, Space Mono for every technical parameter.
  The architectural document mandates them and `progress/BRIEF.md` §2 still holds.
  We take organimo's *structure, rhythm, scale and devices*, not its lavender.
- Organimo sets accent words in a **serif italic** (Mauren). We have no serif and no
  italic file, and no page may load a font over the network. The ITP-native
  equivalent is a **colour switch on one fragment** of the display line — cyan for
  technology, the formula colour for the product itself. Do not fake italics with
  `font-style: italic` on Inter, and do not add a font.
- Their gold medallions become **formula-coloured hairline medallions**.
- Their decorative bubble renders become **our real documented laboratory numbers**
  set in mono.

---

## 2 · HARD CONTENT RULES · NON-NEGOTIABLE

**Never bend a documented price, dose or legal line to fit a layout.** If a layout
cannot hold the number, the layout changes.

- Prices are exactly **249 zł** (open store, single) and **179 zł / szt.**
  (personalized set, subscription). Both in mono. Never rounded, never "od", never
  a fake strike-through original price, never a discount percentage.
- Doses are exactly as in `progress/BRIEF.md` §3.2. `ThymoPro 170 mg`,
  `ApigenSol™ 80 mg`, `ResveraSol™ 180 mg`, `MelaXorb™ 30 mg (~3 mg melatoniny)`,
  `CurcuSol™ 380 mg`, `NADPro™ 120 mg`, `AstaXorb™ 100 mg`, `CoQXorb™ 80 mg`,
  `OmegaSol DHA™ 260 mg`, `EllagiSol™ 100 mg`. Where the document gives no
  milligrams, the cell says `etykieta*` with the existing footnote. Do not invent one.
- Absorption is **`od 40× do 100×`, w zależności od składnika**, plus the four
  per-ingredient figures: EllagiSol™ `10 000 % (100×)`, NADPro™ `4 440 %`,
  ResveraSol™ `4 330 %`, CurcuSol™ `4 020 %`. Nothing else. No `43×`.
- The legal line appears in the footer and beside any recommendation, legible,
  in `.disclaimer`: **Platforma ma charakter edukacyjny i rekomendacyjny i nie
  zastępuje konsultacji lekarskiej.**
- Organimo's hero carries `Rated 4.8/5 by Organimo Community!`. **We have no
  ratings.** The slot above the H1 takes the documented trust line instead:
  *Rekomendacje zatwierdzane przez specjalistę · Technologia BioSNEDS™ ·
  Wysyłka w 24–48 h*. Never invent a star rating, a review count, or a customer name.
- Testimonials: the architectural document sanctions **expert voices**, not customer
  reviews. Attribution is by role only (`Lekarz medycyny rodzinnej · panel ITP`) and
  the block carries a visible mono `PRZYKŁADOWE WYPOWIEDZI · MAKIETA` chip. No
  photographs of invented people: avatars are abstract geometry.
- Stage I sells nothing. Any add-to-cart is a mock that says so.
- CBD oils and functional mushrooms are **`wkrótce`** and never buyable.
- Copy is Polish, `<html lang="pl">`. `BioSNEDS™`, `PERSONA`, `DigestEase Pro`,
  `NeuroSynapse`, `InflamShield`, `VitalCore™` are never translated.
- The Polish prose was rewritten against apple.com/pl in an earlier round and passes
  seventeen style gates. **Reuse existing sentences verbatim wherever a slot needs
  copy.** Do not regenerate prose. If a new slot genuinely needs a new sentence:
  under three em-dashes per thousand words, no `nie tylko… ale`, no
  `w dzisiejszych czasach`, no tricolon padding.

---

## 3 · THE PAGES

Four product pages, one per formula, plus the store index.

| File | What it is |
|---|---|
| `mockups/persona-digestease.html` | PDP · DigestEase Pro · `--f1-digest` |
| `mockups/persona-neurosynapse.html` | PDP · NeuroSynapse · `--f2-neuro` |
| `mockups/persona-inflamshield.html` | PDP · InflamShield · `--f3-inflam` |
| `mockups/persona-vitalcore.html` | PDP · VitalCore™ · `--f4-vital` |
| `mockups/product.html` | the PERSONA store index, same visual language, links to the four |

The four PDPs are **generated**, so the layout can never drift between them:

```
scripts/pdp_data.py        per-formula and shared content  (frozen facts)
mockups/parts/*.html       one section template per file    (one owner each)
scripts/assemble_pdp.py    templates + data -> the four static pages
```

`python3 scripts/assemble_pdp.py` writes plain, self-contained static HTML into
`mockups/`. **The generated files are the deliverable and they are committed.** The
assembler is dev-time tooling, not a site build step: the pages open straight from
`file://` with no network, no framework, no JS required to render.

### 3.1 · Section order on a PDP

Mirrors organimo's own order.

| # | Section | Template | Organimo counterpart |
|---|---|---|---|
| 1 | promo bar + pill nav | `parts/chrome-head.html` | `desktop-1440-00.png` top 96px |
| 2 | buy box: gallery, trust line, display title, sub-line, 3 bullets, price, CTA | `parts/buybox.html` | `desktop-1440-00.png` |
| 3 | split story: copy + 6 hairline badges, big visual, vertical hairline | `parts/story.html` | `desktop-1440-01.png` |
| 4 | statement band: micro-label with pill + 37px lead | `parts/statement.html` | `desktop-1440-h03.png` |
| 5 | accordion stack: Korzyści / Skład i dawki / FAQ | `parts/accordion.html` | `desktop-open-03/04.png` |
| 6 | technology band: full-bleed BioSNEDS chapter + marquee + absorption numbers + two-price split | `parts/tech.html` | `desktop-1440-h05/03.png` |
| 7 | expert voices + other formulas row + closing CTA | `parts/social.html` | `desktop-1440-05/06.png` |
| 8 | sticky buy bar + dark footer with marquee | `parts/chrome-foot.html` | bar in every slice, footer `desktop-1440-07.png` |

---

## 4 · FILE OWNERSHIP · DO NOT EDIT ANOTHER AGENT'S FILE

Builders run in parallel. Every builder owns exactly the files listed against its
section and **must not touch any other file**. If you need something outside your
files, say so in your report instead of editing it.

| Section | Owns |
|---|---|
| `chrome` | `mockups/parts/chrome-head.html`, `mockups/parts/chrome-foot.html`, `styles/pdp-chrome.css` |
| `buybox` | `mockups/parts/buybox.html`, `styles/pdp-buybox.css` |
| `story` | `mockups/parts/story.html`, `styles/pdp-story.css` |
| `statement` | `mockups/parts/statement.html`, `styles/pdp-statement.css` |
| `accordion` | `mockups/parts/accordion.html`, `styles/pdp-accordion.css` |
| `tech` | `mockups/parts/tech.html`, `styles/pdp-tech.css` |
| `social` | `mockups/parts/social.html`, `styles/pdp-social.css` |
| `index` | `mockups/product.html`, `styles/pdp-index.css` |
| main agent only | `styles/pdp-core.css`, `scripts/assemble_pdp.py`, `scripts/pdp_data.py`, `mockups/parts/packshots.html`, `progress/*` |

---

## 5 · THE CLASS CONTRACT · `styles/pdp-core.css`

Core is the spine. It is owned by the main agent and is stable. Use it; do not
re-declare what it already gives you, and do not hardcode a hex a token covers.

```
.pdp                     page root, sets the ivory ground and the ink
.pdp-rule                full-bleed 1px ink hairline (as a section border helper)
.pdp-sec                 section, padding-block 76px, hairline bottom
.pdp-sec--flush          section with no padding-block (for full-bleed bands)
.pdp-sec--navy           navy chapter, inverted ink
.pdp-c                   container: padding-inline clamp(20px,3.24vw,47px)
.pdp-g                   32-column grid; children use --c (span) and --o (offset)
.pdp-split               two columns divided by a vertical full-height hairline
.t-h1 .t-h2 .t-h3        72.8 / 56 / 22.4px, ls -0.05em / -0.05em / -0.03em
.t-lead-xl               37.3px, weight 600, ls -0.03em  (the statement paragraph)
.t-body                  15px / 22.5px
.t-micro                 Space Mono 13px, uppercase, ls 0.02em
.t-micro--sm             Space Mono 11px, uppercase, ls 0.02em
.t-accent                colour switch on a display fragment (formula colour)
.t-accent--cyan          colour switch, cyan, technology only
.pill                    999px outline pill, mono micro, for the ⟨NUTRITION⟩ device
.pdp-btn                 999px CTA; --solid / --outline / --dark modifiers
.medallion               112px circular hairline medallion, formula-coloured mark
.pdp-marquee             edge-to-edge single line of display type on a band
.pdp-dot                 gallery dot pager item
.mono                    already in tokens.css
```

Every section stylesheet must scope its rules under a single section class
(`.pdp-buybox`, `.pdp-story`, …) so two stylesheets can never collide.

---

## 6 · TECHNICAL RULES

- Static HTML, opened from `file://`. No build step in the page, no framework, no
  network request of any kind, no CDN font. Fonts are the two self-hosted families
  already in `fonts/`.
- Every page links, in order: `../styles/tokens.css`, `../styles/pdp-core.css`, then
  every `../styles/pdp-*.css`. The assembler emits this; do not hand-edit it.
- Correct at **1440×900** and **390×844**, mobile-first.
- Every anchor resolves — a real `#id` on the page or a mockup file that exists.
  `href="#"` counts as a broken page.
- Keyboard reachable, visible `--ring` focus, `prefers-reduced-motion` honoured.
  Animation is explicitly **not important** for this task; correctness of the static
  render at both widths is.
- Interactive things work: gallery thumbnails, accordions, quantity, cart mock,
  sticky bar reveal, mobile menu.
- The packshot SVG `<defs>` (`#pack-f1` … `#pack-f4`, `#pack-mini`) live in
  `mockups/parts/packshots.html` and the assembler inlines them. Reuse them; they are
  the best assets in the repo. Do not draw a new bottle.

---

## 7 · HOW A ROUND WORKS

1. Builders build their section, then screenshot **their own preview harness**
   `mockups/parts/_preview-<section>.html` at 1440×900 and 390×844.
2. The main agent runs `scripts/assemble_pdp.py`, captures the four assembled pages
   at both widths, and builds blind A/B composites against the matching organimo
   region with `scripts/blind.py`.
3. A critic per section opens the blind composite **first**, decides which panel
   reads as the better-built commerce page, writes the verdict to
   `shots/pdp/r<N>-<section>-verdict.md`, and only then reads the `.key` to learn
   which was which.
4. The critic then opens the live organimo page and names the **single biggest
   remaining gap**.
5. If the critic did not pick ours, the gap goes back to the builder and the round
   repeats.

The loop ends when every critic picks ours.

---

## 8 · THE TEMPLATE LANGUAGE AND THE TOKENS YOU CAN USE

Section templates live in `mockups/parts/<section>.html`. They are HTML fragments,
not documents: no `<html>`, no `<head>`, no `<body>`. The assembler inlines them in
order into a shell it owns, which already links `tokens.css`, `pdp-core.css` and
every `pdp-*.css`, inlines the packshot `<defs>`, sets `--fc` to the formula colour
on `<body class="pdp">`, and loads `../scripts/chrome.js`.

A template may contain its own `<style>`? **No.** CSS goes in your own
`styles/pdp-<section>.css`. A template **may** contain its own `<script>` for the
interactivity that section owns; keep every id and every `data-` hook prefixed with
the section name so two parts can never collide.

Syntax, deliberately tiny:

```
{{key}}                     raw substitution — values are already HTML
{{#each list}} … {{/each}}  repeat; the item's own fields resolve first
{{#if key}} … {{/if}}       emit when truthy
{{#unless key}} … {{/unless}}
{{@i}}                      0-based index inside an each block
{{@n}}                      1-based index, zero-padded to 2 — "01", "02", …
{{@first}} / {{@last}}      "1" or "" inside an each block
```

An unresolved token is a hard build failure, so every token you write must exist.

### 8.1 · Per-formula tokens

| Token | Holds |
|---|---|
| `{{slug}}` `{{n}}` `{{of}}` | `digestease`, `01`, `04` |
| `{{name}}` `{{tag}}` | `DigestEase Pro`, `Zdrowy układ trawienny` |
| `{{colour}}` | the token *name*, e.g. `--f1-digest`. `--fc` is already set on the body |
| `{{pack}}` | packshot symbol id, e.g. `#pack-f1` — use as `<use href="{{pack}}"/>` |
| `{{title_html}}` `{{sub_html}}` | display H1 (may carry one `.t-accent` span) and its sub-line |
| `{{goal}}` | the documented `Cel:` line |
| `{{#each bullets}}{{text}}` | the three hero bullet lines |
| `{{story_h_html}}` `{{story_p}}` | split-section headline and body |
| `{{#each badges}}{{mark}} {{label}}` | six badge marks and labels |
| `{{statement}}` | the oversized statement paragraph |
| `{{#each ingredients}}{{name}} {{dose}} {{role}}` | the dose table — `dose` goes in mono |
| `{{dose_note}}` | the footnote under the dose table |
| `{{#each benefits}}{{mark}} {{title}} {{summary}} {{body}}` | four benefit items |
| `{{#each spec}}{{k}} {{v}}` | the additional-information rows |
| `{{#each faq}}{{q}} {{a}}` | four question and answer pairs |
| `{{artefact_cap_l}}` `{{artefact_cap_r}}` `{{artefact_html}}` | the existing data artefact figure |
| `{{#each others}}{{name}} {{tag}} {{pack}} {{colour}} {{n}} {{href}}` | the three other formulas |
| `{{#each all}}… {{current}}` | all four, with `current` set on this page's own |
| `{{meta_title}}` `{{meta_desc}}` | used by the shell, available if you need them |

### 8.2 · Shared tokens

| Token | Holds |
|---|---|
| `{{promo}}` `{{trust}}` `{{legal}}` `{{operator}}` | promo bar line, trust line, the mandatory legal line, `VHO Sp. z o.o.` |
| `{{#each nav}}{{label}} {{href}}` | site navigation; every href resolves to a real mockup |
| `{{#each footcols}}{{heading}} {{#each links}}{{label}} {{href}}` | footer columns |
| `{{#each footmicro}}{{label}} {{href}}` | the footer micro-link row |
| `{{price_open}}` `{{price_set}}` | `249 zł`, `179 zł/szt.` — both in mono |
| `{{#each price_pillars}}{{title}} {{body}}` | the four pricing pillars |
| `{{cta_open}}` `{{cta_open_sub}}` `{{cta_quiz}}` `{{cta_quiz_sub}}` | the two documented CTAs |
| `{{absorption_range}}` | `od 40× do 100×` |
| `{{#each absorption_rows}}{{ingredient}} {{percent}} {{multiple}}` | the four documented figures |
| `{{biosneds_lede}}` `{{stage_note}}` | what BioSNEDS is; the Stage I no-transaction note |
| `{{#each soon}}{{name}} {{note}}` | CBD oils and functional mushrooms, `wkrótce` |
| `{{#each voices}}{{quote}} {{role}}` `{{voices_chip}}` | expert voices and the makieta chip |

### 8.3 · Build and preview

```
python3 scripts/assemble_pdp.py          # writes the four pages and the previews
python3 scripts/assemble_pdp.py --check  # renders everything, writes nothing
```

Your section's standalone harness is `mockups/parts/_preview-<section>.html`. It is
your section inside the real chrome, for DigestEase Pro, and it is what your critic
will be shown. Screenshot it at 1440×900 and 390×844 before you report.
