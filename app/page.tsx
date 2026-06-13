"use client";

import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import Image from "next/image";

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

export default function Home() {
  return (
    <main className="min-h-screen text-[#2d2d2d]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b-2 border-[#2d2d2d] bg-[#f5f1e8]/95 backdrop-blur-sm">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#top" className="text-sm md:text-base font-bold uppercase tracking-[0.2em]">
            Lyfe <span className="text-[#e8402a]">Hospitality</span>
          </a>
          <div className="hidden sm:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-wider text-[#2d2d2d]/70 hover:text-[#e8402a] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="border-b-2 border-[#2d2d2d]">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-36">
          <p className="text-xs uppercase tracking-[0.3em] text-[#2d2d2d]/60 mb-6">
            Connecticut / United States
          </p>
          <h1 className="text-5xl md:text-7xl font-light uppercase tracking-tight leading-[1.05] mb-8">
            Bringing Good Food
            <br />
            to <span className="text-[#e8402a] font-normal">Lyfe</span>
          </h1>
          <p className="max-w-xl text-sm md:text-base leading-relaxed text-[#2d2d2d]/70 mb-10">
            Lyfe Hospitality is a Connecticut-based restaurant group building a family of
            health-forward brands — from craft pizza to organic kitchens — united by one belief:
            food should make your life better.
          </p>
          <a
            href="#brands"
            className="inline-flex items-center gap-3 border-2 border-[#2d2d2d] px-8 py-3 text-xs uppercase tracking-[0.2em] hover:bg-[#2d2d2d] hover:text-[#f5f1e8] transition-colors"
          >
            Explore Our Brands
            <ArrowUpRight size={14} />
          </a>
        </div>
      </section>

      {/* Brands */}
      <section id="brands" className="border-b-2 border-[#2d2d2d]">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="flex items-baseline justify-between border-b border-[#2d2d2d] pb-6 mb-12">
            <h2 className="text-2xl md:text-3xl font-light uppercase tracking-tight">Our Brands</h2>
            <p className="text-xs uppercase tracking-wider text-[#2d2d2d]/50">05 Concepts</p>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-[#2d2d2d] border-2 border-[#2d2d2d]">
            {brands.map((brand, i) => (
              <a
                key={brand.name}
                href={brand.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group bg-[#f5f1e8] p-10 md:p-12 hover:bg-[#efe9db] transition-colors ${
                  i === brands.length - 1 && brands.length % 2 === 1 ? "md:col-span-2" : ""
                }`}
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="text-xs uppercase tracking-wider text-[#2d2d2d]/40">
                    0{i + 1}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-[#2d2d2d]/30 group-hover:text-[#e8402a] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={160}
                  height={80}
                  className="h-16 w-auto object-contain mb-8"
                />
                <h3 className="text-lg uppercase tracking-wider mb-1">{brand.name}</h3>
                <p className="text-xs uppercase tracking-wider text-[#e8402a] mb-4">
                  {brand.tagline}
                </p>
                <p className="text-sm leading-relaxed text-[#2d2d2d]/70">{brand.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-b-2 border-[#2d2d2d]">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-light uppercase tracking-tight mb-6">
              Why &ldquo;Lyfe&rdquo;?
            </h2>
            <div className="w-16 h-1 bg-[#e8402a]" />
          </div>
          <div className="space-y-6 text-sm leading-relaxed text-[#2d2d2d]/70">
            <p>
              Because we believe eating well shouldn&apos;t feel like a compromise. Every Lyfe
              Hospitality concept starts with the same question: how do we make the food people
              already love, better for the lives they want to live?
            </p>
            <p>
              From sourcing cleaner ingredients to building kitchens our communities are proud of,
              we operate restaurants that nourish — our guests, our teams, and the Connecticut
              neighborhoods we call home.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="border-b-2 border-[#2d2d2d]">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="flex items-baseline justify-between border-b border-[#2d2d2d] pb-6 mb-12">
            <h2 className="text-2xl md:text-3xl font-light uppercase tracking-tight">Leadership</h2>
            <p className="text-xs uppercase tracking-wider text-[#2d2d2d]/50">Founder</p>
          </div>
          <div className="max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-light uppercase tracking-tight mb-2">
              Dimitrios Pantzos
            </h3>
            <p className="text-xs uppercase tracking-wider text-[#e8402a] mb-8">
              President, Lyfe Hospitality
            </p>
            <p className="text-sm leading-relaxed text-[#2d2d2d]/70">
              Architect of national foodservice growth for plant-based brands. Led strategic
              expansion for Dr. Praeger&apos;s, Daring, and Violife across QSR chains, K-12
              programs, and hospitality operators. Specialized in distribution architecture,
              commercial systems, and operator adoption — transforming regional products into
              mainstream foodservice staples, and now building Connecticut&apos;s most
              health-forward restaurant group.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <h2 className="text-2xl md:text-3xl font-light uppercase tracking-tight mb-12">
            Get in Touch
          </h2>
          <div className="grid sm:grid-cols-3 gap-px bg-[#2d2d2d] border-2 border-[#2d2d2d] mb-12">
            <a
              href="mailto:me@dimitri.app"
              className="group bg-[#f5f1e8] p-8 hover:bg-[#efe9db] transition-colors"
            >
              <Mail size={18} className="mb-4 text-[#e8402a]" />
              <p className="text-xs uppercase tracking-wider text-[#2d2d2d]/50 mb-1">Email</p>
              <p className="text-sm group-hover:text-[#e8402a] transition-colors">
                me@dimitri.app
              </p>
            </a>
            <a
              href="tel:+12035511003"
              className="group bg-[#f5f1e8] p-8 hover:bg-[#efe9db] transition-colors"
            >
              <Phone size={18} className="mb-4 text-[#e8402a]" />
              <p className="text-xs uppercase tracking-wider text-[#2d2d2d]/50 mb-1">Phone</p>
              <p className="text-sm group-hover:text-[#e8402a] transition-colors">203-551-1003</p>
            </a>
            <div className="bg-[#f5f1e8] p-8">
              <MapPin size={18} className="mb-4 text-[#e8402a]" />
              <p className="text-xs uppercase tracking-wider text-[#2d2d2d]/50 mb-1">Location</p>
              <p className="text-sm">Norwalk, Connecticut</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-[#2d2d2d]">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs uppercase tracking-[0.2em]">
            Lyfe <span className="text-[#e8402a]">Hospitality</span>
          </p>
          <p className="text-xs text-[#2d2d2d]/40">
            &copy; {new Date().getFullYear()} Lyfe Hospitality. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
