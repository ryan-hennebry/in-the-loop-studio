---
name: email-routing
description: Cloudflare Email Routing is live for in-the-loop.studio and a forward was observed delivered; only the _dmarc record is still missing
metadata:
  type: project
---

As of 2026-08-27, mail to `ryan@in-the-loop.studio` works: Email Routing is enabled and ready, MX
and SPF are authoritative, and Cloudflare's analytics logged one `forward` with status `delivered`.
The Plan's contact link is no longer a launch blocker. The one open item is a missing `_dmarc` TXT
record, which improves deliverability but blocks nothing; the wrangler OAuth token has no
`dns_records:write`, so it needs the dashboard or a purpose-scoped token.

**Why:** This section of `HANDOFF.md` was wrong for a day because it recorded an intention rather
than the shipped state. `delivered` also only means the receiving MX accepted the message, so it is
not proof a human saw it.

**How to apply:** Treat the mailto as working; do not re-raise it as a blocker. Read `## Mail` in
the repo's `HANDOFF.md` for the authoritative detail and trust that file over this memory if they
diverge. Deployment there is a direct `wrangler pages deploy ./dist` upload - the Pages project has
no git integration, so pushing commits triggers nothing. See [[root-doc-editing]] before editing
that file.
