import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dimitri.app"),
  title: {
    default: "dimitri pantzos",
    template: "%s | dimitri pantzos",
  },
  description:
    "Dimitri Pantzos is a restaurateur and operator in Norwalk, Connecticut — founder of Lyfe Hospitality: Pizza Lyfe, Lyfe Cafe, Organika Kitchen, Quattro Pazzi, and Sweet Lyfe.",
  keywords: [
    "Dimitri Pantzos",
    "Dimitrios Pantzos",
    "Lyfe Hospitality",
    "Pizza Lyfe",
    "Lyfe Cafe",
    "Organika Kitchen",
    "Quattro Pazzi",
    "Sweet Lyfe",
    "Connecticut restaurants",
  ],
  authors: [{ name: "Dimitri Pantzos" }],
  openGraph: {
    title: "dimitri pantzos",
    description:
      "Restaurateur & operator in Norwalk, Connecticut — founder of Lyfe Hospitality.",
    url: "https://dimitri.app",
    siteName: "dimitri pantzos",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "dimitri pantzos",
    description:
      "Restaurateur & operator in Norwalk, Connecticut — founder of Lyfe Hospitality.",
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
