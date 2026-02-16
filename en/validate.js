#!/usr/bin/env node
// ═══════════════════════════════════════════════════════════════
//  validate.js — Munger Mental Models Question Bank Validation v2.0
//  Usage: node validate.js
//  Automatically executed before Vercel deployment; blocks deploy on failure
// ═══════════════════════════════════════════════════════════════

const fs = require('fs');
const path = require('path');

const QUESTIONS_DIR = path.join(__dirname, 'questions');
const EXPECTED_COUNT = 150;
const EXPECTED_V1 = 100;
const EXPECTED_V2 = 50;
const BANNED_AUTHORS = ['Kahneman', 'Eyal', 'Greene', 'Lindstrom', 'Merath', 'Varol', 'Taleb', 'Cialdini', 'Dixit', 'Nalebuff'];

// ── Load all question bank files ──
const files = [
  '_loader.js',
  '01-general.js',
  '02-math.js',
  '03-systems.js',
  '04-physics-bio.js',
  '05-psychology.js',
  '06-economics-war.js',
  '07-cross-fusion.js',
  '08-reverse-diag.js'
];

let code = '';
for (const f of files) {
  const fp = path.join(QUESTIONS_DIR, f);
  if (!fs.existsSync(fp)) {
    console.error(`✗ File not found: ${f}`);
    process.exit(1);
  }
  code += fs.readFileSync(fp, 'utf8') + '\n';
}

let allQuestions;
try {
  const fn = new Function(code + '; return allQuestions;');
  allQuestions = fn();
} catch (e) {
  console.error('✗ Question bank JavaScript syntax error:', e.message);
  process.exit(1);
}

// ── Categorize ──
const v1Questions = allQuestions.filter(q => !q.type);
const v2Questions = allQuestions.filter(q => q.type === 'cross-fusion' || q.type === 'reverse-diag');
const crossFusion = allQuestions.filter(q => q.type === 'cross-fusion');
const reverseDiag = allQuestions.filter(q => q.type === 'reverse-diag');

// ── Validation ──
let passed = 0;
let failed = 0;

function check(label, ok, detail) {
  if (ok) {
    console.log(`✓ ${label}`);
    passed++;
  } else {
    console.error(`✗ ${label}${detail ? ' — ' + detail : ''}`);
    failed++;
  }
}

// 1. Total question count
check(`Total questions: ${allQuestions.length}`, allQuestions.length === EXPECTED_COUNT,
  allQuestions.length !== EXPECTED_COUNT ? `Expected ${EXPECTED_COUNT}, got ${allQuestions.length}` : '');

// 1b. v1/v2 distribution
check(`v1 Classic: ${v1Questions.length}`, v1Questions.length === EXPECTED_V1,
  v1Questions.length !== EXPECTED_V1 ? `Expected ${EXPECTED_V1}, got ${v1Questions.length}` : '');
check(`v2 Advanced: ${v2Questions.length}`, v2Questions.length === EXPECTED_V2,
  v2Questions.length !== EXPECTED_V2 ? `Expected ${EXPECTED_V2}, got ${v2Questions.length}` : '');
console.log(`  └── Cross-Fusion: ${crossFusion.length}, Reverse Diagnosis: ${reverseDiag.length}`);

// 2. Structure check for each question
let structErrors = [];
allQuestions.forEach((q, i) => {
  const n = i + 1;
  if (!q.scenario) structErrors.push(`Q${n}: Missing scenario`);
  if (!q.options || q.options.length !== 4) structErrors.push(`Q${n}: Not 4 options (${q.options ? q.options.length : 0})`);
  if (q.answer === undefined || q.answer < 0 || q.answer > 3) structErrors.push(`Q${n}: Invalid answer index (${q.answer})`);
  if (!q.models || q.models.length === 0) structErrors.push(`Q${n}: Missing models`);
  if (!q.explanation) structErrors.push(`Q${n}: Missing explanation`);
  if (!q.wrongReasons) structErrors.push(`Q${n}: Missing wrongReasons`);
});
check(`All questions have complete structure (scenario, options×4, answer, models, explanation, wrongReasons)`,
  structErrors.length === 0,
  structErrors.length > 0 ? structErrors.slice(0, 10).join('; ') + (structErrors.length > 10 ? ` ...and ${structErrors.length - 10} more` : '') : '');

// 3. v2 type tag check
let typeErrors = [];
v2Questions.forEach((q, i) => {
  if (q.type !== 'cross-fusion' && q.type !== 'reverse-diag') {
    typeErrors.push(`v2 Q${i + 1}: type should be cross-fusion or reverse-diag, got ${q.type}`);
  }
});
check(`v2 question type tags correct`, typeErrors.length === 0,
  typeErrors.length > 0 ? typeErrors.join('; ') : '');

// 4. No author name leaks in options
let leaks = [];
allQuestions.forEach((q, i) => {
  q.options.forEach((opt, j) => {
    BANNED_AUTHORS.forEach(author => {
      if (opt.includes(author)) {
        leaks.push(`Q${i + 1} Option${['A', 'B', 'C', 'D'][j]}: Contains "${author}"`);
      }
    });
  });
});
check(`No author name leaks in options`, leaks.length === 0,
  leaks.length > 0 ? leaks.slice(0, 5).join('; ') + (leaks.length > 5 ? ` ...and ${leaks.length - 5} more` : '') : '');

// 5. Model coverage
const allModels = new Set();
allQuestions.forEach(q => {
  q.models.forEach(m => allModels.add(m));
  if (q.secondaryModels) q.secondaryModels.forEach(m => allModels.add(m));
});
check(`Primary+secondary model coverage: ${allModels.size} models`, allModels.size > 0);

// 6. Duplicate model detection (same primary model appears >3 times)
const modelCount = {};
allQuestions.forEach((q, i) => {
  q.models.forEach(m => {
    if (!modelCount[m]) modelCount[m] = [];
    modelCount[m].push(i + 1);
  });
});
const duplicated = Object.entries(modelCount)
  .filter(([_, indices]) => indices.length > 3)
  .map(([model, indices]) => `${model} (×${indices.length})`);

if (duplicated.length > 0) {
  console.log(`⚠ Following primary models appear >3 times: ${duplicated.join('; ')}`);
} else {
  console.log(`✓ No primary model over-repetition (max 3 questions per model allowed)`);
  passed++;
}

// 7. Duplicate scenario detection
const scenarioSet = new Map();
let dupeScenarios = [];
allQuestions.forEach((q, i) => {
  const key = q.scenario.substring(0, 50);
  if (scenarioSet.has(key)) {
    dupeScenarios.push(`Q${scenarioSet.get(key) + 1} and Q${i + 1}`);
  } else {
    scenarioSet.set(key, i);
  }
});
check(`No duplicate questions`, dupeScenarios.length === 0,
  dupeScenarios.length > 0 ? dupeScenarios.join('; ') : '');

// ── Results ──
console.log('\n' + '─'.repeat(40));
if (failed === 0) {
  console.log(`🎉 All passed! ${passed} checks satisfied. Question bank v2.0 (${allQuestions.length} questions) ready for safe deployment.`);
  process.exit(0);
} else {
  console.error(`⚠ ${failed} checks failed, ${passed} passed. Please fix and retry.`);
  process.exit(1);
}
