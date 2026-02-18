import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dimitrios Pantzos | Operator. Revenue Builder. AI Implementer.",
  description: "I build and scale modern food, retail, and hospitality organizations using AI, systems, and real-world operations.",
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
