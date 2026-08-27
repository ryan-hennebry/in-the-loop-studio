---
name: design-md-is-normative-spec
description: DESIGN.md hard-codes exact px spacing/type values that mirror src/styles/site.css — any CSS spacing change is a two-file change
metadata:
  type: project
---

`DESIGN.md` is not descriptive prose — it is a normative spec that restates the site's exact
numbers twice: once as YAML design tokens in its frontmatter (`spacing:` block with
`section: "96px"`, `section-mobile: "68px"`, `page-bottom: "80px"`, etc., plus a `typography:`
block of font sizes/line heights) and once as prose in its `## Layout` section ("Sections are
separated by 96px and headings sit 22px above body copy", "The first two opening lines sit 7px
apart; the conclusion follows after 19px").

**Why:** `AGENTS.md` routes all layout/identity work through `DESIGN.md` and defines completion
as the supplied truth staying intact. Changing a spacing value in `src/styles/site.css` without
updating both the frontmatter tokens and the Layout prose leaves the repo's own spec contradicting
the shipped site.

**How to apply:** When scoping or reviewing any spacing/type change, treat it as a minimum
two-file diff (`src/styles/site.css` + `DESIGN.md`, both frontmatter and prose). Flag the
DESIGN.md sync obligation in research/design handoffs rather than assuming the implementer
will notice. DESIGN.md also carries hard prohibitions relevant to spacing fixes: no footer,
no visible Plan page title, no local table of contents, no sticky nav.
