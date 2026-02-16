// 06-economics-war.js — Economics & Strategy + Military Models (12 questions)
allQuestions.push(

{
  scenario: "You have $1 million to invest and are torn between two options: Project A offers an expected annual return of 15%, Project B offers 8%. You choose B but forgot to ask yourself one critical question. What is that question?",
  options: [
    "A. \"Is the Project B team reliable?\"",
    "B. \"What is the cost of choosing B over A?\" — i.e., opportunity cost",
    "C. According to \"mental accounting\" theory — are you placing this money in the wrong mental account?",
    "D. According to the \"narrow framing\" problem — should you be looking at both investments as an overall portfolio?"
  ],
  answer: 1,
  models: ["Opportunity Costs"],
  secondaryModels: [],
  explanation: "Opportunity cost: the value of the next-best alternative you give up to obtain something. Choosing B (8%) means forgoing A (15%); the real cost includes the 7% annual return you sacrifice. Munger stresses constantly asking: \"Compared to better uses, is this use of resources worth it?\"",
  wrongReasons: "A is an important consideration but not the core omission; C, \"mental accounting\" (Kahneman/Thaler), refers to people partitioning money into different mental accounts leading to irrational decisions — interesting but not the core issue here; D, \"narrow framing\" (Kahneman), suggests viewing investments through a portfolio lens — good advice, but Munger's opportunity cost is more fundamental: with limited resources, choosing one thing means forgoing the value of another; this is the core of economic thinking."
},
{
  scenario: "Adam Smith observed in a pin factory that having workers each specialize in a single step of the process produced far more pins than having each worker complete an entire pin alone. What principle does this illustrate?",
  options: [
    "A. Specialization — splitting the production process so each person masters one step, dramatically increasing efficiency",
    "B. \"Cognitive ease\" — repeating the same task makes the brain more efficient",
    "C. \"Stored value: skills\" — workers accumulate expertise in their specific step",
    "D. \"Concentrate your forces\" strategy — focusing energy in one direction"
  ],
  answer: 0,
  models: ["Specialization"],
  secondaryModels: [],
  explanation: "Specialization increases output by dividing labor so each person masters one step — through practice and by eliminating switching costs. This is one reason the Industrial Revolution and modern economies are so productive. Munger and Buffett know they excel at investing and stay out of domains where they have no advantage.",
  wrongReasons: "B, \"cognitive ease\" (Kahneman), explains why repetitive work feels less effortful — but specialization's gains aren't just cognitive; they include skill mastery and process optimization. C, \"stored value: skills\" (Eyal), describes users accumulating skills within a product — too narrow a concept for the economics of division of labor. D, Law 23 (Greene), teaches concentrating force against opponents in power games — a different concept from the economics of specialization."
},
{
  scenario: "A law firm excels in every dimension, but profit-sharing among partners has long been opaque. Eventually a partner who felt exploited leaves to start his own firm, taking a large chunk of clients. What model best describes this mechanism?",
  options: [
    "A. Bribery/agency problem — opaque profit distribution erodes trust; agents use power to extract rents and undermine fairness",
    "B. \"Narrow framing\" — each partner only looks at their own share rather than the whole",
    "C. \"Guard your reputation with your life\" strategy — the departing partner protects his reputation",
    "D. \"Reactance\" — partners feel their autonomy is threatened and rebel"
  ],
  answer: 0,
  models: ["Bribery"],
  secondaryModels: ["Trust"],
  explanation: "Munger points out that bribery and agency problems undermine fair competition and rule of law. When profit distribution is opaque, those in power tend to extract rents; the sense of being shortchanged destroys trust. Institutional design must reduce discretionary power and increase transparency.",
  wrongReasons: "B, \"narrow framing\" (Kahneman), describes individuals focusing on the part — but the core issue isn't narrow perspective, it's unjust profit-sharing mechanisms. C, Law 5 (Greene), teaches protecting reputation — but the departing partner isn't just protecting reputation; he's responding to unfair treatment. D, \"reactance\" (Eyal), is the response when autonomy is threatened — related but less precise than the agency problem."
},
{
  scenario: "Even for the same good in free markets, temporary price differences can exist across regions. Savvy merchants buy low in one place and sell high in another, simultaneously, until the gap disappears. What is this behavior?",
  options: [
    "A. Arbitrage — exploiting price differences for the same good across markets to profit from buy-low-sell-high",
    "B. \"Narrow framing\" — the merchant treats each trade in isolation",
    "C. \"Make others come to you\" strategy — the merchant waits for opportunity rather than acting",
    "D. \"Variable reward\" — the merchant gets dopamine satisfaction from hunting for price gaps"
  ],
  answer: 0,
  models: ["Arbitrage"],
  secondaryModels: [],
  explanation: "Arbitrage exploits price differences for the same good or asset across markets to capture risk-free profit. Arbitrageurs push prices toward convergence and are drivers of market efficiency. Munger likes investments with arbitrage elements.",
  wrongReasons: "B, \"narrow framing\" (Kahneman), is the opposite — arbitrageurs view the problem across markets, not in isolation. C, Law 8 (Greene), is a power tactic of using bait to draw opponents in — different from arbitrage's active discovery and exploitation of price gaps. D, \"variable reward\" (Eyal), describes the psychological motivation of the hunt — interesting, but arbitrage is an economic model, not a psychological analysis."
},
{
  scenario: "The last plot of land for a mall in a new market is up for bid; three developers are competing. You know bidding too high risks the winner's curse, but bidding too low guarantees you lose. What framework should you use to analyze this?",
  options: [
    "A. Scarcity effect / game theory — scarce resources trigger competitive games; you must consider rivals' strategies, not just optimize your own bid",
    "B. \"Loss aversion\" — you fear losing the land so you tend to bid high",
    "C. \"Scarcity effect\" psychology — scarcity makes you psychologically overvalue the land",
    "D. \"Control the options\" strategy — find a way to make other developers drop out"
  ],
  answer: 0,
  models: ["Scarcity Effect / Game Theory"],
  secondaryModels: [],
  explanation: "Scarcity amplifies people's preference and urgency for an item while triggering competitive games. Munger warns: treat scarcity rationally; don't go crazy just because something is scarce. Consider rivals' strategies (game theory) and avoid the winner's curse.",
  wrongReasons: "B, \"loss aversion\" (Kahneman), does explain the fear of missing out — but the question asks for an analysis framework, not a bias description. C, \"scarcity effect\" (Eyal cites Worchel's experiment), is related but only describes psychological overvaluation — Munger's model adds game-theoretic strategic analysis. D, Law 31 (Greene), is a power tactic of controlling options — manipulating rivals to drop out in a legitimate bidding process is unethical; Munger would not advise it."
},
{
  scenario: "You earn $200/hour doing business in the US; the same hour in Vietnam could earn $500. But your clients in Vietnam are lower quality and less stable than in the US. How would Munger suggest you think about this?",
  options: [
    "A. Comparative advantage — even if you can do both, focus on the market where you have the larger relative advantage",
    "B. \"Loss aversion\" — you fear losing the US market so you won't relocate",
    "C. \"Master timing\" strategy — wait until the Vietnam market matures before entering",
    "D. \"Stored value\" — you've invested too much time and relationships in the US market to give up"
  ],
  answer: 0,
  models: ["Comparative Advantage"],
  secondaryModels: [],
  explanation: "Comparative advantage (Ricardo): even if you're capable in all domains, focus where your relative advantage is greatest. It's not about absolute income, but about where the opportunity cost of forgoing something is smallest. Munger deeply understands this basic economic principle.",
  wrongReasons: "B, \"loss aversion\" (Kahneman), only explains the reluctance to leave — but the question asks how to make a rational decision, not how to describe a bias. C, Law 35 (Greene), is about timing in power games — a different framework from comparative advantage. D, \"stored value\" (Eyal), describes switching costs — but comparative advantage is about optimal resource allocation, not switching costs."
},
{
  scenario: "Your first cup of coffee feels wonderfully energizing; the second is still good; the third barely registers; by the fourth you feel uncomfortable. What economic principle does this illustrate?",
  options: [
    "A. Utility and marginal utility — each additional unit of consumption yields diminishing extra satisfaction",
    "B. \"Diminishing sensitivity\" — the farther from a reference point, the less sensitive you are to change",
    "C. \"Finite variability\" — repeated experience makes coffee predictable",
    "D. \"Sensory fatigue\" — your taste and smell adapt to coffee"
  ],
  answer: 0,
  models: ["Utility & Marginal Utility"],
  secondaryModels: [],
  explanation: "Diminishing marginal utility is a cornerstone of economics: each additional unit of consumption yields less extra satisfaction. The first cup has very high utility; each subsequent cup adds less. This explains why rational consumers diversify rather than spending everything on one thing.",
  wrongReasons: "B, \"diminishing sensitivity\" (Kahneman, prospect theory), describes psychological perception of gains and losses — similar, but marginal utility is the more fundamental economic concept for real consumption decisions. C, \"finite variability\" (Eyal), is about predictable experience in product design — coffee's utility decline isn't from predictability but from physiological and economic saturation. D, \"sensory fatigue\" (Lindstrom), has some truth but only explains the sensory layer — diminishing marginal utility is a broader economic principle."
},
{
  scenario: "A startup finds that a large incumbent leads in every dimension. The smart move isn't to compete head-on but to find a niche the big company ignores and go deep. What strategy does this match?",
  options: [
    "A. Asymmetric warfare — the weak defeating the strong by using unconventional tactics and different rules to engage a powerful opponent",
    "B. \"Surrender tactic\" — feign weakness first, then look for a chance to strike back",
    "C. \"Narrow framing\" — focusing on a small market is a strategy of narrowing the problem frame",
    "D. \"Emerging behavior\" — starting from a niche is where all innovation begins"
  ],
  answer: 0,
  models: ["Asymmetric Warfare"],
  secondaryModels: ["Niches"],
  explanation: "Asymmetric warfare: the weak don't compete the way the strong excel; they find the strong's soft spots. Finding an ignored niche and going deep, avoiding the giant's main strength — this is the best strategy for a startup.",
  wrongReasons: "B, \"surrender tactic\" (Greene Law 22), is a power tactic of feigning weakness to wait for a counterstrike — but finding a niche isn't surrender, it's differentiation. C, \"narrow framing\" (Kahneman), is a negative concept in Kahneman's framework (viewing decisions in isolation) — inappropriate here. D, \"emerging behavior\" (Eyal), correctly notes that many innovations start in niches — but it describes a phenomenon; asymmetric warfare provides a strategic framework."
},
{
  scenario: "A company is simultaneously fighting a price war at home, expanding aggressively in new overseas markets, and dealing with a government antitrust investigation. Each front requires massive resources, but total resources are limited. What model would Munger use to warn about this situation?",
  options: [
    "A. Two-front war — fighting on multiple fronts at once, with forces dispersed and pinned down, weakening overall combat power",
    "B. \"Concentrate your forces\" strategy — focus resources in one direction",
    "C. \"Ego depletion\" — fighting on multiple fronts drains management's cognitive resources",
    "D. \"Six elements of simplicity\" — each front's complexity is too high to act"
  ],
  answer: 0,
  models: ["Two-Front War"],
  secondaryModels: [],
  explanation: "Two-front war: one side fights on multiple fronts at once; forces are dispersed and pinned down, weakening overall combat power. Munger stresses focus — too many business lines is like fighting a two-front war; each line ends up under-resourced.",
  wrongReasons: "B, Law 23 (Greene) \"concentrate your forces,\" is related advice — but it's an offensive tactic in power games, whereas Munger's two-front war warns of dispersion risk from a defensive angle. C, \"ego depletion\" (Kahneman), is an individual cognitive concept — two-front war is an organizational strategic issue. D, \"simplicity elements\" (Eyal/Fogg), analyze individual behavior thresholds — not applicable to organizational strategy."
},
{
  scenario: "A commander sits in his office making decisions based only on subordinates' reports; the reports are filtered and distorted through layers, leading to a serious misjudgment. What model would Munger use to criticize this approach?",
  options: [
    "A. Seeing the front — the commander should personally inspect conditions on the ground rather than relying only on subordinates' reports",
    "B. \"WYSIATI\" (What You See Is All There Is) — he made a full judgment from the limited information in the reports",
    "C. \"Don't build fortresses\" strategy — isolating yourself costs you critical information",
    "D. \"Neuro-marketing predictive power\" — use more scientific methods to gather information"
  ],
  answer: 0,
  models: ["Seeing the Front"],
  secondaryModels: [],
  explanation: "Military principle: commanders should personally inspect the front, because maps and reports can be distorted. Munger stresses that business managers should practice \"management by walking around,\" staying close to customers and the production floor. Firsthand information is far more valuable than layer-filtered reports.",
  wrongReasons: "B, \"WYSIATI\" (Kahneman), describes the cognitive bias of judging from limited information — but the problem isn't just cognitive bias; the information source itself is filtered. C, Law 18 (Greene), does warn of the danger of isolation — similar spirit, but Greene's angle is power preservation; Munger's \"seeing the front\" is about decision quality. D is off-topic."
},
{
  scenario: "\"In counterinsurgency operations in Iraq, the US military didn't rely on force alone; it also worked with tribal leaders and provided aid to win hearts and minds and stabilize the situation.\" How can this strategic thinking be applied to business?",
  options: [
    "A. Counterinsurgency strategy — when facing disruptors or crises, combine soft and hard approaches; prioritize PR and customer relations rather than pure hard tactics",
    "B. \"Win hearts and minds\" strategy — gain support through psychological manipulation rather than force",
    "C. \"Affect heuristic\" — winning hearts works because it touches emotions rather than reason",
    "D. \"Missionary zeal\" — promote your position like a missionary"
  ],
  answer: 0,
  models: ["Counterinsurgency"],
  secondaryModels: [],
  explanation: "Counterinsurgency highlights the importance of combining soft and hard approaches. Against asymmetric foes, pure hard tactics backfire; you need political, economic, and psychological tools. In business, when facing a PR crisis, sincere communication and problem-solving beat sending lawyers' letters.",
  wrongReasons: "B, Law 43 (Greene) \"win hearts and minds,\" teaches gaining obedience by exploiting psychological weaknesses — this is power manipulation, not the sincere problem-solving Munger emphasizes. C, \"affect heuristic\" (Kahneman/Slovic), is an individual decision bias — not suited to organizational strategy. D, \"missionary zeal\" (Lindstrom), is a brand-building communication tactic — a different concept from counterinsurgency's \"win hearts and minds.\""
},
{
  scenario: "Coca-Cola and Pepsi both have the power to slash prices and hurt each other, but doing so would crater both companies' profits. For decades they have tacitly maintained a relatively stable pricing structure. What principle explains this?",
  options: [
    "A. Mutually Assured Destruction — both sides have enough power to destroy the other, so a balance of terror forms; neither dares strike first",
    "B. \"Loss aversion\" — both fear profit decline so neither dares cut prices",
    "C. \"Learn when to stop\" strategy — both know when to quit",
    "D. Prisoner's dilemma — both want to cut prices but fear the one who cuts first will lose"
  ],
  answer: 0,
  models: ["Mutually Assured Destruction"],
  secondaryModels: [],
  explanation: "Mutually Assured Destruction: when both sides have lethal retaliatory capability, aggressive offense is a bad strategy; cooperation or restraint is rational. In the cola wars, both know full price war would be mutually destructive, so they maintain a \"balance of terror.\"",
  wrongReasons: "B, \"loss aversion\" (Kahneman), only explains individual psychology — this is a strategic game equilibrium at the firm level. C, Law 47 (Greene), teaches not overextending in personal power games — but the cola rivals aren't \"knowing when to stop\"; they're deterred by each other's retaliatory power. D, \"prisoner's dilemma\" has a similar structure, but the prisoner's dilemma predicts mutual defection (both cut). MAD explains why neither dares move first — because retaliatory power is too strong; the conclusion differs."
}

);
