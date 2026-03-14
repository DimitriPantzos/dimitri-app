import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dimitri Pantzos",
  description: "Building health-focused hospitality concepts across Connecticut. Owner of Lyfe Hospitality.",
  openGraph: {
    title: "Dimitri Pantzos",
    description: "Building health-focused hospitality concepts across Connecticut.",
    url: "https://dimitri.app",
    siteName: "Dimitri Pantzos",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dimitri Pantzos",
    description: "Building health-focused hospitality concepts across Connecticut.",
    creator: "@Dimitri_oss",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
