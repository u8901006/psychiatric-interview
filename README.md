# Psychiatric Interview

精神科問診中英對照工作台，依症狀與功能 cluster 整理常用英文問句，支援問診流程、勾選答案與英文摘要產生器，部署於 GitHub Pages。

## Features

- 12 個精神科問診 flow stage
- 48 個精選中英對照問句
- 搜尋英文、中文、用途與標籤
- Question Bank / Interview Flow / Summary Builder 三模式
- 每個 flow stage 可選擇跳過
- 每題可勾選 Asked、Positive / Negative / Unclear
- 每題可輸入病人回答或臨床筆記
- 每題包含 follow-up questions 與 clinical hint
- 使用 localStorage 自動保存本機 session
- 一鍵產生英文問診摘要
- 複製英文問句
- 響應式版面，支援手機與桌機
- 視覺風格沿用 Psychiatry Brain 的暖米色系與卡片配置

## Flow Stages

- Opening / Agenda
- Chief Complaint / HPI
- Safety Risk
- Mood Symptoms
- Anxiety / Panic
- Mania / Hypomania
- Psychosis
- Substance Use
- Family History
- Social / Developmental History
- Mental Status Exam
- Review / Summary

## Original Question Clusters

- Opening / Rapport
- Chief Complaint / HPI
- Depression / SIGECAPS
- Panic Disorder / Panic Attack
- GAD / Anxiety
- Mania / Hypomania
- Psychosis
- Suicide / Homicide Risk
- Substance Use
- Family Psychiatric History
- Social / Developmental History
- Mental Status Exam

## Source Note

The first question bank is adapted and translated from psychiatric interview teaching frameworks and selected questions from `The Psychiatric Interview, Fifth Edition` for educational use. Long-form copyrighted text is not reproduced.

## Privacy Note

Session notes are saved only in the user's browser through `localStorage`. The static GitHub Pages site has no backend and does not upload patient data. Do not enter personally identifiable patient information on shared computers.

## Local Preview

Open `index.html` directly in a browser, or run a simple static server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Validation

Run the V2 static validation script:

```bash
node validate-v2.mjs
```

## GitHub Pages

This repository includes a GitHub Actions workflow that deploys the static site from the repository root.

Expected Pages URL:

```text
https://u8901006.github.io/psychiatric-interview/
```

## Links

- 李政洋身心診所首頁: <https://www.leepsyclinic.com/>
- 訂閱電子報: <https://blog.leepsyclinic.com/>
- Buy me a coffee: <https://buymeacoffee.com/CYlee>
