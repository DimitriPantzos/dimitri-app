/**
 * Public site facts for dimitri.app.
 *
 * Press entries are limited to two verified features:
 * 1. "The Sweet Lyfe" — Westport Lifestyle, issue 2026-10 (October 2026),
 *    by Sara Gaynes Levy. Photography in the original is by Bevy Rutledge
 *    and is not republished here.
 *    https://citylifestyle.com/articles/the-sweet-lyfe
 * 2. "Building a Better Lyfe" — Westport, Weston & Wilton (Westport Magazine),
 *    November/December 2026, by Lily Caplan. Issue published November 3, 2026.
 *    No standalone article URL; the Issuu issue is the verified reader.
 *    Printed page 80; reader pages 82–83 of 108.
 *    https://issuu.com/mofflymedia/docs/westport_weston_wilton_-_november_december_2026
 *
 * Do not add the separate October 2, 2026 Moffly farmers-market chef story.
 * Restaurant biography on /about is drawn from the Westport Lifestyle profile
 * and from copy already published on this site. Do not invent dates, counts,
 * awards, or credentials beyond those sources.
 */

export type Brand = {
  name: string;
  href: string;
  logo: string;
  tagline: string;
  description: string;
  /** Sourced location note. Shown on About only. */
  detail?: string;
};

export const brands: Brand[] = [
  {
    name: "Pizza Lyfe",
    href: "https://pizzalyfe.com",
    logo: "/logos/pizza-lyfe.png",
    tagline: "Pizza, Reimagined",
    description:
      "Craft pizza made with clean, better-for-you ingredients — proving that comfort food and conscious eating belong on the same plate.",
    detail:
      "833 Post Road East, Westport. Opened December 2022. Sourdough crust with whole grain. A Milford location followed.",
  },
  {
    name: "Lyfe Cafe",
    href: "https://lyfe.cafe",
    logo: "/logos/lyfe-cafe.png",
    tagline: "Eat Well, Live Well",
    description:
      "A neighborhood cafe serving health-forward bowls, smoothies, and coffee — fuel for everyday lyfe, made fresh daily.",
    detail: "793 Post Road East, Westport, across the street from Pizza Lyfe.",
  },
  {
    name: "Organika Kitchen",
    href: "https://organikact.com",
    logo: "/logos/organika.png",
    tagline: "Organic to the Core",
    description:
      "Organic, plant-powered kitchen and juicery rooted in Connecticut — wholesome food that tastes as good as it makes you feel.",
  },
  {
    name: "Quattro Pazzi",
    href: "https://quattropazzi.com",
    logo: "/logos/quattro-pazzi.png",
    tagline: "Classic Italian Soul",
    description:
      "A beloved Italian trattoria serving time-honored recipes with warm hospitality — four crazy guys, one unforgettable table.",
  },
  {
    name: "Sweet Lyfe",
    href: "https://sweetlyfe.app",
    logo: "/logos/sweet-lyfe.png",
    tagline: "Small-Batch Happiness",
    description:
      "A micro creamery serving small-batch Greek frozen yogurt and gelato with real, simple ingredients — the sweetest side of the Lyfe family.",
    detail: "Next door to Pizza Lyfe on Post Road East in Westport.",
  },
];

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Brands", href: "/#brands" },
  { label: "About", href: "/about" },
  { label: "Press", href: "/press" },
  { label: "Leadership", href: "/#leadership" },
  { label: "Contact", href: "/#contact" },
];

export const stats = [
  { value: "05", label: "Distinct Concepts" },
  { value: "100%", label: "Clean Ingredients" },
  { value: "CT", label: "Rooted Locally" },
];

export type ContactItem = {
  label: string;
  value: string;
  href: string | null;
};

export const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: "me@dimitri.app",
    href: "mailto:me@dimitri.app",
  },
  {
    label: "Location",
    value: "Norwalk, Connecticut",
    href: null,
  },
];

export type PressFeature = {
  title: string;
  publication: string;
  issue: string;
  byline: string;
  summary: string;
  href: string;
  locationNote?: string;
};

export const pressFeatures: PressFeature[] = [
  {
    title: "The Sweet Lyfe",
    publication: "Westport Lifestyle",
    issue: "October 2026",
    byline: "Sara Gaynes Levy",
    summary:
      "How Dimitri Pantzos went from family restaurants to Pizza Lyfe, Lyfe Cafe, and Sweet Lyfe — including Greek yogurt made in-house.",
    href: "https://citylifestyle.com/articles/the-sweet-lyfe",
  },
  {
    title: "Building a Better Lyfe",
    publication: "Westport, Weston & Wilton (Westport Magazine)",
    issue: "November/December 2026",
    byline: "Lily Caplan",
    summary:
      "A magazine feature on Dimitrios Pantzos and his restaurant group. The deck mentions craft pizza and colorful smoothies.",
    href: "https://issuu.com/mofflymedia/docs/westport_weston_wilton_-_november_december_2026",
    locationNote:
      "Issue published November 3, 2026. Printed page 80; in the Issuu reader, pages 82–83 of 108. This link opens the full issue.",
  },
];
