#!/bin/sh
# Checks for in-the-loop.studio. House style on the Markdown, then the copy gate on the
# shipped pages: the recurring drift risks are prices, stale routes and paraphrased copy.
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
    echo "FAIL /newsletter exists. Only the homepage and Plan have a current job."
    fail=1
  elif [ ! -e src/pages/plan.astro ]; then
    echo "FAIL /plan is missing."
    fail=1
  else
    echo "ok: homepage and Plan are the only routes"
  fi
  if ! grep -Fq 'trailingSlash: "always"' astro.config.mjs; then
    echo "FAIL local and production Plan URLs must both end in a trailing slash."
    fail=1
  else
    echo "ok: local and production route policy agree"
  fi
else
  echo "not built: no src/pages. The site has not been scaffolded."
fi

echo "== copy =="
if [ ! -d src ]; then
  echo "not built: no copy to check yet. See HANDOFF.md."
  exit "$fail"
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

# The homepage and Plan rest on settled language. Catch silent copy drift.
for phrase in \
  'Agent-native startup operations' \
  'Building the systems startups need now that agents work.' \
  'Curate what matters on the frontier.' \
  'Index agent skills for startup work.' \
  'Install the startup context agents need.' \
  'Solve valuable workflows end-to-end.' \
  'Share what we learn along the way.' \
  'Read the plan →' \
  'Agents can now do real startup work.' \
  'We’re still figuring out what that changes.' \
  'In The Loop exists to find out.'
do
  if ! grep -Fq "$phrase" src/config.ts; then
    echo "FAIL settled homepage copy is missing: $phrase"
    fail=1
  fi
done

if grep -Rni 'end to end' src --include='*.astro' --include='*.ts' --include='*.css'; then
  echo "FAIL end-to-end must be hyphenated."
  fail=1
else
  echo "ok: settled homepage and Plan copy, including end-to-end"
fi

if grep -RqiE '<(svg|figure|dl)|Diagram|plan-register' src/pages/plan.astro src/components --include='*.astro'; then
  echo "FAIL Plan visual structure returned. The final Plan is prose only."
  fail=1
else
  echo "ok: Plan stays diagram- and register-free"
fi

for phrase in \
  'Discover what matters' \
  '<strong>Signal</strong> curates the articles, podcasts, research and tools worth following on the frontier.' \
  '<strong>Skills</strong> indexes agent skills for startup work: research, growth, hiring, fundraising and operations.' \
  'Together, they keep us close to what is emerging and what already works. We mostly curate, and build our own where useful.' \
  'But agents still need to understand the startup they are working with.' \
  'What an agent should do depends on the startup.' \
  'The <strong>Harness</strong> installs the context agents need to understand it: strategy, customers, product, decisions, feedback and metrics, plus the tools, memory and permissions they need to act.' \
  'We put the Skills and Harness to work with founders and early operators instead of guessing what to build next.' \
  'What they keep coming back to tells us where to go deeper. When a workflow repeatedly creates value, we build an <strong>Agent</strong> around it, put it back into use and learn again.' \
  '<strong>Signal</strong> and <strong>Skills</strong> give founders and early operators a reason to find In The Loop. The <strong>Newsletter</strong> keeps us in touch.' \
  'Some readers become customers. Their use and feedback shape what we build next.'
do
  if ! grep -Fq "$phrase" src/pages/plan.astro; then
    echo "FAIL settled Plan copy is missing: $phrase"
    fail=1
  fi
done

echo "== brand assets =="
node scripts/verify-brand-assets.mjs || fail=1

echo "== build =="
if [ ! -f package.json ]; then
  echo "not built: no package.json."
  exit "$fail"
fi
npm run build || fail=1

if [ ! -f dist/plan/index.html ]; then
  echo "FAIL the Plan route was not built."
  fail=1
fi

echo "== search and sharing =="
for output in dist/robots.txt dist/sitemap.xml; do
  if [ ! -f "$output" ]; then
    echo "FAIL $output was not built."
    fail=1
  fi
done

if [ -f dist/robots.txt ] && grep -Fq 'Sitemap: https://in-the-loop.studio/sitemap.xml' dist/robots.txt; then
  echo "ok: robots.txt allows crawling and names the sitemap"
else
  echo "FAIL robots.txt does not name the production sitemap."
  fail=1
fi

if [ -f dist/sitemap.xml ]; then
  sitemap_urls=$(grep -c '<loc>' dist/sitemap.xml || true)
  if [ "$sitemap_urls" -eq 2 ] \
    && grep -Fq '<loc>https://in-the-loop.studio/</loc>' dist/sitemap.xml \
    && grep -Fq '<loc>https://in-the-loop.studio/plan/</loc>' dist/sitemap.xml; then
    echo "ok: sitemap contains the two canonical pages"
  else
    echo "FAIL sitemap must contain exactly the homepage and Plan canonical URLs."
    fail=1
  fi
fi

if grep -Fq '<link rel="canonical" href="https://in-the-loop.studio/">' dist/index.html \
  && grep -Fq '<link rel="canonical" href="https://in-the-loop.studio/plan/">' dist/plan/index.html; then
  echo "ok: both pages use their final production URL as canonical"
else
  echo "FAIL a page canonical does not match its final production URL."
  fail=1
fi

for page in dist/index.html dist/plan/index.html; do
  for metadata in \
    '<meta name="robots" content="index, follow">' \
    '<meta property="og:image:type" content="image/png">' \
    '<meta property="og:image:alt" content="In The Loop mark">' \
    '<meta name="twitter:image:alt" content="In The Loop mark">' \
    '"@type":"WebSite"' \
    '"@type":"Organization"'
  do
    if ! grep -Fq "$metadata" "$page"; then
      echo "FAIL $page is missing: $metadata"
      fail=1
    fi
  done
done

if grep -Fq '<title>In The Loop, agent-native startup operations</title>' dist/index.html \
  && grep -Fq '<meta name="description" content="Building the systems startups need now that agents work.">' dist/index.html \
  && grep -Fq '<title>The plan, In The Loop</title>' dist/plan/index.html \
  && grep -Fq '<meta name="description" content="Agents can now do real startup work. We’re still figuring out what that changes. In The Loop exists to find out.">' dist/plan/index.html; then
  echo "ok: page titles and descriptions are explicit and page-specific"
else
  echo "FAIL a page title or description has drifted."
  fail=1
fi

scripts=$(grep -Rh '<script' dist --include='*.html' 2>/dev/null | wc -l | tr -d ' ')
identity_graphs=$(grep -Rh 'application/ld+json' dist --include='*.html' 2>/dev/null | wc -l | tr -d ' ')
if [ "$scripts" -ne 2 ] || [ "$identity_graphs" -ne 2 ] || [ "$scripts" -ne "$identity_graphs" ]; then
  echo "FAIL the pages must ship one JSON-LD identity graph and no client JavaScript."
  fail=1
else
  echo "ok: production pages ship no JavaScript beyond their JSON-LD identity graph"
fi

exit "$fail"
