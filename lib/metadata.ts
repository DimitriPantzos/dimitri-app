import type { Metadata } from "next";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `https://dimitri.app${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | Lyfe Hospitality`,
      description,
      url,
      siteName: "Lyfe Hospitality",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: `${title} | Lyfe Hospitality`,
      description,
    },
  };
}
