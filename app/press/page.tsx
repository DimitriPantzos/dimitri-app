import type { Metadata } from "next";
import { PressList } from "@/components/press-list";
import { SiteShell } from "@/components/site-shell";

const description =
  "Two magazine features on Dimitri Pantzos: The Sweet Lyfe in Westport Lifestyle, October 2026, and Building a Better Lyfe in Westport, Weston & Wilton, November/December 2026.";

export const metadata: Metadata = {
  title: "Press",
  description,
  alternates: { canonical: "/press" },
  openGraph: {
    title: "Press — Dimitri Pantzos",
    description,
    url: "https://dimitri.app/press",
  },
  twitter: {
    title: "Press — Dimitri Pantzos",
    description,
  },
};

export default function PressPage() {
  return (
    <SiteShell>
      <section className="wrap section">
        <p className="eyebrow">Press</p>
        <h1 className="page-title">In print</h1>
        <p className="lede">
          Two recent features about the restaurants and how they came to be.
        </p>
        <PressList />
      </section>
    </SiteShell>
  );
}
