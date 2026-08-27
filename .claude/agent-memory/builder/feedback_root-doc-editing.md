---
name: root-doc-editing
description: Root *.md files in in-the-loop-studio must stay pure ASCII and wrap near 100 columns; edit them with exact-match scripts, not sed
metadata:
  type: feedback
---

Root markdown (`AGENTS.md`, `DESIGN.md`, `HANDOFF.md`, `PRODUCT.md`) is gated by `verify.sh` for pure
ASCII, and the prose is hand-wrapped at roughly 100 columns. Use plain hyphens and straight quotes.
After any edit, run `LC_ALL=C grep -n '[^ -~]' *.md` and re-check line lengths. Only the ASCII rule
is enforced by `verify.sh`; the wrap is a convention, and `HANDOFF.md` already carries a few
pre-existing 101-102 column lines, so compare against the file's own baseline rather than treating
100 as a hard limit.

**Why:** The ASCII gate is a hard build failure, and long unwrapped lines produce noisy diffs in a
repo whose whole point is restraint. Prose replacements done with `sed` silently mangle wrapping;
substituting a longer sentence into an existing wrapped paragraph leaves one overlong line.

**How to apply:** When rewriting a sentence inside a wrapped paragraph, replace and re-wrap the whole
paragraph, not just the sentence. Prefer an exact-string Python replacement with an assertion that
the match count is 1 over regex or `sed`. See [[email-routing-blocker]] for current doc content
worth verifying before acting on.
