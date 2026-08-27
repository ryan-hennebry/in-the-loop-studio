# Handoff: in-the-loop.studio

## Required before launch

Cloudflare Email Routing must be enabled for `in-the-loop.studio` before the Plan's contact link
ships. The domain has no MX records, no SPF and no DMARC today, verified with `dig` against
Cloudflare's authoritative nameservers and with an SMTP fallback check. Mail to
`ryan@in-the-loop.studio` hard-bounces right now.

Fix: in the Cloudflare dashboard open Email, then Email Routing, then enable it. Cloudflare
auto-creates the `route1.mx.cloudflare.net`, `route2.mx.cloudflare.net` and
`route3.mx.cloudflare.net` MX records and an SPF record, then forwards to a destination inbox that
is verified by clicking a confirmation link.

DNS records only prove that a server accepts mail. Only a real test send proves the message lands in
an inbox a human reads.

## Built

A static Astro site with two routes: `/` and `/plan/`. The homepage presents the compact 26px A6
lockup, settled proposition, five-part Signal/Skills/Harness/Agents/Newsletter register and one
`Read the plan ->` action. The five concepts are non-interactive until they have real destinations.
Signal and Newsletter are not routes. There is no footer, homepage email action or client
JavaScript.

The homepage's final register says `Curate what matters on the frontier.` and `Index agent skills
for startup work.` The Plan uses Ryan's final supplied copy as a prose-only causal essay: discover
what matters, install the context, let use decide and share what we learn. Its visible title,
system register and diagrams are removed. The opening uses tight premise spacing followed by a
larger gap before `In The Loop exists to find out.`

Plan spacing was rebuilt on a 4px scale. The opening lines sit 12px apart and the conclusion follows
after 32px at both widths. A heading sits 14px above its body, paragraphs inside a section sit 26px
apart, and sections separate by 72px on desktop and 56px on mobile. The lockup-to-opening gap is
88px on desktop and 64px on mobile. The Plan ends 160px below its last words on desktop and 120px on
mobile; the homepage ending is unchanged at 80px and 40px. Page-scoped spacing is applied through
the `data-page` attribute on `<body>`. The Plan closes with one quiet mailto link to
`ryan@in-the-loop.studio` as inline prose under no heading of its own, set apart by a bespoke 144px
closing interval on desktop and 96px on mobile, with a hairline at 15% of the current text colour
sitting 14px above it, 48px wide on desktop and 32px on mobile.

`PRODUCT.md` holds product truth, `DESIGN.md` holds the implemented visual system, and
`src/config.ts` holds shared copy, routes and metadata values. Each page has an explicit title,
description, apex-domain canonical, Open Graph and Twitter metadata, and the same small WebSite and
Organization identity graph. The full A6 logo and web-icon system lives under `public/`;
`public/brand/social-card-1200x630.png` is the shared 1200x630 Open Graph and Twitter image.
`robots.txt` permits search crawling and names `sitemap.xml`; the sitemap contains only the two real
canonical pages.

The implementation remains in the working tree and has not been committed. It was deployed on
2026-08-26 to the existing Cloudflare Pages project `in-the-loop`, replacing the superseded site on
`https://in-the-loop.studio` and `https://www.in-the-loop.studio`. Ryan's final-copy release was
deployed on 2026-08-27 as production deployment `c8df63de-0f24-4201-b69c-1439af9a9d1f` on branch
`main`. `SITE_URL`, the trailing-slash route policy, package deployment script and `wrangler.jsonc`
describe the Pages production setup.

The working tree is ahead of production. That deployment predates the Plan spacing rebuild, the 160px
Plan ending, the `Discover what matters` rename and the contact link, so none of those are live yet.

## Test

`./verify.sh` passed against the previously shipped state. It checked the two-route boundary,
local/production route agreement, exact homepage and Plan copy, truth constraints, the diagram- and
register-free Plan, brand assets and the production Astro build. Re-run it against the current
working tree before the next deployment. The search and sharing gate checks crawl files, exact
canonical URLs, page-specific titles and descriptions, social-image metadata, the identity graph and
the absence of client JavaScript.

Browser verification covered the Plan at 1440px, 390px and 320px, then the homepage and both
navigation directions at 320px. There were no browser warnings, errors or horizontal overflow. The
Plan contained four sections and no figure, SVG or register; the closing contact line sits outside
those four under no heading of its own, so that count remains four. Desktop body line-height was
26px.
Mobile section spacing was 68px at the time of that check and is now 56px, so Plan spacing needs
re-checking at 1440px, 390px and 320px. The Plan lockup has since been given the discipline line, so
both routes now carry the identical full lockup and that check is also outstanding. The final
trailing-slash policy fixed the local homepage-to-Plan link and matches production.

Post-deployment verification confirmed the final homepage and Plan copy at
`https://in-the-loop.studio`. The apex and `/plan/` return 200; `/plan` normalises to `/plan/` with a
308. The Plan's description and social metadata use the final three-line introduction. The `www`
copy canonicals to the apex. The sitemap, manifest, social card, SVG/PNG/ICO favicons and Apple touch
icon all return successfully with the right content type. Cloudflare's managed crawler policy allows
search indexing, declines named AI-training crawlers and preserves the production sitemap declaration.

## Next

1. Enable Cloudflare Email Routing and confirm a real test send reaches Ryan's inbox. This must
   happen before the contact link ships live.
2. Commit the working tree when Ryan approves the final live copy, then deploy so production matches
   it.
3. Submit `https://in-the-loop.studio/sitemap.xml` in Google Search Console when the domain property
   is connected. Crawl readiness is live, but search inclusion is controlled by the search engine.
4. Add a concept destination only when it is real and has a specific user job.
5. Re-upload the LinkedIn logo or banner only if LinkedIn still holds the previous exports; website
   icons update with deployment.
