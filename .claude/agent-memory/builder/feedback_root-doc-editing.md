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
paragraph, not just the sentence: an exact-string replacement whose match starts mid-line leaves the
tail of the original line appended, which silently produces 130 to 176 column lines. Check with
`awk 'length>100 {print FILENAME":"FNR": "length}' *.md` after every edit. Five lines are over 100
columns before you start (one in `AGENTS.md`, four in `HANDOFF.md`); anything beyond those five is
yours, and `textwrap.fill(' '.join(block.split()), width=100)` over the whole paragraph fixes it. Never find-and-replace a bare px value across these docs: the same
number carries unrelated meanings (e.g. 48px was both the closing hairline width and the tap-target
minimum), so match the full surrounding phrase and assert exactly one hit per site. Prefer an exact-string Python replacement with an assertion that
the match count is 1 over regex or `sed`. See [[email-routing]] for current doc content
worth verifying before acting on.

Root docs must not carry facts that go stale on their own, such as a commit count ahead of
`origin/main` or any other running tally. State the durable fact instead (committed on local `main`,
not pushed) and let the neighbouring paragraph carry the reason. Ryan flagged a "12 commits ahead"
sentence in `HANDOFF.md` once it read 13, and asked explicitly for no duplication of the adjacent
"pushing to git triggers nothing" point, so read the whole surrounding passage before rewriting.
