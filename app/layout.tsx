import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dimitrios Pantzos | Foodservice Executive & Entrepreneur",
  description: "Foodservice executive with a proven record of driving rapid sales growth and modernizing legacy brands.",
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
