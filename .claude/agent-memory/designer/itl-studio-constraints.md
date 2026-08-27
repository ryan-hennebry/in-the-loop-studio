---
name: itl-studio-constraints
description: Non-obvious authority and scoping constraints on the in-the-loop-studio site - DESIGN.md double bookkeeping, the reinstated mailto, the real scope of the One Argument Rule, verify.sh coverage
metadata:
  type: project
---

Constraints on `/Users/ryanhennebry/Projects/in-the-loop/in-the-loop-studio` that are NOT
derivable by reading the code, and that shape design proposals.

**DESIGN.md restates every spacing number in two places** — a frontmatter `spacing:` token block
AND prose in `## Layout`. Any spacing change is a minimum two-file diff (CSS + DESIGN.md), and
DESIGN.md prose sometimes covers homepage and Plan in ONE sentence, so a Plan-only change may
force splitting a sentence.

**The email CTA was retired, then deliberately reinstated (2026-08-27).** AGENTS.md used to say
"Keep `Projects in development` and the email action retired unless Ryan requests them again". The
Plan now closes with one quiet mailto link and AGENTS.md was updated in the same commit. Only
`Projects in development` remains retired. Lesson that generalises: a proposal that reverses a
documented retirement must edit the document asserting the retirement in the SAME commit, or the
repo contradicts itself.

**The One Argument Rule is narrower than it reads.** DESIGN.md bans "a second *homepage* action,
a footer or unavailable-product links" and says "The Plan identity is the only *return path*."
A Plan-page mailto is none of those literally. The real constraints on it are the footer ban and
the White Paper Rule ("earns structure with type and rules, not containers"). DESIGN.md now
states the shipped resolution explicitly: inline prose, one paragraph gap after the preceding
sentence, no container, rule, bracket or box.

**`verify.sh` asserts no spacing values.** It gates routes, exact copy phrases, a ban on
`plan-register`/`<svg|figure|dl>`/`Diagram` in plan.astro, brand assets, sitemap, and exactly 2
`<script>` tags (the JSON-LD graphs). The ASCII-only gate applies to `*.md` only - DESIGN.md
edits must avoid em dashes, arrows and smart quotes.

**Why:** These are the things that silently invalidate a design proposal after it looks finished.

**How to apply:** Check all four before proposing any change to the Plan page.
See [[spacing-scale-plan-page]], [[page-scoping-hook-decision]].
