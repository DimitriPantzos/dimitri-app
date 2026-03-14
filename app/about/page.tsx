import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center px-6 md:px-10 py-6">
        <Link href="/" className="font-semibold text-lg tracking-tight">DP</Link>
        <nav className="flex gap-6 md:gap-8">
          <Link href="/portfolio" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
            Portfolio
          </Link>
          <Link href="/about" className="text-sm opacity-100">
            About
          </Link>
        </nav>
      </header>

      {/* Main */}
      <main className="flex-1 max-w-2xl mx-auto px-6 py-12 md:py-20">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10 leading-tight">
          Building better ways to eat.
        </h1>

        <div className="space-y-6 text-base md:text-lg opacity-80 leading-relaxed">
          <p>
            I'm Dimitri Pantzos, founder of Lyfe Hospitality. I build restaurants 
            focused on real food—no seed oils, whole grain sourdough, ingredients 
            you can actually pronounce.
          </p>
          <p>
            After 15+ years in food & beverage, including time at Dr. Praeger's, 
            I'm now fully focused on growing the Lyfe family of concepts across 
            Connecticut's Fairfield County.
          </p>
          <p>
            We're opening Lyfe Cafe Fairfield in May 2026. It's the kind of place 
            I wanted to exist—healthy food that doesn't feel like a compromise.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-black/10">
          <p className="text-xs uppercase tracking-widest opacity-40 mb-4">Get in touch</p>
          <div className="space-y-2">
            <a href="mailto:me@dimitri.app" className="block text-base hover:underline">
              me@dimitri.app
            </a>
            <a href="tel:+12035511003" className="block text-base hover:underline">
              (203) 551-1003
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 md:px-10 py-6">
        <Link href="/" className="text-sm opacity-50 hover:opacity-100 transition-opacity">
          ← Back
        </Link>
      </footer>
    </div>
  );
}
