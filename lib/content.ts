/**
 * Approved public copy for the personal site.
 * Facts follow Westport Lifestyle, October 2026 (“The Sweet Lyfe,” Sara Gaynes Levy)
 * and the legible headline, byline, and deck of “Building a Better Lyfe”
 * (Lily Caplan, Westport, Weston & Wilton, November/December 2026).
 * Awards, a relative’s health, a spouse, and a child are omitted on purpose.
 */

export const portrait = {
  src: "/dimitri/dimitri-pantzos-portrait.jpg",
  alt: "Dimitri Pantzos in a navy apron, arms crossed, inside Sweet Lyfe in Westport.",
  width: 2400,
  height: 3600,
} as const;

export const contact = {
  email: "me@dimitri.app",
  emailHref: "mailto:me@dimitri.app",
  phone: "203-551-1003",
  phoneHref: "tel:+12035511003",
  place: "Norwalk, Connecticut",
} as const;

export type Restaurant = {
  name: string;
  descriptor: string;
  place: string | null;
  href: string;
  logo: string;
};

export const restaurants: Restaurant[] = [
  {
    name: "Pizza Lyfe",
    descriptor: "Sourdough, whole-grain crust pizza.",
    place: "Westport · Milford",
    href: "https://pizzalyfe.com",
    logo: "/logos/pizza-lyfe.png",
  },
  {
    name: "Lyfe Cafe",
    descriptor: "Strong cold brew, croissants and breakfast sandwiches.",
    place: "Westport",
    href: "https://lyfe.cafe",
    logo: "/logos/lyfe-cafe.png",
  },
  {
    name: "Sweet Lyfe",
    descriptor: "Greek-style frozen yogurt made in-house, plus a candy shop.",
    place: "Westport",
    href: "https://sweetlyfe.app",
    logo: "/logos/sweet-lyfe.png",
  },
  {
    name: "Organika Kitchen",
    descriptor: "The kitchen I opened in Southport in 2015.",
    place: null,
    href: "https://organikact.com",
    logo: "/logos/organika.png",
  },
  {
    name: "Quattro Pazzi",
    descriptor: "My family's Italian restaurant.",
    place: null,
    href: "https://quattropazzi.com",
    logo: "/logos/quattro-pazzi.png",
  },
];

export type PressItem = {
  eyebrow: string;
  title: string;
  meta: string;
  summary: string;
  href: string;
  linkLabel: string;
};

export const pressItems: PressItem[] = [
  {
    eyebrow: "Westport Lifestyle · October 2026",
    title: "The Sweet Lyfe",
    meta: "By Sara Gaynes Levy",
    summary:
      "A profile tracing Dimitri's path from his family's restaurants to Organika, Pizza Lyfe, Lyfe Cafe and Sweet Lyfe on Westport's Post Road East, including the sourdough crust and the in-house Greek-style froyo.",
    href: "https://citylifestyle.com/articles/the-sweet-lyfe",
    linkLabel: "Read at City Lifestyle",
  },
  {
    eyebrow: "Westport, Weston & Wilton · November/December 2026",
    title: "Building a Better Lyfe",
    meta: "By Lily Caplan · Moffly Media · p. 80",
    summary:
      "A feature on how Dimitri is building a family of Connecticut restaurants — from craft pizza and smoothies to organic kitchens and house-made frozen yogurt — around the idea that food should make life better.",
    href: "https://issuu.com/mofflymedia/docs/westport_weston_wilton_-_november_december_2026",
    linkLabel: "Read on Issuu",
  },
];

export function firstSentence(text: string) {
  const match = text.match(/^[\s\S]*?[.!?](?:\s|$)/);
  return match ? match[0].trim() : text;
}

export const aboutChapters = [
  {
    title: "Where it started",
    body: "My family owned Quattro Pazzi in Fairfield and, over the years, a diner and the food service at a Norwalk golf course. I spent every day after school at one of our restaurants. By my junior year of high school I was cooking at Rebeccas in Greenwich.",
  },
  {
    title: "Organika",
    body: "In 2015, a few months after graduating high school, I opened Organika, a vegan restaurant in Southport, with my aunt Kathy. A second location in New Canaan followed within a year, then Ridgefield. I later sold those two locations.",
  },
  {
    title: "Foodservice",
    body: "I spent time on the corporate side of food, working in plant-based foodservice with brands including Violife.",
  },
  {
    title: "Pizza Lyfe",
    body: "My uncle Gino called about an open space on Post Road East in Westport. We signed the lease, and Pizza Lyfe opened in December 2022, built around a sourdough, whole-grain crust. A second Pizza Lyfe opened in Milford.",
  },
  {
    title: "Lyfe Cafe and Sweet Lyfe",
    body: "About a year later the cafe across the street opened up, and Lyfe Cafe was born from two simple wants: really strong cold brew and a great bacon, egg and cheese. Sweet Lyfe came next: Greek-style frozen yogurt with every base made in-house, plus candy.",
  },
  {
    title: "Today",
    body: "I lead Lyfe Hospitality, the company behind these restaurants. When guests ask for something new, like a salmon bowl at Lyfe Cafe, it can end up on the menu.",
  },
] as const;

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dimitri Pantzos",
  alternateName: "Dimitrios Pantzos",
  jobTitle: "President",
  worksFor: {
    "@type": "Organization",
    name: "Lyfe Hospitality",
  },
  url: "https://dimitri.app",
  image: "https://dimitri.app/dimitri/dimitri-pantzos-portrait.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Norwalk",
    addressRegion: "CT",
  },
  sameAs: [] as string[],
  knowsAbout: ["Restaurants"],
};
