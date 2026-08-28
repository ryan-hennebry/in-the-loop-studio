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
Signal and Newsletter are not routes. Both pages close on a colophon: `In The Loop` at the left,
linking home, and `by Ryan Hennebry` at the right, linking to LinkedIn as the site's one outbound
link. There is no homepage email action and no client JavaScript; the page transition between the
two routes is CSS the browser runs itself.

The homepage's final register says `Curate what matters on the frontier.` and `Index agent skills
for startup work.` The Plan uses Ryan's final supplied copy as a prose-only causal essay: discover
what matters, install the context, let use decide and share what we learn. Its visible title, system
register and diagrams are removed. The opening uses tight premise spacing followed by a larger gap
before `In The Loop exists to explore it and build what's missing.`, which is set in the Plan's 600
emphasis weight as the essay's one emphasised line.

Plan spacing was rebuilt on a 4px scale. The opening lines sit 12px apart and the conclusion follows
after 32px at both widths. A heading sits 14px above its body, paragraphs inside a section sit 26px
apart, and sections separate by 72px on desktop and 56px on mobile. The lockup-to-opening gap is
88px on desktop and 32px on mobile. The colophon sits 224px below the Plan's last words on desktop
and 128px on mobile, and the page ends 80px below the colophon on desktop and 40px on mobile; the
homepage ends 48px below its colophon on desktop and 16px on mobile. Page-scoped spacing is applied
through the `data-page` attribute on `<body>`. The Plan closes with one quiet mailto link to
`ryan@in-the-loop.studio` as inline prose under no heading of its own, set apart by a bespoke 144px
closing interval on desktop and 96px on mobile, with a hairline at 15% of the current text colour
sitting 14px above it, 60px wide on desktop and 32px on mobile.

The homepage's vertical rhythm is elastic. Its four macro intervals are empty `.riser` items in a
flex column with floors of 46px, 56px, 44px and 18px on desktop and 15px, 15px, 15px and 21px at
600px and below, with the two interior risers capped at 112px and 96px on desktop and 32px on
mobile. They grow into whatever height the screen leaves over on named share tokens, 1:2:2:9 above
600px and 3:1:1:5 at 600px and below. Both routes now open at the same height, on one shared
`clamp(64px, 8vh, 96px)` above 600px and 24px on mobile. The Plan used to open lower, on
`clamp(96px, 14vh, 144px)`, and because the lockup is named for the page transition that difference
was animated on every navigation rather than absorbed. The shell is a flex column at least `100svh`
tall and only `.main` grows, so a short page ends at the foot of the screen with the surplus above
the colophon. Astro's minifier drops the duplicate `100vh` fallback, so `dist` ships `100svh` alone
and a pre-2022 engine gets none.

Measured against the build, the homepage document height equals the viewport height exactly at
1920x1080, 1728x1117, 1512x982, 1440x1080, 1440x900, 1440x800, 430x780, 412x811, 393x659, 390x664
and 360x700. A 375x553 runs 94px long and a 320x460 runs 218px long, and both are accepted. No copy
was cut, no type size shrank, and every link measures 48px: the homepage action, the Plan's home
link, its closing contact link, and the colophon's wordmark and author link on both pages.

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

Local `main` is ahead of production. That deployment predates the Plan spacing rebuild, the
`Discover what matters` rename, the contact link, the colophon, the elastic homepage rhythm, the
shortened page endings, the drawn arrow, the `Share what we learn as we go.` register line, the
replaced Plan introduction and body copy, the desktop composition on 1:2:2:9 shares, the link
interaction fixes, the colophon wordmark's home link, the cross-document page transition and the
shared page top, so none of those are live yet. The live Plan description still reads
`In The Loop exists to find out.`

## Test

`./verify.sh` passes against the current tree, and passed at each commit that produced it. It checks
the two-route boundary, local/production route agreement, exact homepage and Plan copy, truth
constraints, the diagram- and register-free Plan, brand assets and the production Astro build.
Re-run it before every deployment. The search and sharing gate checks crawl files, exact canonical
URLs, page-specific titles and descriptions, social-image metadata, the identity graph and the
absence of client JavaScript.

The current tree was also measured against the built output rather than asserted from the CSS:
`dist` served locally and driven headless at 1920x1080, 1728x1117, 1512x982, 1440x1080, 1440x900,
1440x800, 430x780, 412x811, 393x659, 390x664, 375x553, 360x700 and 320x460, on both routes. No
console error, no page error and no horizontal overflow at any of them, and none from 320px to
1920px on the width sweep. The homepage document height equals the viewport height at every one of
those sizes except 375x553 and 320x460, which run 94px and 218px long. Every link measures 48.000px
on both routes at 1440px, 390px and 320px. The homepage arrow translates 3px on hover without
changing the link's box, and every underline on the site moves from muted to ink on hover and again
on press.

Four interaction readings are worth carrying forward. `.primary-link` now measures 135.06px rather
than stretching the whole column, so it no longer puts a pointer over empty paper. The page
transition fires forward, on Back and from the colophon's home link, and is suppressed under
`prefers-reduced-motion: reduce`; Firefox ignores it entirely and navigates normally. The named
lockup no longer moves during it: at 1440x900 the identity group's keyframes start and end at
`matrix(1, 0, 0, 1, 420, 72)` at 233.25 by 36.375px, and every stepped frame of the navigation,
forward and back, is pixel-identical over the lockup. The closing contact link takes no focus
outline at all, because no offset clears the glyph band above it without cutting the word itself;
focus is drawn instead as a 2px rule above the word and another below, painted at y 551.88 and
572.88 inside the link's own content box. Measured from the pixels against the ink of the line
above, which runs 531.63 to 547.38, the marks overlap it by zero at 1440px, 390px and 320px, and
they still paint under forced colours.

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
