# Munger Mental Models Training Quiz — English Version

This directory contains the complete English version of the quiz, created using the "Extract from English originals" strategy rather than literal translation.

## Directory Structure

```
en/
├── index.html              # English quiz engine + UI
├── validate.js             # English validation script
├── questions/
│   ├── _loader.js          # Question loader
│   ├── 01-general.js       # 13 questions
│   ├── 02-math.js          # 15 questions
│   ├── 03-systems.js       # 13 questions
│   ├── 04-physics-bio.js   # 21 questions
│   ├── 05-psychology.js    # 25 questions
│   ├── 06-economics-war.js # 13 questions
│   ├── 07-cross-fusion.js  # 30 questions (v2 advanced)
│   └── 08-reverse-diag.js  # 20 questions (v2 advanced)
```

## Content Strategy

Unlike typical translation, this English version was created by:

1. **Extracting model names** from English originals (e.g., `Inversion`, `Circle of Competence`)
2. **Using source book terminology** — concepts from Kahneman, Lindstrom, Eyal, Greene, Taleb, etc. use their original English terms
3. **Rewriting scenarios** in natural English (not literal translation)
4. **Referencing English source books** in explanations and wrongReasons

This approach ensures:
- Higher quality than machine translation
- Authentic terminology familiar to English readers
- No "translation smell" — reads like native English

## Source Books Referenced

- Thinking, Fast and Slow (Kahneman)
- Buyology (Lindstrom)
- Hooked (Eyal)
- Influence (Cialdini)
- The 48 Laws of Power / Art of Seduction (Greene)
- Skin in the Game (Taleb)
- The Art of Strategy (Dixit & Nalebuff)
- Think Like a Rocket Scientist (Varol)
- Der Weg zum erfolgreichen Unternehmer (Merath)

## Deployment

- **Chinese version**: `https://your-domain.vercel.app/`
- **English version**: `https://your-domain.vercel.app/en/`

Both versions share the same repository but are completely independent codebases. Changes to the Chinese version do not affect the English version, and vice versa.

## Validation

Run `node validate.js` in this directory to check:
- 150 total questions (100 v1 + 50 v2)
- Complete structure for all questions
- No author name leaks in options
- Model coverage and distribution
- No duplicate questions

## Version

v2.0 — February 2026
