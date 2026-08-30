# Career Portfolio — MGT Digital Career Portfolio

## Context
Second portfolio site for Grace Fu, separate from the technical portfolio at
grcfu.github.io. Audience is a management professor / TA, not a SWE recruiter.
Deployed at grcfu.github.io/career-portfolio.

## HARD RULE — AI use policy (Level 2, ideation only)
The assignment forbids AI from writing ANY portfolio content: no essays,
stories, statements, reflections, project descriptions, brand statements, or
podcast scripts — not even a "first draft to be revised." Grace writes every
word herself.

Claude's role on this repo is code only: HTML/CSS/JS, layout, embeds, deploy.
Do not draft page copy. Placeholder text in `.placeholder` spans is scaffolding
describing what SHE must write, never a draft to be polished.

Statistics and citations must never come from AI — they get fabricated.

## Structure
- 11 static pages, one per graded checklist item, plus `index.html` as a hub
- `styles.css` — all styles, no inline styles
- `script.js` — nav, dropdowns, scroll reveal; no onclick attributes
- Brand tokens match the technical portfolio: cream #EEEBE7, blush #F4C9D6,
  espresso #3E2723, sage #A8B89A; Playfair Display + DM Sans; film grain
  overlay; border-radius 0 throughout

## Scaffolding conventions
- `.todo` — dashed pink blocks telling Grace what to write. Deleted as filled.
- `.placeholder` — italic muted text marking a slot for her words.
- `.ai-disclosure` — required per-piece design statement + chat link block.

## Local development
`python3 -m http.server 8000`
