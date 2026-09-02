"use client";

import { Mail, MapPin, Phone, ArrowUpRight, Leaf, Menu, X } from "lucide-react";
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
      "A micro creamery serving small-batch Greek frozen yogurt and gelato with real, simple ingredients — the sweetest side of the Lyfe family.",
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
  { value: "100%", label: "Clean Ingredients" },
  { value: "CT", label: "Rooted Locally" },
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
  const [visible, setVisible] = useState(true);

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
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <main className="min-h-screen text-[#0a1f16]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-[#0a1f16]/8 bg-[#f7faf5]/85 backdrop-blur-md">
        <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <a
            href="#top"
            className="font-display text-lg font-extrabold tracking-tight flex items-center gap-2"
            onClick={() => setMenuOpen(false)}
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0f9d63] text-white">
              <Leaf size={15} />
            </span>
            Lyfe
          </a>
          <div className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#0a1f16]/65 hover:text-[#0f9d63] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="rounded-full bg-[#0a1f16] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#0f9d63] transition-colors"
            >
              Get in Touch
            </a>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#0a1f16]/15 text-[#0a1f16] md:hidden"
              aria-expanded={menuOpen}
              aria-controls="hub-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>

      {menuOpen ? (
        <div className="md:hidden">
          <button
            type="button"
            className="fixed inset-0 z-40 bg-[#06301f]/40"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
          <div
            id="hub-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed inset-y-0 right-0 z-40 flex w-[min(20rem,88vw)] flex-col bg-[#f7faf5] px-6 pt-24 pb-8 shadow-[-16px_0_48px_-24px_rgba(6,48,31,0.35)]"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl px-4 py-3 text-lg font-semibold text-[#0a1f16] hover:bg-[#0f9d63]/10 hover:text-[#0f9d63]"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              className="mt-6 rounded-full bg-[#0a1f16] px-6 py-3 text-center text-sm font-semibold text-white hover:bg-[#0f9d63]"
              onClick={() => setMenuOpen(false)}
            >
              Get in Touch
            </a>
          </div>
        </div>
      ) : null}

      {/* Hero */}
      <section id="top">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-20 md:pt-32 md:pb-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0f9d63]/30 bg-[#0f9d63]/8 px-4 py-1.5 text-sm font-semibold text-[#0a7d4d] mb-8">
            <Leaf size={15} />
            Connecticut&apos;s health-forward restaurant group
          </div>
          <h1 className="font-display font-extrabold tracking-tight leading-[0.92] text-[clamp(3rem,9.5vw,8rem)]">
            Bringing good
            <br />
            food to <span className="text-[#0f9d63]">lyfe.</span>
          </h1>
          <div className="mt-10 flex flex-col md:flex-row md:items-center gap-7 md:gap-10">
            <p className="max-w-xl text-lg md:text-xl leading-relaxed text-[#0a1f16]/65 text-pretty">
              We build a family of bold, clean-eating brands — from craft pizza
              to organic kitchens — united by one belief: food should make your
              life better, and the planet too.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#brands"
                className="group inline-flex items-center gap-2 rounded-full bg-[#0f9d63] px-7 py-4 text-sm font-bold text-white hover:bg-[#0a7d4d] transition-colors"
              >
                Explore Our Brands
                <ArrowUpRight
                  size={17}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
              <a
                href="#about"
                className="rounded-full border-2 border-[#0a1f16]/15 px-7 py-4 text-sm font-bold hover:border-[#0f9d63] hover:text-[#0f9d63] transition-colors"
              >
                Our Story
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="border-y border-[#0a1f16]/8 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#0a1f16]/8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="py-10 sm:py-14 sm:px-10 first:sm:pl-0">
                <p className="font-display text-5xl md:text-6xl font-extrabold tracking-tight text-[#0f9d63]">
                  {s.value}
                </p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-[#0a1f16]/55">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Brands */}
      <section id="brands">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#0f9d63] mb-3">
                  The Family
                </p>
                <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight">
                  Five brands,
                  <br />
                  one belief.
                </h2>
              </div>
              <p className="max-w-xs text-base text-[#0a1f16]/60 text-pretty">
                Each concept stands on its own — but they all start with cleaner
                ingredients and real hospitality.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {brands.map((brand, i) => (
              <Reveal key={brand.name} delay={(i % 3) * 80}>
                <a
                  href={brand.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-3xl border border-[#0a1f16]/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0f9d63] hover:shadow-[0_24px_48px_-24px_rgba(15,157,99,0.4)]"
                >
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-display text-sm font-bold text-[#0a1f16]/30">
                      0{i + 1}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f0f6ee] text-[#0a1f16]/40 transition-colors group-hover:bg-[#0f9d63] group-hover:text-white">
                      <ArrowUpRight
                        size={17}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </div>
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={200}
                    height={100}
                    className="h-14 w-auto object-contain object-left mb-7"
                  />
                  <h3 className="font-display text-2xl font-bold tracking-tight mb-1.5">
                    {brand.name}
                  </h3>
                  <p className="text-sm font-bold uppercase tracking-wide text-[#0f9d63] mb-4">
                    {brand.tagline}
                  </p>
                  <p className="text-[15px] leading-relaxed text-[#0a1f16]/60 text-pretty">
                    {brand.description}
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About — bold dark-green statement section */}
      <section id="about" className="bg-[#06301f] text-[#eaf3ec]">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-36">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16">
            <Reveal className="md:col-span-5">
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-[#16c47f] mb-5">
                <Leaf size={16} />
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
                <p className="text-pretty text-lg md:text-xl font-sans font-normal text-[#eaf3ec]/70">
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

      {/* Leadership */}
      <section id="leadership" className="bg-white border-b border-[#0a1f16]/8">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#0f9d63] mb-3">
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
                <p className="text-sm font-bold uppercase tracking-wide text-[#0f9d63] mb-8">
                  President, Lyfe Hospitality
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-[#0a1f16]/70 text-pretty">
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
      <section id="contact">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#0f9d63] mb-3">
              Say Hello
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight mb-14">
              Let&apos;s build something
              <br />
              <span className="text-[#0f9d63]">delicious.</span>
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-5">
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
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0f9d63]/10 text-[#0f9d63] mb-6 transition-colors group-hover:bg-[#0f9d63] group-hover:text-white">
                    <Icon size={20} />
                  </span>
                  <p className="text-sm font-semibold uppercase tracking-wide text-[#0a1f16]/45 mb-1">
                    {c.label}
                  </p>
                  <p className="font-display text-xl font-bold">{c.value}</p>
                </>
              );
              return (
                <Reveal key={c.label} delay={i * 80}>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="group flex h-full flex-col rounded-3xl border border-[#0a1f16]/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0f9d63] hover:shadow-[0_24px_48px_-24px_rgba(15,157,99,0.4)]"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="group flex h-full flex-col rounded-3xl border border-[#0a1f16]/10 bg-white p-8">
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
      <footer className="bg-[#06301f] text-[#eaf3ec]">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-display text-xl font-extrabold tracking-tight flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0f9d63] text-white">
              <Leaf size={15} />
            </span>
            Lyfe Hospitality
          </p>
          <p className="text-sm font-medium text-[#eaf3ec]/55">
            &copy; {new Date().getFullYear()} Lyfe Hospitality · Norwalk, CT
          </p>
        </div>
      </footer>
    </main>
  );
}
