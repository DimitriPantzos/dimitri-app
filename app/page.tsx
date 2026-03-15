"use client";

import { Mail } from "lucide-react";

const brands = [
  { name: "Pizza Lyfe", href: "https://pizzalyfe.com" },
  { name: "Lyfe Cafe", href: "#" },
  { name: "Organika Kitchen", href: "#" },
  { name: "Quattro Pazzi", href: "#" },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="max-w-2xl w-full">
        {/* Label-style container */}
        <div className="border-2 border-[#2d2d2d] p-12 md:p-16 bg-[#f5f1e8]">
          {/* Top label */}
          <div className="border-b border-[#2d2d2d] pb-6 mb-8">
            <p className="text-xs uppercase tracking-wider text-[#2d2d2d]/60">
              Connecticut / United States
            </p>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-5xl font-light mb-2 tracking-tight uppercase text-[#2d2d2d]">
            Dimitrios Pantzos
          </h1>

          {/* Title */}
          <div className="mb-8 text-[#2d2d2d]/80">
            <p className="text-sm uppercase tracking-wider">President, Lyfe Hospitality</p>
          </div>

          {/* Description */}
          <div className="mb-12 text-[#2d2d2d]/70">
            <p className="text-sm leading-relaxed">
              Architect of national foodservice growth for plant-based brands. Led strategic expansion
              for Dr. Praeger's, Daring, and Violife across QSR chains, K-12 programs, and hospitality
              operators. Specialized in distribution architecture, commercial systems, and operator
              adoption—transforming regional products into mainstream foodservice staples.
            </p>
          </div>

          {/* Brands Carousel */}
          <div className="mb-8 overflow-hidden">
            <div className="flex animate-scroll">
              {[...brands, ...brands].map((brand, i) => (
                <a
                  key={i}
                  href={brand.href}
                  target={brand.href !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex-shrink-0 px-4 text-sm text-[#2d2d2d]/60 hover:text-[#2d2d2d] transition-colors whitespace-nowrap"
                >
                  {brand.name}
                  <span className="ml-4 text-[#2d2d2d]/30">·</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="border-t border-[#2d2d2d] pt-8">
            <a
              href="mailto:me@dimitri.app"
              className="inline-flex items-center gap-3 text-sm uppercase tracking-wider text-[#2d2d2d] hover:text-[#2d2d2d]/60 transition-colors group"
            >
              <Mail size={16} className="group-hover:translate-x-1 transition-transform" />
              <span className="border-b border-[#2d2d2d] group-hover:border-[#2d2d2d]/40">
                me@dimitri.app
              </span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
