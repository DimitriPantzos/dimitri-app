import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dimitrios Pantzos | President, Lyfe Hospitality",
  description: "Building the future of hospitality through AI, systems thinking, and relentless execution. Owner of Lyfe Café and Pizza Lyfe. From $6M to $20M in foodservice growth.",
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
