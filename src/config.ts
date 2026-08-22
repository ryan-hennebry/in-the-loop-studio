/**
 * The one place every string that is likely to change lives.
 *
 * Nothing else in this repo hardcodes a URL, an email address or the CTA
 * wording. If you find a bare "https://" or a "mailto:" outside this file,
 * that is a bug.
 */

/**
 * Base URL of this site. in-the-loop.studio still serves the superseded site
 * and replacing it is Ryan's call, so this points at the workers.dev
 * placeholder. When he says go, change this line and bind the route in
 * wrangler.jsonc.
 */
export const SITE_URL = "https://in-the-loop-studio.workers.dev";

export const SITE_NAME = "In The Loop";

/** The wordmark, lowercase, carrying the caret. */
export const WORDMARK = "in-the-loop";

/**
 * The discipline label beside the wordmark. Settled with Ryan, not to be
 * reworded. It is stored shouted because that is how it is set on the page.
 */
export const NAV_LABEL = "AI-NATIVE STARTUP OPERATIONS";

/** The same line in sentence case, for the browser tab and search results. */
export const SITE_TITLE = "In The Loop, AI-native startup operations";

/**
 * The headline, one sentence over two lines. The break is deliberate and is
 * the reason this is an array rather than a string: the line ends where the
 * sense turns, not where the viewport happens to wrap.
 */
export const HEADLINE_LINES = [
  "I build the systems startups",
  "use to run on agents.",
] as const;

/**
 * The call to action, in one place because the wording is not finally settled.
 * Change this one string to swap it. The alternatives Ryan is weighing are
 * "EMAIL ME" and "WHAT I'M WORKING ON". The brackets are added by the markup,
 * so this is the label only.
 */
export const CTA_LABEL = "START A CONVERSATION";

/** Where the CTA points. No subject is set on purpose: it is a conversation, not a ticket. */
export const CTA_EMAIL = "ryan@in-the-loop.studio";

/** The href the CTA carries, so no page has to build a mailto of its own. */
export const CTA_HREF = `mailto:${CTA_EMAIL}`;

/**
 * Every outbound URL on the site. Startup Skills has no live domain yet and
 * the Feed is not built, so both are placeholders. Change them here and the
 * page follows; nothing links out except through this object.
 */
export const LINKS = {
  /** startupskills.ai when it is registered. Placeholder until then. */
  skills: "https://startup-skills.workers.dev",
  /** The Feed. Closed and email gated until it is built, so this is a placeholder. */
  feed: "https://in-the-loop-feed.workers.dev",
  /** The archive. A route on this site, so it is live the moment this ships. */
  newsletter: "/newsletter",
  /** The identity page, which lists the same projects. */
  identity: "https://ryanhennebry.xyz",
} as const;

/**
 * Where the newsletter form posts. The list provider is not chosen: Buttondown
 * is the standing assumption pending a spike, with Postmark the fallback, and
 * the 16 consolidation decision docs are read before anything is wired. No
 * vendor SDK is installed, so swapping provider is this one string plus the
 * field name below.
 *
 * Empty string means "not wired yet": the form renders and says so rather than
 * posting into the dark.
 */
export const CAPTURE_ENDPOINT = "";

/** The email field name the chosen provider expects. Buttondown uses "email". */
export const CAPTURE_FIELD = "email";

/** Build an absolute URL from a site relative path. Use this, never string concatenation. */
export function absolute(path: string): string {
  return new URL(path, SITE_URL).href;
}
