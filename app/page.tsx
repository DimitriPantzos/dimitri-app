import { ArrowUpRight, Leaf } from "lucide-react";
import Link from "next/link";
import { BrandGrid } from "@/components/brand-grid";
import { ContactGrid } from "@/components/contact-grid";
import { PressFeatures } from "@/components/press-features";
import { Reveal } from "@/components/reveal";
import { SiteShell } from "@/components/site-shell";
import { stats } from "@/lib/site";

export default function Home() {
  return (
    <SiteShell>
      <section id="top">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-20 md:pt-32 md:pb-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0a7d4d]/30 bg-[#0a7d4d]/8 px-4 py-1.5 text-sm font-semibold text-[#0a7d4d] mb-8">
            <Leaf size={15} aria-hidden="true" />
            Connecticut&apos;s health-forward restaurant group
          </div>
          <h1 className="font-display font-extrabold tracking-tight leading-[0.92] text-[clamp(3rem,9.5vw,8rem)]">
            Bringing good
            <br />
            food to <span className="text-[#0f9d63]">lyfe.</span>
          </h1>
          <div className="mt-10 flex flex-col md:flex-row md:items-center gap-7 md:gap-10">
            <p className="max-w-xl text-lg md:text-xl leading-relaxed text-[#0a1f16]/75 text-pretty">
              We build a family of bold, clean-eating brands — from craft pizza
              to organic kitchens — united by one belief: food should make your
              life better, and the planet too.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#brands"
                className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-[#0a7d4d] px-7 py-4 text-sm font-bold text-white hover:bg-[#06301f] transition-colors"
              >
                Explore Our Brands
                <ArrowUpRight
                  size={17}
                  aria-hidden="true"
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
              <Link
                href="/about"
                className="inline-flex min-h-11 items-center rounded-full border-2 border-[#0a1f16]/15 px-7 py-4 text-sm font-bold hover:border-[#0a7d4d] hover:text-[#0a7d4d] transition-colors"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#0a1f16]/8 bg-white" aria-label="At a glance">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#0a1f16]/8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="py-10 sm:py-14 sm:px-10 first:sm:pl-0">
                <p className="font-display text-5xl md:text-6xl font-extrabold tracking-tight text-[#0f9d63]">
                  {s.value}
                </p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-[#0a1f16]/70">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="brands">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#0a7d4d] mb-3">
                  The Family
                </p>
                <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight">
                  Five brands,
                  <br />
                  one belief.
                </h2>
              </div>
              <p className="max-w-xs text-base text-[#0a1f16]/75 text-pretty">
                Each concept stands on its own — but they all start with cleaner
                ingredients and real hospitality.
              </p>
            </div>
          </Reveal>
          <BrandGrid />
        </div>
      </section>

      <section id="about" className="bg-[#06301f] text-[#eaf3ec]">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-36">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16">
            <Reveal className="md:col-span-5">
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-[#16c47f] mb-5">
                <Leaf size={16} aria-hidden="true" />
                Our Philosophy
              </p>
              <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight leading-[0.95]">
                Why
                <br />
                &ldquo;Lyfe&rdquo;?
              </h2>
            </Reveal>
            <div className="md:col-span-7 space-y-8 text-xl md:text-2xl leading-relaxed font-display font-medium tracking-tight">
              <Reveal delay={80}>
                <p className="text-pretty">
                  Because eating well shouldn&apos;t feel like a compromise.
                  Every concept starts with one question: how do we make the
                  food people already love{" "}
                  <span className="text-[#16c47f]">better</span> — for them, and
                  for the planet?
                </p>
              </Reveal>
              <Reveal delay={160}>
                <p className="text-pretty text-lg md:text-xl font-sans font-normal text-[#eaf3ec]/80">
                  From sourcing cleaner ingredients to building kitchens our
                  communities are proud of, we operate restaurants that
                  nourish — our guests, our teams, and the Connecticut
                  neighborhoods we call home.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section id="leadership" className="bg-white border-b border-[#0a1f16]/8">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#0a7d4d] mb-3">
              Leadership
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight mb-16">
              The founder.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
              <div className="md:col-span-4">
                <div className="flex aspect-square w-full max-w-xs items-center justify-center rounded-3xl bg-[#06301f]">
                  <span className="font-display text-7xl font-extrabold text-[#16c47f]">
                    DP
                  </span>
                </div>
              </div>
              <div className="md:col-span-8">
                <h3 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
                  Dimitrios Pantzos
                </h3>
                <p className="text-sm font-bold uppercase tracking-wide text-[#0a7d4d] mb-8">
                  President, Lyfe Hospitality
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-[#0a1f16]/80 text-pretty">
                  Architect of national foodservice growth for plant-based
                  brands. Led strategic expansion for Dr. Praeger&apos;s,
                  Daring, and Violife across QSR chains, K-12 programs, and
                  hospitality operators. Specialized in distribution
                  architecture, commercial systems, and operator adoption —
                  transforming regional products into mainstream foodservice
                  staples, and now building Connecticut&apos;s most
                  health-forward restaurant group.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/about"
                    className="inline-flex min-h-11 items-center rounded-full bg-[#0a7d4d] px-6 py-3 text-sm font-bold text-white hover:bg-[#06301f] transition-colors"
                  >
                    Read the story
                  </Link>
                  <Link
                    href="/press"
                    className="inline-flex min-h-11 items-center rounded-full border-2 border-[#0a1f16]/15 px-6 py-3 text-sm font-bold hover:border-[#0a7d4d] hover:text-[#0a7d4d] transition-colors"
                  >
                    See the press
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="press" className="border-b border-[#0a1f16]/8">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#0a7d4d] mb-3">
                  Press
                </p>
                <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight">
                  In print.
                </h2>
              </div>
              <Link
                href="/press"
                className="text-sm font-bold text-[#0a7d4d] underline decoration-[#0a7d4d]/40 underline-offset-4 hover:decoration-[#0a7d4d]"
              >
                Open the press page
              </Link>
            </div>
          </Reveal>
          <PressFeatures heading="h3" />
        </div>
      </section>

      <section id="contact">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#0a7d4d] mb-3">
              Say Hello
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight mb-14">
              Let&apos;s build something
              <br />
              <span className="text-[#0f9d63]">delicious.</span>
            </h2>
          </Reveal>
          <ContactGrid />
        </div>
      </section>
    </SiteShell>
  );
}
