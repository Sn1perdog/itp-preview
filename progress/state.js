/* ITP prose refactor — live state. Owned by the orchestrator.
   Loaded by progress/index.html as a plain script (file:// safe, no fetch).
   Every figure here must match what `python3 scripts/prose.py compare` prints.
   Diff the numbers before shipping. See the log at 22:05. */
window.ITP_STATE = {
  campaign: "Make the writing sound human",
  bar: "The Polish is measured against apple.com/pl and the English against apple.com, ten pages in each language.",
  round: 4,
  updated: "2026-09-02 03:20",
  phase: "None of the eight round 4 verdicts is a win. Hero won round 3 and is out of the loop",
  foundation: [
    {
      label: "Twenty saved Apple pages, ten per language",
      detail: "The set is the homepage, iPhone, MacBook Air, Watch, AirPods Pro, iPad Pro, Apple Intelligence, Privacy, Environment and iPhone 17 Pro. 21,228 words of Polish. 26,034 words of English. They were fetched live and saved as static HTML under ref/apple/. Measurement runs on the saved copies. Any figure here is reproducible. Judgement uses the live page.",
      done: true
    },
    {
      label: "One extractor, both corpora",
      detail: "One row per file carries the dash rates, the weld, the negation, the gloss, the explainer tail, sentence spread, headline shape, opener repetition and four block shapes. Our HTML goes in. So does our Markdown. So do these JS literals. Apple's pages run it too. Nothing in it records which corpus a sentence came from.",
      done: true
    },
    {
      label: "Round 0 measured us before a word was rewritten",
      detail: "Our Polish used 25.79 em-dashes for every thousand words. Apple's rate is 0.19. The English side ran 16.10 against 4.65. Headlines took the shape Term, colon, explanation in 6.0 % of our Polish and 14.5 % of our English. Apple's rates there are 0.2 % and 0.3 %.",
      done: true
    },
    {
      label: "Why the banned list has two tiers",
      detail: "Tier A is the machine tell. Ours has to score zero. Nine tier-A hits sit in Apple's Polish. All of them are legal boilerplate. Tier B is marketing vocabulary. Apple reaches for it 1.60 times per thousand words in Polish and 1.11 in English.",
      done: true
    },
    {
      label: "Blind both ways, with a blind spot of its own",
      detail: "Panels are shuffled. Both sides are masked. The order changes each read. blindtext.py samples our file from the top. Round 4 shipped 2,604 words here, so all three prescribed pairs read the same opening 450 words and never reached the log.",
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
      detail: "Every one of the six losses came on something the meter had scored as a clean pass. Two habits had grown into the space the em-dash left behind.",
      done: true
    },
    {
      label: "The figures on this page were wrong, and the meter was right.",
      detail: "Round 1's critic diffed every figure here against the meter. Four were wrong. All four are corrected. One had understated how far our English sat from the bar.",
      done: true
    },
    {
      label: "Round 2 carried named gaps and lost everything",
      detail: "The Polish weld fell from 7.78 per thousand words to 1.26. The negation fell from 3.98 to 0.18. Apple's own rates are 2.17 and 0.33. Nine gates passed. Nine pieces lost.",
      done: true
    },
    {
      label: "The contract",
      detail: "progress/PROSE.md holds the bar table, the sixteen gates, the banned list, the fact lock and the rhythm habits no regex can catch. Fifteen are ceilings. One is a floor. Seven existed at round 1, two came out of its verdicts, four followed round 2, two followed round 3 and the sixteenth followed round 4.",
      done: true
    }
  ],
  rules: [
    "The 40x to 100x absorption range, the per-ingredient percentages, 249 zl and 179 zl, every dose in mg, the commission rates and the legal line are frozen. Prices do not move. Sentences around them may change. If a fact and a good sentence collide, the fact wins.",
    "Classes, ids, scripts and anchors all stay intact through a prose pass. Every anchor still resolves and the focus ring stays visible. A dash may become a span where the markup needs one.",
    "A critic writes the verdict to disk before opening the key, so the tally cannot drift toward whichever panel turns out to be ours.",
    "A tie is a loss. Praise is not useful. Each piece has one critic. A losing piece goes back to its writer with one named gap.",
    "Gates are necessary and they have never been sufficient. Round 1 cleared seven. Six of the nine pieces lost, to critics who had never seen the numbers. Round 2 cleared nine and lost everything. Round 4 passed all fifteen it was measured against.",
    "The exempt list sits near the top of scripts/prose.py and covers every string the architectural document dictates. Nobody has to reword a fact to clear a gate.",
    "Every number quoted here is diffed against the meter. The meter goes first. Round 1 shipped four that were wrong. Round 3 claimed every metric sat under the bar over a table reading FAIL. Round 4 credited the homepage with twice the technical load it carries."
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
      gap: "Hero was retired from the loop after round 3. The meter still fails it. front% reads 38.5 against a tolerance of 30.6. load% reads 4.0 against a floor of 6.7. Both gates came from round 3. Retiring a piece while the meter table underneath it still reads FAIL is a judgement rather than a measurement.",
      note: "The technology proof carries one sentence over twenty words. It runs to 22 and carries the mechanism."
    },
    quiz: {
      state: "reviewing", round: 4,
      verdict: "Two panels to one against us in round 1. Rounds 2 and 3 then went to Apple as well.",
      gap: "The longest sentence closed every block in round 2, and round 3 moved that weight to the front. Round 4 varied the second sentence across thirteen screens. The counts moved. The job did not. On six of the thirteen screens that second beat still announces what the machine does with the answer.",
      note: "Validation copy names the next action. One line still ends on a matey tail."
    },
    result: {
      state: "reviewing", round: 4,
      verdict: "In round 1 this page took all three panels off Apple's privacy page. It won on trust. Apple has taken it in every round since.",
      gap: "The dash purge welded the two 48-hour sentences onto one skeleton. Both carry one relative clause. Round 3 then cut the long sentences out along with the clinchers. What the page needs is one sentence carrying the 48-hour rule and the manual reply together.",
      note: "The form sends nothing and processing comes before the gate."
    },
    product: {
      state: "reviewing", round: 4,
      verdict: "The round 1 critic gave us all three panels and called it a loss anyway, on the grounds that the four cards compete with each other. The piece has gone to Apple in both rounds since.",
      gap: "Read in sequence, the second sentence of the four cards is the spec table read aloud four times. One skeleton, two sentences each. Round 4's long sentence there was four params rows joined with commas, and it added one word of information.",
      note: "One card states the arithmetic of buying four products separately."
    },
    biosneds: {
      state: "reviewing", round: 4,
      verdict: "Three panels to nothing in round 1, and Apple has held the piece ever since.",
      gap: "All seven of its three-sentence blocks peaked in position two. Each then stepped down. Gate 16 measures that shape. The long in-situ sentence carries two separate arguments that each appear twice more on the same page.",
      note: "The mechanism cards varied."
    },
    blog: {
      state: "reviewing", round: 4,
      verdict: "Two of the three panels came to us in round 1. The critic called it a loss anyway. Rounds 2 and 3 were losses without argument.",
      gap: "Thirteen teasers ran on one metronome: open short, one long sentence, optional snap. Round 3 deleted the snap. The metronome stayed. Round 4 welded two clean sentences into one nineteen-word sentence that moved three gates and added no fact.",
      note: "Thirteen teasers came in at one level of finish."
    },
    affiliate: {
      state: "reviewing", round: 4,
      verdict: "Round 1 came in at two panels to one for us. A margin that thin counts as a loss under the campaign's own rule. The two later rounds both went to Apple.",
      gap: "Twenty-nine dashes came out in round 1. The comma-a weld replaced them. The halves stayed joined. The range is real in the histogram and absent from the paragraph. Every short unit on the page is a card title, a chip or a caption.",
      note: "Rates and caveats are stated."
    },
    brief: {
      state: "reviewing", round: 4,
      verdict: "The widest margin of the nine landed here in round 1, at three panels to nothing. Apple has taken it in both rounds since.",
      gap: "One of the three list lead-ins is a verbless fragment whose only job is to announce a list. All three share one skeleton. Round 4 traded a full stop for a so and built a 33-word sentence on a restated table cell.",
      note: "The critic quoted the line about looking at the images rather than imagining them."
    },
    progress: {
      state: "reviewing", round: 4,
      verdict: "Judged three times before round 4 and no panel taken: 0-4, 0-4, 0-3. Round 4 came in at 1-4. The critic flagged the pair we took as an invalid comparison before decoding it.",
      gap: "Round 4 relocated the block-closing stamp instead of removing it. Eight of nine gap fields landed on a counted quantity. Four closed on the word same. Ten of the eleven foundation items narrate an event that the log further down the page already narrates.",
      note: "Round 4 ran to 2,604 words and the chronology now belongs to the log alone."
    }
  },
  log: [
    { t: "19:52", m: "The brief arrived. apple.com/pl is the Polish bar and apple.com the English one." },
    { t: "20:04", m: "Twenty Apple pages fetched live and saved under ref/apple/." },
    { t: "20:18", m: "One extractor now runs over our files and over Apple's saved pages, with no distinction drawn." },
    { t: "20:26", m: "The first measurement put our Polish at 25.79 em-dashes per thousand words against a bar of 0.19." },
    { t: "20:31", m: "The banned list needs two tiers." },
    { t: "20:34", m: "Two more counters went in, for colon headlines and repeated openers." },
    { t: "20:38", m: "Blind text comparator built." },
    { t: "20:40", m: "Round 1 writers out." },
    { t: "20:52", m: "Sentence statistics now count only sentences of three words or more. Chrome is not prose. Counting button labels and nav words would let either corpus win the spread comparison on chrome alone." },
    { t: "21:03", m: "The shared footer was invisible to the meter until a writer found three em-dashes in it." },
    { t: "21:28", m: "All eight round 1 files landed. Polish em-dashes hit zero. English came down from 16.10." },
    { t: "21:31", m: "All seven gates pass in both languages, including the sentence-spread distance to the bar." },
    { t: "21:35", m: "Round 1 critics dispatched." },
    { t: "21:44", m: "A clause weld joins two half-thoughts with a comma and a coordinator where a dash used to sit. The first verdict found ours at 7.78 per thousand words against Apple's 2.17." },
    { t: "21:52", m: "Then the defensive negation, a wrong reading set up in order to be knocked down, at 3.98 against an Apple rate of 0.33." },
    { t: "21:58", m: "Gates 8 and 9 now cover the weld and the negation. Every piece failed at least one of the two." },
    { t: "22:05", m: "Round 1 closed at three wins and six losses." },
    { t: "22:20", m: "Round 2 writers out. Each of the eight carries one named gap." },
    { t: "22:41", m: "The round 2 rewrite pulled the short-sentence band on this page toward the English bar of 48.8 %." },
    { t: "22:58", m: "Eight files came back with the Polish weld at 1.26 and the negation at 0.18." },
    { t: "23:01", m: "The blog was rebuilt hardest, with thirteen syntactic arcs across thirteen teasers and every editorial kicker deleted." },
    { t: "23:05", m: "Round 2 critics went out. The instruction was to assume a third habit had replaced the first two." },
    { t: "23:40", m: "Round 3 dispatched with one instruction for all nine pieces. Let sentences be boring." },
    { t: "00:28", m: "All nine round 3 writers landed. Polish blocks exiting on a punch fell from 57.1 % to 27.1 %, against an Apple rate of 28.1 %." },
    { t: "00:32", m: "Both corpora passed all thirteen gates that existed at the time. That claim was too generous even then: colon% clears only on its tolerance, not on the bar." },
    { t: "00:35", m: "Round 3 critics out." },
    { t: "01:10", m: "A critic caught this page claiming every metric sat under the bar. The table underneath it was reporting failures. The claim is gone." },
    { t: "01:14", m: "Gate 14 exists because round 3 moved the punch out of the tail slot and into the front of the block. Of the nine pieces this page was the worst, at 86.6 % against a bar of 16.0 %." },
    { t: "01:18", m: "Gate 15 is a floor rather than a ceiling. Round 3 cleared the ceilings partly by deleting long sentences, so the Polish long tail fell to 4.5 % against a bar of 10.7 %." }
  ]
};
