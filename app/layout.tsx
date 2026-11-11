import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-inter",
  display: "swap",
});

const description = "Dimitri Pantzos, restaurateur in Connecticut.";

export const metadata: Metadata = {
  metadataBase: new URL("https://dimitri.app"),
  title: {
    default: "Dimitri Pantzos — Restaurateur, Westport, Connecticut",
    template: "%s — Dimitri Pantzos",
  },
  description,
  authors: [{ name: "Dimitri Pantzos" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Dimitri Pantzos",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Dimitri Pantzos in a navy apron, arms crossed, inside Sweet Lyfe in Westport.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
