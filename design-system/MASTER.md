# Design System Master

This file is the source of truth for the Psychiatric Interview UI.

## Visual Direction

- Tone: warm clinical desk, calm, focused, low-friction.
- Reference: Psychiatry Brain color and typography language.
- Layout: dense clinical workspace with clear panels, not a marketing landing page.

## Color Tokens

```css
:root {
  --bg: #f6f1e8;
  --surface: #fffaf2;
  --surface-strong: #fff4e4;
  --line: #d8c5ab;
  --text: #2b2118;
  --muted: #766453;
  --accent: #8c4f2b;
  --accent-soft: #ead2bf;
  --green: #586f52;
  --red: #9f3d32;
  --gold: #a9752b;
}
```

## Typography

```css
font-family: "Noto Sans TC", "PingFang TC", "Helvetica Neue", Arial, sans-serif;
```

Use larger, bold English question text for scanability. Chinese translation uses muted text so it supports without visually competing.

## Component Rules

- Panels use `--surface`, `--line`, 18-28px radius, and soft brown shadows.
- Primary clinical actions use `--accent` and `--accent-soft`.
- Status buttons use semantic colors: positive green, negative red, unclear gold.
- All interactive controls must keep visible focus states.
- All patient-entered text stays local unless a future version explicitly introduces export.

## Responsive Rules

- Desktop: three columns, flow navigation / question cards / summary builder.
- Tablet: two columns, summary panel moves below.
- Mobile: single column, flow buttons wrap, summary remains accessible below questions.

## Accessibility Rules

- Preserve native inputs for checkboxes, textareas, selects, and buttons.
- Keep visible `:focus-visible` outlines.
- Do not rely on color alone; status labels must include text.
- Respect `prefers-reduced-motion`.
