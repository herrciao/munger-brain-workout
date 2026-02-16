// ═══════════════════════════════════════════════════════════════
//  04 — Physics World + Biological Evolution Models
//  21 questions
// ═══════════════════════════════════════════════════════════════

allQuestions.push(

// ── Q1 ── Incentives ──────────────────────────────────────────
{
  scenario: "A company's sales team is rewarded only for \"new customer sign-ups,\" with no metric for customer retention. Three quarters later, the company finds that existing customers are churning heavily and revenue has declined. Where does the root problem lie?",
  options: [
    "A. The sales team lacks capability and needs more training",
    "B. The incentive structure is misdesigned — it drives short-term behavior",
    "C. This is \"loss aversion\" — the team fears losing new-customer bonuses so they neglect existing clients",
    "D. Per \"power laws,\" the sales team is rationally maximizing personal gain"
  ],
  answer: 1,
  models: ["Incentives"],
  secondaryModels: ["Churn"],
  explanation: "Munger says: \"Never underestimate the power of incentives.\" When bonuses reward only new customers, the sales team naturally pours all effort into acquisition and neglects serving existing clients. It's not a people problem — it's a systems problem. Incentive structure determines the direction of behavior.",
  wrongReasons: "A blames a systems problem on individual capability. C, \"loss aversion\" (Kahneman), refers to people's fear of losses outweighing their desire for equivalent gains — but here the issue isn't psychological fear, it's that the bonus structure directly steers behavior. D, while superficially correct (people do pursue self-interest), Greene's lens is power manipulation whereas Munger's is system design: the problem lies in incentive structure, not human wickedness."
},

// ── Q2 ── Red Queen Effect ─────────────────────────────────────
{
  scenario: "A smartphone company has held the market lead for five consecutive years. Management believes its position is secure and decides to cut R&D budget by 40%, returning the savings to shareholders. As an analyst, what worries you most?",
  options: [
    "A. This is a good decision — returning capital to shareholders beats wasting it on uncertain R&D",
    "B. It violates the Red Queen Effect — in a competitive market, stopping innovation means falling behind; competitors won't stop",
    "C. Per \"Know When to Stop\" strategy, this is wisdom in knowing when to quit while ahead",
    "D. Per \"overconfidence\" theory, management overestimates the durability of its brand moat"
  ],
  answer: 1,
  models: ["Red Queen Effect"],
  secondaryModels: ["Creative Destruction"],
  explanation: "Red Queen Effect: \"Here you must run as fast as you can just to stay in place.\" Competitors keep advancing; stopping R&D isn't maintaining the status quo but falling behind relatively. Combined with Creative Destruction — technological revolutions destroy firms that fail to innovate.",
  wrongReasons: "A shortsightedly pursues current dividends. C, Law 47 \"Know When to Stop\" (Greene's 48 Laws), teaches not to overextend in power struggles — but this isn't a power game of advance-and-retreat, it's a market survival issue. In tech, stopping innovation isn't \"knowing when to quit\" but \"waiting to die.\" D, \"overconfidence\" (Kahneman), is indeed one cognitive bias of management — but Munger's Red Queen Effect points to a more fundamental structural issue: it's not that management thinks wrong, but that the competitive environment itself does not allow stagnation."
},

// ── Q3 ── Reciprocity ─────────────────────────────────────────
{
  scenario: "You give an important client a thoughtfully prepared gift. Thereafter, this client consistently favors your company in several business decisions, even when competitors' proposals are objectively better. What model best explains this phenomenon?",
  options: [
    "A. \"Investment phase\" theory — the client feels obligated to reciprocate because they accepted the gift",
    "B. Reciprocity (action-reaction) — after receiving a favor, people instinctively want to repay it",
    "C. \"Somatic markers\" — the gift formed a positive marker in the client's mind for your company",
    "D. \"Use selective honesty to disarm\" strategy — the gift is strategic goodwill"
  ],
  answer: 1,
  models: ["Reciprocity"],
  secondaryModels: ["Pavlovian Association"],
  explanation: "Reciprocity is one of humanity's strongest social instincts: when others give us something good, we instinctively want to give back. Munger notes in his mental models that reciprocity is a powerful influence technique. The gift creates a \"social debt.\"",
  wrongReasons: "A, \"investment phase\" (Eyal's Hooked), refers to product design where users who invest time/data find it harder to leave — here the client invested nothing, they received a gift, so the direction is reversed. C, \"somatic markers\" (Lindstrom/Damasio), are subconscious experience-emotion links — but reciprocity is more precise: the client doesn't just \"feel good,\" they feel a social obligation to reciprocate. D, Law 12 (Greene), treats gifts as manipulation — while the effect may be similar, Munger's Reciprocity model describes a human instinct, not a guide to manipulating others."
},

// ── Q4 ── Laws of Thermodynamics ───────────────────────────────
{
  scenario: "Company culture, without ongoing investment in training and norms, gradually becomes slack and chaotic. It's like a room that gets messier if you don't tidy it. What physical principle does this embody?",
  options: [
    "A. Laws of Thermodynamics (entropy) — isolated systems spontaneously tend toward disorder; maintaining order requires continuous energy input",
    "B. \"Law of least effort\" — people are naturally inclined to do the minimum",
    "C. \"LIFO principle\" — the most recently formed habits disappear first",
    "D. \"Sensory brand\" decay — without ongoing sensory stimulation, brand impressions weaken"
  ],
  answer: 0,
  models: ["Laws of Thermodynamics"],
  secondaryModels: [],
  explanation: "Second law of thermodynamics: entropy (disorder) in an isolated system does not spontaneously decrease. To maintain organizational order, you must continuously invest extra energy (management, training, systems). Munger extends entropy to illustrate humanity's tendency toward self-destruction — discipline and systems are needed to counter it.",
  wrongReasons: "B, \"law of least effort\" (Kahneman), does explain inertia at the individual level — but entropy is a system-level physical law, not just laziness. C, \"LIFO\" (Eyal), describes the order in which behavioral habits disappear — too narrow to explain overall organizational entropy. D, \"sensory brand decay,\" is a marketing concept — not the same level as systemic organizational decay."
},

// ── Q5 ── Velocity ─────────────────────────────────────────────
{
  scenario: "You work with high efficiency (fast speed) but in the completely wrong direction. After three months of intense effort, the team discovers that what they built is something customers don't need at all. What concept does this embody?",
  options: [
    "A. Velocity — speed alone doesn't produce results; direction matters too",
    "B. \"Action bias\" — you rushed to act without first thinking through direction",
    "C. \"Trigger → Action\" — the team was triggered and acted directly, skipping the thinking step",
    "D. \"Plan all the way to the end\" strategy — you didn't work backward from the outcome"
  ],
  answer: 0,
  models: ["Velocity"],
  secondaryModels: [],
  explanation: "Speed measures only how fast; velocity as a vector considers direction too. Wrong direction means the faster you go, the farther you stray from the goal. Munger stresses that \"doing the right thing\" (direction) matters more than \"doing things right\" (speed).",
  wrongReasons: "B, \"action bias\" (Munger also has this model), may be one cause — but the core issue isn't \"too hasty\" but \"wrong direction.\" C, \"Trigger → Action\" (Eyal), is a product design flow — not applicable to analyzing team direction error. D, Law 29 (Greene), teaches thorough planning in power games — but the velocity model more precisely identifies the essence: speed and direction are two independent dimensions."
},

// ── Q6 ── Activation Energy ───────────────────────────────────
{
  scenario: "New employees need a ramp-up period before they can contribute, just as a chemical reaction requires an initial energy input to get started. The company should invest extra training and mentoring resources during this period. What concept does this analogy illustrate?",
  options: [
    "A. Activation energy — a chemical reaction needs an initial energy input to break the existing state and begin",
    "B. \"External trigger\" — new employees need an external push to start working",
    "C. \"Cognitive strain\" — the new environment puts the brain in a stressed state",
    "D. \"Recreate yourself\" strategy — new employees need to redefine their role"
  ],
  answer: 0,
  models: ["Activation Energy"],
  secondaryModels: [],
  explanation: "Activation energy: a reaction needs an initial energy input to begin. Once past the threshold, things may flow smoothly. Investing in new-employee onboarding is \"activation energy\" — get through the initial difficulty to enter a virtuous cycle.",
  wrongReasons: "B, \"external trigger\" (Eyal), refers to product design notifications/prompts that guide user action — not the same as organizational onboarding. C, \"cognitive strain\" (Kahneman), does describe the psychological state in new environments — but the question asks what the organization should invest in, not what describes the new employee's psychology. D, Law 25 (Greene), is about self-reinvention in power games to control image — unrelated to onboarding."
},

// ── Q7 ── Catalyst ─────────────────────────────────────────────
{
  scenario: "After the company brings in an experienced external consultant, internal reform accelerates sharply and previously stalled projects start moving. The consultant doesn't do execution work directly. What role does this consultant most resemble?",
  options: [
    "A. Catalyst — accelerates the reaction without being consumed, lowering the required activation energy",
    "B. \"Internal trigger\" — the consultant became a persistent reminder that triggers team action",
    "C. \"Priming effect\" — the consultant's presence subconsciously primed the team's willingness to act",
    "D. \"Get others to do the work, take the credit\" strategy — the consultant gets others to work while taking credit"
  ],
  answer: 0,
  models: ["Catalyst"],
  secondaryModels: [],
  explanation: "In chemistry, a catalyst lowers activation energy and accelerates a reaction without being consumed. In business, adding one key person can dramatically lower the threshold for collaboration or innovation, multiplying progress without personally investing equivalent resources.",
  wrongReasons: "B, \"internal trigger\" (Eyal), is a user-subscribed reminder mechanism — the consultant isn't a \"reminder\" role but an \"accelerator\" role. C, \"priming effect\" (Kahneman), is subconscious influence — but the consultant's effect is usually conscious, structural improvement, not subconscious suggestion. D, Law 7 (Greene), is about stealing credit in power games — it twists the consultant's positive contribution into manipulation."
},

// ── Q8 ── Leverage ────────────────────────────────────────────
{
  scenario: "An entrepreneur uses a small amount of personal capital, combined with venture funding and team collaboration, to take a company from garage to IPO in a few years. What principle is he using?",
  options: [
    "A. Leverage — using smaller input to move relatively larger output, amplifying capability with external forces",
    "B. \"Viral loop time\" — rapid user acquisition drives viral growth",
    "C. \"Optimism bias\" — entrepreneurs are naturally overoptimistic, which is why they start companies",
    "D. \"Bold action\" strategy — entrepreneurship requires courage and daring"
  ],
  answer: 0,
  models: ["Leverage"],
  secondaryModels: [],
  explanation: "Leverage: using smaller input to produce relatively larger output. The entrepreneur uses personal capital (small fulcrum) to leverage VC (financial leverage), team (human leverage), and tech tools (technical leverage) to amplify results. But leverage amplifies both gains and risks.",
  wrongReasons: "B, \"viral loop\" (Eyal/Skok), is a specific user-growth mechanism — one manifestation of leverage, but leverage is the more fundamental concept. C, \"optimism bias\" (Kahneman), is indeed common among entrepreneurs — but the question asks about the mechanism of success, not psychological traits. D, Law 28 (Greene), encourages bold action — but entrepreneurial success depends on more than daring; it depends on using leverage to amplify limited resources."
},

// ── Q9 ── Inertia ──────────────────────────────────────────────
{
  scenario: "A century-old business operates with outdated methods, but employees are used to the existing processes. Any change proposal meets strong resistance. \"We've always done it this way\" is the most common refrain. What is at work?",
  options: [
    "A. Inertia — objects tend to maintain their current state; people and organizations similarly resist change",
    "B. \"Endowment effect\" — employees overvalue the existing processes",
    "C. \"Stored value\" — employees have invested too much skill in the old process so they're reluctant to change",
    "D. \"Status quo bias\" — people prefer the status quo because of loss aversion"
  ],
  answer: 0,
  models: ["Inertia"],
  secondaryModels: [],
  explanation: "Physics inertia: objects tend to maintain their current state unless acted on by an external force. Organizations and individuals have powerful behavioral inertia. Munger stresses not to underestimate organizational inertia — even when management wants change, the inertia of culture and process can drag progress down.",
  wrongReasons: "B, \"endowment effect\" (Kahneman/Thaler), may be one psychological factor — but inertia is a broader concept, including institutional, cultural, and process-level resistance beyond individual psychology. C, \"stored value\" (Eyal), describes users becoming more dependent on a product through investment — too narrow an angle. D, \"status quo bias\" (Kahneman), is very similar to inertia! But Kahneman focuses on individual psychology; Munger's \"inertia\" is a physics analogy that encompasses the whole organizational system's resistance to change."
},

// ── Q10 ── Alloying ───────────────────────────────────────────
{
  scenario: "Combining knowledge from multiple disciplines to analyze a problem often yields insights beyond any single discipline — just as steel is harder than pure iron because of the alloying effect of carbon and iron. What does Munger's latticework of mental models embody?",
  options: [
    "A. Alloying — different elements combined produce synergistic effects beyond simple addition",
    "B. \"System 1/System 2 integration\" — combining fast and slow thinking",
    "C. \"Hook Model\" — different stages combined form a complete cycle",
    "D. \"Multi-sensory brand\" — multiple sensory stimuli are stronger than single"
  ],
  answer: 0,
  models: ["Alloying"],
  secondaryModels: [],
  explanation: "Alloying: different elements combine to form alloys whose properties exceed the linear sum of the elements alone (2+2>4). Munger \"alloys\" multidisciplinary knowledge into a latticework of wisdom, yielding insight far beyond any single discipline.",
  wrongReasons: "B, \"System 1/2 integration,\" is about two modes of individual cognition — not cross-disciplinary synthesis. C, \"Hook Model\" (Eyal), is a four-step product design cycle — different level from knowledge integration. D, \"multi-sensory brand\" (Lindstrom), is indeed an example of multiple elements producing stronger effect — but it's limited to brand sensory experience, whereas Munger's alloying is a principle of knowledge integration across all domains."
},

// ── Q11 ── Cooperation & Symbiosis ─────────────────────────────
{
  scenario: "Hummingbirds and flowers benefit mutually — hummingbirds get nectar for food while pollinating flowers for reproduction. In business, two companies forming an alliance to develop a market together can capture a larger share than each fighting alone. What does this embody?",
  options: [
    "A. Cooperation & Symbiosis — different entities gain benefits through cooperation that they cannot achieve alone",
    "B. \"Tribal reward\" — both sides benefit from each other's community identity",
    "C. \"Narrow framing\" — acting alone is narrow framing, cooperation is broad framing",
    "D. \"Learn to use enemies\" strategy — turn competitors into allies"
  ],
  answer: 0,
  models: ["Cooperation & Symbiosis"],
  secondaryModels: [],
  explanation: "Evolution involves not only competition but widespread cooperation. The wise use cooperation — it often yields 1+1>2. Munger believes in seeking win-win or multi-win strategies in competition, not zero-sum games.",
  wrongReasons: "B, \"tribal reward\" (Eyal), is a product-design social-identity mechanism — not the same as strategic cooperation between firms. C, \"narrow framing\" (Kahneman), is a cognitive bias — using it to describe cooperation vs. independence is an imprecise analogy. D, Law 2 (Greene), teaches using former enemies — the spirit is manipulative \"use\" rather than mutually beneficial \"symbiosis\"; the nature differs."
},

// ── Q12 ── Minimization of Energy Output ───────────────────────
{
  scenario: "Most people would rather lie on the couch watching TV after work than learn new skills. It's not that they don't want to improve — it's that the brain instinctively conserves energy. What evolutionary concept does this embody?",
  options: [
    "A. Minimization of energy output — organisms tend to achieve goals with minimal energy expenditure",
    "B. \"Law of least effort\" — people naturally choose the least effortful option",
    "C. \"Fogg Behavior Model\" — insufficient motivation plus insufficient ability leads to inaction",
    "D. \"Reward & punishment\" — TV's immediate pleasure outweighs learning's delayed reward"
  ],
  answer: 0,
  models: ["Minimization of Energy Output"],
  secondaryModels: [],
  explanation: "A principle from biology to physics: systems tend to achieve goals with minimal energy expenditure. The brain is energy-intensive; preferring simple mental shortcuts is for energy conservation. Munger's model explains the evolutionary root of inertia.",
  wrongReasons: "B, \"law of least effort\" (Kahneman), is very similar to Munger's concept — but Kahneman focuses on the cognitive level (laziness of thinking), while Munger's model explains broader energy strategy (physical and cognitive) from an evolutionary angle. C, \"Fogg Behavior Model\" (cited by Eyal), provides a framework for changing behavior — an application tool, not an explanation of evolutionary instinct. D mixes Munger's own \"reward & punishment\" model with Lindstrom — relevant, but the question asks the root cause of \"why the tendency toward inaction,\" and the answer is energy strategy."
},

// ── Q13 ── Adaptation ──────────────────────────────────────────
{
  scenario: "Kodak dominated the film era but failed to adapt to the digital revolution and was eliminated. Nokia dominated feature phones but lost to smartphones. What is the common lesson from these stories?",
  options: [
    "A. Adaptation — species (and firms) must adapt to environmental change to survive; the unfit are eliminated",
    "B. \"Theory-induced blindness\" — they were blinded by their own success model",
    "C. \"Limited variability\" — their products became predictable so they lost appeal",
    "D. \"Remain formless\" strategy — they were too fixed, so easily attacked"
  ],
  answer: 0,
  models: ["Adaptation"],
  secondaryModels: ["Evolution by Natural Selection"],
  explanation: "Adaptation is central to evolution: when the environment changes, species that can adjust survive. Kodak and Nokia failed to adapt to radical technological change and were eliminated — market competition is the business version of natural selection.",
  wrongReasons: "B, \"theory-induced blindness\" (Kahneman), describes one possible psychological mechanism — but the question asks for the lesson (should adapt), not just diagnosing the error. C, \"limited variability\" (Eyal), describes products losing novelty — Kodak's demise wasn't because film was \"predictable\" but because the entire technological paradigm was replaced. D, Law 48 (Greene), teaches staying flexible in power games — overlap in concept, but Munger's \"Adaptation\" comes from evolution, emphasizing survival necessity rather than strategic choice."
},

// ── Q14 ── Exaptation ─────────────────────────────────────────
{
  scenario: "The \"@\" symbol on the keyboard was rarely used until email gave it a wholly new and important purpose. Uber applied GPS and online payment technology to the taxi industry, revolutionizing it. What does this embody?",
  options: [
    "A. Exaptation — existing structures or technologies are \"co-opted\" for entirely new uses",
    "B. \"Focusing illusion\" — the new use makes it seem more important than before",
    "C. \"Enabling technology\" — new technology makes existing behavior easier",
    "D. \"Product placement\" — integrating technology naturally into new contexts"
  ],
  answer: 0,
  models: ["Exaptation"],
  secondaryModels: [],
  explanation: "Exaptation: a biological trait or technology originally evolved/invented for one function is later co-opted for a wholly new use. Bird feathers first served insulation, later flight; the @ symbol was originally an accounting symbol, co-opted as the email address symbol.",
  wrongReasons: "B, \"focusing illusion\" (Kahneman), is when thinking of something leads to overestimating its importance — unrelated to technology co-option. C, \"enabling technology\" (Eyal/Maples), is indeed relevant — new tech lowers behavioral thresholds — but exaptation emphasizes the creativity of \"old element, new use,\" not just threshold-lowering. D, \"product placement\" (Lindstrom), is brands integrated into narrative in programming — not the same as technology exaptation."
},

// ── Q15 ── Dunbar's Number ────────────────────────────────────
{
  scenario: "Your company has about 150 employees; team cohesion and communication efficiency are high. Now you're expanding to 500. According to Munger's biological models, what should you watch for?",
  options: [
    "A. Dunbar's Number — the human brain limits stable social relationships to about 150 people; beyond that, formal systems are needed to sustain the organization",
    "B. \"Cognitive load\" — 500 people's information exceeds managers' cognitive processing capacity",
    "C. \"Tribal reward\" — a 500-person community needs more social-identity mechanisms",
    "D. \"Cultivate unpredictability\" strategy — large organizations need more managerial authority"
  ],
  answer: 0,
  models: ["Dunbar's Number"],
  secondaryModels: [],
  explanation: "Dunbar's Number: the human brain limits stable social relationships to about 150 people. Beyond this scale, organizations need formal rules and systems rather than pure interpersonal ties. Military structure and corporate architecture reflect this cognitive ceiling.",
  wrongReasons: "B, \"cognitive load,\" is a general concept — Dunbar's Number provides a specific numerical threshold (~150) and evolutionary explanation. C, \"tribal reward\" (Eyal), is a product-design social mechanism — not applicable to organizational structure design. D, Law 17 (Greene), teaches creating uncertainty in power games to maintain authority — completely different from organizational design principles."
},

// ── Q16 ── Replication ────────────────────────────────────────
{
  scenario: "An idea goes viral on Twitter — each person just clicks share to spread it. In one day it goes from one person to a million. This exponential information spread most resembles what in biology?",
  options: [
    "A. Replication — information self-replicates and spreads like genes; each replication may produce variation",
    "B. \"Viral loop time\" — share speed determines spread efficiency",
    "C. \"Associative activation\" — one idea activates related ideas, forming diffusion",
    "D. \"Mirror neurons\" — people see others share and imitate sharing"
  ],
  answer: 0,
  models: ["Replication"],
  secondaryModels: [],
  explanation: "Replication is a fundamental mechanism of life — DNA self-replication, cell division, viral spread. Dawkins' \"meme\" precisely compares cultural information to gene replication: ideas self-replicate and spread like viruses, and may mutate in transmission.",
  wrongReasons: "B, \"viral loop time\" (Eyal/Skok), measures speed from one spread to the next — but this is only one metric of the replication process, not the fundamental concept explaining exponential growth. C, \"associative activation\" (Kahneman), is chain reactions of ideas within an individual brain — not group-level information spread. D, \"mirror neurons\" (Lindstrom), explains individual imitation — but replication is the more fundamental information-theoretic/biological concept."
},

// ── Q17 ── Hierarchical and Organizational Instincts ───────────
{
  scenario: "A troop of monkeys has a strict hierarchy — higher-ranked ones eat first and choose mates first. Human organizations have similar hierarchical structures (CEO → VP → Manager → Employee). Why is hierarchy so universal?",
  options: [
    "A. Hierarchical and organizational instincts — social animals are innately inclined to form hierarchies because they reduce conflict and improve coordination efficiency",
    "B. \"Play the perfect courtier\" strategy — learning to survive in hierarchy is the foundation of power",
    "C. \"Framing effect\" — hierarchy is just one way of viewing the organization",
    "D. \"Tribal reward\" — hierarchy provides the social reward of status advancement"
  ],
  answer: 0,
  models: ["Hierarchical and Organizational Instincts"],
  secondaryModels: [],
  explanation: "Evolutionary psychology shows that social animals are innately inclined to form hierarchies — this reduces internal conflict and improves decision efficiency. The hierarchical structure in human organizations is rooted in evolutionary instinct. Munger reminds us to understand this instinct to design better organizations.",
  wrongReasons: "B, Law 24 (Greene), teaches how to rise in power hierarchies — strategic advice, not an explanation of why hierarchy exists. C, \"framing effect\" (Kahneman), is how different descriptions of the same problem affect choice — unrelated to the evolutionary origin of hierarchy. D, \"tribal reward\" (Eyal), is indeed one function of hierarchy — the reward of status advancement — but Munger's model explains from an evolutionary angle why hierarchy emerges spontaneously."
},

// ── Q18 ── Self-Preservation Instinct ───────────────────────────
{
  scenario: "During a financial crisis, investors panic-sell even when they know long-term holding is more rational — because the impulse to \"preserve capital and survive\" overrides all rational analysis. Where does this impulse come from?",
  options: [
    "A. Self-preservation instinct — the most basic drive of organisms is to avoid being eliminated; this instinct can override rational analysis",
    "B. \"Loss aversion\" — the pain of loss is twice the pleasure of equivalent gain",
    "C. \"System 1\" — the fast-reaction system takes over decision-making in crisis",
    "D. \"Fear somatic markers\" — past fear experiences formed conditioned reflexes"
  ],
  answer: 0,
  models: ["Self-Preservation Instinct"],
  secondaryModels: [],
  explanation: "Self-preservation is the most fundamental drive of all organisms, deeply shaping human behavior. Panic selling in investing is essentially the self-preservation instinct playing out in finance — \"preserve capital and survive\" overrides rational analysis. Understanding this instinct is how you stay rational at critical moments.",
  wrongReasons: "B, \"loss aversion\" (Kahneman), does describe fear of loss — but self-preservation instinct is the deeper biological explanation: not just \"fear of losing money\" but evolution's \"fear of death\" instinct projected onto investing. C, \"System 1\" (Kahneman), explains the fast-reaction mechanism — but doesn't explain why the fast reaction is \"flee\" rather than something else. D, \"fear somatic markers\" (Lindstrom/Damasio), explains conditioned reflexes — but self-preservation instinct requires no learning; it's innate."
},

// ── Q19 ── Reward & Punishment Superresponse ────────────────────
{
  scenario: "A dog trainer feeds a dog while ringing a bell; after many repetitions, the dog salivates at the sound alone. A company always pairs its brand ads with pleasant music and scenes. What is the common principle?",
  options: [
    "A. Reward & Punishment superresponse — building behavior patterns through reward and punishment, including subconscious conditioned reflexes",
    "B. \"Sensory brand\" — multi-sensory stimuli (sound + visual) build brand connection",
    "C. \"External trigger\" — the bell and ads are external signals that trigger user action",
    "D. \"Priming effect\" — prior stimulus influences subsequent response"
  ],
  answer: 0,
  models: ["Reward & Punishment Superresponse"],
  secondaryModels: [],
  explanation: "Munger emphasizes reward-punishment superresponse: organisms react exceptionally strongly to reward and punishment, and can form conditioned reflexes (Pavlovian effect). Brand ads use repeated pairing of positive situations with the brand to build subconscious positive associations — essentially the same principle as dog training.",
  wrongReasons: "B, \"sensory brand\" (Lindstrom), is indeed one aspect of brand advertising — but it describes the means (multi-sensory), not the principle explaining why it works (conditioned reflex reward-punishment). C, \"external trigger\" (Eyal), is a signal that guides action — but the bell isn't meant to make the dog \"act,\" it has already established an automatic physiological response. D, \"priming effect\" (Kahneman), is indeed one related mechanism — but Munger's \"reward & punishment\" is a more complete framework for how reward shapes and changes behavior."
},

// ── Q20 ── Extinction ───────────────────────────────────────────
{
  scenario: "Dinosaurs ruled Earth for 160 million years before going extinct from an asteroid impact. Blockbuster, once a retail giant, perished as Netflix rose. What lesson would Munger draw?",
  options: [
    "A. Extinction — in the face of sufficiently drastic environmental change, any once-successful species or firm can disappear entirely",
    "B. \"Black swan\" — unpredictable events destroyed the old order",
    "C. \"Crush your enemy totally\" strategy — Netflix totally crushed Blockbuster",
    "D. \"Habit replacement\" — new habits (streaming) replaced old habits (rentals)"
  ],
  answer: 0,
  models: ["Extinction"],
  secondaryModels: [],
  explanation: "Extinction reminds us: even the most successful species or firms can vanish entirely when the environment changes drastically. Munger uses this model to warn against \"too big to fail\" illusions. Long-term survival requires continuous adaptation, or you face elimination.",
  wrongReasons: "B, \"black swan,\" is indeed relevant — the asteroid was a black swan event — but Netflix's impact on Blockbuster wasn't unpredictable; it was gradual environmental change. C, Law 15 (Greene), uses the power-game frame of \"enemy destroys enemy\" — but extinction is environment-driven, not deliberate action by one party. D, \"habit replacement\" (Eyal), describes a product-level phenomenon — but Munger's \"Extinction\" is a broader evolutionary view: the fundamental law of species/firm-level demise."
},

// ── Q21 ── Ecosystem ───────────────────────────────────────────
{
  scenario: "In the Amazon rainforest, millions of species form complex food chains and energy flows. Clearing a large swath of forest doesn't just reduce trees — it triggers cascading extinction of countless species that depend on them. What does this embody?",
  options: [
    "A. Ecosystem — understanding the interdependence of parts in a system; move one piece and the whole shifts",
    "B. \"Focusing illusion\" — you only see the trees cut, ignoring the whole system",
    "C. \"Network effects\" — more species make the system more valuable",
    "D. \"Second-order effects\" — cutting trees is first-order, species extinction is second-order"
  ],
  answer: 0,
  models: ["Ecosystem"],
  secondaryModels: [],
  explanation: "An ecosystem is a highly interconnected system of all living things and matter in nature. Munger uses the ecosystem model to analyze business: a company doesn't exist in isolation — it depends on the \"business ecosystem\" of suppliers, customers, community, regulatory environment. Disrupting one link can trigger cascading effects.",
  wrongReasons: "B, \"focusing illusion\" (Kahneman), is when what you see leads to overestimating it — but the core issue here isn't attention bias but the objective fact of system interdependence. C, \"network effects\" (Eyal; Munger also has this model), describes more users making something more valuable — different concept; ecosystem emphasizes interdependence, not value accretion. D — \"second-order effects\" is Munger's model but Kahneman doesn't have this concept, and the ecosystem model isn't just describing a causal chain but emphasizing the organic unity of the whole system."
}

); // end allQuestions.push
