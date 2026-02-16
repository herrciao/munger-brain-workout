// ═══════════════════════════════════════════════════════════════
//  08 — Reverse Diagnosis
//  20 questions | v2 advanced tier
//  Format: Given a "failed decision," identify the root thinking trap
//  Correct answer = Munger model; decoys = other plausible analytical angles
// ═══════════════════════════════════════════════════════════════

allQuestions.push(

// ── RD-01 ──
{
  type: "reverse-diag",
  scenario: "[FAILURE CASE] A fund manager doubles down after his stock drops 30%. His reasoning: \"I spent three months researching this company — I can't be wrong. The market will eventually recognize its value.\" The stock ultimately goes to zero, inflicting devastating losses on the fund. What was his most fundamental thinking error?",
  options: [
    "A. Overconfidence bias — 90% conviction typically translates to only 70% accuracy; he systematically overestimated the quality of his own judgment",
    "B. Commitment & Consistency bias — the time and emotional energy he'd already invested became sunk costs that hijacked his subsequent decisions",
    "C. Risk exposure imbalance — his portfolio was over-concentrated in a single position with no stop-loss mechanism",
    "D. Confirmation bias — he selectively sought evidence supporting his thesis while ignoring every red flag"
  ],
  answer: 1,
  models: ["Commitment & Consistency Bias"],
  secondaryModels: ["Sunk Cost"],
  explanation: "His most fundamental error is Commitment & Consistency bias — once he had publicly invested three months of research and made the initial buy decision, a powerful psychological drive kicked in to \"stay consistent.\" The doubling down was not a product of rational analysis; it was an attempt to prove his earlier decision right. As Cialdini writes in Influence: commitment and consistency are powerful drivers — once we take a stand, we feel compelled to behave in ways that justify it. Munger warns: the most important principle in the human brain is that once a commitment is made, people will unconsciously work to prove it was correct.",
  wrongReasons: "A — Overconfidence (Kahneman, Thinking, Fast and Slow) was likely present, but it explains why he dared to invest in the first place, not why he doubled down after a 30% drop. C — Risk management and portfolio concentration (Taleb, Skin in the Game) is a portfolio-level issue, not the psychological driver of this specific doubling-down decision. D — Confirmation bias (also a Munger model) may have been at work, but it's a tool of Commitment bias — he needed to prove himself right (commitment), so he went looking for supporting evidence (confirmation). The root cause is the commitment; confirmation bias is the mechanism it employs."
},

// ── RD-02 ──
{
  type: "reverse-diag",
  scenario: "[FAILURE CASE] A century-old bakery sees viral \"Instagram-worthy\" cakes trending and decides to fully pivot. They axe all traditional product lines and invest heavily in a \"photo-op\" storefront. Old customers leave; new customers take photos but don't buy. Six months later they shut down at a loss. What was their most fatal judgment error?",
  options: [
    "A. They were misled by the Availability heuristic — media exposure of viral cakes made them overestimate market demand",
    "B. They abandoned their Comparative advantage — a century of trust and craft is irreplaceable; anyone can do viral style",
    "C. They ignored the Lindy Effect — things that have survived a century are more likely to keep surviving; tradition is the moat",
    "D. They fell for Action bias — seeing a trend made them feel they had to act, when the best strategy might have been to stay the course"
  ],
  answer: 2,
  models: ["Lindy Effect"],
  secondaryModels: ["Circle of Competence"],
  explanation: "Munger's Lindy Effect (from Taleb) tells us: for non-fragile things like brands and traditional craft, the longer something has survived, the longer its expected future lifespan. A century-old bakery's traditional recipes and customer trust are time-tested assets. Abandoning them to chase a trend that might last six months is a severe violation of the Lindy Effect.",
  wrongReasons: "A — The Availability heuristic (Kahneman) did make them overestimate the viral market, but that explains why they wanted to pivot, not why pivoting was wrong. B — Comparative advantage is correct — they did abandon it. But the Lindy Effect more fundamentally explains why the old brand's value was greater than they thought: not just \"good craft,\" but \"surviving a century is itself the strongest quality signal.\" D — Action bias describes their psychological state, not their judgment error — their error was underestimating the value of existing assets."
},

// ── RD-03 ──
{
  type: "reverse-diag",
  scenario: "[FAILURE CASE] A car dealership's top salesperson sells the most cars every month. The company promotes him to sales manager. He fails at both management (team performance drops) and sales (no time for clients). Both sides collapse. What structural error did the company make?",
  options: [
    "A. They misunderstood Specialization — top salespeople and good managers require entirely different skill sets",
    "B. They fell for the Halo effect — his sales success made them overestimate his abilities in other dimensions",
    "C. This was Incentive design failure — the promotion-to-management incentive path doesn't fit all talent types",
    "D. They were misled by Representativeness — the \"successful salesperson\" image made him seem \"like\" a good manager"
  ],
  answer: 0,
  models: ["Specialization"],
  secondaryModels: [],
  explanation: "Munger's Specialization principle: efficiency comes from letting people do what they're best at. Sales and management are fundamentally different skills — top sales talent lies in client relationships and persuasion; management requires systems thinking, team building, and delegation. Pushing a specialist into a mismatched role wastes both resources.",
  wrongReasons: "B — The Halo effect (Kahneman) was at work — sales success led decision-makers to overestimate his management potential. But the Halo effect explains why the company made this wrong call (psychological mechanism), while Specialization explains why the decision was structurally wrong (organizational principle). C — Incentive design (Munger) is partly correct — the company should design reward paths that don't require promotion. But that's a solution, not a diagnosis. D — Representativeness (Kahneman) is a cognitive explanation, but the issue here is more basic — not \"seems like,\" but \"the skill sets are entirely different.\""
},

// ── RD-04 ──
{
  type: "reverse-diag",
  scenario: "[FAILURE CASE] A CEO reads about Amazon's \"two-pizza teams\" and immediately splits all departments into 5–8 person squads. He doesn't build the supporting information-sharing and collaboration infrastructure. The squads become silos, reinvent the wheel, and overall efficiency drops 40%. What was the root problem?",
  options: [
    "A. He copied the form without the substance — \"cargo-cult strategy\" rather than understanding principles is the most common management error",
    "B. He violated Irreducibility — some systems have necessary complexity; you can't simplify without losing core function",
    "C. He fell for Authority bias — what works for Amazon may not fit his company, but authority made him adopt uncritically",
    "D. He ignored the Tragedy of the Commons — small teams without collaboration mechanisms optimize for themselves at the expense of the whole"
  ],
  answer: 1,
  models: ["Irreducibility"],
  secondaryModels: ["Complex Adaptive Systems"],
  explanation: "Munger's Irreducibility tells us: some systems have inherent necessary complexity — you cannot simplify them without losing core function. Amazon's small teams work because they sit on top of powerful API infrastructure and data-sharing systems. Splitting teams (form) without building the supporting systems (substance) is like disassembling an engine into parts without reassembly — the parts alone produce no power.",
  wrongReasons: "A — The analysis is intuitively correct — he did copy the form. But \"copying\" itself isn't a thinking model; Munger's Irreducibility precisely explains why form cannot be separated from system. C — Authority bias (Munger) explains the psychological motive, but even with full independent judgment, small teams without supporting systems would still fail — the issue isn't why he adopted, but why it failed. D — Tragedy of the Commons describes the outcome (siloed behavior), but the root cause isn't conflicting interests — it's that the system was over-simplified."
},

// ── RD-05 ──
{
  type: "reverse-diag",
  scenario: "[FAILURE CASE] A food company runs a large consumer survey showing \"consumers hate artificial additives most.\" They spend two years developing a \"zero-additive\" product priced 50% above competitors. Launch sales are dismal — shoppers almost always pick cheaper rivals at the shelf. Where did their decision process go wrong?",
  options: [
    "A. Consumers' dual systems conflicted — System 2 said \"hate additives\" in the survey, but System 1 chose cheap at purchase",
    "B. The company was fooled by Narrative instinct — \"consumers want natural\" is a nice story, but not the real purchase driver",
    "C. The company ignored Diminishing marginal utility — the extra value of \"zero-additive\" couldn't justify a 50% premium",
    "D. The company violated Falsification — they designed surveys to confirm their hypothesis, not tests that could disprove it"
  ],
  answer: 3,
  models: ["Falsification"],
  secondaryModels: ["Map Is Not the Territory"],
  explanation: "Munger's Falsification (from Karl Popper) tells us: effective research doesn't prove your hypothesis right — it tries to disprove it. This company's survey only asked \"Do you hate additives?\" (confirmatory), never \"Would you pay 50% more for zero-additive?\" or \"If you had to choose: zero-additive or cheap, which?\" (falsifying). They confirmed a true but useless conclusion.",
  wrongReasons: "A — Dual systems (Kahneman) accurately describe the \"say one thing, do another\" mechanism — System 2 (rational) says natural, System 1 (intuitive) picks cheap. But that explains consumer behavior, not the company's decision-process error. B — Narrative instinct is correct — \"natural revolution\" is a nice story. But the root problem isn't the story; it's the flawed research design. C — Diminishing marginal utility explains why 50% premium was too high, but if they had designed falsifying tests (e.g., A/B pricing), they would have caught this before launch."
},

// ── RD-06 ──
{
  type: "reverse-diag",
  scenario: "[FAILURE CASE] An investor goes heavily into travel stocks in 2019 based on \"global tourism has grown for 10 straight years.\" In 2020 the pandemic hits; his portfolio drops 80%. He says afterward: \"It was an unpredictable black swan.\" A seasoned investor points out a fundamental flaw in his analysis. What was it?",
  options: [
    "A. He didn't understand Fat-tailed distributions — travel is far more exposed to extreme events than a normal distribution predicts",
    "B. He was affected by the Law of small numbers — 10 years of growth is too small a sample to predict long-term trends",
    "C. He lacked Margin of safety — even when bullish on an industry, he should have kept a buffer for surprises",
    "D. He ignored Antifragility — a good portfolio should benefit from shocks, not be destroyed by them"
  ],
  answer: 0,
  models: ["Fat-Tailed Processes"],
  secondaryModels: ["Black Swan"],
  explanation: "Munger's Fat-tailed distribution model: many real-world systems (especially those affected by human behavior and cascades) don't follow a normal distribution — extreme events occur far more often than a bell curve predicts. Travel is highly dependent on international mobility and consumer confidence; it's a classic fat-tailed system. The pandemic wasn't an \"unpredictable black swan\" — it was an extreme event that fat-tailed systems will eventually produce.",
  wrongReasons: "B — Law of small numbers (Kahneman) has merit, but even with 50 years of data, ignoring fat-tail risk would still lead to this error. The issue isn't sample size; it's distribution assumption. C — Margin of safety (Munger) is correct investment principle, but it's a defense (how to protect yourself), not a diagnosis (where his analysis was wrong). D — Antifragility (Taleb) is ideal investment philosophy, but again a defense, not a diagnosis. His root error was applying normal-distribution thinking to a fat-tailed system."
},

// ── RD-07 ──
{
  type: "reverse-diag",
  scenario: "[FAILURE CASE] A city builds a large public park downtown with taxpayer money, free for all. It's popular at first. Three years later it's overgrown and dilapidated — nobody feels responsible for upkeep. Every citizen assumes \"someone else will take care of it.\" What model best describes this phenomenon?",
  options: [
    "A. Tragedy of the Commons — when a shared resource has no one bearing the cost, it will be overused and under-maintained",
    "B. Free-rider problem — everyone wants the benefits but not the costs, leading to under-provision of public goods",
    "C. Incentive design failure — no mechanism was built to incentivize citizens to participate in maintenance",
    "D. Social proof (negative) — everyone sees others not maintaining, so they don't either"
  ],
  answer: 0,
  models: ["Tragedy of the Commons"],
  secondaryModels: [],
  explanation: "Munger's Tragedy of the Commons perfectly describes this: when a resource is open to all but no one bears the maintenance cost, everyone has incentive to benefit (use the park) but none to invest in upkeep. The result is overuse and neglect — everyone loses. It's the classic collective-action dilemma from game theory.",
  wrongReasons: "B — Free-rider problem is closely related but subtly different: free-rider usually refers to provision of public goods (why no one wants to pay to build the park); Tragedy of the Commons refers to overconsumption and maintenance failure of shared resources. Here the park is already built (provision done); the problem is the use-and-maintenance phase — Tragedy of the Commons fits better. C — Incentive design is the right solution framework, but the question asks what the phenomenon is, not how to fix it. D — Social proof may accelerate the decay, but the fundamental structure is Tragedy of the Commons — even without social proof, rational individuals still lack incentive to maintain public resources."
},

// ── RD-08 ──
{
  type: "reverse-diag",
  scenario: "[FAILURE CASE] A CEO, when the company is most profitable, launches four major initiatives at once: new market entry, new product line, competitor acquisition, and new headquarters. Twelve months later cash flow dries up; the company is forced to lay off 40%. What was his most fundamental strategic error?",
  options: [
    "A. He violated Margin of safety — in the best times he didn't leave a buffer for the worst",
    "B. He didn't understand Bottlenecks — an organization has one core bottleneck at any time; resources should focus there",
    "C. He was driven by Overconfidence — when companies are most profitable, people systematically overestimate their judgment and ability",
    "D. He committed a Two-front war error — spreading resources across multiple fronts means none gets enough support"
  ],
  answer: 3,
  models: ["Two-Front War"],
  secondaryModels: ["Bottlenecks"],
  explanation: "Munger's Two-front war model (from military strategy): fighting on multiple fronts simultaneously is the most dangerous strategic error — dispersed resources mean each front is underpowered. Four major initiatives equal four fronts; the company's management energy, cash flow, and talent were diluted so that no project could succeed. Historically, armies fighting on two fronts almost always lose.",
  wrongReasons: "A — Margin of safety is correct — he didn't leave a buffer. But margin of safety is a defensive principle; the core problem is that the offensive strategy itself was wrong — not insufficient buffer, but too many fronts. B — Bottlenecks (Merath, entrepreneurial leadership) is the right mindset — find the core bottleneck and focus. But bottleneck theory explains what to do; Two-front war explains what not to do — his error was the latter. C — Overconfidence (Kahneman) may have been the psychological driver, but even with full rationality, launching four initiatives simultaneously is still unsustainable in terms of resources."
},

// ── RD-09 ──
{
  type: "reverse-diag",
  scenario: "[FAILURE CASE] A software company builds an internal system where employees rate each other. High scorers get bonuses; low scorers go on the elimination list. Team collaboration collapses — employees start giving low scores to boost their relative rank. Turnover spikes. What design flaw does this expose?",
  options: [
    "A. The system created a Prisoner's dilemma — each person's rational choice (give low scores to protect oneself) led to collectively irrational outcomes",
    "B. The system distorted Incentives — the reward structure made harming colleagues more beneficial than helping them",
    "C. The system triggered Envy — public rankings made people unable to tolerate colleagues ahead of them",
    "D. The system violated Fairness sensitivity — relative rankings felt unfair, reducing work engagement"
  ],
  answer: 1,
  models: ["Incentives"],
  secondaryModels: ["Bias from Incentives"],
  explanation: "One of Munger's core maxims: \"Show me the incentive and I'll show you the outcome.\" This system's incentive design was fundamentally wrong — it rewarded not \"doing good work\" but \"winning the relative ranking.\" When giving low scores improves your relative position, rational employees will do it. The problem isn't the people; it's the system.",
  wrongReasons: "A — Prisoner's dilemma (game theory) precisely describes the game structure — each person's \"rational\" choice led to collective \"irrationality.\" But Prisoner's dilemma describes the math; Munger's Incentives more directly points at the designer's error: you created this flawed incentive structure. C — Envy (Munger) may amplify emotions, but even without envy, rational calculation would lead people to give low scores. D — Fairness sensitivity explains some turnover, but the root problem isn't \"feeling unfair\" — it's \"the system makes doing harm more beneficial.\""
},

// ── RD-10 ──
{
  type: "reverse-diag",
  scenario: "[FAILURE CASE] A chain restaurant founder has for 30 years personally tasted every new dish, interviewed every chef, and visited every location. He's 65 now, his health can't keep up, and the company can't scale because it's over-dependent on him. What is the biggest structural weakness of his business model?",
  options: [
    "A. He never transitioned from Fachkraft to Unternehmer — he kept \"working in the business\" instead of \"working on the business\"",
    "B. He built a system lacking Antifragility — heavy dependence on a single node (himself); if it fails, the whole system collapses",
    "C. His model violated Scale economics — without standardization there's no scalability; personal capability is an irreplicable bottleneck",
    "D. He ignored Replication — successful organizations need to systematize the founder's knowledge and standards for every unit"
  ],
  answer: 3,
  models: ["Replication"],
  secondaryModels: ["Scale"],
  explanation: "In Munger's biological models, Replication is the core feature of successful systems — DNA is powerful because it accurately replicates itself. This founder's problem: his quality standards, judgment, and taste live only in his head; they were never \"systematically replicated\" into transferable processes, training systems, and quality control. Without replication capacity, the scaling ceiling is the founder's personal energy.",
  wrongReasons: "A — Fachkraft vs Unternehmer (Merath) accurately describes his role dilemma — he stayed a specialist, not an entrepreneur. But that describes his role; Replication describes the system's structural weakness. B — Antifragility's (Taleb) single-point-of-failure analysis is correct, but antifragility emphasizes \"benefiting from shocks\"; here the issue is more basic — not how to respond to shocks, but how to make the system operate independently of one person. C — Scale economics is the outcome — inability to scale. But the root cause of why they can't scale is the lack of replication mechanism."
},

// ── RD-11 ──
{
  type: "reverse-diag",
  scenario: "[FAILURE CASE] A listed company beats expectations for three straight quarters. Wall Street analysts raise price targets. In Q4, results are slightly below expectations (but still at historic highs). The stock drops 25%. The CEO is baffled: \"We're doing better than ever — why are we being punished?\" What's going on?",
  options: [
    "A. The market is using Anchoring — three quarters of beats set a new psychological anchor; slightly below triggers panic",
    "B. This is Relative satisfaction/misreaction — people react to the gap versus expectations, not absolute performance",
    "C. This is Regression to the mean — investors expect high growth to be unsustainable and sell ahead",
    "D. The drop is Social proof cascade — a few big sellers triggered panic following"
  ],
  answer: 1,
  models: ["Relative Satisfaction/Misreaction"],
  secondaryModels: ["Anchoring"],
  explanation: "Munger's Relative satisfaction/misreaction tendency: people's satisfaction and reactions depend not on absolute levels but on the gap versus a reference point (expectations). Results at historic highs are \"punished\" because the market's reference point had been raised — investors aren't evaluating \"is the company doing well?\" but \"how did it perform versus their already-high expectations?\"",
  wrongReasons: "A — Anchoring (Kahneman) is relevant — the first three quarters set a high anchor. But anchoring explains why expectations were raised; Relative satisfaction more directly explains why slightly below high expectations triggers a sharp reaction. C — Regression to the mean is what rational investors might analyze, but a 25% drop isn't rational mean-reversion math — it's an emotional \"below expectations\" reaction. D — Social proof may have accelerated the drop, but the trigger was the perception of \"below expectations.\""
},

// ── RD-12 ──
{
  type: "reverse-diag",
  scenario: "[FAILURE CASE] An entrepreneur's friend just IPO'd in the same industry and made $50 million. The entrepreneur was content with his business ($3M annual revenue) but afterward becomes intensely anxious and starts taking big risks for rapid expansion. The company eventually collapses from over-expansion. What was the most fundamental psychological force driving his risk-taking?",
  options: [
    "A. He was driven by Loss aversion — feeling he \"lost\" money he could have made; the pain of loss outweighs the joy of gain",
    "B. He was driven by Envy — Munger says \"envy is the only sin that gives no pleasure\"",
    "C. His reference point was shifted by Anchoring — his friend's $50M became the new anchor; $3M seemed pitiful",
    "D. He was driven by Social comparison — happiness comes from comparing to peers, not absolute levels"
  ],
  answer: 1,
  models: ["Envy & Jealousy"],
  secondaryModels: ["Relative Satisfaction/Misreaction"],
  explanation: "Munger repeatedly warns: envy is the most foolish and destructive emotion. \"Caring that others make money faster than you is a deadly sin.\" The entrepreneur's $3M revenue was objectively good, but envy made him unable to enjoy his own success and drove him toward unrealistic goals. Munger: envy won't make you richer; it will only make you do stupid things.",
  wrongReasons: "A — Loss aversion (Kahneman's prospect theory) has merit — he may have felt he \"missed out\" on $47M. But he didn't actually \"lose\" anything; he was envious of what others \"got.\" C — Anchoring did make $50M the new reference point, but that's the mechanism of envy, not the driver itself. D — Social comparison is a psychology concept, but Munger's Envy model is more direct — it describes not just comparison but the destructive impulse to act that comparison produces."
},

// ── RD-13 ──
{
  type: "reverse-diag",
  scenario: "[FAILURE CASE] An online education company has an excellent product with 95% user satisfaction. But it keeps losing money because customer acquisition cost is 3x customer lifetime value. The founder insists \"if the product is good, users will come\" and refuses any paid marketing. When asked \"What's your acquisition model?\" he says \"Word of mouth.\" What is the most fundamental thinking blind spot?",
  options: [
    "A. He fell for Wishful thinking — treating \"what he hopes will happen\" as strategy",
    "B. He ignored Activation energy — even with a good product, users need to cross an energy threshold from \"knowing\" to \"trying\"",
    "C. He was misled by Survivorship bias — he only sees companies that succeeded via word of mouth, ignoring the many with great products that nobody knows",
    "D. He lacked Systems thinking — product and marketing are parts of one system; you can't optimize only one"
  ],
  answer: 1,
  models: ["Activation Energy"],
  secondaryModels: ["Catalyst"],
  explanation: "Munger's chemistry model, Activation energy: even when a reaction (user adoption) is thermodynamically favorable (the product is good), it still needs a minimum energy threshold to start. There's a huge cognitive and behavioral barrier between \"don't know this product\" and \"willing to spend time trying it.\" Word of mouth spreads far slower than paid acquisition; without a catalyst (marketing spend) to lower activation energy, a great product can remain unknown forever.",
  wrongReasons: "A — Wishful thinking is an intuitively correct criticism but not a precise thinking model. C — Survivorship bias (Munger) has merit — he did only see word-of-mouth successes. But the problem is more precisely that he doesn't understand the \"energy threshold\" of acquisition, not that his data is biased. D — Systems thinking (Varol, Think Like a Rocket Scientist) is correct methodological advice but too broad — Munger's Activation energy precisely captures the physics: even a good product needs energy input to trigger adoption."
},

// ── RD-14 ──
{
  type: "reverse-diag",
  scenario: "[FAILURE CASE] A country gives every adult citizen $10,000 in consumption vouchers to stimulate the economy, valid for one month. Initial consumption data surges; politicians declare the policy a success. Three months later, data shows total consumption in the voucher month was almost identical to the average of surrounding months. What happened?",
  options: [
    "A. Citizens used vouchers on things they would have bought anyway — Substitution effect; new spending replaced existing spending",
    "B. Citizens pulled forward next month's demand into the voucher month — consumption was displaced in time, not increased",
    "C. This is the Endowment effect — people treated vouchers as \"extra income\" rather than \"stimulus tool\"",
    "D. This is Inertia — consumption habits have huge inertia; short-term stimulus can't change long-term behavior"
  ],
  answer: 3,
  models: ["Inertia"],
  secondaryModels: ["Homeostasis"],
  explanation: "Munger's physics model, Inertia: objects in motion tend to stay in motion; objects at rest tend to stay at rest. Consumption behavior has enormous inertia — people's spending habits, savings tendencies, and lifestyles form long-term steady-state systems. A one-time $10,000 voucher is like a push on a flywheel — temporary acceleration, then back to the original track. The system's steady-state force far outweighs short-term stimulus.",
  wrongReasons: "A — Substitution effect is correct economics — vouchers did replace existing spending. But Munger's Inertia more fundamentally explains why substitution happens: consumption habits have inertia; people won't change overall spending patterns because of a windfall. B — Time displacement is correct observation, but also a manifestation of inertia. C — Endowment effect (Kahneman) is a psychological mechanism, but the issue here isn't how people view vouchers — it's that consumption behavior has inertia and won't be changed by short-term stimulus."
},

// ── RD-15 ──
{
  type: "reverse-diag",
  scenario: "[FAILURE CASE] A social media company adopts a \"fully open, no moderation\" strategy for rapid growth at launch. User count surges to 5 million. But fake accounts, spam, and fraud flood in. Quality users leave; platform quality plummets. Which model best describes this evolution?",
  options: [
    "A. This is the digital version of Tragedy of the Commons — an open platform is digital commons; lack of governance leads to abuse",
    "B. This is Gresham's Law — bad money drives out good; low-quality content and users drive out high-quality users",
    "C. This is the inverse of Network effects — more users didn't add value; they added noise",
    "D. This is a lesson in Via negativa — the platform didn't lack features; it lacked filtering of harmful elements"
  ],
  answer: 1,
  models: ["Gresham's Law"],
  secondaryModels: ["Tragedy of the Commons"],
  explanation: "Munger's Gresham's Law (bad money drives out good) perfectly describes this dynamic: when good and bad can circulate freely in a system, the bad gradually drives out the good. Fake accounts and spam (bad money) degraded the platform experience; quality users (good money) left for better platforms. This isn't \"good and bad coexist\" — it's a one-way process of bad driving out good.",
  wrongReasons: "A — Tragedy of the Commons describes shared-resource abuse, but its core is \"overconsumption,\" not \"bad drives out good.\" Here the issue isn't users \"using too much\" platform resources — it's bad users driving away good users. C — Inverse network effects correctly describes the outcome (more users, worse experience), but Gresham's Law describes the mechanism (why it gets worse — bad drives out good). D — Via negativa is the right solution — filter harmful elements. But the question asks what model the evolution fits, not how to fix it."
},

// ── RD-16 ──
{
  type: "reverse-diag",
  scenario: "[FAILURE CASE] A hedge fund manager uses a complex quant model with 200 variables. Backtesting is perfect (45% annualized return). Live trading loses 60% in year one. External audit finds severe overfitting — the model perfectly explains the past but can't predict the future. What fundamental thinking error does this expose?",
  options: [
    "A. He fell for Illusion of validity — the more perfect the model looked on historical data, the more he believed it could predict the future",
    "B. He didn't understand Randomness — much of the \"pattern\" in markets is noise; 200 variables were fitting noise",
    "C. He violated Occam's Razor — a 200-variable model violates \"simplicity first\"; excess complexity is overfitting",
    "D. He was affected by Overconfidence — perfect backtest results made him overestimate the model's true predictive power"
  ],
  answer: 2,
  models: ["Occam's Razor"],
  secondaryModels: ["Randomness"],
  explanation: "Munger's Occam's Razor: models should be as simple as possible. A 200-variable model almost certainly fits noise rather than signal — it perfectly explains every past data point (including random fluctuation), but that \"perfection\" proves it hasn't captured real causality. Einstein: \"A theory should be as simple as possible, but not simpler.\" Two hundred variables far exceeds that threshold.",
  wrongReasons: "A — Illusion of validity (Kahneman) was at work — perfect backtest boosted confidence. But the illusion is a psychological response; Occam's Razor points at the methodological error. B — Randomness is correct — 200 variables were fitting noise. But randomness explains why markets are hard to predict; Occam's Razor explains why this model is flawed. D — Overconfidence describes psychological state, but the root cause is model design, not cognitive bias."
},

// ── RD-17 ──
{
  type: "reverse-diag",
  scenario: "[FAILURE CASE] A developing country sees its neighbor grow rich from oil exports. It throws everything into oil, neglecting education, agriculture, and manufacturing. When oil prices crash, the economy collapses; unemployment hits 40%. What strategic error did this country make?",
  options: [
    "A. They ignored Comparative advantage — they should have developed industries they're actually good at, not imitated the neighbor",
    "B. They committed Multiplication by zero — over-reliance on one industry; when that factor goes to zero, the whole goes to zero",
    "C. They violated Ecosystem thinking — a healthy economy needs a diverse industrial ecosystem, not a monoculture",
    "D. They were driven by Social proof — because the neighbor did it, they followed; lacked independent judgment"
  ],
  answer: 2,
  models: ["Ecosystem"],
  secondaryModels: ["Fragility-Robustness-Antifragility"],
  explanation: "Munger's Ecosystem model: healthy systems need diverse components supporting each other, like natural ecosystems. A single-species environment is extremely fragile — one disease wipes everything out. This country turned its economy into a monoculture farm, losing the resilience that diversity provides. A diverse industrial structure can lean on other industries when one declines — that's the foundation of antifragility.",
  wrongReasons: "A — Comparative advantage suggests doing what you're good at, but the core issue isn't whether they're good at oil (maybe they have oil resources) — it's economic ecosystem diversity. B — Multiplication by zero correctly describes the math of single-point fragility, but the Ecosystem model more completely explains why diversity is necessary — not just to avoid \"going to zero\" but because diverse elements create synergies. D — Social proof may have been the initial decision motive, but even with independent judgment to develop oil, lack of ecosystem diversity remains a fatal weakness."
},

// ── RD-18 ──
{
  type: "reverse-diag",
  scenario: "[FAILURE CASE] A beverage company CEO presents to the board: market share dropped from 15% last year to 13%. He proposes a $200M ad campaign to \"recapture share.\" An independent director finds: the entire beverage market shrank 20% in that period; the company's absolute sales actually rose. What fundamental error did the CEO's analysis make?",
  options: [
    "A. He was affected by Anchoring — 15% became the psychological anchor; 13% looked like \"decline\"",
    "B. He committed Hasty generalization — he looked at market share alone, ignoring absolute sales and overall market trend",
    "C. He used a Narrow framing — he isolated market share from the broader context, missing the bigger picture",
    "D. He committed Map is not the Territory — market share is the \"map\"; the company's real competitiveness and performance are the \"territory\""
  ],
  answer: 3,
  models: ["Map Is Not the Territory"],
  secondaryModels: [],
  explanation: "The CEO treated the \"market share\" map as the \"company performance\" territory. Market share dropped 2 percentage points, but in reality: (1) absolute sales grew; (2) the overall market shrank, meaning the company declined more slowly than competitors. Market share is a useful metric, but it's not a complete representation of company performance. Making a $200M strategy based on an incomplete \"map\" is classic \"mistaking the metric for reality.\"",
  wrongReasons: "A — Anchoring (Kahneman) may have made 15% the reference point, but the bigger issue is that the entire analytical framework was wrong — not just \"anchored.\" B — Hasty generalization is correct but too broad. C — Narrow framing (Kahneman) is correct — he did use too narrow a frame. But Map is not the Territory more precisely captures the error's essence: not that the frame was too narrow, but that he conflated the metric (map) with reality (territory)."
},

// ── RD-19 ──
{
  type: "reverse-diag",
  scenario: "[FAILURE CASE] A nonprofit dedicated to protecting endangered species launches a large campaign asking millions to \"like for conservation\" on social media. The campaign gets huge media attention and social approval. Three years later, data shows endangered species numbers continue to decline with no improvement. What was the root cause of the like campaign's failure?",
  options: [
    "A. This is Map is not the Territory — likes are the \"map,\" species count is the \"territory\"; they confused them",
    "B. This is Action bias (illusory) — liking made people \"feel\" they were helping, but there was no real conservation action",
    "C. This is Reciprocity failure — they gave people \"feeling of doing good\" as a free gift but got no real action in return",
    "D. This is Denial tendency — society used liking to \"process\" environmental anxiety, avoiding the harder actions the problem actually requires"
  ],
  answer: 3,
  models: ["Denial"],
  secondaryModels: ["Action Bias"],
  explanation: "Munger's Denial tendency: when facing painful reality, humans seek ways to \"process\" anxiety rather than actually solve the problem. Liking provided a perfect denial outlet — it let people feel they \"did something,\" reducing environmental anxiety without doing anything truly difficult (changing consumption habits, donating, participating in field conservation). Liking wasn't solving the problem; it was denying how hard the problem really is.",
  wrongReasons: "A — Map is not the Territory describes the org confusing metrics and reality, but the org may have known likes ≠ conservation — their problem wasn't \"confusing metrics\" but that their strategy let the public's conservation motivation get consumed by \"liking.\" B — Action bias was at work — people felt they were acting. But action bias describes \"doing ineffective things\"; Denial goes deeper — people \"actively chose\" ineffective action because it provided psychological comfort without facing painful reality. C — Reciprocity (Cialdini) is a creative analysis, but the like campaign wasn't applying reciprocity."
},

// ── RD-20 ──
{
  type: "reverse-diag",
  scenario: "[FAILURE CASE] An entrepreneur's company has $50M annual revenue and stable profits. A successful VC friend advises: \"You should raise $100M, scale fast, and IPO in three years.\" He instinctively feels it's wrong but can't articulate why. He follows the advice; three years later the company IPOs — but he holds only 8%, and the market is down, so the stock is below expectations. Was his intuition right? Where?",
  options: [
    "A. His intuition sensed Leverage risk — external funding is leverage; it amplifies good and bad outcomes",
    "B. His intuition was actually Loss aversion — fear of losing control; not necessarily rational judgment",
    "C. His intuition sensed Opportunity cost — funding and scaling consumed time and energy he could have used elsewhere",
    "D. His intuition was right — Sit on Your Ass Investing: a stable, profitable business in your circle of competence doesn't need to chase exponential growth"
  ],
  answer: 3,
  models: ["Sit on Your Ass Investing"],
  secondaryModels: ["Circle of Competence"],
  explanation: "Munger's Sit on Your Ass Investing applies beyond stocks — its core spirit: if you already have a good, stable business within your circle of competence, the best strategy may be to keep running it rather than pursue external funding and rapid scaling. Raising $100M and IPO-ing sounds \"bigger,\" but the result was going from 100% ownership to 8%, with vastly increased complexity and risk. His intuition was telling him: sometimes \"doing nothing\" is the best move.",
  wrongReasons: "A — Leverage correctly identifies risk — funding is leverage. But the question asks where his intuition was right; his intuition wasn't just risk perception — it was a felt alignment with the philosophy that a good business doesn't need to be changed. B — Loss aversion is a counter-argument — maybe he was just afraid. But the outcome proved his intuition right (8% stake + below-expectation stock), so loss aversion here isn't bias but correct risk perception. C — Opportunity cost analyzes the time/energy cost, but the more fundamental issue: he didn't need to pursue \"bigger\" in the first place."
}

);
