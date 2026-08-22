#!/bin/sh
# Checks for in-the-loop.studio. House style on the Markdown, then the copy gate on the
# shipped pages: the three ways this surface has drifted before are "we", prices and a /work page.
set -eu
cd "$(dirname "$0")"
fail=0

echo "== house style =="
for f in *.md; do
  [ -e "$f" ] || continue
  if LC_ALL=C grep -n '[^ -~]' "$f" >/dev/null 2>&1; then
    echo "FAIL $f: non-ASCII character (em dash, emoji or smart quote)"
    LC_ALL=C grep -n '[^ -~]' "$f"
    fail=1
  fi
done
[ "$fail" -eq 0 ] && echo "ok: all Markdown is pure ASCII"

echo "== routes =="
if [ -d src/pages ]; then
  if [ -e src/pages/work.astro ] || [ -d src/pages/work ]; then
    echo "FAIL a /work route exists. There is no work page: no case studies, no client logos."
    fail=1
  else
    echo "ok: no /work route"
  fi
  if [ -e src/pages/newsletter.astro ] || [ -d src/pages/newsletter ]; then
    echo "ok: /newsletter archive present"
  else
    echo "note: /newsletter not built yet. It is the one permitted subpage."
  fi
else
  echo "not built: no src/pages. The site has not been scaffolded."
fi

echo "== copy =="
if [ ! -d src ]; then
  echo "not built: no copy to check yet. See HANDOFF.md."
  exit "$fail"
fi

# The voice is "I". One person, and the copy must not imply a team.
if grep -rnEi '\b(we|our|us)\b' src --include='*.astro' --include='*.md' --include='*.mdx'; then
  echo "FAIL first person plural in shipped copy. The voice is 'I', never 'we'."
  fail=1
else
  echo "ok: no first person plural"
fi

# No prices on this surface, and no service ladder.
if grep -rnE '[0-9][0-9,]*[[:space:]]*(GBP|pounds)|from [0-9]|/month|per month|retainer' src --include='*.astro' --include='*.md' --include='*.mdx'; then
  echo "FAIL price or retainer language. This surface carries no prices and no service ladder."
  fail=1
else
  echo "ok: no prices"
fi

# Claims the work has not earned.
if grep -rnEi 'case study|our clients|trusted by|testimonial' src --include='*.astro' --include='*.md' --include='*.mdx'; then
  echo "FAIL unearned proof. This is v0: no case study, no logos, no testimonials."
  fail=1
else
  echo "ok: no unearned proof"
fi

echo "== build =="
if [ ! -f package.json ]; then
  echo "not built: no package.json."
  exit "$fail"
fi
npm run build || fail=1

exit "$fail"
