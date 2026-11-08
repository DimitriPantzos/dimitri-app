import type { Metadata } from "next";
import Link from "next/link";
import { PressFeatures } from "@/components/press-features";
import { SiteShell } from "@/components/site-shell";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Press",
  description:
    "Two magazine features on Dimitrios Pantzos and Lyfe Hospitality: The Sweet Lyfe in Westport Lifestyle, October 2026, and Building a Better Lyfe in Westport Magazine, November/December 2026.",
  path: "/press",
});

export default function PressPage() {
  return (
    <SiteShell>
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#0a7d4d] mb-3">
          Press
        </p>
        <h1 className="font-display text-[clamp(2.75rem,8vw,4.75rem)] font-extrabold tracking-tight max-w-4xl text-balance">
          Two features. Both ready to read.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#0a1f16]/80 text-pretty">
          Westport Lifestyle and Westport Magazine have both written about
          Dimitri and the restaurants. Each feature opens on the
          publisher&apos;s site.
        </p>
        <p className="mt-4">
          <Link
            href="/about"
            className="text-sm font-bold text-[#0a7d4d] underline decoration-[#0a7d4d]/40 underline-offset-4 hover:decoration-[#0a7d4d]"
          >
            Read Dimitri&apos;s story
          </Link>
        </p>
        <div className="mt-12">
          <PressFeatures heading="h2" />
        </div>
      </section>
    </SiteShell>
  );
}
