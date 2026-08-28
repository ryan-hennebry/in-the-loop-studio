---
name: builder-doc-paragraph-edits
description: Edit root markdown by replacing whole paragraphs matched on normalised text and re-wrapping them, never by literal string match against the file's own wrapping
metadata:
  type: feedback
---

To change a sentence inside a wrapped paragraph in `DESIGN.md`, `HANDOFF.md`, `AGENTS.md` or
`PRODUCT.md`, match the WHOLE paragraph on its whitespace-normalised text, assert exactly one hit,
replace the whole span and re-wrap it. Do not match the file's literal line breaks.

**Why:** The prose in these files is hand-wrapped and is not `textwrap` canonical, so
`textwrap.fill(original, 100)` does not reproduce it and a literal match fails. Matching a
sub-sentence that starts mid-line and substituting wrapped text leaves the tail of the original line
appended, which is how 130-plus column lines get in. A paragraph-level normalised match also refuses
to run when the target is ambiguous.

**How to apply:** Build a normalised copy of the file with an index back to original offsets, find
the target once, assert the span starts and ends on a line boundary, and write back
`textwrap.fill(..., width=100, break_on_hyphens=False, break_long_words=False)`. The two keyword
arguments are not optional: the default hyphen breaking split `` `--grow-open` `` into
`` `--grow-\nopen` ``. Wrap only the paragraphs you are changing. A blanket re-wrap pass over the
file reflows untouched paragraphs and produces churn that has nothing to do with the commit; this
already happened once to a `HANDOFF.md` paragraph about the register copy. A `code span` broken
across a line break is fine and is already the house style (`AGENTS.md` and `PRODUCT.md` both do it),
so it is not worth a second pass. Baseline before starting: four lines exceed 100 columns, one in
`AGENTS.md` and three in `HANDOFF.md`; anything beyond those four is yours.

Two follow-on rules, both learned the hard way here. When the replacement text is lifted from a
saved finished copy of the file, the `old` string must still be the WHOLE paragraph: passing a
partial `old` and a whole-paragraph replacement leaves the paragraph's first four lines standing
above the new text, and the duplicate passes `verify.sh`, which only gates ASCII. Diff the paragraph
against the finished file before committing. And `textwrap` breaks at every space, so a value like
`clamp(96px, 14vh, 144px)` splits across lines: substitute each code span for a placeholder of
exactly the same length, wrap, then substitute back.

Two invariants make the wrap safe, and both have already caught a live corruption. (1) The
placeholder that stands in for a code span must be the same LENGTH as the span AND unique per span.
`Curate what matters on the frontier.` and `Index agent skills for startup work.` are both 38
characters, so a length-only placeholder collapsed them onto one string and `HANDOFF.md` shipped the
register line twice with the wrong first phrase. Number the placeholder. (2) After wrapping, assert
`' '.join(wrapped.split()) == ' '.join(intended.split())`: wrapping is a pure re-flow, so any
difference in the word stream is a bug in the substitution, not a wrapping choice. Then diff the
whole file paragraph by paragraph on normalised text and confirm both the paragraph COUNT and the
set of changed paragraphs are what you intended. `verify.sh` only gates ASCII, so it passes happily
on duplicated or mangled prose.

When an edit splits one paragraph into two, or inserts a new one, assert the paragraph-count DELTA
you intend rather than that the count is unchanged, then diff the before and after paragraph sets on
normalised text and print both the removed and the added ones. The set difference is what proves the
edit touched only what it meant to; a `Counter` over the new set catches the duplicated-paragraph
failure directly. Both invariants held across five paragraph rewrites in one session.

To split one finished working tree into two commits, save the finished files to the scratchpad,
`git checkout HEAD --` them, apply only the first defect's edits, commit, then copy the saved files
back for the second commit. Verify each commit by running `./verify.sh` in a detached
`git worktree` with `node_modules` symlinked in, not just against the working tree.

Related: [[root-doc-editing]], [[project-spacing-token-rule]]
