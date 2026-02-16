// 05-psychology.js — Human Psychology Models (20 questions)

allQuestions.push(

// ── Q1 ── Availability Heuristic ──────────────────────────────────────────
{
  scenario: "Yesterday's news reported a plane crash. Your colleague decides to cancel his business trip and drive 8 hours instead. Statistics show that per-mile fatality rates for driving are dozens of times higher than for flying. What is most likely influencing your colleague's judgment?",
  options: [
    "A. He made a correct risk assessment — flying really is more dangerous",
    "B. Availability heuristic — the recent vivid event made him overestimate the risk of flying",
    "C. Peak-end rule — the plane crash's ending left too strong an impression",
    "D. Fear-driven somatic markers — his brain has already bound flying to fear"
  ],
  answer: 1,
  models: ["Availability Heuristic"],
  secondaryModels: [],
  explanation: "Munger emphasizes the availability heuristic: people judge the frequency or probability of events by how easily they can recall examples. The plane crash became highly \"available\" because of heavy news coverage, leading your colleague to overestimate flying risk while ignoring statistics showing driving has dozens of times higher per-mile fatality rates.",
  wrongReasons: "A completely ignores the statistics — flying is one of the safest modes of transport. C, the peak-end rule (Kahneman), refers to how memory of an experience depends on peak and ending moments — but here the issue isn't memory evaluation, it's judging risk probability. D, fear-driven somatic markers (Lindstrom/Damasio), may indeed be one neural mechanism of fear — but the availability heuristic more directly explains why \"yesterday's\" news caused the judgment bias: recent, vivid events are easier to recall."
},

// ── Q2 ── Social Proof ──────────────────────────────────────────
{
  scenario: "By late 2021, almost everyone around you was buying crypto. Every gathering was about who made how much. You don't understand blockchain at all, but watching everyone profit makes you deeply anxious. What response best aligns with Munger's thinking?",
  options: [
    "A. Buy quickly — don't miss the train; if everyone's making money, they can't all be wrong",
    "B. According to \"external trigger\" theory, your friends' talk is your action trigger — go with it",
    "C. Acknowledge you don't understand; resist the herd pressure; don't blindly follow just because others are profiting",
    "D. Borrow to invest and use leverage to amplify returns and catch up with your friends"
  ],
  answer: 2,
  models: ["Social Proof"],
  secondaryModels: ["Circle of Competence"],
  explanation: "Munger advocates acknowledging the boundaries of your circle of competence and not acting blindly under herd pressure. \"Everyone is doing it\" is not a reason to do something — social proof is one of humanity's most powerful biases, especially when uncertainty is high. True wisdom is knowing what you don't know.",
  wrongReasons: "A is classic herd logic — \"everyone's making money\" doesn't mean risk disappears; every bubble in history had this atmosphere before it burst. B, \"external triggers\" (Eyal, Hooked), are product design mechanisms that guide user action — friends' talk is indeed external influence, but Munger's view is to resist rather than comply with such pressure. D, borrowing to speculate is the most dangerous move; adding leverage only amplifies the risk of not understanding."
},

// ── Q3 ── Survivorship Bias ────────────────────────────────────────
{
  scenario: "A bestseller studied 50 self-made billionaires and found three shared traits: college dropout, extreme risk-taking, and only 4 hours of sleep per night. The book concludes: having these traits makes you more likely to become a billionaire. What's the biggest flaw in this research?",
  options: [
    "A. Sample too small — 50 people has no statistical significance",
    "B. Survivorship bias — it never studied the millions who also dropped out, took risks, and slept little but failed",
    "C. Representativeness heuristic — we treat these people as the \"typical representatives\" of success",
    "D. Narrative fallacy — we're just telling stories after the fact"
  ],
  answer: 1,
  models: ["Survivorship Bias"],
  secondaryModels: [],
  explanation: "Survivorship bias: we only see the common traits of the successful (survivors) and ignore the countless others who shared those traits but failed. If 99.99% of people who dropped out, took risks, and slept little failed, these traits are not causes of success — they're merely features that survivors happened to share.",
  wrongReasons: "A — while the sample is indeed small, the more fundamental problem is selection bias, not sample size. Even studying 5,000 billionaires without looking at failures would still yield biased conclusions. C, representativeness heuristic (Kahneman), refers to judging probability by stereotype — but the core issue here isn't how we view them, it's that the research design omitted the failure sample. D, narrative fallacy (Kahneman), is related — we love to tell stories — but narrative fallacy describes a psychological tendency, while survivorship bias points to a structural flaw in research methodology."
},

// ── Q4 ── Commitment & Consistency Bias ──────────────────────────────────
{
  scenario: "Your company spent $8M developing a new product. After six months on the market, response is poor. Continuing would require another $4M with unclear prospects. The CEO insists: \"We've already invested $8M — we can't waste it.\" What's the most rational decision framework?",
  options: [
    "A. The CEO is right — we've invested $8M and shouldn't waste it; we should continue",
    "B. Ignore the sunk $8M; only evaluate whether the expected return on the future $4M investment is worth it",
    "C. According to the IKEA effect, the CEO overvalues the product because he invested effort in it",
    "D. According to loss aversion theory, the CEO fears confirming the $8M loss so he won't cut losses"
  ],
  answer: 1,
  models: ["Commitment & Consistency Bias"],
  secondaryModels: ["Opportunity Cost"],
  explanation: "Munger emphasizes that money already spent is sunk cost and should not influence future decisions. The CEO is influenced by commitment and consistency bias — once a commitment is made (investing $8M), we tend to persist to stay consistent. The right approach is to look only at the expected return on the future $4M, while considering the opportunity cost of that capital.",
  wrongReasons: "A is the classic sunk cost fallacy — past investment should not affect future decisions. C, the IKEA effect (cited by Eyal), notes that people overvalue what they've built themselves — but the core issue here isn't \"overvaluing the product\" but \"unwillingness to abandon a commitment already made.\" D, loss aversion (Kahneman), is indeed part of the CEO's psychology — but Munger's commitment and consistency bias more precisely describes why people refuse to change course even when wrong after making a commitment."
},

// ── Q5 ── Confirmation Bias ──────────────────────────────────────────
{
  scenario: "After investing in a stock you favor, you start searching daily for analysis that supports your view, automatically skipping any skeptical coverage. You even think the authors of negative reports must have ulterior motives. What are you experiencing?",
  options: [
    "A. Normal investment confidence — good investors stay resolute",
    "B. Confirmation bias — you only search for, interpret, and remember information that supports your existing view",
    "C. WYSIATI — you see only the information in front of you and treat it as the whole picture",
    "D. Sensory branding effect — you've developed an emotional bond with this stock"
  ],
  answer: 1,
  models: ["Confirmation Bias"],
  secondaryModels: ["Liking/Disliking Tendency"],
  explanation: "Confirmation bias is one of Munger's most emphasized biases: people tend to search for, interpret, and remember information that supports their existing views while ignoring or dismissing contradictory evidence. Darwin deliberately wrote down evidence against his theory — Munger advocates this \"anti-confirmation bias\" habit.",
  wrongReasons: "A mistakes bias for confidence — good investors should actively seek disconfirming evidence. C, WYSIATI (Kahneman — What You See Is All There Is), refers to judging based only on available information — though related, confirmation bias more precisely describes the \"active\" pattern of searching only for supportive information. D, sensory branding (Lindstrom), is how brands build emotional bonds through multisensory cues — stock investment bias is mainly cognitive, not sensory."
},

// ── Q6 ── Trust ──────────────────────────────────────────────
{
  scenario: "Your company and a supplier have built decades of trust, never breaching contracts. As a result, both sides rarely need complex contract terms or third-party oversight, greatly reducing transaction costs. What does this illustrate?",
  options: [
    "A. Trust — high-trust systems dramatically lower social transaction costs and make complex collaboration possible",
    "B. Investment phase theory — both sides have invested too much to leave",
    "C. Selective honesty strategy — long-term honesty is to gain greater benefit at critical moments",
    "D. Endowment effect — both sides overvalue the existing relationship"
  ],
  answer: 0,
  models: ["Trust"],
  secondaryModels: [],
  explanation: "Munger places enormous value on trust: high-trust systems dramatically lower transaction costs (no need for complex contracts, legal fees, oversight costs) and make complex long-term collaboration possible. Trust is the lubricant of social and commercial operation — without it, every transaction becomes expensive and slow.",
  wrongReasons: "B, the investment phase (Eyal, Hooked), is a product design mechanism where users invest more and find it harder to leave — but long-term collaboration isn't about \"can't bear to leave,\" it's that trust genuinely lowers costs. C, selective honesty (Greene, Law 12), treats honesty as a manipulation tool — but Munger's trust is sincere and reciprocal, not strategic deception. D, endowment effect (Kahneman/Thaler), refers to overvaluing what we already have — but here the cost savings from trust are objective fact, not psychological overvaluation."
},

// ── Q7 ── Bias from Incentives ──────────────────────────────────────────
{
  scenario: "After a pharma rep takes doctors to upscale restaurants, the proportion of prescriptions for that company's drugs rises noticeably — even though the doctors sincerely believe they're prescribing based on professional judgment. What's at work?",
  options: [
    "A. Incentive bias — self-interest or benefits cause our judgment to unconsciously tilt in our favor",
    "B. Somatic markers — the pleasure of the upscale restaurant formed a subconscious link with the drug",
    "C. Halo effect — goodwill toward the rep spread to the drug",
    "D. Pavlovian association — goodwill became conditioned"
  ],
  answer: 0,
  models: ["Bias from Incentives"],
  secondaryModels: [],
  explanation: "Munger says: \"Never underestimate the power of incentives.\" The doctors aren't deliberately prescribing the pharma company's drugs — rather, after receiving benefits (free upscale meals), their judgment is unconsciously distorted. This is what makes incentive bias so dangerous: the person sincerely believes they're being objective.",
  wrongReasons: "B, somatic markers (Lindstrom/Damasio), may indeed be one subconscious neural mechanism — but incentive bias is the more fundamental explanation: interest directly distorts judgment, not just \"feeling good.\" C, halo effect (Kahneman), describes the spread of goodwill — but the doctor's problem isn't \"liking the rep so liking the drug,\" it's that interest shifts judgment. D, Pavlovian association (cited by Eyal), is indeed conditioning — but Munger especially emphasizes that the power of incentives goes beyond mere association: when interest is involved, the bias is particularly strong."
},

// ── Q8 ── Envy & Jealousy ────────────────────────────────────────
{
  scenario: "You find yourself deeply resentful of a colleague's promotion, even starting to badmouth her behind her back — though this does you no good at all. What would Munger say you're experiencing?",
  options: [
    "A. Envy and jealousy — resentment and bitterness from seeing others get what you desire",
    "B. Loss aversion — you feel her promotion is your \"loss\"",
    "C. \"Don't appear too perfect\" strategy — your colleague should hide her success",
    "D. Schadenfreude and mirror neurons — you feel pain in others' success"
  ],
  answer: 0,
  models: ["Envy & Jealousy"],
  secondaryModels: [],
  explanation: "Munger says: \"What drives the world isn't greed, it's envy.\" Envy is an intensely destructive emotion — it makes people do things that bring them no benefit or even harm (badmouthing damages your own workplace reputation), purely because they can't bear others getting what they want.",
  wrongReasons: "B, loss aversion (Kahneman), refers to fearing loss more than desiring an equivalent gain — but your colleague's promotion isn't your \"loss\"; you didn't lose anything, you just didn't gain. C, Law 46 (Greene), teaches hiding success in power games to avoid envy — that's strategic advice, not an explanation of your psychological state. D, schadenfreude and mirror neurons (Lindstrom), does involve emotional response to others' success and failure — but Munger's envy model is a more direct, fundamental explanation of human motivation."
},

// ── Q9 ── First-Conclusion Bias ──────────────────────────────────────────
{
  scenario: "In an interview, your first impression of a candidate is excellent. Later, even when he answers several weak questions poorly, you still lean toward hiring him. What bias would Munger say you're committing?",
  options: [
    "A. First-conclusion bias — the first idea that enters the mind shuts down objective evaluation of subsequent information",
    "B. Halo effect — your goodwill toward him spread to all dimensions",
    "C. Priming effect — the first impression \"primed\" your subsequent positive evaluation",
    "D. Cognitive ease — familiarity relaxed your scrutiny"
  ],
  answer: 0,
  models: ["First-Conclusion Bias"],
  secondaryModels: [],
  explanation: "Munger's first-conclusion bias: once the brain forms a first conclusion, it tends to shut down objective processing of subsequent contradictory information. A good first impression makes later flaws easy to rationalize or ignore. The remedy is deliberately seeking disconfirming evidence.",
  wrongReasons: "B, halo effect (Kahneman), does overlap with first-conclusion bias — goodwill spreading to all dimensions — but Munger's first-conclusion bias more precisely identifies the problem as \"the first conclusion locks in subsequent judgment\" rather than comprehensive spread of goodwill. C, priming effect (Lindstrom/Kahneman), operates at the subconscious level — but first-conclusion bias isn't just subconscious priming; it's consciously refusing to revise an existing conclusion. D, cognitive ease (Kahneman), is the brain's preference for familiar, fluent information — but the first impression in an interview isn't a \"familiarity\" issue, it's a \"conclusion lock-in\" issue."
},

// ── Q10 ── Relative Satisfaction/Misreaction ────────────────────────────
{
  scenario: "Your year-end bonus is $10,000. You were quite satisfied until you heard a colleague got $20,000 — then you immediately felt shortchanged. What does your happiness depend on?",
  options: [
    "A. Relative satisfaction — human satisfaction depends on relative comparison, not absolute value",
    "B. Reference point dependence — your reference point shifted from 0 to your colleague's $20,000",
    "C. \"Don't appear too perfect\" strategy — your colleague shouldn't have let you know his amount",
    "D. Subconscious emotional effect — you have an unconscious emotional reaction to your colleague's income information"
  ],
  answer: 0,
  models: ["Relative Satisfaction/Misreaction Tendency"],
  secondaryModels: [],
  explanation: "Munger points out that human satisfaction is almost entirely relative rather than absolute. A $10,000 bonus satisfies you when there's no comparison, but once compared to $20,000 it becomes \"shortchanged.\" Understanding this helps avoid letting unnecessary comparisons destroy happiness.",
  wrongReasons: "B, reference point dependence (Kahneman), does describe a similar phenomenon — but Munger's relative satisfaction/misreaction tendency is broader, not just reference point shift, but also humans' systematic overreaction to relative position. C, Law 46 (Greene), teaches avoiding envy in power games — but the question is analyzing your own psychological reaction, not teaching your colleague what to do. D, subconscious emotional effect (Lindstrom), does involve the subconscious layer of emotion — but your reaction to your colleague's income isn't \"subconscious,\" it's very consciously felt dissatisfaction."
},

// ── Q11 ── Hindsight Bias ──────────────────────────────────────────
{
  scenario: "After a market crash, you look back and feel you \"actually saw the warning signs all along\" — but in fact you took no action before the crash. What would Munger say you're experiencing?",
  options: [
    "A. Hindsight bias — after an event, feeling you foresaw the outcome when you actually didn't",
    "B. Narrative fallacy — you're constructing a plausible story for the crash after the fact",
    "C. Implicit memory — your subconscious did record the warning signals",
    "D. \"Master the art of timing\" strategy — you just didn't act at the right time"
  ],
  answer: 0,
  models: ["Hindsight Bias"],
  secondaryModels: [],
  explanation: "Hindsight bias (also called the \"knew-it-all-along\" effect): after an event, people reconstruct memory and feel they \"foresaw\" the outcome. This bias is especially dangerous because it blocks real learning — if you feel you already knew, you won't analyze why you didn't act at the time.",
  wrongReasons: "B, narrative fallacy (Kahneman), is related — people tell stories after the fact — but hindsight bias more precisely points to \"memory reconstruction\": you're not just telling a story, you genuinely feel you had that judgment at the time. C, implicit memory (Lindstrom), suggests your subconscious did capture the signals — but if you really \"knew\" then, why was there no action? That's exactly hindsight bias's self-deception. D, Law 35 (Greene), teaches seizing the moment in power games — but the problem isn't timing, it's that you never foresaw it."
},

// ── Q12 ── Sensitivity to Fairness ──────────────────────────────────────────
{
  scenario: "The company's compensation system is severely unfair — same workload and performance, some get double the pay. Underpaid employees quit or slack off even when their absolute salary is decent. Why?",
  options: [
    "A. Sensitivity to fairness — humans care intensely about fairness; perceived injustice triggers strong emotional reactions including non-cooperation",
    "B. Loss aversion — employees feel they've \"lost\" the salary they deserved",
    "C. \"Strike the shepherd\" strategy — dissatisfied employees may have a ringleader stirring them up",
    "D. Psychological reactance — employees feel their autonomy was stripped so they rebel"
  ],
  answer: 0,
  models: ["Sensitivity to Fairness"],
  secondaryModels: [],
  explanation: "Munger points out that humans (and many primates) have an extremely sensitive instinctive response to fairness. The famous ultimatum game proves: people would rather give up their own benefit than let unfair behavior go unpunished. Unfair pay, even when the absolute amount isn't low, triggers strong resistance because of relative injustice.",
  wrongReasons: "B, loss aversion (Kahneman), is fearing loss more than desiring gain — but here employees aren't \"afraid of losing,\" they \"can't tolerate injustice\"; the motives differ. C, Law 42 (Greene), teaches eliminating the leader of opposition — that attributes the organizational problem to individual agitators rather than addressing institutional unfairness. D, psychological reactance (cited by Eyal), refers to rebelling when choice freedom feels restricted — but employees' reaction isn't from \"choice restricted\" but from \"fairness violated.\""
},

// ── Q13 ── Fundamental Attribution Error ──────────────────────────────────────
{
  scenario: "An employee is late three times in a row. Your first reaction is \"this person is lazy and irresponsible.\" Later you discover he has serious family problems at home. What error did your first reaction commit?",
  options: [
    "A. Fundamental attribution error — tendency to attribute others' behavior to their character while underestimating situational factors",
    "B. Representativeness heuristic — you felt lateness \"looks like\" lazy person behavior",
    "C. \"Know who you're dealing with\" strategy — you should have investigated first",
    "D. WYSIATI — you made a full judgment based only on what you saw (lateness)"
  ],
  answer: 0,
  models: ["Fundamental Attribution Error"],
  secondaryModels: [],
  explanation: "Fundamental attribution error: people tend to attribute others' behavior to character traits (internal factors) while underestimating the influence of environment and situation (external factors). Seeing lateness and judging \"lazy\" without considering possible family, health, or traffic reasons. Munger reminds us to understand the situation before judging others.",
  wrongReasons: "B, representativeness heuristic (Kahneman), uses stereotypes to judge probability — though it overlaps with attribution error, fundamental attribution error more precisely identifies the systematic bias of \"internal vs. situational attribution.\" C, Law 19 (Greene), teaches understanding the other's character for manipulation — Munger's point isn't \"investigate\" but recognizing you have attribution bias. D, WYSIATI (Kahneman), is related — but WYSIATI is about \"jumping to conclusions with insufficient information,\" while fundamental attribution error is a systematic bias of \"preferring character attribution even with sufficient information.\""
},

// ── Q14 ── Authority Bias ──────────────────────────────────────────
{
  scenario: "A renowned professor makes an obviously wrong economic claim outside his field. But because of his academic title, many accept it without question. What does this reflect?",
  options: [
    "A. Authority bias — people have a tendency to obey authority even when authority has no expertise in the relevant domain",
    "B. Halo effect — academic prestige spread to economic judgment",
    "C. Ten pillars of religion — the professor was treated as faith-like authority",
    "D. \"Act like a king\" strategy — the professor's confident demeanor convinced people"
  ],
  answer: 0,
  models: ["Authority Bias"],
  secondaryModels: [],
  explanation: "Munger warns of authority bias: people have an innate tendency to obey authority figures (the Milgram experiment is classic proof). The problem isn't respecting experts — it's blindly extending authority from one domain to another where they have no expertise. Munger says: \"Excellence in one field doesn't mean correctness in all fields.\"",
  wrongReasons: "B, halo effect (Kahneman), is indeed a related mechanism — good impression spreading to other dimensions — but Munger's authority bias especially emphasizes the obedience tendency brought by rank and title, which has more structural power than general goodwill spread. C, ten pillars of religion (Lindstrom), compares academic authority to religious faith — interesting but overextended; most people accept the professor's view not from \"faith\" but from automatic social obedience to authority. D, Law 34 (Greene), teaches gaining automatic obedience through regal demeanor — but the professor's influence comes mainly from title and institutional authority, not personal bearing."
},

// ── Q15 ── Action Bias ──────────────────────────────────────────
{
  scenario: "During severe market volatility, you feel intense anxiety and want to \"do something\" — sell holdings, adjust allocation, call your advisor — even though your long-term strategy doesn't need adjustment. How would Munger view this?",
  options: [
    "A. Action bias — when facing crisis, tendency to \"do something\" to relieve anxiety even when inaction may be the better choice",
    "B. System 1 — your fast-reaction system is driving impulsive action",
    "C. Internal trigger — anxiety became the trigger for your trading behavior",
    "D. Dopamine and purchase decisions — trading itself gives you pleasure"
  ],
  answer: 0,
  models: ["Action Bias"],
  secondaryModels: [],
  explanation: "Munger and Buffett both emphasize: in investing, \"not doing\" is often more important than \"doing.\" Action bias is humanity's instinctive response to uncertainty and anxiety — but in investing, frequent trading usually only increases costs and error opportunities. True discipline is being able to stay still when you should.",
  wrongReasons: "B, System 1 (Kahneman), is indeed the fast-reaction system — but System 1 explains the cognitive mechanism; action bias specifically points to the motivational essence of \"needing to do something to relieve anxiety.\" C, internal trigger (Eyal, Hooked), does describe the mechanism of anxiety driving behavior — but Eyal is teaching how to design addictive products, while Munger is warning you not to be manipulated by this mechanism. D, dopamine and purchase decisions (Lindstrom), may indeed be the physiological basis of trading addiction — but the question is why you want to act, not the physiological reward mechanism of action."
},

// ── Q16 ── Stress Influence ──────────────────────────────────────────
{
  scenario: "An employee makes a low-level mistake under a tight deadline that he would never make normally. The manager is angry, but how might Munger explain this situation?",
  options: [
    "A. Stress influence — under high pressure, cognitive ability declines; all biases intensify; people regress to their level of training",
    "B. Ego depletion — the employee's willpower resources were exhausted",
    "C. Fogg behavior model — stress lowered the employee's \"ability\" dimension",
    "D. \"Stir the waters\" strategy — stress made him emotional and led to wrong judgment"
  ],
  answer: 0,
  models: ["Stress Influence"],
  secondaryModels: [],
  explanation: "Munger points out that stress is an amplifier of all cognitive biases: under high pressure, the brain's advanced functions (rational analysis, self-control) are suppressed, and people regress to more primitive response patterns. Military training has a saying: \"You don't rise to the level of expectation under pressure; you fall to the level of your training.\"",
  wrongReasons: "B, ego depletion (Kahneman/Baumeister), is indeed one mechanism of performance decline under stress — but Munger's stress influence is a broader framework: not just willpower exhaustion, but comprehensive cognitive decline and intensification of all biases. C, Fogg behavior model (cited by Eyal), does note that ability is an element of behavior — but it's a tool for designing behavior interventions, not a theory explaining performance degradation under stress. D, Law 39 (Greene), teaches actively creating chaos to make opponents err — but here the stress comes from the deadline, not an enemy's strategy."
},

// ── Q17 ── Denial ──────────────────────────────────────────
{
  scenario: "A company discovers a major quality problem. Executives refuse to admit it, always saying \"it's not that bad\" or \"the data will improve.\" The problem drags on and grows until it erupts in crisis. What's at work?",
  options: [
    "A. Denial tendency — when facing painful reality, humans often choose denial to reduce psychological discomfort",
    "B. Optimism bias — executives are naturally over-optimistic",
    "C. \"Keep your hands clean\" strategy — executives don't want to be associated with the problem",
    "D. Cognitive dissonance — admitting the problem conflicts with \"we're excellent\" self-image"
  ],
  answer: 0,
  models: ["Denial Tendency"],
  secondaryModels: [],
  explanation: "Munger's denial tendency: when reality is too painful, humans instinctively choose denial. It's a psychological defense mechanism — but extremely dangerous in business. Problems don't disappear because you deny them; they worsen from delayed handling. Munger advocates the courage to face reality.",
  wrongReasons: "B, optimism bias (Kahneman), is indeed common executive psychology — but denial and optimism differ: optimism is believing the future will improve; denial is refusing to admit that problems already exist now. C, Law 26 (Greene), teaches not letting bad things be associated with you — but executives aren't \"shifting blame,\" they're \"refusing to admit the problem exists\"; the motives differ. D, cognitive dissonance (cited by Eyal), is indeed one underlying psychological mechanism of denial — but Munger's denial model more directly and broadly describes the avoidance tendency when facing painful reality."
},

// ── Q18 ── Narrative Instinct ──────────────────────────────────────────
{
  scenario: "You pitch your startup to investors with an emotionally compelling story — far more persuasive than simply presenting data. But a rational analyst reminds you: \"The story sounds good, but where's the data?\" What's worth noting here?",
  options: [
    "A. Narrative instinct — humans are wired to understand the world through stories, but preferring good stories over facts can lead to judgment bias",
    "B. Sensory branding — stories touch the senses more than data so they're more effective",
    "C. WYSIATI — the audience judges based only on what you provided (the compelling story)",
    "D. Experience immersion — the audience immerse themselves in the story so they're persuaded"
  ],
  answer: 0,
  models: ["Narrative Instinct"],
  secondaryModels: [],
  explanation: "The human brain is innately a \"story machine\" — we use narrative to organize and understand the world. But Munger warns: a good story's persuasiveness often exceeds its evidentiary basis. Investment decisions driven by story rather than data are easily deceived by compelling but false narratives. Good thinkers are especially wary when the story sounds good.",
  wrongReasons: "B, sensory branding (Lindstrom), does note that multisensory stimulation is more effective than single-channel — but story persuasiveness isn't just \"sensory touch\"; it's the brain's innate preference for narrative processing. C, WYSIATI (Kahneman), is related — the audience may indeed judge based only on presented information — but narrative instinct specifically points to the special persuasiveness of the \"story format\" itself, not just information quantity. D, experience immersion (Eyal), describes one possible mechanism — but Munger's narrative instinct is a broader evolutionary psychology concept: humans innately prefer stories over statistics."
},

// ── Q19 ── Representativeness Heuristic ──────────────────────────────────────
{
  scenario: "You're about to interview a female candidate. Before reading her resume, you already have the stereotype that \"women may be weaker in tech\" and unconsciously interpret some neutral performance negatively during the interview. What bias is this?",
  options: [
    "A. Representativeness heuristic — inferring individual traits from group membership using stereotypes",
    "B. Halo effect — negative impression of the group spread to the individual",
    "C. \"Know who you're dealing with\" strategy — you should understand her first rather than prejudge",
    "D. Implicit bias — your subconscious test would reveal the true prejudice"
  ],
  answer: 0,
  models: ["Representativeness Heuristic"],
  secondaryModels: [],
  explanation: "Representativeness heuristic: judging probability by how much someone or something \"resembles\" a typical representative of a category, ignoring base rates and individual differences. Using the \"women are weak in tech\" stereotype to infer individual ability is a classic case — Munger reminds us to judge by individual facts, not group labels.",
  wrongReasons: "B, halo effect (Kahneman), is the comprehensive spread of goodwill or ill will — though stereotypes do carry \"negative halo\" components, representativeness heuristic more precisely identifies the categorization error of \"inferring individual from group traits.\" C, Law 19 (Greene), teaches understanding others to respond — but Munger's point is recognizing your own bias, not \"investigating\" the other. D, implicit bias (Lindstrom's IAT concept), is indeed a method for measuring subconscious bias — but the question asks \"what bias is this,\" and the answer is representativeness heuristic, not the method for measuring bias."
},

// ── Q20 ── Tendency to Generalize from Small Samples ──────────────────────────────────────────
{
  scenario: "Facing a complex problem, you want to find a simple, \"comprehensive\" solution. But your mentor says: \"A complex problem is unlikely to have one simple, perfect answer — if someone tells you it does, they're probably deceiving you or themselves.\" What thinking is your mentor applying?",
  options: [
    "A. Tendency to overgeneralize — be wary of the impulse to extend partial or one-sided views into universal truth",
    "B. Cognitive ease — people prefer simple answers because the brain likes ease",
    "C. Fogg behavior model — simplicity is a prerequisite for behavior to occur",
    "D. \"Win through your actions\" strategy — rather than pursuing the perfect plan, act immediately"
  ],
  answer: 0,
  models: ["Tendency to Generalize from Small Samples"],
  secondaryModels: [],
  explanation: "Munger warns of the danger of overgeneralization: humans tend to derive universal conclusions from limited information or partial views. Complex problems require multiple mental models, not one \"universal answer.\" H.L. Mencken said: \"For every complex problem there is an answer that is clear, simple, and wrong.\"",
  wrongReasons: "B, cognitive ease (Kahneman), does explain why people prefer simple answers — but the mentor emphasizes not the \"brain preference\" issue but the logical error of \"extending partial views into universal truth.\" C, Fogg behavior model (cited by Eyal), says behavior needs simplicity to occur — but that's a different level from pursuing simple answers: behavior design and cognitive judgment are two different things. D, Law 9 (Greene), encourages action over talk — but the mentor's advice isn't \"don't act\" but \"don't believe oversimplified answers.\""
}

); // end allQuestions.push
