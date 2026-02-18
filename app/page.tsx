"use client";

import { Mail, Phone } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
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
    </main>
  );
}
