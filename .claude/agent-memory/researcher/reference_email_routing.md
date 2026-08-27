---
name: cloudflare-email-routing
description: Email Routing state for in-the-loop.studio — zone id, where to read routing rules, and the GraphQL-only delivery log (REST log endpoints 404).
metadata:
  type: reference
---

Zone `in-the-loop.studio` = `61e7ce9772a085983236241e9d85c2b1` on account
`6dcf017cc28fca0faf165cd6cb1457ba`.

**Where to read state** (wrangler OAuth token in `~/Library/Preferences/.wrangler/config/default.toml`,
key `oauth_token`, used as `Authorization: Bearer`):
- Settings: `GET /zones/<zone>/email/routing`
- Rules: `GET /zones/<zone>/email/routing/rules`
- Destination verification: `GET /accounts/<acct>/email/routing/addresses`
- Expected DNS: `GET /zones/<zone>/email/routing/dns`

**Delivery log is GraphQL-only.** `/email/routing/summary` and `/email/routing/events` both return
`404 page not found`. Actual send/delivery evidence comes from the GraphQL analytics API at
`https://api.cloudflare.com/client/v4/graphql`, dataset `emailRoutingAdaptiveGroups`, with dimensions
`datetimeMinute`, `action`, `status`. This is the only way to distinguish "configuration is correct"
from "a message was actually delivered".

**Token scope caveat:** the wrangler OAuth scope list includes `zone:read` and `email_routing:write`
but **no** `dns_records:write`. It can read DNS and mutate Email Routing, but cannot add or edit DNS
records (e.g. a `_dmarc` TXT record) — that needs the dashboard or a scoped API token.

Related: [[cloudflare-pages-direct-upload]]
