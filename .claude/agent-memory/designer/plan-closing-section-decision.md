---
name: plan-closing-section-decision
description: Proposal (not yet shipped) to move the /plan contact line into a fifth section using existing tokens, plus the options rejected and why a bare isolating gap keeps getting re-proposed
metadata:
  type: project
---

PROPOSED 2026-08-27, not implemented at time of writing - verify against `src/pages/plan.astro`
before treating as shipped.

Ryan asked what Emil would do with the closing contact line on `/plan`, saying "more spacing is
needed to separate it and maybe different copy altogether".

**Recommended: a fifth section with its own heading, zero new CSS.** Heading `Get in touch` (fits
the page's imperative-verb heading pattern), line "We are early and working in the open. If you are
figuring this out too, [email Ryan]." Reuses `.plan__section` / `.plan__heading` / `.plan__copy`, so
`--section` 72 + 23px/1.3 heading box 29.9 + `--heading-gap` 14 = 115.9px perceived, 99.9px mobile.
No token added, no CSS diff, no `verify.sh` change.

**Why:** the defect is an unmarked register pivot, not insufficient distance. The heading absorbs
the request so the sentence can offer rather than ask.

**How to apply:** if this ships, AGENTS.md ("four prose sections") and DESIGN.md (essay sequence,
One Argument Rule) both assert four sections and must be edited in the SAME commit - the repo
contradicts itself otherwise. See [[itl-studio-constraints]].

**Rejected, with reasons.**

- *A bespoke isolating gap with no heading.* This is the SECOND time an isolated block CTA has come
  up on this page; 96px was proposed and reversed once already, and Ryan raised the idea again on
  2026-08-27. Space alone cannot mark a register change, it only orphans the line. If it is raised
  again, the answer is the same and the reason is in [[emil-article-endings]].
- *Weight 500 on the link, matching Emil.* He uses 500 because weight is his only hierarchy dial
  (his h2 is body-sized). `.plan__copy` already spends weight three times - body 400, `strong` 600
  on property names, heading 500 - so a 500 link is a fourth weight in one run.
- *A new `--closing` token.* Appears once, encodes no ratio.
- *Promising the Newsletter in the copy.* Newsletter is a concept, not a route; a delivery promise
  is a claim we cannot honour.

**Fallback if four sections are treated as fixed:** keep the line where it is and mark the turn with
prose instead, "That is the plan. If you are figuring this out too, [get in touch]." This is
actually Emil's majority practice, costs nothing, but does not deliver the separation Ryan asked for.

See [[spacing-scale-plan-page]], [[emil-article-endings]].
