// ═══════════════════════════════════════════════════════════════
//  07 — Cross-Skill Fusion
//  30 questions | v2 Advanced
//  Features: Scenarios span multiple knowledge domains; options draw from
//            different Skills; at least one distractor is a Munger model
//  Distractor sources: 10 Skills (Lindstrom / Kahneman / Merath /
//                      Varol / Taleb / Greene / Eyal / Dixit & Nalebuff)
// ═══════════════════════════════════════════════════════════════

allQuestions.push(

// ── CF-01 ──
{
  type: "cross-fusion",
  scenario: "A coffee chain introduces a \"3-minute hand-pour ritual\" for every cup. In the first quarter, repeat purchase rates jump 40%. But six months later, competitors have copied the exact same ritual, and the chain's repurchase rate drops back to baseline. How should the CEO interpret the situation?",
  options: [
    "A. This is a classic case of \"ritual stickiness\" — the solution is to deepen the ritual with multi-sensory elements so it becomes harder to imitate",
    "B. This is a \"mirror neuron consumer effect\" — competitors triggered the same imitative impulse loop in consumers' brains",
    "C. This is the Red Queen Effect — the competitive environment forces all players to keep evolving; a copyable ritual never constituted a real moat",
    "D. This is Regression to the Mean — any strategy's short-term outlier performance will eventually revert to the long-run average"
  ],
  answer: 2,
  models: ["Red Queen Effect"],
  secondaryModels: ["Moat"],
  explanation: "Munger's Red Queen Effect states that in a competitive environment, you must keep evolving just to maintain your current position. A ritual that can be easily copied is not a moat. The CEO should look for structural, hard-to-replicate competitive advantages rather than doubling down on a tactic that has already been commoditized.",
  wrongReasons: "A — \"Ritual stickiness\" (Lindstrom, Buyology) describes how rituals increase brand attachment, but the core problem isn't that the ritual isn't sticky enough — it's that the ritual is too easy to copy. B — \"Mirror neurons\" explain individual consumer impulses at the neurological level, but the issue here is structural competition. D — Regression to the Mean (Munger model) explains statistical reversion of random outliers, but this drop has a clear external cause (competitor imitation), not random fluctuation."
},

// ── CF-02 ──
{
  type: "cross-fusion",
  scenario: "An entrepreneur was once a top programmer. Three years into his startup, the company is stuck at 15 people. He works 14 hours a day, personally reviews every line of code and replies to every customer email. Team morale is low; key talent has left. What is the most fundamental problem?",
  options: [
    "A. His time allocation is wrong — he should shift from \"working in the business\" to \"working on the business\"",
    "B. His behavior is distorted by \"incentive bias\" — the sense of control from hands-on work has become a hidden reward",
    "C. He doesn't understand \"scale effects\" — 15 people is a critical threshold requiring a management structure",
    "D. He's hit the \"multiply by zero\" effect — his personal energy bottleneck zeros out the team's collective output"
  ],
  answer: 0,
  models: ["Specialization"],
  secondaryModels: ["Scale Effects"],
  explanation: "This is Merath's \"Fachkraft vs Unternehmer\" (specialist vs entrepreneur) dilemma. From Munger's lens, the core issue is Specialization — the founder hasn't shifted his role from executor to manager and strategist. Munger stresses that organizational efficiency comes from putting the right people in the right roles.",
  wrongReasons: "A uses Merath's \"time revolution\" language (working in vs on the business) — it's a valid framework, but Munger's Specialization model more fundamentally explains why the CEO shouldn't do everyone's job. B — \"Incentive bias\" (Munger model) may exist, but it's a psychological explanation, not the structural issue. C — Scale effects describe the outcome, not the cause. D — \"Multiply by zero\" is too extreme; the team hasn't completely stalled."
},

// ── CF-03 ──
{
  type: "cross-fusion",
  scenario: "A health food company packs its packaging with prominent \"low-fat, zero-sugar, organic certified\" labels. The sales team finds that the more labels and the more eye-catching they are, the less consumers trust the product — sales keep falling. What is the most likely explanation?",
  options: [
    "A. Excessive health claims trigger a \"boomerang warning effect\" — negatively framed messages spark suspicion",
    "B. This is an Occam's Razor problem — the message is too complex; consumers choose the simplest explanation: the product is hiding something",
    "C. Label overload creates a \"vampire effect\" — attention is sucked away by non-core elements, ignoring the product itself",
    "D. Consumers use the \"representativeness heuristic\" — a product needing so many claims doesn't \"look like\" truly healthy food"
  ],
  answer: 1,
  models: ["Occam's Razor"],
  secondaryModels: [],
  explanation: "Munger's Occam's Razor: when faced with multiple explanations, prefer the simplest. Consumers do the same — when a product needs 10 reasons to prove it's healthy, the simplest explanation is \"it needs to try so hard, so it probably isn't that healthy.\" This is cognitive economics: people tend to judge with minimal cognitive cost.",
  wrongReasons: "A — The \"boomerang warning effect\" (Lindstrom, Buyology) describes how cigarette warnings can stimulate craving — but health food labels are positive claims, not warnings; the mechanism differs. C — \"Vampire effect\" refers to sexy content stealing brand memory; it doesn't match this scenario. D — \"Representativeness heuristic\" (Kahneman) has some validity but isn't precise — consumers aren't making a \"looks like\" judgment; they're doing simple reasoning: \"why does it need to explain so much?\""
},

// ── CF-04 ──
{
  type: "cross-fusion",
  scenario: "A venture capitalist has invested in only 8 companies over the past decade. Two became unicorns and generated 95% of the fund's returns. Peers average 50+ investments. Critics say he \"missed too many opportunities,\" but his fund's returns are 3x the industry average. Which principle best describes his strategy?",
  options: [
    "A. This embodies the Pareto Principle — 80% of results come from 20% of inputs",
    "B. This is \"Sit on Your Ass\" investing — concentrate in a few exceptional names and hold long; oppose spreading bets widely",
    "C. This is a Nash equilibrium deviation — when everyone diversifies, concentration becomes the optimal strategy",
    "D. This is antifragile thinking — use a few concentrated bets to capture asymmetric returns"
  ],
  answer: 1,
  models: ["Sit on Your Ass Investing"],
  secondaryModels: ["Circle of Competence"],
  explanation: "Munger's \"Sit on Your Ass\" investing: great investment opportunities are extremely rare. Rather than frequent action and diversification, wait for a few high-conviction opportunities and then bet big. Munger says: \"A few decisions can make an investment career.\" This investor embodies that principle.",
  wrongReasons: "A — Pareto Principle (Munger model) describes outcome distribution (few drive most), but doesn't give action guidance — Pareto tells you \"results concentrate,\" not \"you should concentrate.\" C — Nash equilibrium deviation (Dixit & Nalebuff, game theory) is an interesting angle, but this investor's success isn't from \"deviating from equilibrium\" — it's from having sufficient judgment. D — Antifragility (Taleb) emphasizes benefiting from volatility; this investor's strategy is to reduce volatility and uncertainty by concentrating in what he knows — the opposite of antifragility's \"embrace volatility\" logic."
},

// ── CF-05 ──
{
  type: "cross-fusion",
  scenario: "A SaaS company's product far exceeds competitors in features, but customer retention is only 40%. Deep research finds: customers say \"powerful features\" but \"too complex to use\"; 70% of features are never used. The PM proposes three approaches. Which best aligns with systems thinking?",
  options: [
    "A. Use first-principles thinking to redesign — return to users' fundamental needs and cut all non-essential features",
    "B. Use Via Negativa — don't add more; remove the complexity that causes harm",
    "C. Use the habit loop — build a \"trigger → action → reward → investment\" cycle around core features",
    "D. Use the \"indirect approach\" — don't push features directly; let customers discover value through experience"
  ],
  answer: 1,
  models: ["Via Negativa"],
  secondaryModels: [],
  explanation: "Munger's Via Negativa: the most effective way to improve a system is often not to add, but to remove what harms it. This company's problem isn't missing features — it's that too many features create harmful complexity. Removing 70% of unused features solves the problem more fundamentally than adding onboarding flows.",
  wrongReasons: "A — First-principles thinking (Varol, Think Like a Rocket Scientist) sounds similar, but it emphasizes \"rebuild from scratch\"; Via Negativa is more pragmatic — no need to tear down, just remove the harmful parts. C — Habit loop (Eyal, Hooked) addresses \"how to build usage habits,\" but if the product is too complex, the habit loop's precondition (simple action) can't be met. D — Indirect approach (Greene, Art of Seduction) is a persuasion tactic, not a product design principle."
},

// ── CF-06 ──
{
  type: "cross-fusion",
  scenario: "An e-commerce platform adds three pressure elements to product pages: \"limited-time countdown,\" \"only 3 left,\" and \"128 people viewing now.\" Initial conversion jumps 60%, but three months later return rates rise 45% and customer lifetime value falls. What is the root cause?",
  options: [
    "A. These pressure elements exploit \"fear marketing drivers,\" but overuse backfires",
    "B. Multiple psychological pressures create a negative \"Lollapalooza effect\" — overlapping biases amplify impulse buying",
    "C. This is the Law of Diminishing Returns — one pressure element works; three together produce negative marginal effects",
    "D. Consumers' \"System 2\" eventually kicks in — slow thinking overrides the fast-thinking impulse decision"
  ],
  answer: 2,
  models: ["Law of Diminishing Returns"],
  secondaryModels: ["Second-Order Thinking"],
  explanation: "Munger's Law of Diminishing Returns: any effective strategy's marginal benefit declines with intensity and can turn negative. One scarcity cue may work; three at once trigger consumers' defensive psychology, leading to impulse buys and regret returns. Second-order effect: short-term conversion rises, but long-term trust and lifetime value fall.",
  wrongReasons: "A — \"Fear marketing\" (Lindstrom, Buyology) partly applies, but fear marketing uses fear (e.g., health threats) to drive purchase — not scarcity pressure. B — Lollapalooza effect (Munger model) describes multiple factors amplifying — it explains the mechanism (how), not the root cause (why: diminishing returns). D — System 2 (Kahneman) describes the cognitive mechanism, but returns aren't because consumers \"activated rationality\" — it's that excessive pressure led to impulse buys that didn't match real needs."
},

// ── CF-07 ──
{
  type: "cross-fusion",
  scenario: "An insurer launches an AI claims system claiming \"3-minute claim review.\" Initial customer satisfaction is high. Six months later, a wave of fraudulent claims appears; losses reach millions. Investigation finds the AI's speed dramatically lowered the \"activation barrier\" for fraud. How should the CEO understand this?",
  options: [
    "A. This is a \"catalyst effect\" — AI lowered the activation energy, making both good and bad outcomes easier",
    "B. This is incentive-driven — fast claims changed the game structure; fraud's expected payoff now exceeds its risk",
    "C. This violates the \"symmetry principle\" — the company shares gains (fast claims) but didn't make customers share risk",
    "D. This is adaptive strategy failure — the system didn't adjust rules in real time as fraud evolved"
  ],
  answer: 1,
  models: ["Incentives"],
  secondaryModels: ["Margin of Safety"],
  explanation: "Munger's most emphasized model: Incentives — \"Show me the incentive and I'll predict the outcome.\" AI fast claims changed the incentive structure: fraud's cost (probability of detection) dropped sharply while its payoff (quick payout) stayed the same — this inevitably attracts opportunistic behavior. The CEO must redesign incentives so fraud's expected cost exceeds its payoff.",
  wrongReasons: "A — Catalyst effect (Munger model) has merit — AI did lower claims' \"activation energy,\" but that describes the phenomenon, not the root cause: the incentive structure changed. C — Symmetry principle (Taleb, Skin in the Game) is an interesting angle, but insurance is inherently asymmetric; the issue isn't symmetry but distorted incentives. D — Adaptive strategy (Greene) describes response, not root cause."
},

// ── CF-08 ──
{
  type: "cross-fusion",
  scenario: "A young fund manager finds an undervalued small-cap tech stock. His model suggests the stock should double. He also notices: (1) the CEO recently sold a large amount of company stock; (2) three top analysts are bullish. Which signal should he weight most?",
  options: [
    "A. Trust analyst consensus — three experts bullish is \"wisdom of crowds,\" more reliable than individual behavior",
    "B. Trust CEO selling — \"Don't tell me what you think; show me your portfolio\"; behavior is truer than words",
    "C. Trust his own model — if the data supports it, others' behavior shouldn't sway him; otherwise it's anchoring",
    "D. When signals conflict, pass — this is \"too hard\" territory, beyond judgment range"
  ],
  answer: 1,
  models: ["Incentives"],
  secondaryModels: ["Circle of Competence"],
  explanation: "Munger and Taleb both stress: observe people's behavior (especially when their own interests are at stake), not their words. CEO selling is an extremely strong signal — he knows the company better than any outside analyst, and he chose to sell. This is Incentives in action: when behavior aligns with self-interest, it carries the most real information.",
  wrongReasons: "A — \"Wisdom of crowds\" sounds reasonable, but analysts' incentives often skew bullish (bearish doesn't earn commissions); their consensus may reflect incentive bias, not true judgment. C — Ignores a key fact: the model is abstract; the CEO's behavior is concrete, real signal. D — \"Too hard\" (Munger model) is a valid fallback, but with a clear insider signal (CEO selling), the issue isn't \"too hard to judge\" — it's prioritization of judgment criteria."
},

// ── CF-09 ──
{
  type: "cross-fusion",
  scenario: "A news outlet finds that in-depth terrorism coverage gets 20x the readership of economic analysis. The editor decides to shift 80% of resources to terrorism coverage. In the long run, what error is this decision most likely to commit?",
  options: [
    "A. Driven by the Availability Heuristic — terrorism's vividness makes the editor overestimate readers' sustained interest",
    "B. Influenced by \"fear marketing drivers\" — short-term fear drives clicks, but long-term leads to reader fatigue",
    "C. Ignores Comparative Advantage — the outlet should do what it does best, not chase highest traffic",
    "D. This is \"herd mentality\" in business — all outlets chase terrorism, leading to homogenized competition"
  ],
  answer: 0,
  models: ["Availability Heuristic"],
  secondaryModels: ["Second-Order Thinking"],
  explanation: "Munger's Availability Heuristic: the more vivid, emotional, and easy-to-recall an event, the more people overestimate its frequency and importance. Terrorism's high readership comes from fear's vividness — that doesn't mean readers want this content long-term. The editor mistakes short-term availability effects for long-term demand trends, causing severe content strategy drift.",
  wrongReasons: "B — Fear marketing drivers (Lindstrom, Buyology) describe how fear drives consumption, but the editor's error isn't \"using fear\" — it's \"misjudging demand\"; he was fooled by availability bias. C — Comparative Advantage (Munger model) is good advice, but the question asks what error he committed, not what he should do. D — Herd mentality may be one outcome, but the root driver is the editor's own availability bias, not others' behavior."
},

// ── CF-10 ──
{
  type: "cross-fusion",
  scenario: "A pharma company's blockbuster drug is about to lose patent protection. Two camps: A advocates spending $2B on next-gen R&D; B advocates using $2B to acquire a promising biotech startup. What framework should the CEO use to decide?",
  options: [
    "A. Opportunity Cost — what is the highest-value use of this $2B; which option has higher long-term returns",
    "B. Game theory — what are competitors' likely responses; which strategy builds the strongest game position",
    "C. Rocket scientist thinking — return to first principles; question \"why only these two options?\"",
    "D. Skin in the Game — which option has management with more skin in the game"
  ],
  answer: 0,
  models: ["Opportunity Costs"],
  secondaryModels: ["Circle of Competence"],
  explanation: "Munger stresses: the true cost of any decision isn't what you spend, but what you give up. Opportunity Cost is the most basic decision framework — assess the highest-value use of $2B, not just compare two given options. Perhaps the best use is neither R&D nor acquisition, but buybacks or holding cash for better opportunities.",
  wrongReasons: "B — Game theory (Dixit & Nalebuff) is a useful auxiliary tool, but if opportunity cost analysis shows both options are suboptimal, game analysis optimizes among wrong choices. C — First principles (Varol) challenging \"only two options\" is good thinking, but opportunity cost already includes \"consider all possible options.\" D — Skin in the Game (Taleb) assesses management credibility, not the strategic options themselves."
},

// ── CF-11 ──
{
  type: "cross-fusion",
  scenario: "An entrepreneur has run a restaurant for 10 years. Revenue has fallen for three straight months. He concludes \"employees aren't working hard enough\" and installs surveillance cameras plus strict performance reviews. Result: mass resignations, worse revenue. What fundamental error did he make?",
  options: [
    "A. He fell into Fundamental Attribution Error — attributing a systemic problem to individual factors",
    "B. He violated \"status game\" rules — surveillance and reviews destroyed employee dignity and autonomy",
    "C. He fell into Confirmation Bias — he had the \"employees are lazy\" conclusion first, then only saw supporting evidence",
    "D. He doesn't understand incentive design — punitive incentives destroy intrinsic motivation, leading to worse performance"
  ],
  answer: 0,
  models: ["Fundamental Attribution Error"],
  secondaryModels: ["Incentives"],
  explanation: "Munger's Fundamental Attribution Error: people tend to attribute behavior to personal traits (\"employees are lazy\") while ignoring situational factors (market shifts, outdated menu, competition, etc.). Three months of revenue decline is more likely systemic than sudden collective slacking — but the owner only saw the most intuitive personal attribution.",
  wrongReasons: "B — Status game (Merath, entrepreneurial leadership) describes surveillance's damage to morale, but that's the consequence of the wrong action, not the root error. C — Confirmation bias (Munger model) was at work, but it's an amplifier — he first needed the wrong attribution, then confirmation bias reinforced it. D — Incentive design is correct analysis too, but like B, it describes why the wrong action made things worse, not the initial error."
},

// ── CF-12 ──
{
  type: "cross-fusion",
  scenario: "A luxury brand decides to run heavy \"sexy model showcasing product\" ads on social media. Click-through rates hit records, but brand search volume and actual sales barely move. What is the most likely explanation?",
  options: [
    "A. This is the Vampire Effect — sexy content sucks away all attention; viewers remember the model but forget the brand",
    "B. This is narrative integration failure — the product isn't woven into the story; it's just \"wallpaper\"",
    "C. This is Map Is Not the Territory — the click-through \"map\" doesn't represent purchase intent \"territory\"",
    "D. This is the reverse of \"mixed signal strategy\" — the message is too single (only sexy), lacking depth to explore"
  ],
  answer: 2,
  models: ["Map Is Not the Territory"],
  secondaryModels: [],
  explanation: "Munger's Map Is Not the Territory: metrics (the map) are not reality (the territory). Click-through measures attention, not purchase intent. This company equated high click-through with marketing success, but clickers may just be attracted to sexy content with zero purchase motive. The metric is not the goal; it's an imperfect proxy.",
  wrongReasons: "A — Vampire Effect (Lindstrom, Buyology) is indeed happening — sexy content steals brand memory. But that explains one mechanism of \"why sales didn't grow,\" not the root cause of \"why the CEO was misled.\" The CEO was misled because he treated click-through as a sales metric. B — Narrative integration (Lindstrom) is also correct diagnosis at the mechanism level. D — Mixed signal strategy (Greene, Art of Seduction) is brand strategy advice, not problem diagnosis."
},

// ── CF-13 ──
{
  type: "cross-fusion",
  scenario: "A logistics company spent three years building the nation's largest delivery network, but profit margin is only 2%. A new entrant uses a \"crowdsourced delivery\" model at lower cost. The owner thinks: \"Our network is the largest; our moat is deepest; no need to worry.\" What is the biggest blind spot in this judgment?",
  options: [
    "A. He ignores Creative Destruction — a new model can make existing scale advantages completely obsolete",
    "B. He's caught in the Endowment Effect — overvaluing his existing assets because he built them",
    "C. He misunderstands what \"moat\" really means — size doesn't equal moat; a moat is an irreplicable structural advantage",
    "D. He commits the Sunk Cost fallacy — three years of investment prevents objective assessment of the current situation"
  ],
  answer: 2,
  models: ["Moat"],
  secondaryModels: ["Adaptation"],
  explanation: "Munger and Buffett define \"moat\" not as \"biggest\" but as \"irreplicable structural advantage.\" The largest delivery network with 2% margins shows scale hasn't translated into pricing power or cost advantage — that's not a moat. Crowdsourcing can achieve similar coverage with lighter assets. The owner's blind spot: equating \"big\" with \"strong.\"",
  wrongReasons: "A — Creative Destruction describes the macro trend of new models replacing old, but the issue here is more precise — the owner misreads his competitive position. B — Endowment Effect (Kahneman) may exist, but it's not the main blind spot — he's not refusing to sell due to overvaluation; he misunderstands the moat definition. D — Sunk cost may affect judgment, but the root issue is his wrong understanding of moat."
},

// ── CF-14 ──
{
  type: "cross-fusion",
  scenario: "A young entrepreneur reads many success books, works 16 hours a day, and pushes five projects simultaneously. Six months later, every project is behind schedule; he's physically and mentally exhausted. A mentor says the problem is methodological. What is the most fundamental issue?",
  options: [
    "A. He needs to find the \"core bottleneck\" and concentrate all resources on one breakthrough point",
    "B. He violates Specialization — one person can't master five different domains at once",
    "C. He doesn't understand Multiply by Zero — any one of five projects seriously behind can drag down the whole",
    "D. He needs to activate System 2 thinking — stop and analyze deeply instead of intuitive busyness"
  ],
  answer: 2,
  models: ["Multiply by Zero"],
  secondaryModels: ["Bottlenecks"],
  explanation: "Munger's Multiply by Zero: in a multiplicative system, any factor at zero makes the whole result zero. Five projects compete for one person's attention and energy; any one seriously behind can cascade. When resources can't support all links, the weakest link determines total output.",
  wrongReasons: "A — Core bottleneck (Merath's bottleneck strategy / EKS) is the right action — find one bottleneck and concentrate. But the question asks \"what is the fundamental problem,\" not \"how to solve.\" B — Specialization is related but imprecise — the issue isn't lack of mastery, it's that scattered energy keeps each project below minimum effective threshold. D — System 2 (Kahneman) describes thinking style, but his problem isn't shallow thinking — it's too scattered action."
},

// ── CF-15 ──
{
  type: "cross-fusion",
  scenario: "A retail bank launches an \"AI financial advisor\" app. Initial downloads are impressive. Three months later, DAU plummets 90%. User feedback: \"The advice is too conservative; as boring as a human advisor.\" The PM suggests making the AI recommend more aggressive investments. Where does the real problem lie?",
  options: [
    "A. This is feedback loop dysfunction — user dissatisfaction is misread as \"need more aggressive\"; it might be a UX issue",
    "B. Users don't want better advice; they want \"investment\" stage psychological stickiness — let them customize portfolios for ownership",
    "C. The PM commits herd mentality — listening to what users say instead of observing behavior; stated wants differ from real needs",
    "D. Going aggressive violates Margin of Safety — conservative financial advice protects clients; don't sacrifice risk management for retention metrics"
  ],
  answer: 3,
  models: ["Margin of Safety"],
  secondaryModels: ["Incentives"],
  explanation: "Munger's Margin of Safety: always leave buffer for the unexpected. Conservative financial advice is a necessary margin of safety — protecting clients from excessive risk. The PM's suggestion to make the AI more aggressive sacrifices client safety for retention metrics — incentive distortion: company KPI (DAU) conflicts with client interest (financial safety).",
  wrongReasons: "A — Feedback loop (Munger model) analyzes mechanism — dissatisfaction may be misread — but doesn't identify why the AI shouldn't go aggressive. B — Investment stage (Eyal, Hooked) is a stickiness tactic, but financial products shouldn't use gamification for stickiness — it can drive overtrading. C — Herd mentality partly applies — the PM shouldn't blindly follow user voice. But the more fundamental issue is that financial products have a safety floor."
},

// ── CF-16 ──
{
  type: "cross-fusion",
  scenario: "An e-commerce founder finds that adding \"5,000+ people have bought\" to product pages raises conversion 15%. He rolls this out to all products, including a new item that sold only 3 units — he writes \"bestseller.\" In the long run, what is the biggest risk?",
  options: [
    "A. This is somatic marker manipulation — fake social proof builds false emotional shortcuts; once exposed, damage is greater",
    "B. This destroys Trust — deceptive information, once discovered, destroys all brand credibility",
    "C. This is the risk of suggestion implantation — implanted false ideas, if exposed, backfire harder than never implanting",
    "D. This exploits narrative instinct — people like \"bestseller\" stories, but false narrative collapse triggers the liar's paradox"
  ],
  answer: 1,
  models: ["Trust"],
  secondaryModels: ["Compounding"],
  explanation: "Munger places extreme weight on Trust as the foundation of society and business. Trust is a compounding asset — building takes long; destroying takes one incident. False \"bestseller\" labels are deception; once consumers discover (almost inevitable online), the brand loses its most precious asset. Munger: \"If you can have a perfect record on honesty from the start, you'll go far.\"",
  wrongReasons: "A — Somatic markers (Lindstrom, citing Damasio) analyze psychological mechanism, but \"somatic markers broken\" is far less severe than \"trust destroyed.\" C — Suggestion implantation (Greene, Art of Seduction) analyzes persuasion tactic backlash, but business fundamentals aren't \"whether persuasion is exposed\" — it's \"whether trust exists.\" D — Narrative instinct (Munger model) describes why people believe bestseller stories, but the risk isn't \"narrative collapse\" — it's \"trust bankruptcy.\""
},

// ── CF-17 ──
{
  type: "cross-fusion",
  scenario: "A tech company's core team of 8 has had excellent chemistry for three years. The CEO decides to scale rapidly to 50. After new hires join, communication costs explode; decision speed drops to 1/5; original members complain \"the culture has changed.\" What model best explains this?",
  options: [
    "A. This is Dunbar's Number — team size exceeded the cognitive limit for close collaboration; relationship quality inevitably dilutes",
    "B. This is emergence in reverse — the original team chemistry was an emergent property of that specific 8; adding new variables makes it vanish",
    "C. This is cultural leadership failure — the CEO didn't build a transmittable culture system before scaling",
    "D. This is network effects in reverse — more people make communication nodes grow exponentially; efficiency falls"
  ],
  answer: 0,
  models: ["Dunbar's Number"],
  secondaryModels: ["Scale Effects"],
  explanation: "Munger's models include Dunbar's Number — the human brain has a cognitive limit on stable social relationships (~150 people; for close work teams, ~8–15). Going from 8 to 50 exceeds the tight-collaboration cognitive limit; communication must shift from informal tacit coordination to formal process — inevitable, not management failure.",
  wrongReasons: "B — Emergence (Munger model) analysis is elegant — the 8's chemistry is emergent. But \"emergence vanishes\" is description; Dunbar's Number explains why — cognitive limit exceeded. C — Cultural leadership (Merath's three leadership meta-models) is good advice, but even with perfect culture, 8→50 cognitive load increase is biological limit, not fully solvable by culture. D — Network effects reverse correctly describes the math (nodes = n(n-1)/2), but Dunbar's Number reveals the underlying cognitive cause."
},

// ── CF-18 ──
{
  type: "cross-fusion",
  scenario: "A phone brand deliberately leaks \"unconfirmed specs\" to tech bloggers before launch. The buzz drives massive speculation; social heat is 5x the official launch. But the final product falls short of rumored specs, causing severe disappointment among early adopters. What is the fundamental problem with this marketing strategy?",
  options: [
    "A. This is misuse of \"suspense and unpredictability\" — creating suspense is good, but it set expectations that couldn't be met",
    "B. This is Anchoring backlash — the leaked high specs became a psychological anchor; the real product can never measure up",
    "C. This is \"manufacturing desire\" gone wrong — successfully created craving but couldn't satisfy the craving it created",
    "D. This is expectation management failure — all value judgment is relative to expectations; raising expectations lowers satisfaction"
  ],
  answer: 1,
  models: ["Anchoring"],
  secondaryModels: ["Relative Satisfaction"],
  explanation: "Munger's Anchoring: judgments are heavily influenced by the first number received. The leaked \"unconfirmed high specs\" became consumers' psychological anchor; all real specs are compared to it. Even an excellent product will disappoint if below the anchor. This also involves Munger's Relative Satisfaction — satisfaction is relative to a reference point, and the brand set that reference too high.",
  wrongReasons: "A — Suspense (Greene, Art of Seduction) only describes the tactic type; it doesn't explain the psychological mechanism of disappointment. C — Manufacturing desire (Greene) describes strategic intent but doesn't explain the paradox of \"demand met yet still disappointed\" — the key isn't unmet demand but raised reference point. D — Expectation management uses correct language but isn't a formal cognitive model — Munger's Anchoring and Relative Satisfaction are more precise frameworks."
},

// ── CF-19 ──
{
  type: "cross-fusion",
  scenario: "An EV startup announces \"We will surpass Tesla in 3 years.\" Media coverage is intense; the stock soars. But the data: they produce 5,000 units/year; Tesla produces 1.8 million. Why did this declaration get so much attention and trust?",
  options: [
    "A. This is charismatic leadership — the founder's mission and confidence create irresistible presence",
    "B. This is narrative instinct — people naturally love the \"David vs Goliath\" challenger story",
    "C. This is lack of Orders of Magnitude thinking — media and investors didn't notice 5,000 vs 1.8M is a 360x gap",
    "D. This is commitment strategy — bold public commitment makes people think they must have an ace, or they wouldn't dare say it"
  ],
  answer: 2,
  models: ["Orders of Magnitude"],
  secondaryModels: ["Overconfidence"],
  explanation: "Munger stresses Orders of Magnitude thinking — before any judgment, confirm whether the numbers' scale is reasonable. 5,000 vs 1.8M is a 360x gap; that's not a chasm \"accelerating growth\" can bridge. Media and investors were drawn to story and vision without doing the most basic magnitude comparison. Munger would say: \"Do the math first.\"",
  wrongReasons: "A — Charismatic leadership (Greene, Art of Seduction) explains why the founder's pitch is compelling, but not why rational analysts were convinced. B — Narrative instinct (Munger model) is at work — challenger stories are attractive. But narrative can't replace math; the core issue is people didn't run the numbers. D — Commitment strategy (Dixit & Nalebuff, game theory) explains why public commitment has credibility, but credibility ≠ feasibility — a 360x gap isn't bridgeable by commitment."
},

// ── CF-20 ──
{
  type: "cross-fusion",
  scenario: "A CEO carefully reads analyst reports after each earnings release. He notices: when last quarter was good, analysts say \"management is brilliant\"; when last quarter was bad, analysts say \"macro environment was unfavorable.\" What should he learn from this pattern?",
  options: [
    "A. Analysts use \"the magic of language\" — emotional language bypasses reason so every report sounds plausible",
    "B. Analysts commit Fundamental Attribution Error — good outcomes attributed to people, bad to environment",
    "C. Analysts are influenced by Hindsight Bias — after the fact, reasons \"we should have known\" always appear",
    "D. Analysts' judgment is driven by Availability Heuristic — latest earnings data is easiest to recall, so it dominates analysis"
  ],
  answer: 1,
  models: ["Fundamental Attribution Error"],
  secondaryModels: ["Hindsight Bias"],
  explanation: "The analysts' pattern perfectly illustrates the mirror image of Fundamental Attribution Error: success attributed to internal factors (management), failure to external factors (environment) — systematic attribution bias. The CEO should doubt both attributions — good results may have environmental factors; bad results may have management issues. Truth is usually a mix.",
  wrongReasons: "A — Magic of language (Greene, Art of Seduction) describes persuasion tactics, but analysts aren't \"persuading\" — they're making a real cognitive error. C — Hindsight Bias (Munger model / Kahneman) does exist — analysts rationalize after the fact. But more fundamental is their asymmetric attribution pattern — that's the definition of Fundamental Attribution Error. D — Availability Heuristic may make latest earnings dominate, but the question asks about the asymmetric attribution pattern, not \"influenced by latest data.\""
},

// ── CF-21 ──
{
  type: "cross-fusion",
  scenario: "A consumer goods company's market research shows 85% of consumers say \"I would choose more eco-friendly products.\" The company invests heavily in eco packaging, pricing 20% higher. Result: new product market share under 3%. Where did things go wrong?",
  options: [
    "A. The 85% is a blind spot of \"subconscious purchase drivers\" — they say one thing, do another; real buying is subconscious",
    "B. This is the blind spot of \"brain scan prediction\" — surveys are less reliable than behavioral data; use A/B tests, not surveys",
    "C. This is Map Is Not the Territory — survey results are the \"map\"; actual purchase behavior is the \"territory\"; they diverge badly",
    "D. This is herd mentality in surveys — respondents say eco because of social expectations, not real preference"
  ],
  answer: 2,
  models: ["Map Is Not the Territory"],
  secondaryModels: [],
  explanation: "Munger's Map Is Not the Territory again: the model (survey results) is not reality (consumer behavior). 85% \"verbal commitment\" is a pretty but inaccurate map. The company treated the map as territory and invested real money — only to find the territory was completely different. Before any decision, distinguish \"what people say they'll do\" from \"what people actually do.\"",
  wrongReasons: "A — Subconscious purchase drivers (Lindstrom, Buyology) note that 85% of purchase decisions are subconscious — valuable insight but it explains mechanism. B — Brain scan prediction (Lindstrom) suggests behavioral data over surveys — correct methodology, but the question asks root cause of \"where things went wrong.\" D — Herd mentality partly explains why survey answers distort (social desirability), but the root issue isn't \"why answers distort\" — it's \"why the company believed the survey\" — they treated map as territory."
},

// ── CF-22 ──
{
  type: "cross-fusion",
  scenario: "An investment firm finds their 5 most successful investments share one trait: all were bought during market panic. The fund manager proposes an \"automatic panic buy\" system: whenever the market drops 5% in a day, auto-buy. What is the biggest problem with this idea?",
  options: [
    "A. This is Survivorship Bias — they only see panic-buy successes; they ignore panic-buy failures",
    "B. This over-relies on \"exploiting market sentiment\" — using panic requires judgment; it can't be mechanized",
    "C. They commit the Law of Small Numbers — 5 successful investments is too small a sample for reliable systematic rules",
    "D. This violates adaptive strategy — markets keep changing; past panic patterns may not repeat"
  ],
  answer: 0,
  models: ["Survivorship Bias"],
  secondaryModels: ["Randomness"],
  explanation: "Munger's Survivorship Bias is one of the deadliest thinking traps. They only saw 5 \"panic buy + success\" cases, not the invisible \"panic buy + failure\" cases. Perhaps they themselves had panic buys that lost — forgotten or excluded. Building a system from surviving successes is dangerous.",
  wrongReasons: "B — Exploiting market sentiment (Taleb / Lebron, trading rules) is a valid strategy, but the issue here isn't \"can we exploit panic\" — it's \"are 5 cases enough to conclude.\" C — Law of Small Numbers (Kahneman / Munger model) is related — sample is indeed small. But more precise: even with 50 successes, if you only look at successes and ignore failures, the conclusion is still wrong. D — Adaptive strategy (Greene) worries about the future, but the more fundamental issue is their analysis of the past already has bias."
},

// ── CF-23 ──
{
  type: "cross-fusion",
  scenario: "An entrepreneur's company has $10M revenue and $2M profit. Someone suggests he spend $2M on a luxury car to \"elevate brand image.\" His accountant suggests keeping $2M as reserve. His investment advisor suggests putting $2M into a new product line. What is the most rational thinking framework?",
  options: [
    "A. Opportunity Cost analysis — what is the long-term return of $2M in each alternative use",
    "B. Margin of Safety principle — keeping sufficient reserve for uncertainty is top priority",
    "C. Compounding model — $2M in new product at 30% annual return becomes $27M in 10 years",
    "D. Skin in the Game thinking — which option binds him most deeply to the business"
  ],
  answer: 0,
  models: ["Opportunity Costs"],
  secondaryModels: ["Compounding"],
  explanation: "Munger's Opportunity Cost is the most basic decision framework: any use of capital must be compared to its best alternative. Not \"car vs reserve vs product\" three-way choice, but \"of all possible uses of $2M, which has the highest long-term compounding return.\" Perhaps the best answer is none of the three — maybe investing in learning and networks.",
  wrongReasons: "B — Margin of Safety (Munger model) is important, but if the company already has sufficient working capital, additional marginal safety has diminishing returns. C — Compounding model provides a good calculation framework, but 30% annual return is assumption, not guarantee. Compounding needs opportunity cost to choose the best option first. D — Skin in the Game (Taleb) assesses alignment of personal and business interests, but the owner is already aligned; that's not the core of this decision."
},

// ── CF-24 ──
{
  type: "cross-fusion",
  scenario: "A software company sees a competitor developing a similar product. The CEO faces a choice: (1) Rush to launch an imperfect version before the competitor; (2) Stick to plan and launch a polished version, possibly 3 months later. The boss leans toward option 1. How would you analyze this?",
  options: [
    "A. Use first-mover advantage and network effects — capturing the market first may create winner-take-all",
    "B. Use quality-first principle — Munger would say imperfect products damage reputation; long-term cost is higher",
    "C. Use commitment strategy — publicly announce launch date so the market knows you're coming; the competitor will reassess",
    "D. Use Probabilistic Thinking — estimate expected value for each option (P(success) × payoff − P(failure) × loss)"
  ],
  answer: 3,
  models: ["Probabilistic Thinking"],
  secondaryModels: ["Second-Order Thinking"],
  explanation: "Munger stresses Probabilistic Thinking — don't get stuck in qualitative \"good vs bad\"; quantify each option's expected value. Option 1's fast launch may have first-mover advantage but also quality risk; Option 2's polished version may be 3 months late but higher customer satisfaction. Compare with probability and expected value, not intuition between two qualitative arguments.",
  wrongReasons: "A — Only sees first-mover advantage; doesn't quantify quality risk and negative second-order effects (bad reviews, refunds, fix costs). B — Quality-first is a good principle but too absolute — some markets are \"first come, first served.\" C — Commitment strategy (Dixit & Nalebuff, game theory) is an interesting game-theoretic move but can't replace quantitative comparison of the two options. The right approach: do probability analysis first, then consider game strategy."
},

// ── CF-25 ──
{
  type: "cross-fusion",
  scenario: "A startup offers a \"no-questions-asked refund\" policy. Initial conversion jumps. Six months later, refund rates rise from 5% to 35%. The owner finds a group of \"refund pros\" systematically exploiting the policy: buy → use → return. He never anticipated this. What thinking blind spot does this expose?",
  options: [
    "A. He didn't do Inversion — if he had first asked \"how could this policy be abused,\" he could have foreseen it",
    "B. He committed the Illusion of Validity — initial high conversion made him overconfident in the policy's perfection",
    "C. He doesn't understand the symmetry principle — he let customers share gains (free trial) but not losses (refund cost)",
    "D. He fell into Optimism Bias — he over-optimistically assumed all customers were well-intentioned"
  ],
  answer: 0,
  models: ["Inversion"],
  secondaryModels: ["Incentives"],
  explanation: "Munger's Inversion (\"Invert, always invert\") applies perfectly here. If the owner had asked before launching: \"How could this policy destroy us? Who would exploit it? What's the worst case?\" he could have foreseen systematic refund risk and built in safeguards. Don't think forward \"how good is the policy\"; think backward \"how could the policy fail.\"",
  wrongReasons: "B — Illusion of Validity (Kahneman) exists — initial data made him overconfident. But it explains why he didn't correct in time, not why he didn't foresee initially. C — Symmetry principle (Taleb, Skin in the Game) provides a good framework, but Munger's Inversion is a more fundamental thinking discipline — it tells you to think worst case before any decision. D — Optimism Bias (Kahneman) is at work, but it's a passive cognitive tendency; Inversion is an active thinking discipline."
},

// ── CF-26 ──
{
  type: "cross-fusion",
  scenario: "An angel investor evaluates an AI startup. The founder shows a chart: past 6 months of user growth in a perfect exponential curve. The investor is excited and ready to invest. His analyst suggests more caution. What should he be most wary of?",
  options: [
    "A. A perfect exponential curve may be Illusion of Validity — the more consistent the data, the higher the confidence, but not necessarily accuracy",
    "B. 6 months of data is Law of Small Numbers — sample period too short; any trend could be noise, not signal",
    "C. This is Regression to the Mean — any outlier high growth tends to revert toward industry average",
    "D. Use brain scan prediction logic — don't look at what the founder \"says\"; look at what users \"do\" (retention, pay rate)"
  ],
  answer: 2,
  models: ["Regression to the Mean"],
  secondaryModels: ["Probabilistic Thinking"],
  explanation: "Munger's Regression to the Mean: extreme performance (good or bad) tends to revert to average. Six months of perfect exponential growth is statistically extreme and likely includes timing, luck, and unsustainable factors. The investor should ask: \"What's the industry average growth rate? What makes this company able to sustain above-average?\"",
  wrongReasons: "A — Illusion of Validity (Kahneman / Munger Skill) is correct — data that looks too perfect should be suspicious. But it explains psychological reaction (\"why you feel convinced\"), not the statistical regularity of the data. B — Law of Small Numbers (Kahneman) is correct — 6 months is indeed short. But even with 3 years of exponential growth, regression to the mean is still the biggest risk. D — Brain scan prediction logic (Lindstrom) — look at behavior over words — is good advice but not analysis of the exponential curve itself."
},

// ── CF-27 ──
{
  type: "cross-fusion",
  scenario: "A gym chain's membership renewal rate drops from 70% to 45%. Management thinks \"competition intensified\" and cuts prices 30% to attract new members. Three months later, new members increase but renewal rate continues falling to 30%. What is the real problem most likely?",
  options: [
    "A. Management is influenced by Primacy Effect — \"competition\" was the first explanation they thought of; all analysis revolved around it",
    "B. Price cuts triggered Gresham's Law — cheap members drive out quality members; bad money drives out good",
    "C. This is feedback loop dysfunction — price cut → attracts low-stickiness clients → lower renewal → need more new clients → more price cuts",
    "D. Management didn't \"go to the front line\" — they analyzed data in the office instead of asking members why they left"
  ],
  answer: 2,
  models: ["Feedback Loops & Homeostasis"],
  secondaryModels: ["Second-Order Thinking"],
  explanation: "Munger's Feedback Loop model reveals the vicious cycle here: price cuts didn't solve renewal — they created a positive feedback loop: price-sensitive (= quality-insensitive = easy to churn) clients were attracted; their low renewal forced the company to rely more on new clients and more cuts. A self-reinforcing downward spiral.",
  wrongReasons: "A — Primacy Effect (Munger model) may have locked management in on \"competition\" too early. But even if their diagnosis was right (competition did intensify), the feedback loop effect of the price-cut strategy is the core mechanism that worsened things. B — Gresham's Law (Munger model) is a vivid metaphor — cheap clients do drive out quality. But Gresham describes an outcome (bad drives out good); feedback loop describes the dynamic process (why it keeps worsening). D — Going to the front line (Munger model) is good advice, but even if they asked members, without understanding the feedback loop dynamic, they'd make the same decision."
},

// ── CF-28 ──
{
  type: "cross-fusion",
  scenario: "A company's CEO just finished a bestseller on \"agile management\" and immediately announces a full company pivot to an \"agile organization.\" He abolishes all fixed processes; each team decides autonomously. Three months later, chaos. What thinking problem does this expose?",
  options: [
    "A. He committed Authority Bias — because the bestseller author is an \"authority,\" he accepted the methodology uncritically",
    "B. He doesn't understand Complex Adaptive Systems — organizations are complex systems; one-size-fits-all radical change triggers unpredictable cascades",
    "C. He needs Perspective Shift — examine from different angles whether agile fits his company, not assume one method fits all",
    "D. He's driven by Action Bias — feeling that doing something (big reorganization) is better than nothing, but sometimes inaction is optimal"
  ],
  answer: 1,
  models: ["Complex Adaptive Systems"],
  secondaryModels: ["Circle of Competence"],
  explanation: "Munger's Complex Adaptive Systems: organizations are complex systems of many interacting elements that respond to change in nonlinear ways. Abolishing all processes at once changes too many variables simultaneously, causing unpredictable chaos. The right approach: small-scale experiments, gradual adaptation — not wholesale overthrow.",
  wrongReasons: "A — Authority Bias (Munger model) is at work — he was influenced by the bestseller. But the issue isn't \"where he got the idea\" — it's \"how he executed.\" Even if agile is good, one-size-fits-all radical implementation is the problem. C — Perspective Shift (Varol, Think Like a Rocket Scientist) suggests examining fit, but the more fundamental issue isn't \"does agile fit\" — it's \"complex systems can't be radically changed.\" D — Action Bias (Munger model) may drive the CEO, but action bias usually means \"did the wrong thing\"; here the issue is \"the way it was done was too radical.\""
},

// ── CF-29 ──
{
  type: "cross-fusion",
  scenario: "A consumer goods CMO notices: Brand A spends heavily on ads but consumers can't recall the brand name; Brand B barely advertises but consumers can accurately describe its visuals, scent, and sound. What is the core difference between these brands?",
  options: [
    "A. Brand B built a \"multisensory brand\" — engaging smell, sound, touch; 70% stronger than visual-only ads",
    "B. Brand A committed the Vampire Effect — creative elements in ads stole attention from the brand",
    "C. Brand B has strong \"subconscious brand cues\" — recognizable without logo; the ultimate brand state",
    "D. Brand B's success is Cumulative Advantage — long-term consistent brand experience formed an irreplicable cognitive moat"
  ],
  answer: 3,
  models: ["Cumulative Advantage"],
  secondaryModels: ["Compounding"],
  explanation: "Munger's Cumulative Advantage model reveals Brand B's structural success: long-term consistent brand experience compounds like interest — each consumer touch strengthens existing cognition. Brand A pushes with ads; Brand B pulls with accumulated experience memory. Cumulative advantage, once formed, spins like a flywheel — faster and faster. That's the real cognitive moat.",
  wrongReasons: "A — Multisensory brand (Lindstrom, Buyology) correctly describes how Brand B achieved it — a tactic. But that's \"how\" (means), not \"why success\" (root cause: long-term accumulation). B — Vampire Effect (Lindstrom) may explain Brand A's problem but not Brand B's success. C — Subconscious brand cues (Lindstrom) describe Brand B's \"ultimate state\" but not \"how to get there\" — the answer is long-term accumulation, not a single tactic."
},

// ── CF-30 ──
{
  type: "cross-fusion",
  scenario: "An investor studies all successful IPOs over the past 20 years and identifies 5 \"successful IPO characteristics.\" He builds a scoring model and only invests in companies meeting 4/5 or more. He does great for two years; in year three, all 3 companies he invested in via the model go bankrupt. What is the most likely explanation?",
  options: [
    "A. His model is a product of Survivorship Bias — studying only successful cases always yields \"success characteristics\"",
    "B. He fell into Illusion of Validity — the model's consistency made him overestimate predictive accuracy",
    "C. The market entered a \"black swan\" cycle — extreme events broke historical patterns; any model would fail",
    "D. His model was influenced by Overconfidence — two years of success made his confidence far exceed actual accuracy"
  ],
  answer: 0,
  models: ["Survivorship Bias"],
  secondaryModels: ["Randomness"],
  explanation: "Classic Survivorship Bias. Studying only successful IPOs will always find \"success characteristics\" — but these same characteristics may appear in failed IPOs too; only the failed cases were ignored. Like studying only successful entrepreneurs and concluding \"hard work = success\" while ignoring the many hardworking failures. The model's foundation is biased.",
  wrongReasons: "B — Illusion of Validity (Kahneman / Munger Skill) did make him overconfident in the model, but the illusion's source is survivorship bias — if the model's base data is biased, high consistency is meaningless. C — Black Swan (Munger model / Taleb) is one possibility, but the more fundamental issue isn't that the market changed — it's that the model was built on biased data from the start. D — Overconfidence (Munger model / Kahneman) is a cognitive issue, but the root cause is methodology — survivorship bias."
}

);
