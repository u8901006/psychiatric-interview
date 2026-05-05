import fs from "node:fs";

const html = fs.readFileSync("index.html", "utf8");
const script = html.match(/<script>([\s\S]*)<\/script>/)?.[1];

if (!script) throw new Error("Missing inline script");
new Function(script);

const requiredStrings = [
  "Interview Flow",
  "Summary Builder",
  "Generate English Summary",
  "Clear Session",
  "localStorage",
  "followUps",
  "clinicalHint",
  "status-positive",
  "skip-flow",
  "question-bank-mode",
  "interview-flow-mode",
  "summary-output",
  "toggle-card",
  "collapsedQuestions",
  ".question-card.collapsed",
  "Show details",
  "note-format-select",
  "Brief English summary",
  "Full psychiatric intake note",
  "Bilingual teaching note",
  "Risk assessment paragraph",
  "Positive symptom clusters",
  "Pertinent negatives",
  "generateBriefSummary",
  "generateIntakeNote",
  "generateBilingualTeachingNote",
  "generateRiskAssessmentParagraph"
];

const missing = requiredStrings.filter((value) => !html.includes(value));
if (missing.length > 0) throw new Error(`Missing V2 feature markers: ${missing.join(", ")}`);

const flowMatches = [...html.matchAll(/flow: "([^"]+)"/g)].map((match) => match[1]);
const flowCount = new Set(flowMatches).size;
if (flowCount < 10) throw new Error(`Expected at least 10 interview flow stages, got ${flowCount}`);

const questionCount = [...html.matchAll(/id: "[^"]+"/g)].length;
if (questionCount < 48) throw new Error(`Expected at least 48 primary questions, got ${questionCount}`);

console.log("V2 validation OK");
console.log(`Flow stages: ${flowCount}`);
console.log(`Primary questions: ${questionCount}`);
