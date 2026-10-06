/**
 * The one place every string that is likely to change lives.
 *
 * Nothing else in this repo hardcodes a URL, an email address or the CTA
 * wording. If you find a bare "https://" or a "mailto:" outside this file,
 * that is a bug.
 */

/** Base URL of the production site. */
export const SITE_URL = "https://in-the-loop.studio";

export const SCHEMA_CONTEXT_URL = "https://schema.org";

export const SITE_NAME = "In The Loop";

export const HOME_PATH = "/";

export const PLAN_PATH = "/plan/";

export const DISCIPLINE = "Agent-native startup operations";

export const SITE_TITLE = "In The Loop, agent-native startup operations";

export const PLAN_TITLE = "The plan, In The Loop";

export const SOCIAL_IMAGE_PATH = "/brand/social-card-1200x630.png";

export const SOCIAL_IMAGE_ALT = "In The Loop mark";

export const HEADLINE =
  "Building the systems startups need now that agents work.";

/** The arrow is drawn in CSS, so the label stays the accessible name. */
export const HOME_CTA_LABEL = "Read the plan";

export const HOME_CTA_HREF = PLAN_PATH;

/** Where the contact link points. No subject is set on purpose: it is a conversation, not a ticket. */
export const CONTACT_EMAIL = "ryan@in-the-loop.studio";

/** The href the contact link carries, so no page has to build a mailto of its own. */
export const CONTACT_HREF = `mailto:${CONTACT_EMAIL}`;

/** The colophon's outbound link, distinct from the two register links. */
export const LINKEDIN_URL = "https://www.linkedin.com/in/ryanhennebry";

/** The person behind the studio, named once at the foot of every page. */
export const COLOPHON_NAME = "Ryan Hennebry";

/** The colophon prefix that hands the page to its author. */
export const COLOPHON_BY = "by ";

/** The studio programme. Each property is public in intent and still being built. */
export const PROPERTIES = [
  {
    name: "Skills",
    description: "Index agent skills for startup work.",
    href: "https://startupskills.dev/",
  },
  {
    name: "Agents",
    description: "Solve valuable workflows end-to-end.",
    href: "https://ryanhennebry.xyz/competitor-intel-agent/",
  },
  {
    name: "Harness",
    description: "Install the startup context agents need.",
  },
  {
    name: "Signal",
    description: "Curate what matters on the frontier.",
  },
  {
    name: "Newsletter",
    description: "Share what we learn as we go.",
  },
] as const;

export const PLAN_INTRO = [
  "Agents can now do real startup work.",
  "But we’re still figuring out this new world.",
  "In The Loop exists to explore it and build what’s missing.",
] as const;

/** Build an absolute URL from a site relative path. Use this, never string concatenation. */
export function absolute(path: string): string {
  return new URL(path, SITE_URL).href;
}
