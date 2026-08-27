# Handoff: in-the-loop.studio

## Built

A static Astro site with two routes: `/` and `/plan/`. The homepage presents the compact 26px A6
lockup, settled proposition, five-part Signal/Skills/Harness/Agents/Newsletter register and one
`Read the plan ->` action. The five concepts are non-interactive until they have real destinations.
Signal and Newsletter are not routes. There is no footer, email action or client JavaScript.

The Plan is a continuous-system essay using the exact supplied copy. Its visible title and diagrams
have been removed. The shared five-part register is the only visual structure; prose carries the
strategy and causal argument. The opening uses tight premise spacing followed by a larger gap before
`In The Loop exists to find out.` Plan sections use a 96px desktop and 68px mobile rhythm.

`PRODUCT.md` holds product truth, `DESIGN.md` holds the implemented visual system, and
`src/config.ts` holds shared copy, routes and metadata values. Each page has an explicit title,
description, apex-domain canonical, Open Graph and Twitter metadata, and the same small WebSite and
Organization identity graph. The full A6 logo and web-icon system lives under `public/`;
`public/brand/social-card-1200x630.png` is the shared 1200x630 Open Graph and Twitter image.
`robots.txt` permits search crawling and names `sitemap.xml`; the sitemap contains only the two real
canonical pages.

The implementation remains in the working tree and has not been committed. It was deployed on
2026-08-26 to the existing Cloudflare Pages project `in-the-loop`, replacing the superseded site on
`https://in-the-loop.studio` and `https://www.in-the-loop.studio`. The technical-polish release was
deployed on 2026-08-27 as production deployment `f9527a9a-13cd-4eff-aced-930e433d35a3` on branch
`main`. `SITE_URL`, the package deployment script and `wrangler.jsonc` describe the Pages production
setup.

## Test

`./verify.sh` passed. It checked the two-route boundary, exact homepage and Plan copy, truth
constraints, the diagram-free Plan, brand assets and the production Astro build. The search and
sharing gate checks crawl files, exact canonical URLs, page-specific titles and descriptions,
social-image metadata, the identity graph and the absence of client JavaScript.

Browser verification covered the Plan at 1440px and 390px, then both routes and both navigation
directions at 320px. There were no browser warnings, errors or horizontal overflow. The Plan
contained five sections and no `figure` or `svg` elements. Computed opening gaps were 0/7/19px on
desktop and 0/6/17px on mobile; section gaps were 96px and 68px respectively.

Post-deployment verification repeated those checks against `https://in-the-loop.studio`. The apex
and `/plan/` return 200 with no `noindex` response header; `/plan` normalises to `/plan/` with a 308.
The `www` copy canonicals to the apex. The sitemap, manifest, social card, SVG/PNG/ICO favicons and
Apple touch icon all return successfully with the right content type. Cloudflare's managed crawler
policy allows search indexing, declines named AI-training crawlers and preserves the production
sitemap declaration.

## Next

1. Apply Ryan's remaining copy edits.
2. Commit the working tree when Ryan approves it.
3. Submit `https://in-the-loop.studio/sitemap.xml` in Google Search Console when the domain property
   is connected. Crawl readiness is live, but search inclusion is controlled by the search engine.
4. Add a concept destination only when it is real and has a specific user job.
5. Re-upload the LinkedIn logo or banner only if LinkedIn still holds the previous exports; website
   icons update with deployment.
