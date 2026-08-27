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

export const HOME_CTA_LABEL = "Read the plan →";

export const HOME_CTA_HREF = PLAN_PATH;

/** The studio programme. Each property is public in intent and still being built. */
export const PROPERTIES = [
  {
    name: "Signal",
    description: "Curate what's changing in startup operations.",
  },
  {
    name: "Skills",
    description: "Index the best agent skills for startup work.",
  },
  {
    name: "Harness",
    description: "Install the startup context agents need.",
  },
  {
    name: "Agents",
    description: "Solve valuable workflows end-to-end.",
  },
  {
    name: "Newsletter",
    description: "Share what we learn along the way.",
  },
] as const;

export const PLAN_INTRO = [
  "Agents are changing how startups work.",
  "We do not yet know what the best agent-native startup looks like.",
  "In The Loop exists to find out.",
] as const;

/** Build an absolute URL from a site relative path. Use this, never string concatenation. */
export function absolute(path: string): string {
  return new URL(path, SITE_URL).href;
}
