import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dimitri.app"),
  title: {
    default: "Dimitrios Pantzos — Founder & Operator",
    template: "%s | Dimitrios Pantzos",
  },
  description:
    "Dimitrios Pantzos is a Connecticut-based founder and operator building health-forward food brands — Pizza Lyfe, Lyfe Cafe, Organika Kitchen, Quattro Pazzi, and Sweet Lyfe. Previously drove national foodservice growth for Dr. Praeger's, Daring, and Violife.",
  keywords: [
    "Dimitrios Pantzos",
    "Dimitri Pantzos",
    "founder",
    "restaurant operator",
    "Lyfe Hospitality",
    "food entrepreneur",
    "Connecticut",
    "plant-based foodservice",
  ],
  authors: [{ name: "Dimitrios Pantzos" }],
  openGraph: {
    title: "Dimitrios Pantzos — Founder & Operator",
    description:
      "Founder and operator building health-forward food brands in Connecticut.",
    url: "https://dimitri.app",
    siteName: "Dimitrios Pantzos",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dimitrios Pantzos — Founder & Operator",
    description:
      "Founder and operator building health-forward food brands in Connecticut.",
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
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
