import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eveanna's Coloring Book",
  description:
    "A friendly online coloring book — pick a picture, choose your colors, and fill it in. Add your own coloring pages too!",
};

export default function ColoringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
