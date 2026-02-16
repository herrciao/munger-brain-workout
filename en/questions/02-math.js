// ═══════════════════════════════════════════════════════════════
//  02 — Mathematical Thinking Models
//  15 questions
// ═══════════════════════════════════════════════════════════════

allQuestions.push(

{
  scenario: "25-year-old Mike has $100,000 in savings. He faces two choices: (A) Invest in an index fund returning ~8% annually, hold for 35 years; (B) Day-trade for quick profits, making dozens of trades per year. What would Munger recommend?",
  options: [
    "A. Choose B — active trading beats the market; 35 years is too long",
    "B. Choose A — the long-term power of compounding far exceeds frequent short-term trading",
    "C. According to \"variable rewards\" theory — short-term trading's uncertainty keeps investment passion alive",
    "D. Day-trade first to accumulate capital, then switch to long-term later"
  ],
  answer: 1,
  models: ["Compounding"],
  secondaryModels: [],
  explanation: "$100,000 compounded at 8% annually for 35 years grows to approximately $1.47 million — this is the exponential power of compounding. Munger and Buffett's wealth is the result of long-term compounding.",
  wrongReasons: "A overestimates day-trading ability. C, \"variable rewards\" (Eyal, Hooked), does explain why short-term trading is addictive — uncertain rewards stimulate dopamine — but this precisely shows that trading's appeal comes from an addiction mechanism, not rational decision-making; Munger would say this is exactly what to avoid. D is a procrastination fallacy — time is the key to compounding."
},
{
  scenario: "A company has excellent products, a great team, and perfect market strategy — but the CFO embezzles funds and management never established internal audits. The company ultimately goes bankrupt due to cash flow collapse. Which Munger model best fits?",
  options: [
    "A. Diminishing returns — too much input for insufficient return",
    "B. Multiply by Zero — one fatal link at zero makes everything else zero",
    "C. \"Planning fallacy\" — management underestimated financial risk",
    "D. \"Keep your hands clean\" principle — someone else should take the fall"
  ],
  answer: 1,
  models: ["Multiply by Zero"],
  secondaryModels: [],
  explanation: "Mathematically, any number multiplied by zero equals zero. No matter how outstanding other aspects of the business are, if one critical link completely fails, the overall result is zero. Munger says: a major flaw in one aspect of a business can render all other efforts worthless.",
  wrongReasons: "A, diminishing returns, refers to declining marginal returns from input, not a fatal weakness. C, \"planning fallacy\" (Kahneman), refers to people underestimating project time and costs — but here the issue isn't inaccurate planning, but one critical link (financial integrity) at zero causing total collapse. D, Law 26 (Greene), is a power tactic — let others take the fall for dirty work — this completely misses Munger's systemic thinking; the issue isn't who takes blame but that the system has a fatal zero."
},
{
  scenario: "You're evaluating an investment. Initially you estimated 30% probability of success. Then you receive important positive news (industry regulatory approval passed). What's the most rational way to update?",
  options: [
    "A. Positive news arrived, directly adjust success probability to 80%",
    "B. Use Bayesian method: combine prior probability (30%) with strength of new evidence, moderately adjust upward (e.g. to 50%)",
    "C. According to \"cognitive ease\" theory — good news makes you feel good, but don't be fooled by feelings",
    "D. According to \"priming effect\" — positive news has already influenced you subconsciously, can't be objective anymore"
  ],
  answer: 1,
  models: ["Bayesian Updating"],
  secondaryModels: [],
  explanation: "Bayesian Updating: prior probability combined with new evidence produces revised posterior probability. Don't completely overturn prior judgment, nor ignore new information — adjust moderately based on evidence strength. Munger believes in an uncertain world, we should continuously revise decisions based on evidence.",
  wrongReasons: "A is overreaction. C, \"cognitive ease\" (Kahneman), does point out that good news makes people lower their guard — but this only warns about bias, doesn't provide a concrete updating method, whereas Bayesian provides a clear framework. D, \"priming effect\" (Lindstrom/Kahneman both mention), describes subconscious influence phenomena — but Munger's Bayesian updating is proactive, systematic belief revision, not passively worrying about being influenced."
},
{
  scenario: "A lottery fanatic tells you: \"Choosing 6 numbers from 50 has tens of millions of combinations, but someone always wins!\" He thinks he has a chance. What concept responds most precisely?",
  options: [
    "A. Permutations & Combinations — C(50,6) ≈ 15.8 million combinations, so single-ticket win probability is extremely low",
    "B. \"Possibility effect\" — small-probability events are psychologically overweighted",
    "C. \"Variable rewards\" — lottery uncertainty stimulates dopamine",
    "D. \"Denominator neglect\" — he only sees \"someone wins\" while ignoring how large the denominator is"
  ],
  answer: 0,
  models: ["Permutations & Combinations"],
  secondaryModels: [],
  explanation: "Permutations and combinations let us quantitatively analyze possibility space. C(50,6) ≈ 15.8 million combinations; single-ticket win probability is roughly 1 in 15.8 million. Munger emphasizes that mastering basic permutations and combinations math helps us understand event probabilities around us.",
  wrongReasons: "B, \"possibility effect\" (Kahneman), does explain why people overestimate small probabilities — but Munger teaches you to calculate what the probability actually is, not just analyze psychological bias. C, \"variable rewards,\" is Eyal citing Skinner's concept, explaining why lotteries are addictive — interesting but doesn't answer the probability question. D, \"denominator neglect\" (Kahneman), is also relevant — he does ignore the denominator — but permutations and combinations provides the concrete calculation method, more powerful than describing bias."
},
{
  scenario: "You discover complex mathematical relationships between your company's profit margin, employee salaries, and customer satisfaction. When profit rises, you can raise salaries; high pay attracts talent improving customer satisfaction; satisfaction drives profit. What concept best analyzes this relationship?",
  options: [
    "A. Algebraic Equivalence — use symbols and equations to represent relationships between these variables, discovering structurally identical patterns",
    "B. \"Focusing illusion\" — you're over-focusing on variables that come to mind",
    "C. \"Hook loop\" model — this is a trigger→action→reward→investment cycle",
    "D. \"Intensity matching\" — you're substituting one dimension's judgment for another"
  ],
  answer: 0,
  models: ["Algebraic Equivalence"],
  secondaryModels: [],
  explanation: "Algebra provides tools to represent quantitative relationships with symbols. Expressing the relationships between profit, salary, and satisfaction with equations reveals that seemingly different problems are structurally identical, allowing mathematical tools for analysis and optimization.",
  wrongReasons: "B, \"focusing illusion\" (Kahneman), refers to overestimating importance when you think of something — but here you're not overestimating importance, you're trying to understand structural relationships between variables. C, \"Hook Model\" (Eyal), is a four-step product design cycle, not suitable for describing mathematical relationships between financial variables. D, \"intensity matching\" (Kahneman), is System 1's mechanism for cross-dimensional judgment conversion — completely different from analyzing algebraic relationships between variables."
},
{
  scenario: "A fund manager beats the market by 20% for three consecutive years. Media calls him a \"stock god.\" How would Munger view this title?",
  options: [
    "A. Three consecutive wins indeed prove his skill",
    "B. Need to consider randomness — three years is too short; luck alone can explain this result; shouldn't prematurely attribute to skill",
    "C. According to \"illusion of validity\" — your confidence in judging him is too high",
    "D. According to \"halo effect\" — media coverage created positive bias toward him"
  ],
  answer: 1,
  models: ["Randomness"],
  secondaryModels: [],
  explanation: "Munger emphasizes humans have a tendency toward \"deceptive pattern recognition\" — seeking causation even in random events. Three years of good performance could be pure luck — among thousands of fund managers, someone will inevitably win three years in a row, just like among 1,000 coin flippers, someone will flip 10 heads in a row.",
  wrongReasons: "A is exactly the error of over-attributing to skill. C, \"illusion of validity\" (Kahneman), does describe how our confidence in predictions doesn't depend on evidence validity — relevant, but Munger points to the problem's core: it's randomness at work, not just that your confidence is problematic. D, \"halo effect,\" is from Kahneman (not Lindstrom), describing positive impressions spreading to other aspects — but the core issue isn't impression bias but that three years of data statistically isn't enough to rule out luck."
},
{
  scenario: "An insurance company actuary uses massive historical data to simulate 10,000 future asset price paths to assess worst-case losses. What concept does this analysis method embody?",
  options: [
    "A. Stochastic Processes — using probability distributions to describe systems containing random components evolving over time",
    "B. \"Outside view\" — referencing historical statistics of similar cases",
    "C. \"Prospect theory\" — evaluating psychological weights of losses and gains",
    "D. \"Limited vs. unlimited variability\" — historical data is ultimately limited"
  ],
  answer: 0,
  models: ["Stochastic Processes"],
  secondaryModels: [],
  explanation: "Stochastic processes like Markov chains and Monte Carlo simulations use probability distributions to describe system behavior overall. The insurance and finance industries precisely use stochastic process models to quantify risk and design products.",
  wrongReasons: "B, \"outside view\" (Kahneman), suggests referencing similar case statistics, contrasting with individual case prediction — similar spirit but \"outside view\" is a decision methodology, not the mathematical tool describing 10,000 path simulations. C, \"prospect theory,\" describes how humans psychologically weight gains and losses — unrelated to actuarial quantitative models. D, \"limited/unlimited variability\" (Eyal), analyzes whether products can continuously attract users — completely unrelated to financial risk simulation."
},
{
  scenario: "You flip a coin 10 times, all heads. A friend says: \"Next flip must be tails to return to average.\" What do you think?",
  options: [
    "A. Friend is right; probability must balance",
    "B. Friend is wrong — each flip is an independent event; probability always 50%. But from Law of Large Numbers, after many flips the heads/tails ratio approaches 50%",
    "C. According to \"law of small numbers\" — your friend mistakenly thinks small samples also show Law of Large Numbers results",
    "D. According to \"regression to the mean\" — extreme results indeed regress afterward"
  ],
  answer: 1,
  models: ["Law of Large Numbers"],
  secondaryModels: [],
  explanation: "Law of Large Numbers states that as trial count approaches infinity, observed average gradually approaches theoretical expected value. But this requires massive repetition, not applicable to single predictions. Friend commits the \"gambler's fallacy\" — 10 flips is too few; each flip remains independent.",
  wrongReasons: "A is the gambler's fallacy — probability doesn't \"owe\" you anything. C, \"law of small numbers\" (Kahneman), does describe this error — people mistakenly apply Law of Large Numbers to small samples — very relevant! But Munger's Law of Large Numbers teaches you to understand statistical principles positively, while Kahneman's \"law of small numbers\" describes human cognitive bias negatively; different angles. D, \"regression to the mean,\" is indeed a real phenomenon, but applies to systems with intrinsic average values (like athlete performance), not independent random events like coin flips."
},
{
  scenario: "You analyze a city's resident income data and find average monthly income is $150,000. But actually most people earn only $40-50,000 monthly; a few tech billionaires pulled up the average. Which concept best fits this distribution?",
  options: [
    "A. Normal distribution — most people near average; this is a normal bell curve",
    "B. Power Law — a few extreme values occupy most of the total; average becomes meaningless",
    "C. \"Narrow framing\" — you only looked at average without seeing overall distribution",
    "D. \"Representativeness heuristic\" — you used average to represent everyone"
  ],
  answer: 1,
  models: ["Power Law"],
  secondaryModels: [],
  explanation: "In power law distributions, a few extreme values are very large and rare; most values are relatively small but common. Wealth distribution is a classic power law; using average to describe individual wealth is meaningless — median represents most people's situation. This is also the mathematical foundation of the \"80-20 rule.\"",
  wrongReasons: "A, normal distribution, assumes data distributes symmetrically around the mean — wealth distribution clearly doesn't. C, \"narrow framing\" (Kahneman), refers to viewing individual decisions in isolation rather than as a portfolio — unrelated to income distribution analysis. D, \"representativeness heuristic,\" judges based on whether something resembles a type — the issue here isn't stereotyping but incorrect distributional assumption."
},
{
  scenario: "In the 2008 financial crisis, many risk models considered nationwide home price decline probability \"near zero\" because they assumed markets follow normal distribution. It happened anyway. What does this illustrate?",
  options: [
    "A. Fat-Tailed Processes — extreme event probability far exceeds normal distribution predictions",
    "B. \"Overconfidence\" — risk modelers were too confident",
    "C. \"Theory-induced blindness\" — they were blinded by normal distribution theory",
    "D. \"Subliminal advertising\" — Wall Street fooled by its own marketing"
  ],
  answer: 0,
  models: ["Fat-Tailed Processes"],
  secondaryModels: [],
  explanation: "Fat-tailed distribution tail probabilities far exceed normal distribution predictions, meaning extreme events occur far more frequently than intuitive expectations. Using normal models underestimated \"black swan\" event probability. Traditional statistics fail in fat-tailed worlds.",
  wrongReasons: "B, \"overconfidence\" (Kahneman), is indeed one factor — modelers were too confident — but the root cause isn't psychological bias but using the wrong mathematical distribution model. C, \"theory-induced blindness\" (Kahneman), is very close! Indeed describes the phenomenon of being blinded by theory — but Munger's \"fat-tailed processes\" directly points to what replacement model to use, not just diagnosing bias. D is completely off-topic."
},
{
  scenario: "An athlete appears on a sports magazine cover, then noticeably underperforms next season. Coach thinks the cover brought a \"curse\" pressure. What's the most reasonable explanation?",
  options: [
    "A. Regression to the Mean — after extreme above-average performance, naturally returns to normal level",
    "B. \"Outcome bias\" — coach infers cause from the declining result",
    "C. \"Negative somatic marker\" — cover pressure formed a negative marker in the brain",
    "D. \"Hindsight bias\" — coach feels decline was predictable after the fact"
  ],
  answer: 0,
  models: ["Regression to the Mean"],
  secondaryModels: [],
  explanation: "In systems with randomness, extreme deviations from average tend to subsequently regress toward the mean. The athlete made the cover due to peak performance (extreme high); subsequent return to normal level looks like \"performance declined,\" but this is statistical inevitability.",
  wrongReasons: "B, \"outcome bias\" (Kahneman), is indeed another error the coach commits — inferring bad cause from bad result — but the more fundamental explanation is regression to the mean, no causal assumption needed. C, \"negative somatic marker\" (Lindstrom/Damasio), assumes a neurological causal mechanism, but statistical regression to the mean needs no causal explanation. D, \"hindsight bias\" (Kahneman), is \"feeling you knew it all along after the fact\" — coach may have this bias, but the question asks why the decline, answer is statistical phenomenon not cognitive bias."
},
{
  scenario: "Someone asks: \"How many piano tuners are in Taiwan?\" You have no data. How would Munger think about this?",
  options: [
    "A. Orders of Magnitude thinking — use estimation to break down step by step: Taiwan population, piano ownership rate, tunings per piano per year, annual work capacity per tuner",
    "B. According to \"anchoring effect\" — think of a number first then adjust",
    "C. According to \"substitution effect\" — replace with an easier question",
    "D. Intuitive guess — intuition is more reliable than analysis without data"
  ],
  answer: 0,
  models: ["Orders of Magnitude"],
  secondaryModels: [],
  explanation: "Fermi estimation is a classic application of orders of magnitude thinking: break down the problem, roughly estimate each part's order of magnitude, reach a conclusion. Not seeking precision but correct order of magnitude. Munger advocates developing a sense of orders of magnitude to quickly distinguish important hierarchical differences.",
  wrongReasons: "B, \"anchoring effect\" (Kahneman), describes the bias of being influenced by initial numbers and insufficiently adjusting — this is exactly what you want to avoid, not a method to emulate. C, \"substitution effect\" (Kahneman), is replacing hard questions with easy ones — here you need to decompose the problem, not replace it. D, without relevant experience, intuition is unreliable; structured Fermi estimation far superior to guessing."
},
{
  scenario: "You hold a stock that's up 200% since the beginning of the year. A friend says such gains can't continue. What framework do you use to think?",
  options: [
    "A. Regression to the Mean — after extreme gains, high probability of decline",
    "B. \"Anchoring effect\" — you're anchored by the 200% number",
    "C. \"Nucleus accumbens\" response — your reward center stimulated by high returns, judgment impaired",
    "D. \"Hunting reward\" — you're enjoying the pleasure of \"searching for high returns\""
  ],
  answer: 0,
  models: ["Regression to the Mean"],
  secondaryModels: [],
  explanation: "In systems with randomness, extreme deviations from average tend to regress toward the mean. If 200% gain partly came from luck or market sentiment, subsequent decline is statistically normal. But distinguish: if fundamentals truly changed, the mean itself may have risen.",
  wrongReasons: "B, \"anchoring effect\" (Kahneman), means you're influenced by a certain number in judgment — but the issue isn't that you're anchored by 200%, but whether 200% is sustainable. C, \"nucleus accumbens\" (Lindstrom citing neuroscience), describes reward circuit activation — interesting but doesn't provide decision framework. D, \"hunting reward\" (Eyal, Hooked), describes the pleasure of searching for substances or information — unrelated to analyzing gain sustainability."
},
{
  scenario: "A large company receives 10,000 resumes during recruitment; HR needs to quickly screen. Experience shows most candidates' abilities cluster around medium level; extremely excellent and extremely unqualified are both rare. This distribution most closely resembles?",
  options: [
    "A. Normal Distribution — most observations cluster near the mean; rarer the farther from mean",
    "B. \"Law of small numbers\" — small samples easily deviate from true distribution",
    "C. Power Law — few people occupy most of the ability",
    "D. \"Statistical neuromarketing\" — brain scans to evaluate candidates more accurately"
  ],
  answer: 0,
  models: ["Normal Distribution"],
  secondaryModels: [],
  explanation: "Normal distribution (bell curve) describes many natural and social phenomena: most observations cluster near the mean; frequency decreases with distance from mean. Height, IQ test scores, comprehensive ability in large-scale recruitment all approximate normal distribution.",
  wrongReasons: "B, \"law of small numbers\" (Kahneman), describes small samples easily deviating — but 10,000 resumes is a large sample, perfect for normal analysis. C, \"power law,\" applies to extremely unequal phenomena like wealth, city population — talent ability usually isn't power law distributed. D is completely off-topic."
},
{
  scenario: "Netflix's recommendation system analyzes movies you've watched, predicting what you might like based on genre, ratings, watch duration and other data using a systematic set of steps. What is this set of steps essentially?",
  options: [
    "A. Algorithm — a systematic, repeatable set of steps to solve a problem or achieve a goal",
    "B. \"Variable rewards\" — recommendation system creates uncertain novelty",
    "C. \"Substitution effect\" — system substituted \"what you've watched\" for \"what you truly like\"",
    "D. \"Neuromarketing predictive power\" — big data predicts more accurately than human brain"
  ],
  answer: 0,
  models: ["Algorithms"],
  secondaryModels: [],
  explanation: "An algorithm is a clear, finite-step process that accepts certain inputs and produces certain outputs. Google search, Netflix recommendations, GPS navigation are all algorithm applications. Munger emphasizes understanding algorithmic thinking helps establish systematic decision processes.",
  wrongReasons: "B, \"variable rewards\" (Eyal), is indeed one effect of recommendation systems — but the question asks what this set of steps \"is,\" not what effect it produces. C, \"substitution effect\" (Kahneman), has some merit — but the recommendation system's essence is an algorithm, not a cognitive bias. D is too vague, not a specific thinking model."
}

);
