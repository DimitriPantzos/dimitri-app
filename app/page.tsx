"use client";

import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ventures = [
  {
    name: "Pizza Lyfe",
    href: "https://pizzalyfe.com",
    logo: "/logos/pizza-lyfe.png",
    tagline: "Pizza, Reimagined",
    description:
      "Craft pizza made with clean, better-for-you ingredients — comfort food and conscious eating on the same plate.",
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
      "Organic, plant-powered kitchen and juicery rooted in Connecticut — wholesome food that tastes as good as it feels.",
  },
  {
    name: "Quattro Pazzi",
    href: "https://quattropazzi.com",
    logo: "/logos/quattro-pazzi.png",
    tagline: "Classic Italian Soul",
    description:
      "A beloved Italian trattoria serving time-honored recipes with warm hospitality — four crazy guys, one table.",
  },
  {
    name: "Sweet Lyfe",
    href: "https://sweetlyfe.app",
    logo: "/logos/sweet-lyfe.png",
    tagline: "Small-Batch Happiness",
    description:
      "A micro creamery churning small-batch ice cream with real, simple ingredients — the sweetest side of Lyfe.",
  },
];

const navLinks = [
  { label: "Ventures", href: "#ventures" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const priorBrands = ["Dr. Praeger's", "Daring", "Violife"];

const stats = [
  { value: "05", label: "Brands Built" },
  { value: "National", label: "Foodservice Scale" },
  { value: "CT", label: "Home Base" },
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
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[#08100c]/70 backdrop-blur-xl">
        <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="#top" className="font-display text-base font-bold tracking-tight">
            Dimitrios <span className="text-[var(--emerald)]">Pantzos</span>
          </a>
          <div className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted hover:text-[var(--foreground)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="rounded-full bg-[var(--emerald)] px-5 py-2.5 text-sm font-semibold text-[#06120c] hover:bg-white transition-colors"
          >
            Get in Touch
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top">
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-20 md:pt-36 md:pb-28">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-sm font-medium text-muted mb-10">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--emerald)] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--emerald)]" />
            </span>
            Founder &amp; Operator — Connecticut
          </div>
          <h1 className="font-display font-extrabold tracking-tight leading-[0.98] text-[clamp(2.75rem,7.5vw,6.5rem)] max-w-4xl text-balance">
            I build health-forward brands that make good food the{" "}
            <span className="text-[var(--emerald)]">easy choice.</span>
          </h1>
          <div className="mt-10 flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
            <p className="max-w-xl text-lg md:text-xl leading-relaxed text-muted text-pretty">
              I&apos;m Dimitrios Pantzos — a founder and operator building a
              family of clean-eating restaurant concepts, and the growth
              architect behind some of the biggest names in plant-based
              foodservice.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#ventures"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--emerald)] px-7 py-4 text-sm font-bold text-[#06120c] hover:bg-white transition-colors"
              >
                View My Work
                <ArrowUpRight
                  size={17}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
              <a
                href="#about"
                className="rounded-full border border-[var(--border)] px-7 py-4 text-sm font-bold hover:border-[var(--emerald)] hover:text-[var(--emerald)] transition-colors"
              >
                About Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility band */}
      <section className="border-y border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-muted shrink-0">
            Previously scaled
          </p>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
            {priorBrands.map((b) => (
              <span
                key={b}
                className="font-display text-xl md:text-2xl font-bold text-[var(--foreground)]/85"
              >
                {b}
              </span>
            ))}
            <span className="text-sm text-muted">
              across QSR chains, K-12 programs &amp; national hospitality operators
            </span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border)]">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="py-10 sm:py-14 sm:px-10 first:sm:pl-0">
                <p className="font-display text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--emerald)]">
                  {s.value}
                </p>
                <p className="mt-3 text-sm font-medium uppercase tracking-wide text-muted">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Ventures */}
      <section id="ventures">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--emerald)] mb-3">
                  Selected Work
                </p>
                <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight">
                  The ventures.
                </h2>
              </div>
              <p className="max-w-xs text-base text-muted text-pretty">
                Five concepts I&apos;ve built and operate under Lyfe
                Hospitality — each with cleaner ingredients at its core.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ventures.map((v, i) => (
              <Reveal key={v.name} delay={(i % 3) * 80}>
                <a
                  href={v.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--emerald)]/50 hover:bg-white/[0.05]"
                >
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-display text-sm font-bold text-muted">
                      0{i + 1}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-muted transition-colors group-hover:border-[var(--emerald)] group-hover:bg-[var(--emerald)] group-hover:text-[#06120c]">
                      <ArrowUpRight
                        size={17}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </div>
                  <div className="mb-7 rounded-2xl bg-white/90 px-5 py-4 w-fit">
                    <Image
                      src={v.logo}
                      alt={v.name}
                      width={200}
                      height={100}
                      className="h-11 w-auto object-contain"
                    />
                  </div>
                  <h3 className="font-display text-2xl font-bold tracking-tight mb-1.5">
                    {v.name}
                  </h3>
                  <p className="text-sm font-semibold uppercase tracking-wide text-[var(--emerald)] mb-4">
                    {v.tagline}
                  </p>
                  <p className="text-[15px] leading-relaxed text-muted text-pretty">
                    {v.description}
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-12 gap-10 md:gap-16">
          <Reveal className="md:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--emerald)] mb-5">
              About
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight leading-[0.98]">
              Building better
              <br />
              food, at scale.
            </h2>
            <div className="mt-8 flex aspect-square w-40 items-center justify-center rounded-3xl bg-gradient-to-br from-[var(--emerald)] to-[var(--emerald-deep)]">
              <span className="font-display text-6xl font-extrabold text-[#06120c]">
                DP
              </span>
            </div>
          </Reveal>
          <div className="md:col-span-7 space-y-6 text-lg md:text-xl leading-relaxed text-muted">
            <Reveal delay={80}>
              <p className="text-pretty">
                I&apos;m an architect of national foodservice growth for
                plant-based brands. I led strategic expansion for{" "}
                <span className="text-[var(--foreground)]">
                  Dr. Praeger&apos;s, Daring, and Violife
                </span>{" "}
                across QSR chains, K-12 programs, and hospitality operators —
                specializing in distribution architecture, commercial systems,
                and operator adoption.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-pretty">
                My work transformed regional products into mainstream
                foodservice staples. Today I&apos;m channeling that same
                playbook into{" "}
                <span className="text-[var(--foreground)]">
                  Lyfe Hospitality
                </span>{" "}
                — building Connecticut&apos;s most health-forward restaurant
                group from the ground up.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <p className="text-pretty text-base text-muted/80">
                The belief underneath all of it: eating well shouldn&apos;t be a
                compromise. Good food should be the easy choice — for people,
                and for the planet.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-32">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--emerald)] mb-4">
              Contact
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight mb-14">
              Let&apos;s build something
              <br />
              <span className="text-[var(--emerald)]">together.</span>
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
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--emerald)]/12 text-[var(--emerald)] mb-6 transition-colors group-hover:bg-[var(--emerald)] group-hover:text-[#06120c]">
                    <Icon size={20} />
                  </span>
                  <p className="text-sm font-medium uppercase tracking-wide text-muted mb-1">
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
                      className="group flex h-full flex-col rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--emerald)]/50 hover:bg-white/[0.05]"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="group flex h-full flex-col rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8">
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
      <footer className="border-t border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-display text-base font-bold tracking-tight">
            Dimitrios <span className="text-[var(--emerald)]">Pantzos</span>
          </p>
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Dimitrios Pantzos · Norwalk, CT
          </p>
        </div>
      </footer>
    </main>
  );
}
