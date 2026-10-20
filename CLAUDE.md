# Career Portfolio · MGT Digital Career Portfolio

## Context
Second portfolio site for Grace Fu, separate from the technical portfolio at
grcfu.github.io. Audience is a management professor / TA, not a SWE recruiter.
Deployed at grcfu.github.io/career-portfolio.

## Writing policy
Updated Oct 2026: Grace's professor approved drafting portfolio content with
Claude in this chat, with no per-piece disclosure required. Claude may write
page copy, but only from what Grace tells it about her own experiences, in
her plain first-person voice. No em dashes, no stock AI phrasing.

Statistics and citations must never be invented. Pull them from real,
checkable sources and link them.

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
