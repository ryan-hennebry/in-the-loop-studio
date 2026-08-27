---
name: email-routing-blocker
description: Cloudflare Email Routing is not enabled for in-the-loop.studio, so the Plan's mailto link hard-bounces until it is turned on
metadata:
  type: project
---

As of 2026-08-27, `in-the-loop.studio` has no MX, SPF or DMARC records, so mail to
`ryan@in-the-loop.studio` hard-bounces. The Plan page now closes with a mailto to that address, which
makes enabling Cloudflare Email Routing a launch blocker rather than a nice-to-have.

**Why:** The contact link is the only reply path on the site; shipping it against a dead mailbox
silently loses inbound mail. Ryan asked for the link back on the Plan only, so this is the one place
it matters.

**How to apply:** Before approving any deploy that includes the Plan contact link, check whether
Email Routing was enabled and whether a real test send landed in a human inbox. DNS records alone
only prove a server accepts mail. Full remediation steps live in the repo's `HANDOFF.md` under
`## Required before launch`; trust that file over this memory if they diverge.
