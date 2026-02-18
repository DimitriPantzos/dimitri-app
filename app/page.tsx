"use client";

import { Mail, Phone } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-3xl">
          <h1 className="text-6xl md:text-8xl font-bold mb-8">
            Dimitrios Pantzos
          </h1>

          <div className="space-y-6 text-xl text-zinc-400 mb-12">
            <p>President, Lyfe Hospitality</p>
            <p>Owner of Lyfe Café and Pizza Lyfe in Connecticut</p>
          </div>

          <a
            href="mailto:me@dimitri.app"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-zinc-200 transition-colors"
          >
            <Mail size={20} />
            me@dimitri.app
          </a>
        </div>
      </section>

      {/* Experience */}
      <section className="py-24 px-6 border-t border-zinc-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Experience</h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold mb-2">Dr. Praeger's Sensible Foods</h3>
              <p className="text-zinc-400 mb-4">Director of Business Development – Food Service</p>
              <p className="text-zinc-500">Grew foodservice from $6M to $20M. Built national QSR partnerships with White Castle and Café Nero. Expanded into K-12 and military channels.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Lyfe Hospitality</h3>
              <p className="text-zinc-400 mb-4">President & Founder</p>
              <p className="text-zinc-500">Operating Lyfe Café and Pizza Lyfe in Connecticut. Multi-unit restaurant operations and hospitality management.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Organika Kitchen</h3>
              <p className="text-zinc-400 mb-4">Co-Founder</p>
              <p className="text-zinc-500">Built from zero to three locations and $3M+ annual revenue. Best of Fairfield County 2019-2020, Best of Westport 2017-2020.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Daring Foods</h3>
              <p className="text-zinc-400 mb-4">National Sales Manager</p>
              <p className="text-zinc-500">100%+ distributor growth. QSR launches with Juice Press, &Pizza, Amy's Drive Thru.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-900">
        <div className="max-w-3xl mx-auto text-center text-zinc-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Dimitrios Pantzos</p>
        </div>
      </footer>
    </main>
  );
}
