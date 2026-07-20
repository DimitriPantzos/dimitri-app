import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dimitri.app"),
  title: {
    default: "Lyfe Hospitality — A Connecticut House of Restaurants",
    template: "%s | Lyfe Hospitality",
  },
  description:
    "Lyfe Hospitality is a Connecticut house of restaurants devoted to eating well — Pizza Lyfe, Lyfe Cafe, Organika Kitchen, Quattro Pazzi, and Sweet Lyfe. Founded by Dimitrios Pantzos.",
  keywords: [
    "Lyfe Hospitality",
    "Connecticut hospitality group",
    "restaurant group",
    "Pizza Lyfe",
    "Lyfe Cafe",
    "Organika Kitchen",
    "Quattro Pazzi",
    "Sweet Lyfe",
    "Dimitrios Pantzos",
    "Fairfield County restaurants",
  ],
  authors: [{ name: "Lyfe Hospitality" }],
  openGraph: {
    title: "Lyfe Hospitality — A Connecticut House of Restaurants",
    description:
      "A Connecticut house of restaurants devoted to eating well. Five houses, one standard.",
    url: "https://dimitri.app",
    siteName: "Lyfe Hospitality",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lyfe Hospitality — A Connecticut House of Restaurants",
    description:
      "A Connecticut house of restaurants devoted to eating well. Five houses, one standard.",
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
          href="https://fonts.googleapis.com/css2?family=Marcellus&family=Inter:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
