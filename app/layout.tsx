import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dimitri.app"),
  title: {
    default: "Lyfe Hospitality — A Connecticut Collection of Restaurants",
    template: "%s | Lyfe Hospitality",
  },
  description:
    "Lyfe Hospitality is a Connecticut hospitality group and a collection of restaurants for the way we want to live — Pizza Lyfe, Lyfe Cafe, Organika Kitchen, Quattro Pazzi, and Sweet Lyfe. Founded by Dimitrios Pantzos.",
  keywords: [
    "Lyfe Hospitality",
    "Connecticut hospitality group",
    "restaurant collection",
    "Pizza Lyfe",
    "Lyfe Cafe",
    "Organika Kitchen",
    "Quattro Pazzi",
    "Sweet Lyfe",
    "Dimitrios Pantzos",
  ],
  authors: [{ name: "Lyfe Hospitality" }],
  openGraph: {
    title: "Lyfe Hospitality — A Connecticut Collection of Restaurants",
    description:
      "A Connecticut hospitality group and a collection of restaurants for the way we want to live.",
    url: "https://dimitri.app",
    siteName: "Lyfe Hospitality",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lyfe Hospitality — A Connecticut Collection of Restaurants",
    description:
      "A Connecticut hospitality group and a collection of restaurants for the way we want to live.",
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
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..500;1,9..144,300..400&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
