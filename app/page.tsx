import Link from "next/link";

const companies = [
  { name: "Pizza Lyfe", href: "https://pizzalyfe.com" },
  { name: "Lyfe Cafe", href: "#" },
  { name: "Organika Kitchen", href: "#" },
  { name: "Quattro Pazzi", href: "#" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center px-6 md:px-10 py-6">
        <div className="font-semibold text-lg tracking-tight">DP</div>
        <nav className="flex gap-6 md:gap-8">
          <Link href="/portfolio" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
            Portfolio
          </Link>
          <Link href="/about" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
            About
          </Link>
        </nav>
      </header>

      {/* Main */}
      <main className="flex-1 flex flex-col justify-center items-center px-6 text-center">
        <p className="text-2xl md:text-4xl font-medium leading-snug tracking-tight max-w-2xl mb-16">
          Building health-focused hospitality<br className="hidden md:block" /> concepts across Connecticut.
        </p>

        {/* Carousel */}
        <div className="w-full max-w-4xl overflow-hidden">
          <div className="carousel-track flex">
            {/* First set */}
            {companies.map((company, i) => (
              <div key={`a-${i}`} className="flex-shrink-0 px-6 md:px-10">
                <a
                  href={company.href}
                  target={company.href !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-lg md:text-xl font-medium opacity-60 hover:opacity-100 transition-opacity whitespace-nowrap"
                >
                  {company.name}
                </a>
                <span className="ml-6 md:ml-10 opacity-30">·</span>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {companies.map((company, i) => (
              <div key={`b-${i}`} className="flex-shrink-0 px-6 md:px-10">
                <a
                  href={company.href}
                  target={company.href !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-lg md:text-xl font-medium opacity-60 hover:opacity-100 transition-opacity whitespace-nowrap"
                >
                  {company.name}
                </a>
                <span className="ml-6 md:ml-10 opacity-30">·</span>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex justify-between items-center px-6 md:px-10 py-6">
        <a href="mailto:me@dimitri.app" className="text-sm opacity-50 hover:opacity-100 transition-opacity">
          Contact
        </a>
        <div className="flex gap-6">
          <a href="https://twitter.com/Dimitri_oss" target="_blank" rel="noopener noreferrer" className="text-sm opacity-50 hover:opacity-100 transition-opacity">
            Twitter
          </a>
          <a href="https://linkedin.com/in/dimitripantzos" target="_blank" rel="noopener noreferrer" className="text-sm opacity-50 hover:opacity-100 transition-opacity">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
