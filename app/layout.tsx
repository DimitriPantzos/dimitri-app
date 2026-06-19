import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lyfehospitality.com"),
  title: {
    default: "Lyfe Hospitality | Bringing Good Food to Lyfe",
    template: "%s | Lyfe Hospitality",
  },
  description:
    "Lyfe Hospitality is a Connecticut-based restaurant group behind Pizza Lyfe, Lyfe Cafe, Organika Kitchen, Quattro Pazzi, and Sweet Lyfe — health-forward brands united by one belief: food should make your life better.",
  keywords: [
    "Lyfe Hospitality",
    "Connecticut restaurant group",
    "Pizza Lyfe",
    "Lyfe Cafe",
    "Organika Kitchen",
    "Quattro Pazzi",
    "Sweet Lyfe",
    "health-forward dining",
    "Norwalk Connecticut restaurants",
  ],
  authors: [{ name: "Lyfe Hospitality" }],
  openGraph: {
    title: "Lyfe Hospitality | Bringing Good Food to Lyfe",
    description:
      "A Connecticut-based restaurant group building a family of health-forward brands — from craft pizza to organic kitchens.",
    url: "https://lyfehospitality.com",
    siteName: "Lyfe Hospitality",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lyfe Hospitality | Bringing Good Food to Lyfe",
    description:
      "A Connecticut-based restaurant group building a family of health-forward brands.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..500&family=Inter:wght@300..600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
