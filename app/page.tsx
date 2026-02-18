"use client";

import { Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
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
          <div className="mb-8 space-y-2 text-[#2d2d2d]/80">
            <p className="text-sm uppercase tracking-wider">President, Lyfe Hospitality</p>
            <p className="text-sm">Owner of Lyfe Café and Pizza Lyfe</p>
          </div>

          {/* Description */}
          <div className="mb-12 text-[#2d2d2d]/70">
            <p className="text-sm leading-relaxed">
              Led foodservice and strategic growth for plant-based brands including Daring and Violife,
              expanding national accounts, distribution, and operator adoption across chains, K-12, and
              hospitality. Drove commercialization, sales systems, and go-to-market execution to scale
              emerging brands into mainstream foodservice.
            </p>
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
