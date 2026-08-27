---
name: project-spacing-token-rule
description: Every layout interval on both routes is a named token in :root overridden once in the 600px block; literals and var() fallbacks are defects
metadata:
  type: project
---

Both routes now run on one spacing scale: every layout interval is a custom property declared in
`:root` in `src/styles/site.css` with a short trailing job comment, and overridden once inside
`@media (max-width: 600px)`. A bare literal in a rule, or a `var(--x, 40px)` fallback standing in
for a value nobody set, is treated as a defect rather than a style choice.

**Why:** The homepage had drifted onto literals while the Plan was rebuilt on tokens, so the two
pages had two spacing systems and the homepage's mobile ending was an unnoticed fallback default.
Tap-target geometry (48px min-heights, the +/-8px and +/-14px padding-and-negative-margin pairs) and
type sizes are deliberately not intervals and stay as literals.

**How to apply:** Adding or changing any interval means a token, and means updating BOTH the
`spacing:` frontmatter block and the `## Layout` prose in `DESIGN.md`, which state every number
twice. Check `HANDOFF.md` for the same numbers. The mobile homepage is tuned to hold one screen at
390px, so raising a mobile interval spends a budget that is already close to its limit.

Related: [[builder-height-measurement]], [[project-two-page-studio-constraints]]
