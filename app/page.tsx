"use client";

import { Mail } from "lucide-react";

const companies = [
  { name: "Pizza Lyfe", href: "https://pizzalyfe.com" },
  { name: "Lyfe Cafe", href: "#" },
  { name: "Organika Kitchen", href: "#" },
  { name: "Quattro Pazzi", href: "#" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-2xl w-full">
          {/* Top label */}
          <div className="pb-6 mb-8 border-b border-[#1a1a1a]/20">
            <p className="text-xs uppercase tracking-wider opacity-50">
              Connecticut / United States
            </p>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-5xl font-light mb-2 tracking-tight uppercase">
            Dimitrios Pantzos
          </h1>

          {/* Title */}
          <div className="mb-8 space-y-2 opacity-70">
            <p className="text-sm uppercase tracking-wider">President, Lyfe Hospitality</p>
            <p className="text-sm">Owner of Lyfe Café and Pizza Lyfe</p>
          </div>

          {/* Description */}
          <div className="mb-12 opacity-60">
            <p className="text-sm leading-relaxed">
              Architect of national foodservice growth for plant-based brands. Led strategic expansion
              for Dr. Praeger's, Daring, and Violife across QSR chains, K-12 programs, and hospitality
              operators. Specialized in distribution architecture, commercial systems, and operator
              adoption—transforming regional products into mainstream foodservice staples.
            </p>
          </div>

          {/* Contact */}
          <div className="border-t border-[#1a1a1a]/20 pt-8">
            <a
              href="mailto:me@dimitri.app"
              className="inline-flex items-center gap-3 text-sm uppercase tracking-wider hover:opacity-60 transition-opacity group"
            >
              <Mail size={16} className="group-hover:translate-x-1 transition-transform" />
              <span className="border-b border-current">
                me@dimitri.app
              </span>
            </a>
          </div>
        </div>
      </main>

      {/* Carousel */}
      <div className="w-full overflow-hidden py-8 border-t border-[#1a1a1a]/10">
        <div className="carousel-track flex">
          {/* First set */}
          {companies.map((company, i) => (
            <div key={`a-${i}`} className="flex-shrink-0 px-6 md:px-10">
              <a
                href={company.href}
                target={company.href !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-lg font-medium opacity-50 hover:opacity-100 transition-opacity whitespace-nowrap"
              >
                {company.name}
              </a>
              <span className="ml-6 md:ml-10 opacity-20">·</span>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {companies.map((company, i) => (
            <div key={`b-${i}`} className="flex-shrink-0 px-6 md:px-10">
              <a
                href={company.href}
                target={company.href !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-lg font-medium opacity-50 hover:opacity-100 transition-opacity whitespace-nowrap"
              >
                {company.name}
              </a>
              <span className="ml-6 md:ml-10 opacity-20">·</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
