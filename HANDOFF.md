# Handoff: in-the-loop.studio

## Mail

Cloudflare Email Routing is enabled for `in-the-loop.studio` on zone
`61e7ce9772a085983236241e9d85c2b1`, with status `ready` and a synced configuration. The domain
serves the three authoritative Cloudflare MX records, `route1.mx.cloudflare.net` at priority 71,
`route2.mx.cloudflare.net` at 15 and `route3.mx.cloudflare.net` at 88, and the SPF record
`v=spf1 include:_spf.mx.cloudflare.net ~all`. The enabled rule `Plan contact link` sits at
priority 0 and forwards the literal address `ryan@in-the-loop.studio` to the account owner's Gmail,
a destination verified on 2026-08-27. A catch-all drop rule exists but is disabled, so it does not
shadow that rule.

Delivery has been observed rather than only configured. Cloudflare's `emailRoutingAdaptiveGroups`
analytics dataset records exactly one event since 2026-07-28: a `forward` with status `delivered` at
2026-08-27 13:44 UTC. That status ends at the receiving MX accepting the message. DNS records only
prove that a server accepts mail, and `delivered` proves the same thing one step later; neither
proves the message lands in an inbox a human reads rather than a spam folder.

One improvement is still open and it blocks nothing. There is no `_dmarc` TXT record;
`_dmarc.in-the-loop.studio` returns an authoritative NODATA. DMARC is not required to receive mail
and does not affect delivery, but it improves deliverability and prevents trivial spoofing. The
suggested value is `v=DMARC1; p=none; rua=mailto:<owner inbox>`, added from the Cloudflare dashboard
or with a purpose-scoped API token: the current wrangler OAuth token carries `zone (read)` and no
`dns_records:write`, so it cannot write the record.

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
88px on desktop and 32px on mobile. The Plan ends 160px below its last words on desktop and 120px on
mobile; the homepage ends 80px below its action on desktop and 16px on mobile. Page-scoped spacing
is applied through the `data-page` attribute on `<body>`. The Plan closes with one quiet mailto link to
`ryan@in-the-loop.studio` as inline prose under no heading of its own, set apart by a bespoke 144px
closing interval on desktop and 96px on mobile, with a hairline at 15% of the current text colour
sitting 14px above it, 60px wide on desktop and 32px on mobile.

The homepage now runs on the same named tokens rather than on literals, and at 600px and below it
compresses to hold one screen: a 24px page top, a 32px opening gap, 24px from the headline to the
register, 12px/13px register rows, 24px to the action and a 16px ending. It measures 643px at 360px
wide and above, inside the roughly 664px a 390x844 phone shows under its browser chrome. A 375x667
or 320x568 screen still scrolls. No copy was cut, no type size shrank and all three tap targets
remain 48px.

`PRODUCT.md` holds product truth, `DESIGN.md` holds the implemented visual system, and
`src/config.ts` holds shared copy, routes and metadata values. Each page has an explicit title,
description, apex-domain canonical, Open Graph and Twitter metadata, and the same small WebSite and
Organization identity graph. The full A6 logo and web-icon system lives under `public/`;
`public/brand/social-card-1200x630.png` is the shared 1200x630 Open Graph and Twitter image.
`robots.txt` permits search crawling and names `sitemap.xml`; the sitemap contains only the two real
canonical pages.

The implementation is committed on local `main`, which has not been pushed to `origin` and does not
need to be for a release. It was deployed on 2026-08-26 to the existing Cloudflare Pages project
`in-the-loop`, replacing the superseded site on `https://in-the-loop.studio` and
`https://www.in-the-loop.studio`. Ryan's final-copy release was deployed on 2026-08-27 as production
deployment `c8df63de-0f24-4201-b69c-1439af9a9d1f` on branch `main`. `SITE_URL`, the trailing-slash
route policy, package deployment script and `wrangler.jsonc` describe the Pages production setup.

The Pages project has no git integration, so pushing to git triggers nothing. Production changes
only through a direct `wrangler pages deploy ./dist` upload of a fresh build.

Local `main` is ahead of production. That deployment predates the Plan spacing rebuild, the 160px
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

1. Add the `_dmarc` TXT record from the Cloudflare dashboard or with a purpose-scoped API token.
   It improves deliverability and is not a launch blocker.
2. Deploy local `main` with `wrangler pages deploy ./dist` so production matches it.
3. Submit `https://in-the-loop.studio/sitemap.xml` in Google Search Console when the domain property
   is connected. Crawl readiness is live, but search inclusion is controlled by the search engine.
4. Add a concept destination only when it is real and has a specific user job.
5. Re-upload the LinkedIn logo or banner only if LinkedIn still holds the previous exports; website
   icons update with deployment.
