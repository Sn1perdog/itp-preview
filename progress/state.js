/* ITP prose refactor — live state. Owned by the orchestrator.
   Loaded by progress/index.html as a plain script (file:// safe, no fetch).
   Every figure here must match what `python3 scripts/prose.py compare` prints.
   Diff the numbers before shipping. See the log at 22:05. */
window.ITP_STATE = {
  campaign: "Make the writing sound human",
  bar: "The Polish is measured against apple.com/pl and the English against apple.com. Ten pages in each language.",
  round: 4,
  updated: "2026-09-02 03:20",
  phase: "Round 4 is still in review and none of the eight has come back a win. Hero won round 3 and is out of the loop",
  foundation: [
    {
      label: "Twenty saved Apple pages, ten per language",
      detail: "The set is the homepage, iPhone, MacBook Air, Watch, AirPods Pro, iPad Pro, Apple Intelligence, Privacy, Environment and iPhone 17 Pro. All twenty were fetched live. The Polish corpus runs 21,228 words and the English 26,034. The captures sit as static HTML under ref/apple/. Judgement uses the live page. Measurement runs on the saved copies, and any figure here is reproducible a week from now.",
      done: true
    },
    {
      label: "One extractor, both corpora",
      detail: "One row per file carries the dash rates, the weld, the negation, the gloss, the explainer tail, sentence spread, headline shape, opener repetition and four block shapes. Our HTML goes in. So does our Markdown, and so do these JS literals. Apple's saved pages run through the same code. Nothing in it records which corpus a sentence came from.",
      done: true
    },
    {
      label: "Round 0 measured us before a word was rewritten",
      detail: "Our Polish used 25.79 em-dashes for every thousand words. Apple's rate is 0.19. The English side ran 16.10 against 4.65. Headlines took the shape Term, colon, explanation in 6.0 % of our Polish and 14.5 % of our English. Apple's rates there are 0.2 % and 0.3 %.",
      done: true
    },
    {
      label: "Why the banned list has two tiers",
      detail: "Tier A is the machine tell and ours has to score zero. Nine tier-A hits sit in Apple's Polish. All are legal boilerplate. Tier B is marketing vocabulary, and Apple reaches for it 1.60 times per thousand words in Polish and 1.11 in English.",
      done: true
    },
    {
      label: "Blind both ways, with a blind spot of its own",
      detail: "Panels are shuffled. Both sides are masked. The order changes each read. blindtext.py samples our file from the top. The round 4 file ran to 2,604 words, so all three prescribed pairs read the same opening 450 words and never reached the status board or the log.",
      done: true
    },
    {
      label: "The chrome scan owns the nav and the footer",
      detail: "Three em-dashes sat in the footer partner links. All seven mockups carried them. No file's numbers showed them. The corpus skips nav and footer so that Apple's legal footer cannot swamp the sentence comparison. prose.py chrome reads that copy separately: 635 words, zero dashes, zero banned constructions.",
      done: true
    },
    {
      label: "Round 1 went to eight writers.",
      detail: "Eight writers took one file each and worked at the same time. The dashes went first.",
      done: true
    },
    {
      label: "Nine critics, three wins",
      detail: "Every one of the six losses came on something the meter had scored as a clean pass. Two new habits had grown. Both filled the space the em-dash left behind.",
      done: true
    },
    {
      label: "The figures on this page were wrong, and the meter was right.",
      detail: "Round 1's critic diffed every figure here against the meter. Four were wrong. All four are corrected. One had understated how far our English sat from the bar.",
      done: true
    },
    {
      label: "Round 2 carried named gaps and still lost everything",
      detail: "The Polish weld fell from 7.78 per thousand words to 1.26. The negation fell from 3.98 to 0.18, against Apple's own rates of 2.17 and 0.33. Nine gates passed. Nine pieces lost.",
      done: true
    },
    {
      label: "The contract",
      detail: "progress/PROSE.md holds the bar table, the sixteen gates, the banned list, the fact lock, the rhythm habits no regex can catch and a section on writing to the meter. Fifteen are ceilings. One is a floor. Seven existed at round 1, two came out of its verdicts, four followed round 2, two followed round 3 and the sixteenth followed round 4.",
      done: true
    }
  ],
  rules: [
    "The 40x to 100x absorption range, the per-ingredient percentages, 249 zl and 179 zl, every dose in mg, the commission rates, the hero headline and the legal line are frozen. Prices do not move. Sentences around them may change. If a fact and a good sentence collide, the fact wins.",
    "Classes, ids, scripts and anchors all stay intact through a prose pass. Every anchor still resolves and the focus ring stays visible. A dash may become a span where the markup needs one.",
    "A critic writes the verdict to disk before opening the key from a separate file, so the tally cannot drift toward whichever panel turns out to be ours.",
    "A tie is a loss. Praise is not useful. Each piece has one critic. A losing piece goes back to its writer with one named gap.",
    "Gates are necessary and they have never been sufficient. Round 1 cleared seven. Six of the nine pieces lost to critics who had never seen the numbers. Round 2 cleared nine and lost everything. Round 4 passed all fifteen it was measured against.",
    "The exempt list sits near the top of scripts/prose.py and covers every string the architectural document dictates. Nobody has to reword a fact to clear a gate.",
    "Every number quoted here is diffed against the meter. The meter goes first. Round 1 shipped four wrong figures. Round 3 claimed every metric sat under the bar over a table reading FAIL. Round 4 credited the homepage with twice the technical load it carries."
  ],
  pieces: [
    { id: "hero", file: "mockups/hero.html", title: "Homepage", lang: "pl", scope: "Trust bar, hero, problem mirror, stepper, result preview, technology proof, ecosystem, social proof, value anchor, footer" },
    { id: "quiz", file: "mockups/quiz.html", title: "Health quiz", lang: "pl", scope: "Priority picker, twelve questions in four blocks, slider labels, validation copy, persistence notices" },
    { id: "result", file: "mockups/result.html", title: "Result and email gate", lang: "pl", scope: "Processing view, teaser, gate copy, six burden hexagons, unlocked plan, specialist notice, disclaimer" },
    { id: "product", file: "mockups/product.html", title: "PERSONA store", lang: "pl", scope: "Four formulas, compositions, the two prices, the four pricing pillars, dual call to action" },
    { id: "biosneds", file: "mockups/biosneds.html", title: "BioSNEDS explainer", lang: "pl", scope: "Mechanism walkthrough, per-ingredient table, absorption range, method notes" },
    { id: "blog", file: "mockups/blog.html", title: "Wiedza", lang: "pl", scope: "Thirteen article headlines and teasers, editorial standfirst, search and filter copy" },
    { id: "affiliate", file: "mockups/affiliate.html", title: "Program polecen", lang: "pl", scope: "Three partner tracks, commission table, Vitality Points, application flow" },
    { id: "brief", file: "progress/BRIEF.md", title: "Ground-truth brief", lang: "en", scope: "Every sentence in the document, with every documented fact left exactly where it is" },
    { id: "progress", file: "progress/state.js", title: "This page", lang: "en", scope: "Campaign copy, foundation notes, standing rules, verdict summaries and log" }
  ],
  status: {
    hero: {
      state: "won", round: 3,
      verdict: "Round 3 is the only win this campaign has recorded. Apple took rounds 1 and 2. One objection did it, repeated across all three round 1 pairs.",
      gap: "Hero was retired from the loop after round 3. The meter still fails it. front% reads 38.5 against a tolerance of 30.6. load% reads 4.0 against a floor of 6.7. Both gates came from round 3. Retiring a piece whose row in the meter table further down this page still reads FAIL is a judgement rather than a measurement.",
      note: "The technology proof carries one sentence over twenty words. It runs to 22 and carries the mechanism."
    },
    quiz: {
      state: "reviewing", round: 4,
      verdict: "Two panels to one against us in round 1. Rounds 2 and 3 both went to Apple after that.",
      gap: "The longest sentence closed every block in round 2, and round 3 moved that weight to the front. Round 4 varied the second sentence. The counts moved. The job did not. On six of the thirteen screens the second beat was still the same rhetorical act, announcing what the machine does with the answer.",
      note: "The validation copy named the next action, and one line ended on a matey tail."
    },
    result: {
      state: "reviewing", round: 4,
      verdict: "In round 1 this page took all three panels off Apple's privacy page. It won on trust. Apple has taken it in every round since.",
      gap: "The dash purge welded the two 48-hour sentences together. Both sat on one skeleton. Both carried one relative clause. Round 3 then cut the long sentences out. The clinchers went too. What the page needed was one sentence carrying the 48-hour rule and the manual reply together.",
      note: "The form sends nothing and processing comes before the gate."
    },
    product: {
      state: "reviewing", round: 4,
      verdict: "The round 1 critic gave us all three panels and still called it a loss, on the grounds that the four formula cards compete with each other. The piece has gone to Apple in both rounds since.",
      gap: "Read in sequence, the second sentence of the four cards was the spec table read aloud four times. One skeleton, two sentences each. Round 4's long sentence there was four params rows joined with commas, and it added one word of information.",
      note: "One card stated the arithmetic of buying four products separately."
    },
    biosneds: {
      state: "reviewing", round: 4,
      verdict: "Three panels to nothing in round 1, and Apple has held the piece ever since.",
      gap: "In round 4 all seven of its three-sentence blocks peaked in position two. Each then stepped down. Gate 16 measures that shape. The long in-situ sentence carried two separate arguments, and each of them appeared twice more within forty words of it.",
      note: "The mechanism cards varied."
    },
    blog: {
      state: "reviewing", round: 4,
      verdict: "Two of the three panels came to us in round 1. The critic called it a loss anyway. Round 2 lost outright. Round 3 lost too.",
      gap: "Thirteen teasers ran on one metronome: open short, one long sentence, optional snap. Round 3 deleted the snap. The metronome stayed. Round 4 welded two clean sentences into one nineteen-word sentence that moved load, weld and crescendo at once and added no fact.",
      note: "Thirteen teasers came in at one level of finish."
    },
    affiliate: {
      state: "reviewing", round: 4,
      verdict: "Round 1 came in at two panels to one for us. A margin that thin counts as a loss under the campaign's own rule. The two later rounds both went to Apple.",
      gap: "Twenty-nine dashes came out in round 1. The comma-a weld replaced them. The halves stayed joined. The range was real in the histogram and absent from the paragraph. Every short unit on the page was a card title, a chip or a caption.",
      note: "The rates and the caveats were stated."
    },
    brief: {
      state: "reviewing", round: 4,
      verdict: "The widest margin of the nine landed here in round 1. Three panels to nothing. Apple has taken it in both rounds since.",
      gap: "One of the three list lead-ins in the brief was a verbless fragment whose only job was to announce the list below it. All three shared one skeleton. Round 4 traded a full stop for a so and built a 33-word sentence on a restated table cell.",
      note: "The critic quoted the line about looking at the images rather than imagining them."
    },
    progress: {
      state: "reviewing", round: 4,
      verdict: "Judged three times before round 4 and no panel taken: 0-4, 0-4, 0-3. Round 4 came in at 1-4. The critic flagged the pair we took as an invalid comparison before decoding it.",
      gap: "Round 4 relocated the block-closing stamp instead of removing it. Eight of nine gap fields landed on a counted quantity. Four closed on the word same. Ten of the eleven foundation items narrated an event that the log further down the page already narrated.",
      note: "The round 4 file ran to 2,604 words, and the chronology now belongs to the log alone."
    }
  },
  log: [
    { t: "19:52", m: "The brief arrived. apple.com/pl is the Polish bar and apple.com the English one." },
    { t: "20:04", m: "Twenty Apple pages fetched." },
    { t: "20:18", m: "One extractor now runs over our files and over Apple's saved pages. No distinction is drawn." },
    { t: "20:26", m: "The first measurement put our Polish at 25.79 em-dashes per thousand words against a bar of 0.19." },
    { t: "20:31", m: "The banned list needs two tiers." },
    { t: "20:34", m: "Two more counters went in, for colon headlines and repeated openers." },
    { t: "20:38", m: "Blind text comparator built." },
    { t: "20:40", m: "Round 1 writers out." },
    { t: "20:52", m: "Sentence statistics now count only sentences of three words or more. Chrome is not prose. Counting button labels and nav words would let either corpus win the spread comparison on chrome alone." },
    { t: "21:03", m: "The shared footer was invisible to the meter until a writer found three em-dashes in it. A chrome scan followed." },
    { t: "21:28", m: "All eight round 1 files landed. Polish em-dashes hit zero. English came down from 16.10." },
    { t: "21:31", m: "All seven gates pass in both languages, including the sentence-spread distance to the bar." },
    { t: "21:35", m: "Round 1 critics dispatched." },
    { t: "21:44", m: "A clause weld joins two half-thoughts with a comma and a coordinator where a dash used to sit. The first verdict found ours at 7.78 per thousand words against Apple's 2.17." },
    { t: "21:52", m: "Then the defensive negation, a wrong reading set up in order to be knocked down, at 3.98 against an Apple rate of 0.33." },
    { t: "21:58", m: "Gates 8 and 9 now cover the weld and the negation. Every piece failed at least one of the two." },
    { t: "22:05", m: "Round 1 closed at three wins and six losses." },
    { t: "22:20", m: "Round 2 writers out. Each of the eight carries one named gap." },
    { t: "22:41", m: "The round 2 rewrite pulled the short-sentence band on this page toward the English bar of 48.8 %." },
    { t: "22:58", m: "Eight files came back. The Polish weld read 1.26 and the negation 0.18." },
    { t: "23:01", m: "The blog was rebuilt hardest. Thirteen syntactic arcs across thirteen teasers, and every editorial kicker deleted." },
    { t: "23:05", m: "Round 2 critics went out. The instruction was to assume a third habit had replaced the first two." },
    { t: "23:40", m: "Round 3 dispatched with one instruction for all nine pieces. Let sentences be boring." },
    { t: "00:28", m: "All nine round 3 writers landed. Polish blocks exiting on a punch fell from 57.1 % to 27.1 %, against an Apple rate of 28.1 %." },
    { t: "00:32", m: "Both corpora passed all thirteen gates that existed at the time. That claim was too generous even then: colon% clears only on its tolerance, not on the bar." },
    { t: "00:35", m: "Round 3 critics out." },
    { t: "01:10", m: "A critic caught this page claiming every metric sat under the bar. The table underneath read FAIL. The claim is gone." },
    { t: "01:14", m: "Gate 14 exists because round 3 moved the punch out of the measured tail slot and into the front of the block, where nothing was watching. Of the nine pieces this page was the worst, at 86.6 % against a bar of 16.0 %." },
    { t: "01:18", m: "Gate 15 is a floor rather than a ceiling. Round 3 cleared the ceilings partly by deleting long sentences, so the Polish long tail fell to 4.5 % against a bar of 10.7 %." }
  ]
};
