// ═══════════════════════════════════════════════════════════════
//  01 — General Thinking Models
//  13 questions
// ═══════════════════════════════════════════════════════════════

allQuestions.push(

{
  scenario: "You're the CEO of a startup, planning next year's growth strategy. Your team is buzzing with ambitious expansion ideas. But before diving in, you decide to take a different approach. What should your first step be?",
  options: [
    "A. List every factor that could kill the company within a year, then systematically work to prevent each one",
    "B. Study your most successful competitor and replicate their strategy entirely",
    "C. Run a \"premortem\" — gather the team and have them imagine the strategy has already failed",
    "D. Double down by concentrating all resources on your current highest-revenue product"
  ],
  answer: 0,
  models: ["Inversion"],
  secondaryModels: [],
  explanation: "Inversion is one of Munger's most prized thinking tools — instead of only asking \"how do we succeed?\", first ask \"how could we fail?\" By listing fatal risks and eliminating them one by one, you uncover blind spots that forward-looking optimism tends to miss. As Munger famously says: \"Invert, always invert.\" (a nod to mathematician Carl Jacobi).",
  wrongReasons: "B is blind imitation — copying a competitor ignores differences in resources, culture, and market position. C, the \"premortem,\" is Gary Klein's technique described in Kahneman's Thinking, Fast and Slow — while similar in spirit, it's a specific team exercise (\"imagine we've already failed, write the story\"), whereas Munger's Inversion is a broader philosophical framework applicable far beyond group meetings. D ignores concentration risk and second-order effects."
},
{
  scenario: "A friend of yours—a successful real estate investor—excitedly tells you about a biotech startup developing a new drug. He claims potential returns of 500%+. You know nothing about pharmaceutical development. What's the most rational move?",
  options: [
    "A. Follow his lead; after all, he's been successful in investing",
    "B. Do a quick Google search, then invest a small amount anyway",
    "C. Acknowledge this is outside your Circle of Competence — either don't invest, or study deeply before deciding",
    "D. Use \"somatic markers\" — trust your gut feeling about this opportunity"
  ],
  answer: 2,
  models: ["Circle of Competence"],
  secondaryModels: [],
  explanation: "Munger and Buffett repeatedly stress Circle of Competence: only make decisions in domains you truly understand. Your friend's success in real estate doesn't mean he understands biotech — and you certainly don't understand drug development. The rational move is to acknowledge the edge of your knowledge and stay within it.",
  wrongReasons: "A is authority bias plus social proof. B is overconfidence. D, \"somatic markers\" (Damasio's concept cited in Lindstrom's Buyology), suggests relying on gut feelings — but gut feelings in unfamiliar domains are unreliable precisely because you lack experience to form valid somatic markers."
},
{
  scenario: "A city government, hoping to help citizens, imposes a 30% rent cap on all rental apartments. In the short term, tenants celebrate. As a rational analyst, what do you predict will happen in the long term?",
  options: [
    "A. Long-term effects will be positive too — tenants have more disposable income to stimulate spending",
    "B. Landlords, facing lower profits, will reduce maintenance and new construction, eventually worsening the housing shortage",
    "C. This is a \"framing effect\" problem — reframe it and it's fine",
    "D. Rent reduction creates a \"habit loop\" that makes tenants dependent on subsidies"
  ],
  answer: 1,
  models: ["Second-Order Thinking"],
  secondaryModels: ["Supply and Demand"],
  explanation: "First-order effect: tenants pay less. But the second-order effects are crucial: landlords' profits fall → maintenance declines → new construction stops → supply shrinks → long-term shortage worsens. Munger emphasizes that in complex systems, second-order effects are often larger than first-order ones.",
  wrongReasons: "A only sees the first-order positive. C, \"framing effect\" (Kahneman), refers to how different descriptions of the same problem affect choices — but here the issue isn't framing, it's an actual economic chain reaction. D, the \"habit loop\" (from Hooked by Eyal), describes product design, not rental policy dynamics."
},
{
  scenario: "Global stock markets crash 25% in one week. Headlines scream panic. Your neighbors and colleagues are dumping their holdings. The fundamentals of the quality companies you own haven't changed. What's most aligned with Munger's thinking?",
  options: [
    "A. Sell along with everyone else to protect capital first",
    "B. Treat the market as \"Mr. Market\" — he's extremely pessimistic right now, offering you discount prices on great businesses",
    "C. According to \"prospect theory,\" you're in the loss domain so you'll be risk-seeking — you should sell",
    "D. According to \"mirror neuron\" theory — seeing others sell triggers imitative impulses, so you should sell too"
  ],
  answer: 1,
  models: ["Mr. Market"],
  secondaryModels: ["Social Proof"],
  explanation: "Graham's \"Mr. Market\" metaphor: the market is an emotionally unstable trading partner who sometimes offers absurdly low prices. When fundamentals haven't changed but the market panics, it's \"Mr. Market\" being extremely pessimistic — you can exploit his low prices to buy quality assets cheaply.",
  wrongReasons: "A is exactly the irrational herd behavior driven by fear. C, \"prospect theory\" (Kahneman), does describe risk-seeking behavior in the loss domain — but Munger isn't just describing a bias, he's providing a proactive framework (personify the market to stay rational). D, \"mirror neurons\" (Lindstrom, Buyology), explains the biological mechanism of imitation — but Munger's point isn't to explain why you want to follow the crowd, it's to teach you how not to."
},
{
  scenario: "A patient arrives at the hospital with fever and cough. A med student Googles it and suspects a rare tropical disease because the symptoms \"match perfectly.\" The attending physician says: \"Consider the common flu first.\" What principle is the attending applying?",
  options: [
    "A. \"Say less than necessary\" — senior doctors avoid complex diagnoses",
    "B. Occam's Razor — prefer explanations that require fewer assumptions and are simpler",
    "C. \"Base rate neglect\" — the med student ignored the base rate of common illnesses",
    "D. \"Representativeness heuristic\" — the med student was misled by symptom similarity"
  ],
  answer: 1,
  models: ["Occam's Razor"],
  secondaryModels: ["Bayesian Updating"],
  explanation: "Occam's Razor: entities should not be multiplied without necessity. Fever and cough are most simply explained by a common illness (flu), not a rare tropical disease. This pairs with Bayesian Updating — start with the prior probability (flu is far more common than rare diseases), then update based on new evidence.",
  wrongReasons: "A, Law 4 (Greene's 48 Laws), is a power game tactic (\"speak less to seem more authoritative\") — irrelevant to medical diagnosis logic. C, \"base rate neglect\" (Kahneman), does explain part of the student's error (ignoring flu's high base rate) — but Munger's Occam's Razor is a more fundamental principle: prefer the simplest explanation. D, \"representativeness heuristic\" (Kahneman), also explains the \"symptoms match, so it must be it\" psychology — but Occam's Razor provides positive guidance (choose simpler), not just a bias description."
},
{
  scenario: "You're convinced a clean energy company has a bright future and have invested heavily. A friend suggests you actively look for evidence that could disprove your thesis. What do you think of this advice?",
  options: [
    "A. Unnecessary — it would only shake your confidence",
    "B. Correct — aligns with the Falsification principle; actively seeking counterexamples is the scientific attitude",
    "C. According to \"affect heuristic\" — your investment decision is emotionally contaminated, so your friend is right but for a different reason",
    "D. According to \"conceal your intentions\" — you shouldn't let others know you're doubting yourself"
  ],
  answer: 1,
  models: ["Falsification"],
  secondaryModels: [],
  explanation: "Popper's Falsification principle: scientific propositions must be falsifiable; actively seeking counterexamples is rigorous thinking. Munger emphasizes: instead of seeking supporting evidence, actively look for disconfirming evidence to test your hypothesis and avoid self-confirmation bias.",
  wrongReasons: "A is a breeding ground for confirmation bias. C, \"affect heuristic\" (Kahneman/Slovic), does point out that emotions influence judgment — but the friend's advice isn't about \"you have an emotional bias,\" it's methodological: \"you should actively falsify.\" D, Law 3 (Greene), is a power tactic of concealing intentions — completely unrelated to investment truth-seeking."
},
{
  scenario: "A company's newly appointed CTO implements a failed technology initiative, causing massive customer complaints. Your first reaction is to think the CTO is incompetent with poor judgment. But in reality, it's the technical debt left by the predecessor and an impossible timeline that would doom anyone. What error did your first reaction make?",
  options: [
    "A. \"Halo effect\" — you have a negative first impression of the CTO, so you see everything negatively",
    "B. Hanlon's Razor — don't attribute to malice (or incompetence) what can be explained by ignorance or situational factors",
    "C. According to \"know who you're dealing with\" — you should have researched the CTO's background first",
    "D. \"Fundamental attribution error\" — you attributed situational factors to personal traits"
  ],
  answer: 1,
  models: ["Hanlon's Razor"],
  secondaryModels: [],
  explanation: "Hanlon's Razor: \"Never attribute to malice that which can be adequately explained by stupidity (or situational factors).\" This reminds us not to be overly paranoid — many bad outcomes result from ignorance, carelessness, or external conditions, not ill intent.",
  wrongReasons: "A, \"halo effect\" (Kahneman), refers to one positive/negative trait influencing your view of the whole person — related but imprecise, because here the issue isn't that you have a prior impression of the CTO, but that you're attributing to the person what's actually situational. C, Law 19 (Greene), is a power game tactic of identifying opponent types — not a framework for analyzing judgment bias. D is very close! \"Fundamental attribution error\" is indeed relevant — but it's a Kahneman/social psychology concept, whereas Munger's Hanlon's Razor is a broader thinking principle emphasizing charitable assumptions rather than just describing attribution bias."
},
{
  scenario: "Your company uses a KPI dashboard to measure performance. But you notice employees gaming the metrics, faking data, and sacrificing customer experience to hit targets. You realize the KPI dashboard is just a simplified model of the business. This \"over-reliance on metrics\" problem best fits which Munger model?",
  options: [
    "A. Map Is Not the Territory — any model or metric is only a simplification of reality, not reality itself",
    "B. \"Substitution effect\" — employees answered \"how to do great work\" by substituting \"how to make KPIs look good\"",
    "C. \"Stored value\" — employees invested too much in the KPI system and won't change",
    "D. \"Ten religious pillars\" theory — KPIs have become the company's belief system"
  ],
  answer: 0,
  models: ["Map Is Not the Territory"],
  secondaryModels: [],
  explanation: "Any model, theory, or description (the \"map\") is only a simplification of reality, not reality itself. KPIs are a \"map\" of the business, but fixating on KPIs can lead employees astray from real goals. Munger often criticizes those who rely too heavily on theoretical models without looking at reality.",
  wrongReasons: "B, \"substitution effect\" (Kahneman calls it Question Substitution), does explain employees replacing \"do great work\" with \"make metrics look good\" — insightful, but Munger's Map Is Not the Territory is more fundamental: it's not just that employees are substituting the question, but that the entire metric system is inherently a simplified map. C, \"stored value\" (Eyal), refers to users becoming dependent on a product due to invested content/data — unrelated to KPI gaming. D, \"religious pillars\" (Lindstrom) is an interesting metaphor but a stretch — KPIs aren't a faith issue but a model simplification issue."
},
{
  scenario: "You're considering exiting a declining industry. Your team suggests imagining the worst-case scenario five years out (technology fully replaced, all customers lost) — what would happen to the company? By pre-playing this scenario, you can prepare an exit plan. What is this method?",
  options: [
    "A. \"Premortem\" — imagine the plan has already failed, then work backwards to identify causes",
    "B. Thought Experiment — construct hypothetical scenarios in your mind to explore problems logically without actual trials",
    "C. \"Plan all the way to the end\" principle — consider all possible outcomes",
    "D. \"Five Whys\" — repeatedly ask why to get to root causes"
  ],
  answer: 1,
  models: ["Thought Experiment"],
  secondaryModels: [],
  explanation: "Thought Experiment: construct hypothetical scenarios in your mind to explore problems without needing actual trials. Munger admires how Einstein used thought experiments to derive physics laws, and applies it to business scenario planning.",
  wrongReasons: "A, \"premortem\" (Gary Klein's method cited in Kahneman), is very similar — both involve imagining failure — but premortem is a specific team meeting technique, whereas Munger's Thought Experiment is a broader thinking tool that includes any hypothetical scenario exploration. C, Law 29 (Greene), teaches strategic thinking of calculating every move — not hypothetical scenario exploration. D, \"Five Whys\" (Toyota method cited by Eyal) is for root cause analysis, not imagining future scenarios."
},
{
  scenario: "An investment guru says: \"This trade will either be 100% successful or 100% a failure — no middle ground.\" How would Munger react?",
  options: [
    "A. Agree — investment outcomes are indeed either success or failure",
    "B. Disagree — use probabilistic thinking: assign probability weights to various possible outcomes, not black-or-white thinking",
    "C. According to \"prospect theory\" — you should separately evaluate the joy of success and the pain of failure",
    "D. According to \"certainty effect\" — people overweight certain outcomes"
  ],
  answer: 1,
  models: ["Probabilistic Thinking"],
  secondaryModels: [],
  explanation: "The real world is full of uncertainty. Most events aren't destined to happen or not happen, but have certain probabilities. Probabilistic thinking requires assigning weights to various possibilities and making decisions based on expected value. Munger thinks life is often like placing bets.",
  wrongReasons: "A is black-or-white thinking, exactly what Munger opposes. C, \"prospect theory\" (Kahneman), does involve asymmetric psychology of gains and losses — but the core issue isn't emotional perception, but whether you use a probabilistic framework to view the world. D, \"certainty effect\" (Kahneman), describes people's excessive preference for certain outcomes — this is a subtopic of probabilistic thinking, but Munger's probabilistic thinking is a broader worldview, not just one cognitive bias."
},
{
  scenario: "You're considering investing in an early-stage biotech company. Best case: the drug gets approved and profits 100x. Worst case: everything goes to zero. How do you decide?",
  options: [
    "A. Probabilistic thinking — estimate the probability of each outcome, calculate weighted expected value, rather than just looking at \"best\" or \"worst\"",
    "B. \"Fourfold pattern\" — high payoff + low probability makes you overly risk-seeking",
    "C. \"Loss aversion\" — you'll be too afraid of going to zero to invest",
    "D. \"Bold action\" principle — when uncertain, be brave and go for it"
  ],
  answer: 0,
  models: ["Probabilistic Thinking"],
  secondaryModels: [],
  explanation: "Munger's probabilistic thinking requires assigning probability weights to various possibilities and making decisions based on expected value (probability × outcome), not just looking at extreme scenarios. This is viewing every decision from a gambler/actuary perspective.",
  wrongReasons: "B, \"fourfold pattern\" (Kahneman), does precisely describe psychological tendencies in this situation — but it's diagnosing bias, whereas probabilistic thinking provides the correct decision framework. C, \"loss aversion,\" is also bias description, not a decision method. D, Law 28 (Greene), encourages bold action — might make sense in power games, but in investing, bold action without calculating probabilities is recklessness, not courage."
},
{
  scenario: "You discover an investment strategy that \"delivers stable 30% returns under any market conditions.\" How would Munger react?",
  options: [
    "A. Great strategy, execute immediately",
    "B. Immediately try to find historical periods when the strategy might have failed, testing whether \"any market\" claim holds up",
    "C. According to \"optimism bias\" — the strategy designer surely overestimated success rate",
    "D. According to \"Quizmania experiment\" — test subjects' brain responses are more reliable than their verbal claims"
  ],
  answer: 1,
  models: ["Falsification"],
  secondaryModels: ["Probabilistic Thinking"],
  explanation: "Falsification principle: to judge a theory's reliability, actively seek counterexamples that could disprove it. A strategy claiming to \"profit in any market\" must be stress-tested historically — find conditions under which it could fail.",
  wrongReasons: "A is uncritical acceptance. C, \"optimism bias\" (Kahneman), is indeed a possible cause — but Munger doesn't just suspect, he provides a specific validation method (find counterexamples). D, Quizmania experiment (Lindstrom, Buyology), uses brain scans to predict TV show success — completely unrelated to validating investment strategies."
},
{
  scenario: "Buffett long avoided investing in high-tech companies, missing the early internet boom but also avoiding the bubble burst's massive losses. What's the core of his strategy?",
  options: [
    "A. Circle of Competence — only make decisions in domains you truly understand",
    "B. \"Regression to the mean\" — tech stocks inevitably regress, so not investing avoids losses",
    "C. \"Disdain things you cannot have\" principle — the best strategy is to show contempt for what you can't get",
    "D. \"Inside view vs. outside view\" — he adopted an outside view of the tech sector"
  ],
  answer: 0,
  models: ["Circle of Competence"],
  secondaryModels: [],
  explanation: "Buffett and Munger stick to their Circle of Competence — they believed tech companies exceeded their understanding, preferring to miss opportunities rather than take risks in unfamiliar domains. This isn't disdain for tech, but respect for the boundaries of their own knowledge.",
  wrongReasons: "B, \"regression to the mean\" (Kahneman), assumes tech stocks must crash — but Buffett wasn't predicting a crash, he was admitting he didn't understand tech. C, Law 36 (Greene), is a psychological defense mechanism — \"sour grapes\" — but Buffett isn't rationalizing, he's making a principled decision. D, \"outside view\" (Kahneman), means using historical statistics for prediction — Buffett's core reason isn't statistical analysis but Circle of Competence boundary recognition."
}

);
