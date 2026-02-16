// ═══════════════════════════════════════════════════════════════
//  PROTOTYPE — English Version (3 sample questions)
//  For evaluation only. Not loaded by the quiz.
//
//  Source strategy: "Extract from English originals" not "translate from Chinese"
//  - Model names: direct English (stripped Chinese)
//  - Explanations: use original English terminology from source books
//  - Scenarios: natural English rewrite (not literal translation)
//  - Options: concept names from original texts, descriptions rewritten
// ═══════════════════════════════════════════════════════════════


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  Q1 — v1 Classic (from 01-general.js, question 1)
//  Original model: 反向思考 (Inversion)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
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
  explanation: "Inversion is one of Munger's most prized thinking tools — instead of only asking \"how do we succeed?\", first ask \"how could we fail?\" By listing fatal risks and eliminating them one by one, you uncover blind spots that forward-looking optimism tends to miss. As Munger famously says: \"Invert, always invert.\" (a nod to the mathematician Carl Jacobi).",
  wrongReasons: "B is blind imitation — copying a competitor ignores differences in resources, culture, and market position. C, the \"premortem,\" is Gary Klein's technique described in Kahneman's Thinking, Fast and Slow — while similar in spirit, it's a specific team exercise (\"imagine we've already failed, write the story of how it happened\"), whereas Munger's Inversion is a broader philosophical framework applicable far beyond group meetings. D ignores concentration risk and second-order effects."
},


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  Q2 — v2 Cross-Skill Fusion (from 07-cross-fusion.js, CF-01)
//  Original model: 紅皇后效應 (Red Queen Effect)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
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
  explanation: "Munger's Red Queen Effect (borrowed from evolutionary biology) states that in a competitive environment, you must keep evolving just to maintain your current position. A ritual that can be easily copied is not a \"moat\" — it provides no structural barrier to competition. The CEO should look for durable, hard-to-replicate competitive advantages rather than doubling down on a tactic that has already been commoditized.",
  wrongReasons: "A — \"Ritual stickiness\" draws on Lindstrom's Buyology, which documents how rituals (like the Corona lime wedge) increase brand attachment. But the core problem here isn't that the ritual isn't sticky enough — it's that the ritual is too easy to copy. B — \"Mirror neurons\" explain individual consumer impulses at the neurological level (Lindstrom), but the issue here is structural competition, not brain circuitry. D — Regression to the Mean (also a Munger model) explains statistical reversion of random outliers, but this drop has a clear external cause (competitor imitation), not random fluctuation."
},


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  Q3 — v2 Reverse Diagnosis (from 08-reverse-diag.js, RD-01)
//  Original model: 承諾與一致性偏差 (Commitment & Consistency Bias)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
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
  explanation: "His most fundamental error is Commitment & Consistency bias — once he had publicly invested three months of research and made the initial buy decision, a powerful psychological drive kicked in to \"stay consistent.\" The doubling down was not a product of rational analysis; it was an attempt to prove his earlier decision right. As Cialdini writes in Influence: \"Commitment and Consistency\" are \"hobgoblins of the mind\" — once we take a stand, we feel compelled to behave in ways that justify it. Munger himself warns: the most important principle in the human brain is that once a commitment is made, people will unconsciously work to prove it was correct.",
  wrongReasons: "A — Overconfidence (Kahneman, Thinking, Fast and Slow) was likely present, but it explains why he dared to invest in the first place, not why he doubled down after a 30% drop. C — Risk management and portfolio concentration (Taleb, Skin in the Game) is a portfolio-level issue, not the psychological driver of this specific doubling-down decision. D — Confirmation bias (also a Munger model) may have been at work, but it's a tool of Commitment bias — he needed to prove himself right (commitment), so he went looking for supporting evidence (confirmation). The root cause is the commitment; confirmation bias is the mechanism it employs."
}
