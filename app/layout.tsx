import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dimitrios Pantzos",
  description: "President, Lyfe Hospitality. Owner of Lyfe Café and Pizza Lyfe in Connecticut.",
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
