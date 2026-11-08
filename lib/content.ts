/**
 * Approved public copy for the personal site.
 * Facts follow Westport Lifestyle, October 2026 (“The Sweet Lyfe,” Sara Gaynes Levy)
 * and the legible headline, byline, and deck of “Building a Better Lyfe”
 * (Lily Caplan, Westport, Weston & Wilton, November/December 2026).
 * Awards, a relative’s health, a spouse, and a child are omitted on purpose.
 * Owner correction, Nov 8 2026: Organika started in 2016. The family
 * restaurant story names Quattro Pazzi, Osianna Mediterranean Taverna,
 * and Post Road Diner, without dates, order, or current-ownership claims.
 * The October 2026 profile printed 2015; this site does not say the
 * magazine issued a correction.
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
  place: "Norwalk, Connecticut",
} as const;

export type DirectoryLocation = {
  brand: string;
  town: string;
  comingSoon?: boolean;
  href: string;
  logo: string;
  /** Official brand account from that restaurant’s own site. Not a separate handle per town. */
  instagram: string;
};

export const directory: DirectoryLocation[] = [
  {
    brand: "Pizza Lyfe",
    town: "Westport",
    href: "https://pizzalyfe.com",
    logo: "/logos/pizza-lyfe.png",
    instagram: "https://instagram.com/_pizzalyfe_",
  },
  {
    brand: "Pizza Lyfe",
    town: "Milford",
    href: "https://pizzalyfe.com",
    logo: "/logos/pizza-lyfe.png",
    instagram: "https://instagram.com/_pizzalyfe_",
  },
  {
    brand: "Lyfe Cafe",
    town: "Westport",
    href: "https://lyfe.cafe",
    logo: "/logos/lyfe-cafe.png",
    instagram: "https://instagram.com/_lyfecafe_",
  },
  {
    brand: "Lyfe Cafe",
    town: "Fairfield",
    comingSoon: true,
    href: "https://lyfe.cafe",
    logo: "/logos/lyfe-cafe.png",
    instagram: "https://instagram.com/_lyfecafe_",
  },
  {
    brand: "Sweet Lyfe",
    town: "Westport",
    href: "https://sweetlyfe.app",
    logo: "/logos/sweet-lyfe.png",
    instagram: "https://www.instagram.com/_sweetlyfe__/",
  },
  {
    brand: "Organika Kitchen",
    town: "Southport",
    href: "https://organikact.com",
    logo: "/logos/organika.png",
    instagram: "https://instagram.com/organikakitchen",
  },
  {
    brand: "Quattro Pazzi",
    town: "Fairfield",
    href: "https://quattropazzi.com",
    logo: "/logos/quattro-pazzi.png",
    instagram: "https://instagram.com/quattropazzi",
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
    body: "My family's restaurant story began with Quattro Pazzi, Osianna Mediterranean Taverna and Post Road Diner. I spent every day after school at one of our restaurants. By my junior year of high school I was cooking at Rebeccas in Greenwich.",
  },
  {
    title: "Organika",
    body: "In 2016 I opened Organika, a vegan restaurant in Southport, with my aunt Kathy. A second location in New Canaan followed within a year, then Ridgefield. I later sold those two locations.",
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
