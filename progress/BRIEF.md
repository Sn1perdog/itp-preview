# ITP MOCKUP REFACTOR — SHARED GROUND TRUTH

Read all of this before you touch a file. It is the ground truth. The mockups were built against an older brief and an older visual reference, and they are being deliberately overwritten. Where this file conflicts with anything inside one of them, **this file wins**.

Authority chain:

1. `ITP_Platform_Description_English.docx`, the "ARCHITECTURAL AND STRATEGIC DOCUMENT: ITP PLATFORM (PERSONA)", which takes precedence over everything.
2. This brief, a faithful distillation of it.
3. Nothing else. `Personalized_Therapy_Platform_Project_Description_English.md` is the *earlier* project description, and it is superseded on every conflict.

Repo root: `/home/hyneria/Documents/wattvibe/ITP`

---

## 1 · THE CRAFT BAR · FUNCTION HEALTH

The craft bar for this repo is **functionhealth.com**. Real captures are on disk. Look at the images. Do not imagine them.

| Capture | What it holds |
|---|---|
| `ref/functionhealth/desktop-1440-full.png` | full page, 1440×12298 |
| `ref/functionhealth/desktop-1440-00.png` … `-13.png` | 1440×900 viewport slices |
| `ref/functionhealth/mobile-390-full.png` | full page, 390×14194 |
| `ref/functionhealth/mobile-390-00.png` … `-16.png` | 390×844 viewport slices |

The properties below were read off Function Health's live DOM. Calibrate the mockups against them and not against vibes.

| Property | Function Health |
|---|---|
| Ground | warm off-white `#FEF9EF`, alt band `#F5EEE1` |
| Ink | `#2A2B2F`, secondary `#515151` |
| Accent | terracotta `#B05A36`, one hue used sparingly |
| Display | 80px / 64px / 45px / 34px, weight **300**, line-height ≈ 1.0 |
| Body | 20px/24px and 16px/24px, weight 300; emphasis 600 |
| Micro-label | Fragment Mono 11px, letter-spacing 1.1px, uppercase |
| Radii | 999px pills (42 uses), 12px cards (37 uses), 24px panels |
| Rhythm | enormous, 150–250px between section blocks |

**Devices worth stealing outright**

- A slim full-bleed promo bar above a **floating pill navigation** with a pill CTA.
- A centred display headline where one fragment switches to the accent colour.
- `01 / 02 / 03` mono numerals over three equal cards, each card carrying a small realistic **UI artefact** such as a mini chart, a day picker or a list of items, in place of the stock icon everybody else reaches for.
- Hairline-separated stat rows with a big numeral and a small label.
- A press and authority logo row on a bare ground.
- A centred pill CTA pair, `solid` beside `outline`, closing a section.
- Mono `PAUSE MOTION` affordances next to anything that animates.

**Where we diverge from Function Health**

- Our display type is **Inter Black (900)**, not a light didone. Heavier, tighter tracking, more authority.
- Our navy-to-cyan duality restricts cyan to the places where *technology and personalization* appear. Navy carries everything else. Function Health works with a single accent colour throughout.
- Their data visuals are decorative mock-ups, while ours carry real documented laboratory numbers set in mono.
- Theirs is warm-neutral throughout. The navy chapters running down our pages give the whole site a harder structural rhythm than Function Health ever attempts.

---

## 2 · VISUAL SYSTEM (doc §7.2)

Every value in this section already ships in `styles/tokens.css`. Every mockup must link it as `../styles/tokens.css`. **Use the tokens and the component layer. Do not invent a parallel palette, and do not hardcode a hex value that a token already covers.**

- Primary background: off-white and ivory, `#F7F6F1` (`--ivory`) and `#FAF9F5` (`--ivory-bright`).
- Deep colour for text and structures: corporate navy `#0B1F3A` (`--navy-900`) and charcoal `#202124` (`--charcoal`).
- Electric cyan `#00CFFF` (`--cyan`) is the technology accent and it signals personalization. Cyan never carries body text on off-white and never fills a panel behind off-white text. Small cyan text uses `--cyan-deep` and `--cyan-ink`. The primary CTA is navy on light grounds and cyan with navy ink on navy grounds.
- Headings must be **Inter Black or ExtraBold**, body copy is Inter Regular or Medium, and every **digital identifier, code fragment and technical parameter** sits in Space Mono (`--font-mono`). Mono is mandatory for doses in mg, percentages, `×` multipliers, prices, PLN amounts, question counters, dates, SKUs, lab parameters, eyebrows and micro-labels.
- Each formula carries its own colour code. `--f1-digest` `#E5943C`, `--f2-neuro` `#7C6CF5`, `--f3-inflam` `#F2635A`, `--f4-vital` `#00C39A`. Use them as identity marks on rules, dots and packshot tints. They never serve as a page or section ground.
- No page may load a font from a CDN or `<link>` to Google. The fonts are **self-hosted** in `fonts/`. Every page must render identically offline.

Read `styles/tokens.css` before you duplicate any of these: `.wrap`, `.section`, `.section--navy`, `.section-head`, `.t-d1`…`.t-d4`, `.t-lead`, `.eyebrow`, `.index-num`, `.mono`, `.btn`/`.btn--primary`/`.btn--ghost`/`.btn--cyan`, `.card`/`.card--lift`/`.card--navy`/`.card--tech`, `.chip`, `.stat`/`.stat-row`, `.params`, `.hex`, `.trustbar`, `.sitehead`, `.sitefoot`, `.disclaimer`, `.price`, `.field`/`.input`, `.option`, `.progress`, `.skip-link`, `.visually-hidden`.

---

## 3 · CONTENT GROUND TRUTH

The site is in **Polish** and every page declares `<html lang="pl">`. Trademarked names stay in English. `BioSNEDS™`, `PERSONA` and `DigestEase Pro` are never translated, in copy or in markup.

### 3.1 BioSNEDS™ and the correction that must land everywhere

Wherever the old mockups claim **43×** the number is **wrong**. Everywhere it appears it is replaced by the standardized general wording:

> **od 40× do 100× wzrost wchłaniania, w zależności od składnika**

Per-ingredient ground truth (doc §3.1 / §5.1), always in mono:

| Składnik | Wzrost biodostępności |
|---|---|
| EllagiSol™ (kwas elagowy) | **10 000 % (100×)** |
| NADPro™ (kwercetyna + niacynamid) | **4 440 %** |
| ResveraSol™ (resweratrol) | **4 330 %** |
| CurcuSol™ (kurkumina) | **4 020 %** |

BioSNEDS™ is a licensed Self-Nanoemulsifying Delivery System that nanoemulsifies lipophilic substances in situ. It is supplied with the **Verdant Nature** laboratory.

Polish copy may describe the technology in these four ways and no other:

- "wyższa/najwyższa biodostępność wybranych składników przekłada się na większą skuteczność"
- "większy potencjał wykorzystania składników przez organizm"
- "technologia zaprojektowana, aby zwiększyć biodostępność"
- "parametry oceniane w badaniach PAMPA, PK i farmakokinetycznych"

Never invent a journal name, a citation, a study author, or a chart series that is not in the table above.

### 3.2 The four PERSONA formulas, renamed (doc §3.2)

The old Polish working names (`Nerwowy`, `Trawienny`, `Przeciwzapalny`, `Multi Day`) are **retired** and the four current names always appear in the order given below.

1. **DigestEase Pro**, *Zdrowy układ trawienny*.
   Skład: ThymoPro 170 mg, BerberiSol™, QuerceSol™, BioButyrin™ (tributyryna).
   Cel: integralność bariery jelitowej, wsparcie mikrobiomu, produkcja maślanu.
   Kolor: `--f1-digest`.
2. **NeuroSynapse**, *Siła spokoju*.
   Skład: ApigenSol™ 80 mg, ResveraSol™ 180 mg, MelaXorb™ 30 mg (~3 mg melatoniny).
   Cel: aktywacja szlaków GABA, neuroprotekcja, optymalizacja faz snu.
   Kolor: `--f2-neuro`.
3. **InflamShield**, *Tarcza przeciwzapalna*.
   Skład: CurcuSol™ 380 mg, NADPro™ 120 mg, AstaXorb™ 100 mg.
   Cel: hamowanie NF-κB oraz szlaków COX/LOX, ochrona komórkowa.
   Kolor: `--f3-inflam`.
4. **VitalCore™**, *Długowieczność i energia komórkowa*.
   Skład: CoQXorb™ 80 mg, OmegaSol DHA™ 260 mg, EllagiSol™ 100 mg.
   Cel: stymulacja mitofagii, ochrona DNA, wsparcie bioenergetyczne.
   Kolor: `--f4-vital`.

CBD oils and functional mushrooms arrive *later* in Stage I and nothing on any page may present them as buyable. Where they come up, mention them as "wkrótce".

### 3.3 Hidden-store pricing (doc §4.1 / §6.1)

| Route | Price |
|---|---|
| Open store, single product | **249 zł** |
| In a personalized set (subscription) | **179 zł / szt.** |

Both numbers go in mono and the asymmetry between them is deliberate. Wherever the price appears it has to be explained on the four pillars below.

1. *Logika diagnostyczna*. Niższa cena jest nagrodą za udostępnienie danych zdrowotnych.
2. *Logika przemysłowa*. Subskrypcja pozwala produkować just-in-time i nie magazynować.
3. *Logika synergii*. Składniki w spersonalizowanym zestawie działają razem, rozkładając obciążenie biologiczne.
4. *Logika klubu*. Wysoka cena detaliczna chroni prestiż marki i zniechęca do przypadkowych zakupów.

Two CTAs sit next to a product (doc, verbatim intent):

- **Kup bez analizy — cena standardowa** (249 zł)
- **Sprawdź swoje dopasowanie — otrzymaj rekomendację i cenę planu** (179 zł/szt.)

### 3.4 Hero copy (doc "Hero Proposal")

| Slot | Copy |
|---|---|
| Eyebrow | *Instytut Terapii Personalizowanych* |
| Headline | **Twoja spersonalizowana droga do zdrowia i dobrego samopoczucia** |
| Subheadline | *Zrozum aktualne potrzeby swojego organizmu i otrzymaj uzasadniony plan łączący suplementację PERSONA, technologię BioSNEDS™, urządzenia wspierające i opcjonalną opiekę specjalisty.* |
| Primary CTA | **Rozpocznij analizę** |
| Secondary CTA | *Zobacz, jak działa ITP* |
| Microcopy | *Bezpłatnie · około 5–7 minut · uzasadniony wynik* |

### 3.5 Legal (doc §1.3)

This line is mandatory at every point of customer contact, in the footer, and beside analysis results:

> **Platforma ma charakter edukacyjny i rekomendacyjny i nie zastępuje
> konsultacji lekarskiej.**

The platform is not a medical diagnosis system, a marketplace or an autonomous AI bot. A real specialist validates every recommendation and stays in the loop. The line sits in `.disclaimer` and it must be set legible.

### 3.6 Trust bar (doc §7.1 section 0)

> *Rekomendacje zatwierdzane przez specjalistę. Technologia BioSNEDS™. Wysyłka w 24–48 h.*

### 3.7 Affiliate model (doc §4.2 / §6.2)

- **SPECJALIŚCI (B2B2C)** · lekarze, naturopaci, dietetycy · **20 %** prowizji · Panel Terapeuty · dostęp do wyników pacjentów.
- **PARTNERZY DETALICZNI (B2C)** · klienci indywidualni i VIP · **10–15 %** prowizji · system **Vitality Points** · wymiana punktów na produkty.
- **B2B / white-label** · sprzedaż nadwyżek moce produkcyjnych BioSNEDS™ · **10 %** prowizji od cennika Verdant Nature.

### 3.8 Other facts you may need

| Role | Name |
|---|---|
| Operator | **VHO Sp. z o.o.** |
| Research unit | **AILaBioTech / Instytut Terapii Personalizowanych** |
| Foundation | **VHO Foundation** (w tworzeniu) |
| University cooperation | SGGW, UP Wrocław |

- Six modules make up the ecosystem: Analiza i profil zdrowia · Plan personalizowany · Formuły BioSNEDS · Urządzenia terapeutyczne · Specjalista i monitoring · Wiedza i społeczność.
- Offline, under "Art of Regeneration", the Institute runs inhalacje wodorowo-tlenowe H2-O2 (stanowisko z ośmioma kaniulami), lampy plazmowe, magnetoterapia (PEMF), terapia dźwiękiem (gongi, misy tybetańskie 432 Hz, kamertony), deska Sadhu, masaż ajurwedyjski.
- Subscription tiers run Free (Starter) / Pro / Pro+.
- Stage I excludes transactions, accounts and OCR/AI. Any checkout is a mock that states explicitly that no order is placed.

---

## 4 · HOMEPAGE SECTION ORDER (doc §7.1)

`mockups/hero.html` must present the sections below in this exact order, mobile-first, with no additions between them.

| # | Section | Requirement |
|---|---|---|
| 0 | **Trust bar** | sticky, top of screen, the §3.6 line |
| 1 | **Hero** | generous whitespace, subtly pulsating 3D open molecular constellation behind, §3.4 copy, ONE dominant CTA `[Rozpocznij analizę]` |
| 2 | **Problem Mirror** | *"Czy to brzmi znajomo?"* 3–5 everyday states (brak energii z rana, słaba jakość snu, …) that highlight on scroll |
| 3 | **Process Stepper** | *"Jak to działa."* four-step timeline: 1. Analiza (5 min) → 2. Dobór i uzasadnienie → 3. Zatwierdzenie specjalisty → 4. Twój plan i opieka |
| 4 | **Result Preview** | interactive mock of the target Health Map with an assigned personalized label, built to raise desire before the quiz |
| 5 | **Technology Proof** | laboratory-style micro-animation of a BioSNEDS™ capsule releasing a nanoemulsion in the intestine, plus a comparative absorption chart built from §3.1 numbers only |
| 6 | **Ecosystem** | three equal cards joined to a central point: *Formuły BioSNEDS™ / Urządzenia terapeutyczne / Opieka specjalisty* |
| 7 | **Social Proof** | GMP/ISO manufacturing certificates, expert voices, Institute research facilities |
| 8 | **Value Anchor** | two-column comparison *Przypadkowa suplementacja z półki (Chaos)* vs *Plan personalizowany pod nadzorem specjalisty (Równowaga)*, final CTA to the quiz below it |
| 9 | **Technical Footer** | navigation, newsletter form, formal/legal links, the §3.5 disclaimer |

---

## 5 · QUIZ · EXACT QUESTION SET (doc §8.1)

The quiz must run without an account and must persist its state to `localStorage`.

The start screen is **Question 0**, *"Jaki jest Twój priorytet na najbliższe 90 dni?"*, and its answers must sit in a **hexagonal layout**. Więcej energii / Lepszy sen / Większa koncentracja / Wsparcie odporności / Lepsze trawienie / Regeneracja i relaks.

Twelve questions run in four blocks.

**Blok 1 – Stan obecny**

| # | Pytanie | Odpowiedzi |
|---|---|---|
| 1 | Poranny poziom energii | slider 1 ("Wyczerpany") … 10 ("Pełnia sił") |
| 2 | Jakość snu | Dobra / Przeciętna / Słaba |
| 3 | Częstotliwość stresu | Rzadko / Kilka razy w tygodniu / Prawie codziennie |

**Blok 2 – Fizjologia i styl życia**

| # | Pytanie | Odpowiedzi |
|---|---|---|
| 4 | Trudności trawienne | Brak / Łagodne / Wyraźne |
| 5 | Aktywność fizyczna | Prawie żadna / 1–2× w tygodniu / 3+× w tygodniu |
| 6 | Model diety | Standardowa / Wegetariańska / Keto / Bezglutenowa / Inna |

**Blok 3 – Stymulanty i równowaga**

| # | Pytanie | Odpowiedzi |
|---|---|---|
| 7 | Kofeina | Brak / Umiarkowana / Wysoka |
| 8 | Alkohol | Brak / Okazjonalnie / Często |
| 9 | Obecna suplementacja | Nie / Tak, pojedyncze produkty / Tak, złożony schemat |

**Blok 4 – Metryki**

| # | Pytanie | Odpowiedzi |
|---|---|---|
| 10 | Ostatnie badania krwi | Do 3 miesięcy / 3–12 miesięcy / Ponad rok / Nie pamiętam |
| 11 | Wiek | 18–29 / 30–39 / 40–49 / 50+ |
| 12 | Masa ciała | numeric input |

---

## 6 · RESULT SCREEN, EMAIL-GATED, IN THIS ORDER (doc §8.2)

1. The processing view, **"Analizujemy Twoje odpowiedzi…"**, with pulsating hexagons and the teaser *"Widzimy obszar główny i obszar wspierający."*
2. **Only after that** the sign-up gate appears: **"Podaj e-mail, aby odblokować pełny wynik i mini-raport PDF."**
3. **Six small hexagons** complete the screen, showing percentage burden levels for **Energia · Sen · Stres · Trawienie · Koncentracja · Odporność** in mono percentages.
4. The full result must stay *behind* the gate and before the email is submitted the visitor sees the teaser, the six hexagons and a blurred or locked plan. The plan text itself must stay hidden, and a blur that leaves it legible counts as a broken gate. After submit the plan unlocks. It comes with its rationale, the mini-report affordance and the set price of 179 zł/szt. The §3.5 disclaimer sits beside the result. The screen also states that in Stage I the specialist reply is manual and arrives within 48 h.

---

## 7 · TECHNICAL RULES FOR EVERY MOCKUP

- Self-contained static HTML in `mockups/`, one file per page, opened directly via `file://`. Shared CSS is `../styles/tokens.css`. Shared JS is `../scripts/chrome.js` for the mobile menu, and page-specific CSS and JS stay inline.
- No page may add a build step, a framework or a network request of any kind; all fonts stay local.
- Pages must render correctly at **1440×900** and at **390×844**, mobile-first. The doc has the radial ecosystem map becoming a vertical pathway or scrollable cards on mobile.
- Every anchor must resolve. It points either to a real `#id` on the page or to another mockup file that exists. An anchor pointing at `href="#"` counts as a broken page.
- Keyboard reachable, visible focus (`--ring`), `prefers-reduced-motion` honoured for the molecular hero and for every animation.
- Interactive things must actually work: quiz validation and persistence, the email gate, cart and quantity mocks, accordions, the mobile menu.
- Cross-link the seven pages and keep the chrome identical.

The seven pages:
`hero.html` (homepage) · `quiz.html` · `result.html` · `product.html` (PERSONA
store) · `biosneds.html` · `blog.html` (Wiedza) · `affiliate.html` (Program poleceń)
