"use client";

import { ArrowUpRight, ArrowDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const collection = [
  {
    name: "Pizza Lyfe",
    href: "https://pizzalyfe.com",
    logo: "/logos/pizza-lyfe.png",
    tagline: "Pizza, Reimagined",
    description:
      "Craft pizza made with clean, better-for-you ingredients — proving that comfort food and conscious eating belong on the same plate.",
    tint: "#1d4232",
    kind: "Craft Pizzeria",
  },
  {
    name: "Lyfe Cafe",
    href: "https://lyfe.cafe",
    logo: "/logos/lyfe-cafe.png",
    tagline: "Eat Well, Live Well",
    description:
      "A neighborhood cafe serving health-forward bowls, smoothies, and coffee — fuel for everyday lyfe, made fresh daily.",
    tint: "#2a2118",
    kind: "All-Day Cafe",
  },
  {
    name: "Organika Kitchen",
    href: "https://organikact.com",
    logo: "/logos/organika.png",
    tagline: "Organic to the Core",
    description:
      "An organic, plant-powered kitchen and juicery rooted in Connecticut — wholesome food that tastes as good as it makes you feel.",
    tint: "#163527",
    kind: "Organic Kitchen & Juicery",
  },
  {
    name: "Quattro Pazzi",
    href: "https://quattropazzi.com",
    logo: "/logos/quattro-pazzi.png",
    tagline: "Classic Italian Soul",
    description:
      "A beloved Italian trattoria serving time-honored recipes with warm hospitality — four crazy guys, one unforgettable table.",
    tint: "#3a2b1c",
    kind: "Italian Trattoria",
  },
  {
    name: "Sweet Lyfe",
    href: "https://sweetlyfe.app",
    logo: "/logos/sweet-lyfe.png",
    tagline: "Small-Batch Happiness",
    description:
      "A micro creamery churning small-batch ice cream with real, simple ingredients — the sweetest side of the Lyfe family.",
    tint: "#24322a",
    kind: "Micro Creamery",
  },
];

const navLinks = [
  { label: "The Collection", href: "#collection" },
  { label: "Ethos", href: "#ethos" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
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
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
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

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--background)]/85 backdrop-blur-md">
        <nav className="max-w-[1400px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <a href="#top" className="font-display text-lg tracking-tight">
            Lyfe Hospitality
          </a>
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="eyebrow text-[var(--foreground)]/60 hover:text-[var(--brass)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="eyebrow border-b border-[var(--brass)] pb-1 text-[var(--brass)] hover:text-[var(--foreground)] hover:border-[var(--foreground)] transition-colors"
          >
            Enquire
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="border-b border-[var(--line)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-24 pb-20 md:pt-40 md:pb-32">
          <p className="eyebrow text-[var(--brass)] mb-10">
            Connecticut · Est. Hospitality Group
          </p>
          <h1 className="font-display font-light tracking-[-0.02em] leading-[1.02] text-[clamp(2.9rem,7vw,6.75rem)] max-w-[16ch] text-balance">
            A collection of restaurants for the way we want to{" "}
            <span className="italic text-[var(--forest)]">live.</span>
          </h1>
          <div className="mt-14 grid md:grid-cols-2 gap-10 md:gap-20 items-end">
            <p className="max-w-lg text-lg md:text-xl leading-relaxed text-muted text-pretty">
              Lyfe Hospitality is a Connecticut hospitality group building a
              family of singular dining concepts — each rooted in cleaner
              ingredients, genuine warmth, and a belief that eating well should
              never be a compromise.
            </p>
            <div className="flex items-center gap-10 md:justify-end">
              <a
                href="#collection"
                className="group inline-flex items-center gap-3 font-display text-lg italic hover:text-[var(--brass)] transition-colors"
              >
                Explore the collection
                <ArrowDown
                  size={18}
                  className="group-hover:translate-y-1 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Scale statement — dark, editorial */}
      <section className="bg-[var(--forest)] text-[var(--ivory)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
          <Reveal>
            <p className="eyebrow text-[var(--brass)] mb-10">By the Numbers</p>
            <h2 className="font-display font-light text-3xl md:text-5xl leading-[1.15] max-w-4xl tracking-[-0.01em] text-balance">
              Five distinct concepts. One of Connecticut&apos;s most ambitious
              independent hospitality groups — and only getting started.
            </h2>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 border-t border-white/15">
            {[
              { value: "05", label: "Dining Concepts" },
              { value: "CT", label: "Fairfield County Roots" },
              { value: "∞", label: "Belief in Better Food" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <div className="py-10 sm:pr-10 border-b sm:border-b-0 sm:border-r border-white/15 last:border-r-0">
                  <p className="font-display font-light text-6xl md:text-7xl text-[var(--brass)]">
                    {s.value}
                  </p>
                  <p className="eyebrow text-white/55 mt-4">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Collection — full-width editorial features, photo-ready */}
      <section id="collection" className="border-b border-[var(--line)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-20 md:pt-32 pb-8">
          <Reveal>
            <div className="flex items-end justify-between border-b border-[var(--line)] pb-8">
              <div>
                <p className="eyebrow text-[var(--brass)] mb-5">The Collection</p>
                <h2 className="font-display font-light text-4xl md:text-6xl tracking-[-0.02em]">
                  Five houses,
                  <br />
                  one philosophy.
                </h2>
              </div>
              <p className="hidden md:block eyebrow text-muted">01 — 05</p>
            </div>
          </Reveal>
        </div>

        <div>
          {collection.map((brand, i) => (
            <Reveal key={brand.name}>
              <a
                href={brand.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border-b border-[var(--line)]"
              >
                <div
                  className={`max-w-[1400px] mx-auto px-6 md:px-10 py-12 md:py-20 grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                    i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Image frame — photo-ready; shows the mark until real photography lands */}
                  <div
                    className="relative aspect-[4/3] w-full overflow-hidden"
                    style={{ backgroundColor: brand.tint }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center p-12">
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        width={420}
                        height={220}
                        className="max-h-28 w-auto object-contain opacity-95 transition-transform duration-700 group-hover:scale-[1.04] brightness-0 invert"
                      />
                    </div>
                    <span className="absolute left-6 top-6 font-display text-sm italic text-white/55">
                      0{i + 1}
                    </span>
                    <span className="absolute right-6 bottom-6 eyebrow text-white/45">
                      {brand.kind}
                    </span>
                  </div>

                  {/* Copy */}
                  <div className="md:px-6">
                    <p className="eyebrow text-[var(--brass)] mb-5">
                      {brand.tagline}
                    </p>
                    <h3 className="font-display font-light text-4xl md:text-6xl tracking-[-0.02em] leading-[1] mb-6">
                      {brand.name}
                    </h3>
                    <p className="max-w-md text-base md:text-lg leading-relaxed text-muted text-pretty mb-8">
                      {brand.description}
                    </p>
                    <span className="inline-flex items-center gap-2 font-display text-lg italic border-b border-[var(--line)] pb-1 group-hover:border-[var(--brass)] group-hover:text-[var(--brass)] transition-colors">
                      Visit
                      <ArrowUpRight
                        size={17}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Ethos */}
      <section id="ethos" className="border-b border-[var(--line)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-36 grid md:grid-cols-12 gap-10 md:gap-16">
          <Reveal className="md:col-span-4">
            <p className="eyebrow text-[var(--brass)] mb-6">Our Ethos</p>
            <h2 className="font-display font-light text-4xl md:text-6xl tracking-[-0.02em] leading-[1.02]">
              Eating well,
              <span className="italic text-[var(--forest)]"> without compromise.</span>
            </h2>
          </Reveal>
          <div className="md:col-span-8 md:pl-10 space-y-8 text-xl md:text-2xl leading-relaxed font-display font-light tracking-[-0.01em]">
            <Reveal delay={80}>
              <p className="text-pretty">
                Every house in our collection begins with the same question: how
                do we make the food people already love better — for the people
                who eat it, and the place we all share?
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-pretty text-lg md:text-xl font-sans font-normal text-muted leading-relaxed">
                From sourcing cleaner ingredients to designing rooms our
                communities are proud of, we build restaurants that nourish —
                our guests, our teams, and the Connecticut neighborhoods we call
                home. It is hospitality with intent, and it is only the
                beginning.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="border-b border-[var(--line)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-36">
          <Reveal>
            <p className="eyebrow text-[var(--brass)] mb-12">Leadership</p>
          </Reveal>
          <Reveal delay={80}>
            <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
              <div className="md:col-span-5">
                <h3 className="font-display font-light text-5xl md:text-7xl tracking-[-0.02em] leading-[0.95]">
                  Dimitrios
                  <br />
                  Pantzos
                </h3>
                <p className="eyebrow text-[var(--brass)] mt-6">
                  Founder & President
                </p>
              </div>
              <div className="md:col-span-7 md:pt-3">
                <p className="text-lg md:text-xl leading-relaxed text-muted text-pretty">
                  An architect of national foodservice growth for plant-based
                  brands, Dimitrios led strategic expansion for Dr.
                  Praeger&apos;s, Daring, and Violife across QSR chains, K-12
                  programs, and hospitality operators — specializing in
                  distribution architecture, commercial systems, and operator
                  adoption. Having turned regional products into mainstream
                  foodservice staples, he now channels that same discipline into
                  Lyfe Hospitality: building Connecticut&apos;s most
                  health-forward restaurant group, one house at a time.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[var(--forest)] text-[var(--ivory)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-36">
          <Reveal>
            <p className="eyebrow text-[var(--brass)] mb-8">Enquiries</p>
            <h2 className="font-display font-light text-4xl md:text-7xl tracking-[-0.02em] leading-[1] max-w-3xl text-balance">
              Partnerships, press &amp; new ventures.
            </h2>
          </Reveal>
          <div className="mt-16 grid sm:grid-cols-3 border-t border-white/15">
            {[
              { label: "Email", value: "me@dimitri.app", href: "mailto:me@dimitri.app" },
              { label: "Telephone", value: "203 551 1003", href: "tel:+12035511003" },
              { label: "Location", value: "Norwalk, Connecticut", href: null },
            ].map((c, i) => (
              <Reveal key={c.label} delay={i * 100}>
                <div className="py-10 sm:pr-10 border-b sm:border-b-0 sm:border-r border-white/15 last:border-r-0">
                  <p className="eyebrow text-white/50 mb-4">{c.label}</p>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="font-display font-light text-2xl md:text-3xl hover:text-[var(--brass)] transition-colors"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p className="font-display font-light text-2xl md:text-3xl">
                      {c.value}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-display text-lg tracking-tight">Lyfe Hospitality</p>
          <p className="eyebrow text-muted">
            &copy; {new Date().getFullYear()} — Norwalk, Connecticut
          </p>
        </div>
      </footer>
    </main>
  );
}
