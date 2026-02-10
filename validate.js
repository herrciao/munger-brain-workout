#!/usr/bin/env node
// ═══════════════════════════════════════════════════════════════
//  validate.js — 芒格思維模型題庫驗證腳本
//  用法：node validate.js
//  Vercel 部署前自動執行，失敗則阻止部署
// ═══════════════════════════════════════════════════════════════

const fs = require('fs');
const path = require('path');

const QUESTIONS_DIR = path.join(__dirname, 'questions');
const EXPECTED_COUNT = 100;
const BANNED_AUTHORS = ['Kahneman', 'Eyal', 'Greene', 'Lindstrom'];

// ── 載入所有題庫檔案 ──
const files = [
  '_loader.js',
  '01-general.js',
  '02-math.js',
  '03-systems.js',
  '04-physics-bio.js',
  '05-psychology.js',
  '06-economics-war.js'
];

let code = '';
for (const f of files) {
  const fp = path.join(QUESTIONS_DIR, f);
  if (!fs.existsSync(fp)) {
    console.error(`✗ 找不到檔案: ${f}`);
    process.exit(1);
  }
  code += fs.readFileSync(fp, 'utf8') + '\n';
}

let allQuestions;
try {
  const fn = new Function(code + '; return allQuestions;');
  allQuestions = fn();
} catch (e) {
  console.error('✗ 題庫 JavaScript 語法錯誤:', e.message);
  process.exit(1);
}

// ── 驗證 ──
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

// 1. 題目總數
check(`題目總數: ${allQuestions.length}`, allQuestions.length === EXPECTED_COUNT,
  allQuestions.length !== EXPECTED_COUNT ? `預期 ${EXPECTED_COUNT}，實際 ${allQuestions.length}` : '');

// 2. 每題結構檢查
let structErrors = [];
allQuestions.forEach((q, i) => {
  const n = i + 1;
  if (!q.scenario) structErrors.push(`Q${n}: 缺少 scenario`);
  if (!q.options || q.options.length !== 4) structErrors.push(`Q${n}: 選項不是 4 個 (${q.options ? q.options.length : 0})`);
  if (q.answer === undefined || q.answer < 0 || q.answer > 3) structErrors.push(`Q${n}: answer 索引不合法 (${q.answer})`);
  if (!q.models || q.models.length === 0) structErrors.push(`Q${n}: 缺少 models`);
  if (!q.explanation) structErrors.push(`Q${n}: 缺少 explanation`);
  if (!q.wrongReasons) structErrors.push(`Q${n}: 缺少 wrongReasons`);
});
check(`所有題目結構完整（scenario, options×4, answer, models, explanation, wrongReasons）`,
  structErrors.length === 0,
  structErrors.length > 0 ? structErrors.join('; ') : '');

// 3. 選項中無作者名字洩漏
let leaks = [];
allQuestions.forEach((q, i) => {
  q.options.forEach((opt, j) => {
    BANNED_AUTHORS.forEach(author => {
      if (opt.includes(author)) {
        leaks.push(`Q${i + 1} 選項${['A', 'B', 'C', 'D'][j]}: 包含「${author}」`);
      }
    });
  });
});
check(`選項中無作者名字洩漏`, leaks.length === 0,
  leaks.length > 0 ? leaks.join('; ') : '');

// 4. 模型覆蓋率
const allModels = new Set();
allQuestions.forEach(q => {
  q.models.forEach(m => allModels.add(m));
  if (q.secondaryModels) q.secondaryModels.forEach(m => allModels.add(m));
});
check(`主要+輔助模型覆蓋: ${allModels.size} 個`, allModels.size > 0);

// 5. 重複模型偵測（同一主要模型出現 >2 次）
const modelCount = {};
allQuestions.forEach((q, i) => {
  q.models.forEach(m => {
    if (!modelCount[m]) modelCount[m] = [];
    modelCount[m].push(i + 1);
  });
});
const duplicated = Object.entries(modelCount)
  .filter(([_, indices]) => indices.length > 2)
  .map(([model, indices]) => `${model} (Q${indices.join(', Q')})`);

if (duplicated.length > 0) {
  console.log(`⚠ 以下主要模型出現超過 2 次: ${duplicated.join('; ')}`);
} else {
  console.log(`✓ 無主要模型過度重複`);
  passed++;
}

// 6. 重複 scenario 偵測
const scenarioSet = new Map();
let dupeScenarios = [];
allQuestions.forEach((q, i) => {
  const key = q.scenario.substring(0, 50);
  if (scenarioSet.has(key)) {
    dupeScenarios.push(`Q${scenarioSet.get(key) + 1} 和 Q${i + 1}`);
  } else {
    scenarioSet.set(key, i);
  }
});
check(`無重複題目`, dupeScenarios.length === 0,
  dupeScenarios.length > 0 ? dupeScenarios.join('; ') : '');

// ── 結果 ──
console.log('\n' + '─'.repeat(40));
if (failed === 0) {
  console.log(`🎉 全部通過！${passed} 項檢查均合格。題庫可安全部署。`);
  process.exit(0);
} else {
  console.error(`⚠ ${failed} 項檢查失敗，${passed} 項通過。請修正後重試。`);
  process.exit(1);
}
