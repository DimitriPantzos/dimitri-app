"use client";

import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const brands = [
  {
    name: "Pizza Lyfe",
    href: "https://pizzalyfe.com",
    logo: "/logos/pizza-lyfe.png",
    tagline: "Pizza, Reimagined",
    description:
      "Craft pizza made with clean, better-for-you ingredients — proving that comfort food and conscious eating belong on the same plate.",
  },
  {
    name: "Lyfe Cafe",
    href: "https://lyfe.cafe",
    logo: "/logos/lyfe-cafe.png",
    tagline: "Eat Well, Live Well",
    description:
      "A neighborhood cafe serving health-forward bowls, smoothies, and coffee — fuel for everyday lyfe, made fresh daily.",
  },
  {
    name: "Organika Kitchen",
    href: "https://organikact.com",
    logo: "/logos/organika.png",
    tagline: "Organic to the Core",
    description:
      "Organic, plant-powered kitchen and juicery rooted in Connecticut — wholesome food that tastes as good as it makes you feel.",
  },
  {
    name: "Quattro Pazzi",
    href: "https://quattropazzi.com",
    logo: "/logos/quattro-pazzi.png",
    tagline: "Classic Italian Soul",
    description:
      "A beloved Italian trattoria serving time-honored recipes with warm hospitality — four crazy guys, one unforgettable table.",
  },
  {
    name: "Sweet Lyfe",
    href: "https://sweetlyfe.app",
    logo: "/logos/sweet-lyfe.png",
    tagline: "Small-Batch Happiness",
    description:
      "A micro creamery churning small-batch ice cream with real, simple ingredients — the sweetest side of the Lyfe family.",
  },
];

const navLinks = [
  { label: "Brands", href: "#brands" },
  { label: "About", href: "#about" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: "05", label: "Distinct Concepts" },
  { value: "CT", label: "Rooted in Connecticut" },
  { value: "1", label: "Belief: Food Should Heal" },
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
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
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
    <main className="relative z-[2] min-h-screen text-[#1d1b17]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-[#1d1b17]/10 bg-[#f3eee1]/80 backdrop-blur-md">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="#top"
            className="font-display text-base md:text-lg tracking-tight"
          >
            Lyfe <span className="italic text-gradient">Hospitality</span>
          </a>
          <div className="hidden sm:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.2em] text-[#1d1b17]/60 hover:text-[#e8402a] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full bg-[#1d1b17] px-5 py-2 text-[11px] uppercase tracking-[0.2em] text-[#f3eee1] hover:bg-[#e8402a] transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 md:pt-36 md:pb-24">
          <p
            className="hero-line text-[11px] uppercase tracking-[0.4em] text-[#1d1b17]/50 mb-8"
            style={{ animationDelay: "0.05s" }}
          >
            Connecticut&nbsp;/&nbsp;Restaurant Group&nbsp;/&nbsp;Est. for Good
          </p>
          <h1 className="font-display font-light leading-[0.95] tracking-tight text-[clamp(3rem,11vw,9rem)]">
            <span
              className="hero-line block"
              style={{ animationDelay: "0.15s" }}
            >
              Bringing
            </span>
            <span
              className="hero-line block"
              style={{ animationDelay: "0.3s" }}
            >
              good food
            </span>
            <span
              className="hero-line block italic"
              style={{ animationDelay: "0.45s" }}
            >
              to <span className="text-gradient">lyfe.</span>
            </span>
          </h1>
          <div
            className="hero-line mt-10 flex flex-col md:flex-row md:items-end gap-8 md:gap-16"
            style={{ animationDelay: "0.6s" }}
          >
            <p className="max-w-md text-base leading-relaxed text-[#1d1b17]/70 text-pretty">
              A Connecticut-based restaurant group building a family of
              health-forward brands — from craft pizza to organic kitchens —
              united by one belief: food should make your life better.
            </p>
            <a
              href="#brands"
              className="group inline-flex shrink-0 items-center gap-3 rounded-full border border-[#1d1b17] px-7 py-3.5 text-[11px] uppercase tracking-[0.25em] hover:bg-[#1d1b17] hover:text-[#f3eee1] transition-colors"
            >
              Explore Our Brands
              <ArrowUpRight
                size={15}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </div>
        </div>

        {/* Brand-name marquee */}
        <div className="group/marquee border-y border-[#1d1b17]/10 py-5 overflow-hidden">
          <div className="animate-scroll flex w-max items-center gap-12 whitespace-nowrap">
            {[...brands, ...brands].map((b, i) => (
              <span
                key={i}
                className="font-display text-2xl md:text-3xl italic text-[#1d1b17]/35 flex items-center gap-12"
              >
                {b.name}
                <span className="text-[#e8402a] not-italic text-base">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="border-b border-[#1d1b17]/10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#1d1b17]/10">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="py-10 sm:py-12 sm:px-10 first:sm:pl-0">
                <p className="font-display text-5xl md:text-6xl font-light text-gradient">
                  {s.value}
                </p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-[#1d1b17]/55">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Brands */}
      <section id="brands" className="border-b border-[#1d1b17]/10">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <Reveal>
            <div className="flex items-baseline justify-between border-b border-[#1d1b17]/15 pb-6 mb-12">
              <h2 className="font-display text-3xl md:text-5xl font-light tracking-tight">
                Our Brands
              </h2>
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#1d1b17]/45">
                A Family of Five
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {brands.map((brand, i) => (
              <Reveal
                key={brand.name}
                delay={(i % 2) * 100}
                className={
                  i === brands.length - 1 && brands.length % 2 === 1
                    ? "md:col-span-2"
                    : ""
                }
              >
                <a
                  href={brand.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#1d1b17]/12 bg-[#faf6ec]/70 p-9 md:p-11 shadow-[0_1px_0_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-1 hover:border-[#e8402a]/40 hover:shadow-[0_24px_50px_-20px_rgba(232,64,42,0.35)]"
                >
                  {/* hover glow */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#e8402a]/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative flex items-start justify-between mb-8">
                    <span className="font-display text-sm italic text-[#1d1b17]/35">
                      0{i + 1}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1d1b17]/15 text-[#1d1b17]/40 transition-all duration-300 group-hover:border-[#e8402a] group-hover:bg-[#e8402a] group-hover:text-white">
                      <ArrowUpRight
                        size={16}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </div>
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={200}
                    height={100}
                    className="relative h-16 w-auto object-contain object-left mb-8 transition-transform duration-500 group-hover:scale-105 group-hover:origin-left"
                  />
                  <h3 className="font-display text-2xl tracking-tight mb-1">
                    {brand.name}
                  </h3>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#e8402a] mb-4">
                    {brand.tagline}
                  </p>
                  <p className="text-sm leading-relaxed text-[#1d1b17]/65 text-pretty">
                    {brand.description}
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-b border-[#1d1b17]/10">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-12 gap-10 md:gap-12">
          <Reveal className="md:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#e8402a] mb-5">
              Our Philosophy
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-light tracking-tight leading-[1.05]">
              Why
              <span className="italic text-gradient"> &ldquo;Lyfe&rdquo;</span>?
            </h2>
            <div className="mt-8 h-1 w-20 rounded-full bg-gradient-to-r from-[#e8402a] to-[#e8a02a]" />
          </Reveal>
          <div className="md:col-span-7 space-y-7 text-lg md:text-xl leading-relaxed text-[#1d1b17]/75 font-display font-light">
            <Reveal delay={100}>
              <p className="text-pretty">
                Because we believe eating well shouldn&apos;t feel like a
                compromise. Every Lyfe Hospitality concept starts with the same
                question: how do we make the food people already love, better
                for the lives they want to live?
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-pretty">
                From sourcing cleaner ingredients to building kitchens our
                communities are proud of, we operate restaurants that
                nourish — our guests, our teams, and the Connecticut
                neighborhoods we call home.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="border-b border-[#1d1b17]/10">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-32">
          <Reveal>
            <div className="flex items-baseline justify-between border-b border-[#1d1b17]/15 pb-6 mb-14">
              <h2 className="font-display text-3xl md:text-5xl font-light tracking-tight">
                Leadership
              </h2>
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#1d1b17]/45">
                Founder
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
              <div className="md:col-span-4">
                <div className="flex h-48 w-48 items-center justify-center rounded-full bg-gradient-to-br from-[#e8402a] to-[#e8a02a] text-[#faf6ec]">
                  <span className="font-display text-6xl font-light">DP</span>
                </div>
              </div>
              <div className="md:col-span-8 max-w-2xl">
                <h3 className="font-display text-4xl md:text-5xl font-light tracking-tight mb-2">
                  Dimitrios Pantzos
                </h3>
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#e8402a] mb-8">
                  President, Lyfe Hospitality
                </p>
                <p className="text-base md:text-lg leading-relaxed text-[#1d1b17]/70 text-pretty">
                  Architect of national foodservice growth for plant-based
                  brands. Led strategic expansion for Dr. Praeger&apos;s,
                  Daring, and Violife across QSR chains, K-12 programs, and
                  hospitality operators. Specialized in distribution
                  architecture, commercial systems, and operator adoption —
                  transforming regional products into mainstream foodservice
                  staples, and now building Connecticut&apos;s most
                  health-forward restaurant group.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-b border-[#1d1b17]/10">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-32">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#e8402a] mb-5">
              Say Hello
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-light tracking-tight mb-14">
              Let&apos;s build something
              <span className="italic text-gradient"> delicious.</span>
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: Mail,
                label: "Email",
                value: "me@dimitri.app",
                href: "mailto:me@dimitri.app",
              },
              {
                icon: Phone,
                label: "Phone",
                value: "203-551-1003",
                href: "tel:+12035511003",
              },
              {
                icon: MapPin,
                label: "Location",
                value: "Norwalk, Connecticut",
                href: null,
              },
            ].map((c, i) => {
              const Icon = c.icon;
              const inner = (
                <>
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e8402a]/10 text-[#e8402a] mb-6 transition-colors group-hover:bg-[#e8402a] group-hover:text-white">
                    <Icon size={18} />
                  </span>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#1d1b17]/45 mb-1">
                    {c.label}
                  </p>
                  <p className="font-display text-xl">{c.value}</p>
                </>
              );
              return (
                <Reveal key={c.label} delay={i * 100}>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="group flex h-full flex-col rounded-2xl border border-[#1d1b17]/12 bg-[#faf6ec]/70 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#e8402a]/40 hover:shadow-[0_20px_40px_-22px_rgba(232,64,42,0.35)]"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="group flex h-full flex-col rounded-2xl border border-[#1d1b17]/12 bg-[#faf6ec]/70 p-8">
                      {inner}
                    </div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-display text-lg">
            Lyfe <span className="italic text-gradient">Hospitality</span>
          </p>
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#1d1b17]/40">
            &copy; {new Date().getFullYear()} Lyfe Hospitality · Norwalk, CT
          </p>
        </div>
      </footer>
    </main>
  );
}
