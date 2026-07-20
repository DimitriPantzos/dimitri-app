"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/*
 * The House of Lyfe — a maison site.
 * Five beats: Arrival → The Houses → The Standard → The Founder → Enquiries.
 * No cards, no logos: the houses are an index that floods with each
 * house's signature color. Frames are photo-ready for real photography.
 */

const houses = [
  {
    name: "Pizza Lyfe",
    href: "https://pizzalyfe.com",
    discipline: "Craft Pizzeria",
    line: "Comfort food and conscious eating on the same plate.",
    flood: "#b33a24",
    ink: "#f3ece0",
  },
  {
    name: "Lyfe Cafe",
    href: "https://lyfe.cafe",
    discipline: "All-Day Cafe · Westport",
    line: "Bowls, smoothies, and coffee — fuel for everyday lyfe.",
    flood: "#6b4a2b",
    ink: "#f1e8da",
  },
  {
    name: "Organika Kitchen",
    href: "https://organikact.com",
    discipline: "Organic Kitchen & Juicery",
    line: "Plant-powered and organic to the core.",
    flood: "#2e5d3c",
    ink: "#eef3e4",
  },
  {
    name: "Quattro Pazzi",
    href: "https://quattropazzi.com",
    discipline: "Italian Trattoria · Fairfield",
    line: "Time-honored recipes. One unforgettable table.",
    flood: "#5c2230",
    ink: "#f3e9e4",
  },
  {
    name: "Sweet Lyfe",
    href: "https://sweetlyfe.app",
    discipline: "Micro Creamery",
    line: "Small-batch ice cream with real, simple ingredients.",
    flood: "#e9c8cf",
    ink: "#3a1f26",
  },
];

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Seal() {
  return (
    <a href="#houses" aria-label="Scroll to the houses" className="group relative block h-32 w-32">
      <svg viewBox="0 0 160 160" className="seal-spin h-full w-full">
        <defs>
          <path
            id="seal-circle"
            d="M80,80 m-62,0 a62,62 0 1,1 124,0 a62,62 0 1,1 -124,0"
          />
        </defs>
        <text className="font-display fill-[var(--bone)]/70 text-[11.5px] uppercase" style={{ letterSpacing: "0.32em" }}>
          <textPath href="#seal-circle">
            Lyfe Hospitality · Connecticut · Est. Fairfield County ·
          </textPath>
        </text>
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-[var(--bone)]/80 transition-transform duration-500 group-hover:translate-y-1">
        ↓
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--char)] text-[var(--bone)]">
      {/* Fixed maison header — blend-difference so it inverts over light sections */}
      <header className="fixed inset-x-0 top-0 z-50 mix-blend-difference">
        <nav className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-6 md:px-12 text-white">
          <a href="#top" className="font-display text-base tracking-[0.28em] uppercase">
            Lyfe
          </a>
          <div className="flex items-center gap-10">
            <a
              href="#houses"
              className="eyebrow hidden sm:block opacity-70 hover:opacity-100 transition-opacity"
            >
              The Houses
            </a>
            <a
              href="#enquiries"
              className="eyebrow opacity-70 hover:opacity-100 transition-opacity"
            >
              Enquiries
            </a>
          </div>
        </nav>
      </header>

      {/* I. Arrival */}
      <section id="top" className="relative flex min-h-screen flex-col">
        <div className="flex flex-1 flex-col items-center justify-center px-6 pt-24 text-center">
          <p className="eyebrow text-[var(--gold)] mb-12">
            Fairfield County · Connecticut
          </p>
          <h1 className="font-display leading-none tracking-[0.08em] text-[clamp(5rem,21vw,19rem)]">
            LYFE
          </h1>
          <div className="mt-2 flex w-full max-w-[46rem] items-center gap-6 px-4">
            <span className="h-px flex-1 bg-[var(--line-dark)]" />
            <p className="font-display text-sm md:text-base tracking-[0.55em] uppercase text-[var(--bone)]/80 pl-2">
              Hospitality
            </p>
            <span className="h-px flex-1 bg-[var(--line-dark)]" />
          </div>
          <p className="mt-14 max-w-md text-base md:text-lg leading-relaxed text-[var(--bone)]/60 text-balance">
            A Connecticut house of restaurants devoted to eating well.
          </p>
        </div>
        <div className="flex justify-center pb-12">
          <Seal />
        </div>
      </section>

      {/* II. The Houses — typographic index, color floods */}
      <section id="houses" className="border-t border-[var(--line-dark)]">
        <div className="mx-auto max-w-[1500px] px-6 md:px-12 pt-24 md:pt-32 pb-10 flex items-end justify-between">
          <Reveal>
            <p className="eyebrow text-[var(--gold)] mb-6">The Houses</p>
            <h2 className="font-display text-3xl md:text-5xl tracking-wide">
              Five houses. One standard.
            </h2>
          </Reveal>
          <p className="eyebrow hidden md:block text-[var(--bone)]/40 pb-2">
            01 — 05
          </p>
        </div>

        <div className="border-t border-[var(--line-dark)]">
          {houses.map((house, i) => (
            <a
              key={house.name}
              href={house.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden border-b border-[var(--line-dark)] transition-colors duration-500"
              style={
                {
                  "--flood": house.flood,
                  "--ink": house.ink,
                } as React.CSSProperties
              }
            >
              {/* flood layer */}
              <span
                aria-hidden
                className="absolute inset-0 origin-bottom scale-y-0 bg-[var(--flood)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100 group-focus-visible:scale-y-100"
              />
              <div className="relative mx-auto flex max-w-[1500px] flex-col gap-3 px-6 py-10 md:flex-row md:items-baseline md:gap-10 md:px-12 md:py-14">
                <span
                  className="font-display text-sm md:text-base italic transition-colors duration-500 group-hover:text-[var(--ink)]"
                  style={{ color: house.flood }}
                >
                  0{i + 1}
                </span>
                <h3 className="font-display text-[clamp(2.4rem,6.5vw,5.5rem)] leading-[1.05] tracking-wide transition-colors duration-500 group-hover:text-[var(--ink)]">
                  {house.name}
                </h3>
                <div className="md:ml-auto md:text-right">
                  <p className="eyebrow text-[var(--bone)]/45 transition-colors duration-500 group-hover:text-[var(--ink)]/75">
                    {house.discipline}
                  </p>
                  <p className="mt-2 hidden max-w-xs text-sm leading-relaxed text-[var(--bone)]/0 transition-colors duration-500 group-hover:text-[var(--ink)]/90 md:block">
                    {house.line}
                  </p>
                </div>
                <ArrowUpRight
                  size={22}
                  className="absolute right-6 top-10 text-[var(--bone)]/25 transition-all duration-500 group-hover:text-[var(--ink)] group-hover:translate-x-1 group-hover:-translate-y-1 md:right-12 md:top-14"
                />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* III. The Standard — light interlude */}
      <section className="bg-[var(--bone)] text-[var(--char)]">
        <div className="mx-auto max-w-[1500px] px-6 md:px-12 py-28 md:py-44">
          <Reveal>
            <p className="eyebrow text-[var(--gold)] mb-10">The Standard</p>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-display max-w-5xl text-[clamp(2rem,5vw,4.5rem)] leading-[1.12] tracking-wide text-balance">
              Eating well is not a trend here.
              <br />
              It is the house standard.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-12 max-w-xl text-base md:text-lg leading-relaxed text-[var(--char)]/60 text-pretty">
              Five kitchens, one conviction — that the food people love can
              love them back. Cleaner ingredients, rooms our neighborhoods are
              proud of, and hospitality with intent.
            </p>
          </Reveal>
        </div>
      </section>

      {/* IV. The Founder */}
      <section className="border-t border-[var(--line-dark)]">
        <div className="mx-auto max-w-[1500px] px-6 md:px-12 py-24 md:py-36 grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="eyebrow text-[var(--gold)] mb-8">The Founder</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight tracking-wide">
              Dimitrios
              <br />
              Pantzos
            </h2>
            <p className="eyebrow mt-6 text-[var(--bone)]/45">President</p>
          </Reveal>
          <div className="md:col-span-7 md:col-start-6">
            <Reveal delay={100}>
              <p className="font-display text-xl md:text-2xl leading-relaxed tracking-wide text-[var(--bone)]/85 text-pretty">
                The operator who helped carry Dr. Praeger&apos;s, Daring, and
                Violife from regional labels to national foodservice staples —
                across QSR chains, K-12 programs, and hospitality operators.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-[var(--bone)]/55 text-pretty">
                Lyfe Hospitality brings that discipline home: building
                Connecticut&apos;s most health-forward restaurant group, one
                house at a time.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* V. Enquiries */}
      <section id="enquiries" className="border-t border-[var(--line-dark)]">
        <div className="mx-auto max-w-[1500px] px-6 md:px-12 py-24 md:py-36">
          <Reveal>
            <p className="eyebrow text-[var(--gold)] mb-10">Enquiries</p>
          </Reveal>
          <div className="grid gap-y-10 md:grid-cols-3">
            {[
              { label: "Correspondence", value: "me@dimitri.app", href: "mailto:me@dimitri.app" },
              { label: "Telephone", value: "203 551 1003", href: "tel:+12035511003" },
              { label: "Address", value: "Norwalk, Connecticut", href: null },
            ].map((c, i) => (
              <Reveal key={c.label} delay={i * 100}>
                <div className="md:pr-10">
                  <p className="eyebrow text-[var(--bone)]/40 mb-4">{c.label}</p>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="font-display text-2xl md:text-3xl tracking-wide hover:text-[var(--gold)] transition-colors"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p className="font-display text-2xl md:text-3xl tracking-wide">
                      {c.value}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Colophon */}
        <div className="border-t border-[var(--line-dark)]">
          <div className="mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-4 px-6 py-10 md:px-12 sm:flex-row">
            <p className="font-display tracking-[0.28em] uppercase text-sm">
              Lyfe <span className="text-[var(--gold)]">Hospitality</span>
            </p>
            <p className="eyebrow text-[var(--bone)]/35">
              &copy; {new Date().getFullYear()} · Norwalk, Connecticut
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
