// ═══════════════════════════════════════════════════════════════
//  03 — Systems Thinking Models
//  19 questions
// ═══════════════════════════════════════════════════════════════

allQuestions.push(

// ── Q1 ── Margin of Safety
{
  scenario: "You estimate a company's intrinsic value at roughly $50 per share. The current price is $48. Your investment partner suggests buying immediately because it's below intrinsic value. What would Munger say?",
  options: [
    "A. Agree to buy — anything below intrinsic value is worth it",
    "B. Wait until the price drops to around $30–35, leaving a substantial margin of safety",
    "C. Apply anchoring — are you anchored to the $50 figure?",
    "D. Given the endowment effect, once you buy you'll be reluctant to sell — so don't buy"
  ],
  answer: 1,
  models: ["Margin of Safety"],
  secondaryModels: [],
  explanation: "Munger and Buffett treat margin of safety as the cornerstone of investing. Intrinsic value estimates are inherently uncertain; $48 is too close to $50 to leave meaningful room for error. Buying at a significant discount to intrinsic value limits downside even if your valuation is off or conditions worsen.",
  wrongReasons: "A ignores the uncertainty in valuation itself. C — anchoring (Kahneman) is a real cognitive bias, but the issue here isn't that you're anchored; it's that you need margin of safety — even with a correct estimate, $48 is too close to $50. D — the endowment effect (Kahneman/Thaler) describes overvaluing what you own; the pre-purchase decision hinges on margin of safety, not fear of being unwilling to sell later."
},

// ── Q2 ── Network Effects + Criticality
{
  scenario: "A new social platform's user base grows from 1 million to 5 million. Suddenly, each additional user drives a sharp jump in value, and advertisers rush in. What concept does this best illustrate?",
  options: [
    "A. Compound interest — returns accumulate and roll over",
    "B. Viral loop time — user invitations have sped up",
    "C. Network effects plus critical mass — value jumps nonlinearly once users cross a threshold",
    "D. Possibility effect — small probabilities get overweighted"
  ],
  answer: 2,
  models: ["Network Effects"],
  secondaryModels: ["Criticality"],
  explanation: "Network effects: a product's value rises as more people use it. Add critical mass — once the user base crosses a threshold, positive feedback accelerates and value jumps nonlinearly. Munger weighs network effects heavily when assessing moats.",
  wrongReasons: "A — compound interest is about capital growth, not user interaction value. B — viral loop time (Eyal, Hooked / Skok) describes how fast users invite others — it's a growth mechanism, but doesn't explain why each new user adds nonlinearly more value. D — the possibility effect (Kahneman) is prospect theory's overweighting of small probabilities; it's unrelated to platform value growth."
},

// ── Q3 ── Fragility–Robustness–Antifragility
{
  scenario: "When COVID-19 hit in early 2020, many restaurants neared collapse. Some that had kept large cash reserves and diversified into delivery not only survived but expanded, taking share from those that exited. What trait did these restaurants display?",
  options: [
    "A. Pure luck — no one could foresee the pandemic",
    "B. Antifragility — their systems not only survived the shock but grew stronger",
    "C. Habit zone — they got consumers into a delivery habit",
    "D. Optimism bias — they held cash because they overestimated risk"
  ],
  answer: 1,
  models: ["Fragility–Robustness–Antifragility"],
  secondaryModels: ["Redundancy"],
  explanation: "Taleb's antifragility: fragile systems break under stress, robust ones withstand it, antifragile ones benefit from volatility. These restaurants held cash (redundancy) and diversified; in the crisis they not only survived but expanded.",
  wrongReasons: "A reduces systemic advantage to luck. C — the habit zone (Eyal, Hooked) analyzes whether a product can form habits — delivery habits are one outcome, but the question is what trait these restaurants displayed, and the answer is system-level antifragile design, not just product habits. D — optimism bias (Kahneman) is overestimating good outcomes; these restaurants held cash out of caution, the opposite of optimism bias."
},

// ── Q4 ── Scale
{
  scenario: "A 5-person studio is highly efficient. When the company grows to 50 people, coordination costs soar and efficiency drops. What does this illustrate?",
  options: [
    "A. Scale — a system's nature and behavior change with size; what works at small scale may not at large",
    "B. Ego depletion — 50 people require more willpower to manage, so efficiency falls",
    "C. The 9x rule — a new organization must be nine times better than the old one to succeed",
    "D. Law of concentration — stay small and focused"
  ],
  answer: 0,
  models: ["Scale"],
  secondaryModels: [],
  explanation: "A system's nature changes with scale. Five people can coordinate informally; fifty need formal processes. Munger stresses thinking in orders of magnitude when analyzing systems — don't extrapolate linearly.",
  wrongReasons: "B — ego depletion (Kahneman/Baumeister) is about individual willpower limits — it doesn't apply to organizational complexity. C — the 9x rule (Eyal citing Gourville) says a new product must be nine times better than the old one to overcome habits — it's about products, not organizational size. D — Law 23 (Greene) advises concentrating force — that's a power tactic, not systems analysis; the question is about explaining the phenomenon, not prescribing action."
},

// ── Q5 ── Law of Diminishing Returns
{
  scenario: "A farmer fertilizes a field. At first, yield rises sharply. Beyond a certain point, more fertilizer adds little or even reduces yield. What principle does this best match?",
  options: [
    "A. Law of diminishing returns — as you keep adding one input, marginal output eventually falls",
    "B. Diminishing sensitivity — the farther from the reference point, the less sensitive you are to change",
    "C. Finite variability — once outcomes become predictable, appeal disappears",
    "D. Cognitive strain — fertilizer decisions consume too much cognitive resource"
  ],
  answer: 0,
  models: ["Law of Diminishing Returns"],
  secondaryModels: [],
  explanation: "Holding other factors constant, adding more of one input eventually yields smaller marginal returns, or even negative ones. This basic economic principle says there's a limit — more input isn't always better.",
  wrongReasons: "B — diminishing sensitivity (Kahneman, prospect theory) describes psychological sensitivity to gains and losses as distance from a reference point — it's a mental phenomenon; diminishing returns is a physical/economic one. C — finite variability (Eyal) is about product design: predictable experiences lose appeal — unrelated to agricultural input-output. D is off-topic."
},

// ── Q6 ── Pareto Principle
{
  scenario: "You analyze your business and find that 20% of customers generate 80% of revenue. What should you do?",
  options: [
    "A. Pareto Principle — focus effort on that 20% of key customers for maximum impact",
    "B. Habit zone — ensure those 20% are within your product's habit zone",
    "C. Narrow framing — you shouldn't look at just 20%; look at all customers",
    "D. Disassemblable brand — make the brand more recognizable to that 20%"
  ],
  answer: 0,
  models: ["Pareto Principle"],
  secondaryModels: [],
  explanation: "The Pareto Principle (80/20 rule): 80% of results come from 20% of causes. Apply it by focusing on the few factors that drive most impact. Munger often cites it to stress identifying the main levers.",
  wrongReasons: "B — the habit zone (Eyal) analyzes whether a product forms habits — it's a different level from customer revenue distribution. C — narrow framing (Kahneman) advises looking at the whole picture — but the Pareto Principle says precisely that you should not spread resources evenly and should focus on the vital few. D — disassemblable brand (Lindstrom) is a brand design concept — unrelated to customer revenue analysis."
},

// ── Q7 ── Feedback Loops & Homeostasis
{
  scenario: "In a stock market bubble, rising prices trigger more buying, which pushes prices higher, and the cycle repeats until the crash. What best describes this process?",
  options: [
    "A. Positive feedback loop — output amplifies input; A causes B, B further strengthens A",
    "B. Hook Model — trigger → action → reward → investment in a four-step loop",
    "C. WYSIATI — investors see only the recent rise and assume it will last forever",
    "D. Dopamine-driven purchase decisions — the thrill of gains drives repeated buying"
  ],
  answer: 0,
  models: ["Feedback Loops & Homeostasis"],
  secondaryModels: [],
  explanation: "Positive feedback is a loop where output amplifies input: higher prices → more buying → higher prices. Munger stresses that understanding feedback loops helps predict system dynamics — why some trends accelerate until they break.",
  wrongReasons: "B — the Hook Model (Eyal) is for designing product habits — the structure looks similar but the purpose is different; bubbles aren't designed habit loops. C — WYSIATI (Kahneman) is one of investors' cognitive flaws — but the question is about system dynamics, not individual cognition. D — dopamine (Lindstrom) explains individual impulse — feedback loops are structural features at the system level."
},

// ── Q8 ── Chaos Dynamics
{
  scenario: "Weather forecasts lose accuracy sharply beyond a certain horizon because tiny differences in initial conditions get amplified into large errors. What phenomenon is this?",
  options: [
    "A. Chaos dynamics — small differences in initial conditions lead to vastly different outcomes (butterfly effect)",
    "B. Planning fallacy — forecasters underestimate how hard prediction is",
    "C. Randomness — weather is inherently random",
    "D. Overconfidence — forecasters overestimate their predictive ability"
  ],
  answer: 0,
  models: ["Chaos Dynamics"],
  secondaryModels: [],
  explanation: "Chaos theory: in highly nonlinear systems, tiny differences in initial conditions produce radically different outcomes — the butterfly effect. Weather is a classic chaotic system; even with full physical laws, long-range prediction is impossible.",
  wrongReasons: "B — the planning fallacy (Kahneman) is underestimating project time and cost — unrelated to the physical limits of weather prediction. C — weather isn't purely random; it follows deterministic physics but is extremely sensitive to initial conditions, which makes it look random. D — overconfidence is a cognitive bias — but the issue here is the nature of the physical system, not forecaster psychology."
},

// ── Q9 ── Preferential Attachment / Cumulative Advantage
{
  scenario: "Facebook captured the social market early; later platforms struggled to compete. The more users a platform has, the more valuable it becomes, attracting more users and widening the gap. What does this illustrate?",
  options: [
    "A. Cumulative advantage (Matthew effect) — leaders gain further advantage from existing advantage, so the lead keeps growing",
    "B. Stored value — users have invested too much content and connections in Facebook to leave",
    "C. Endowment effect — users overvalue what they have on Facebook",
    "D. Law 11 — make people depend on you; Facebook deliberately created dependence"
  ],
  answer: 0,
  models: ["Preferential Attachment / Cumulative Advantage"],
  secondaryModels: [],
  explanation: "Cumulative advantage (Matthew effect): success reinforces itself. This applies not only to wealth and fame but also to network effects. More users → more value → more users → widening gap — the strong get stronger.",
  wrongReasons: "B — stored value (Eyal) describes switching costs — users do stay partly for that reason, but cumulative advantage explains the deeper structural dynamic: why the gap widens, not just why users don't leave. C — the endowment effect (Kahneman) is individual psychology — overvaluing what you own — but here the issue is market structure. D — Law 11 (Greene) frames it as manipulation — cumulative advantage is a natural system phenomenon, not necessarily by design."
},

// ── Q10 ── Emergence
{
  scenario: "Each ant in a colony has very limited intelligence, yet the colony builds complex nests and finds shortest paths to food through simple interactions. What is this \"whole greater than the sum of parts\" phenomenon?",
  options: [
    "A. Emergence — simple lower-level elements interacting produce new higher-level properties",
    "B. Tribal rewards — ants get social validation from group interaction",
    "C. Associative activation — signals between ants trigger chain reactions",
    "D. Mirror neurons — ants are imitating each other"
  ],
  answer: 0,
  models: ["Emergence"],
  secondaryModels: [],
  explanation: "Emergence: simple elements interacting produce new higher-level properties that don't exist in any single element. Ant colonies are a classic example — collective behavior far exceeds the sum of individual capabilities.",
  wrongReasons: "B — tribal rewards (Eyal, Hooked) is about product design using social validation — ants don't have social validation. C — associative activation (Kahneman) is how ideas trigger related ideas in the brain — a different level from collective emergence. D — mirror neurons (Lindstrom) explain individual imitation — ants interact via pheromones, not mirror-neuron-driven imitation."
},

// ── Q11 ── Irreducibility
{
  scenario: "A client wants to compress a 6-month software project into 2 months and suggests \"tripling the team.\" What concept do you cite to push back?",
  options: [
    "A. Irreducibility — some tasks have a minimum time requirement; you can't compress indefinitely by adding people",
    "B. Planning fallacy — the client underestimates the project's actual complexity",
    "C. Fogg Behavior Model — without enough motivation and ability, behavior won't occur",
    "D. Competition neglect — the client isn't considering other projects competing for talent"
  ],
  answer: 0,
  models: ["Irreducibility"],
  secondaryModels: [],
  explanation: "Some systems have irreducible minimums: you can't have nine women produce one baby in one month. Software has sequential dependencies and communication costs; adding people can slow things down (the mythical man-month). Munger warns that ignoring natural limits leads to wasted effort.",
  wrongReasons: "B — the planning fallacy (Kahneman) is one of the client's cognitive biases — but Munger's irreducibility points to a deeper fact: some tasks have a physical time floor, which psychology alone can't explain. C — the Fogg Behavior Model (cited by Eyal) is about triggering individual behavior — unrelated to project timelines. D — competition neglect (Kahneman) is firms ignoring competitors — a different issue from schedule compression."
},

// ── Q12 ── Tragedy of the Commons
{
  scenario: "In the ocean, each fisherman wants to catch more fish for profit. When everyone does this, fish stocks collapse and everyone ends up with nothing. What problem is this?",
  options: [
    "A. Tragedy of the commons — individual rationality leads to collective irrationality with shared resources",
    "B. Narrow framing — each fisherman looks only at his own boat, not the whole ocean",
    "C. Law 40 — despise free lunches; free ocean resources must have a cost",
    "D. Prisoner's dilemma — each fisherman chose the strategy best for himself"
  ],
  answer: 0,
  models: ["Tragedy of the Commons"],
  secondaryModels: [],
  explanation: "Tragedy of the commons: with shared resources, each individual overuses for personal benefit, eventually depleting the resource so everyone suffers. Solutions include property rights, regulation, or cooperation.",
  wrongReasons: "B — narrow framing (Kahneman) is a cognitive flaw in individual decisions — but the tragedy of the commons is a structural game, not individual cognition. C — Law 40 (Greene) warns that free things have a cost — related in spirit but oversimplified; the core of the tragedy is collective action failure, not just 'the cost of free.' D — the prisoner's dilemma is closely related, but the tragedy of the commons is more precise — the prisoner's dilemma is two-player; the tragedy of the commons is a specific many-player, shared-resource structure, and Munger treats them as distinct models."
},

// ── Q13 ── Gresham's Law
{
  scenario: "An online platform doesn't crack down on fake reviews. Honest reviews get drowned out, consumers stop trusting any reviews, and even good merchants suffer. What phenomenon is this?",
  options: [
    "A. Gresham's Law — bad money drives out good; in unregulated systems, low quality crowds out high quality",
    "B. Tribal rewards failing — the social validation mechanism is broken",
    "C. Availability bias — fake reviews are more salient so they get more attention",
    "D. Vampire effect — fake reviews steal attention from real ones"
  ],
  answer: 0,
  models: ["Gresham's Law"],
  secondaryModels: [],
  explanation: "Gresham's Law (bad money drives out good): when a system doesn't punish bad behavior, low quality gradually crowds out high quality. With no review oversight, cheap fake reviews proliferate → consumers lose trust → honest merchants are dragged down.",
  wrongReasons: "B — tribal rewards (Eyal) analyzes social validation incentives in products — too narrow. C — availability bias (Kahneman) explains why fake reviews get more attention — it doesn't explain how bad quality systematically drives out good. D — the vampire effect (Lindstrom) is when sexy ads steal attention from the brand — a different concept."
},

// ── Q14 ── Lindy Effect
{
  scenario: "You're evaluating a 200-year-old whisky distillery vs. a 2-year-old viral beverage brand. Which would you expect to last longer, and why?",
  options: [
    "A. Lindy effect — the longer something has already existed, the longer it's expected to continue",
    "B. Representativeness heuristic — you judge by how much it 'looks like' an old brand",
    "C. Ten religious pillars — the 200-year brand has cult-like followers",
    "D. Halo effect — the old brand makes you view everything about it positively"
  ],
  answer: 0,
  models: ["Lindy Effect"],
  secondaryModels: [],
  explanation: "The Lindy effect: for non-perishable things, expected remaining lifespan is proportional to current age. A 200-year distillery has survived countless market shifts — that itself is strong evidence of durability. A 2-year brand hasn't been tested by time.",
  wrongReasons: "B — the representativeness heuristic (Kahneman) is judging probability by resemblance to a type — but here the issue isn't appearance; it's objective historical survival. C — religious pillars (Lindstrom) describe the emotional side of brand loyalty — interesting but not the root cause; 200 years of survival isn't just about loyal fans. D — the halo effect (Kahneman) may be at play — you might favor the old brand — but the Lindy effect offers a statistical regularity, not a psychological bias."
},

// ── Q15 ── Complex Adaptive Systems
{
  scenario: "An ecosystem that's too homogeneous (one crop only) can be wiped out by a single pest. With diversity, the system keeps adapting. What concept best matches this system characteristic?",
  options: [
    "A. Complex adaptive systems — systems of many interacting agents that self-adjust to environmental change",
    "B. System 1 / System 2 — the system needs both fast response and deep analysis",
    "C. Variable rewards — diversity provides ongoing novelty",
    "D. Sensory branding — diverse sensory stimuli are more appealing"
  ],
  answer: 0,
  models: ["Complex Adaptive Systems"],
  secondaryModels: [],
  explanation: "Complex adaptive systems consist of many interacting agents that self-adjust to their own and environmental changes. An evolutionary view: adapt through diversity and feedback rather than trying to design a perfect solution once.",
  wrongReasons: "B — System 1/2 (Kahneman) is a dual-system model of individual cognition — not for describing ecosystem adaptability. C — variable rewards (Eyal) is about keeping users engaged with novelty in product design — not ecosystem diversity. D — sensory branding (Lindstrom) is off-topic."
},

// ── Q16 ── Black Swan
{
  scenario: "Extremely rare but hugely consequential events — like 9/11 or the COVID-19 pandemic — are almost never anticipated beforehand, yet afterward people often find 'obvious' warning signs. What framework would Munger use for such events?",
  options: [
    "A. Black Swan — extremely rare, hugely consequential, and unpredictable events",
    "B. Hindsight bias — after the fact, we feel we saw the signs all along",
    "C. Narrative fallacy — we construct a plausible story after the fact",
    "D. Neuro-marketing's predictive power — brain scans might have predicted it"
  ],
  answer: 0,
  models: ["Black Swan"],
  secondaryModels: [],
  explanation: "Black Swan events (Taleb): extremely rare, hugely consequential, and unpredictable. Almost no one anticipates them; afterward they're often given explanations. Munger stresses maintaining enough margin of safety and resilience to handle Black Swans.",
  wrongReasons: "B — hindsight bias (Kahneman) describes the 'I knew it all along' feeling — but the question is how to view such events, not just the post-hoc cognitive bias. C — the narrative fallacy (Kahneman/Taleb) is related — constructing stories after the fact is human — but Munger's Black Swan framework offers a forward-looking response (stay resilient), not just a description of cognitive error. D is absurd — brain scans can't predict geopolitical events."
},

// ── Q17 ── Via Negativa
{
  scenario: "A health expert advises: instead of chasing the latest superfood, first quit smoking, late nights, and heavy drinking. Which Munger model does this advice best match?",
  options: [
    "A. Via Negativa — improve by removing negatives; often more effective than pursuing positives",
    "B. Loss aversion — the pain of losing health outweighs the pleasure of gaining it",
    "C. Painkiller vs. vitamin — quitting bad habits is a painkiller, chasing superfoods is a vitamin",
    "D. Law 36 — despise what you can't have; don't chase superfood hype"
  ],
  answer: 0,
  models: ["Via Negativa"],
  secondaryModels: [],
  explanation: "Via Negativa: improve by removing negatives. Munger and Taleb both stress 'first, do no harm' — stop doing bad things (quit smoking, drinking), and the system improves. Avoiding stupidity matters more than pursuing brilliance.",
  wrongReasons: "B — loss aversion (Kahneman) describes psychological overreaction to losses — different from the rational logic of health advice. C — painkiller vs. vitamin (Eyal) is a product assessment framework — an interesting analogy but not Munger's model. D — Law 36 (Greene) advises psychologically despising what you can't have — but Via Negativa isn't despising superfoods; it's saying subtracting bad things is more effective than adding good ones."
},

// ── Q18 ── Bottlenecks
{
  scenario: "You run a SaaS company. One step in the production process is slowest; all orders pile up there. You speed up the other steps, but overall throughput doesn't improve. Why?",
  options: [
    "A. Bottleneck — overall system efficiency is limited by the slowest step; improving other steps doesn't help",
    "B. Ego depletion — the team burns too much cognitive resource at the bottleneck",
    "C. Six elements of simplicity — the bottleneck step has too high 'time' and 'brain' cost",
    "D. Multiplication-by-zero effect — if the bottleneck stops entirely, output goes to zero"
  ],
  answer: 0,
  models: ["Bottlenecks"],
  secondaryModels: [],
  explanation: "A bottleneck is the slowest or lowest-capacity step; it limits the whole system's output. Improving other steps won't raise overall speed — only relieving the bottleneck will. Munger stresses identifying the main constraint.",
  wrongReasons: "B — ego depletion (Kahneman/Baumeister) is about individual willpower — not a process analysis concept. C — simplicity elements (Eyal/Fogg) analyze difficulty of individual behavior execution — not production process analysis. D — multiplication by zero describes catastrophic failure (one step at zero); a bottleneck is 'slow,' not 'zero' — the system still runs, just at limited speed."
},

// ── Q19 ── Prisoner's Dilemma
{
  scenario: "Two airlines both want to cut prices to win customers. If both cut, both lose money. If only one cuts, that one takes all the customers. If neither cuts, both keep profits. What's the most likely outcome?",
  options: [
    "A. Prisoner's dilemma — rational self-interest leads both to cut (mutual defection), leaving both worse off than cooperation",
    "B. Loss aversion — both fear losing customers so they race to cut first",
    "C. Law 15 — crush the enemy totally; drive the rival out of the market",
    "D. Mutually assured destruction — both can destroy the other so neither dares to start"
  ],
  answer: 0,
  models: ["Prisoner's Dilemma"],
  secondaryModels: [],
  explanation: "Prisoner's dilemma: each side acts in self-interest with a confrontational strategy, and the group ends up worse off. Airline price wars are a classic case — both cut to avoid losing, and both lose. Solutions require cooperation or tacit collusion mechanisms.",
  wrongReasons: "B — loss aversion (Kahneman) describes individual psychology — but the prisoner's dilemma is a game structure; even fully rational players get trapped. C — Law 15 (Greene) is a power-game tactic of total elimination — but airlines aren't zero-sum; cooperation is better. D — mutually assured destruction fits when both sides are evenly matched and attack is catastrophic (e.g., nuclear weapons); airline price cuts aren't 'destruction' but 'price war.'"
}

);
