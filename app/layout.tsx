import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lyfe Hospitality | Bringing Good Food to Lyfe",
  description:
    "Lyfe Hospitality is a Connecticut-based restaurant group behind Pizza Lyfe, Lyfe Cafe, Organika Kitchen, Quattro Pazzi, and Sweet Lyfe — health-forward brands united by one belief: food should make your life better.",
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
