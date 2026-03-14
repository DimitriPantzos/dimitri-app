import Link from "next/link";

const portfolio = [
  { name: "Pizza Lyfe", location: "Westport · Milford", href: "https://pizzalyfe.com" },
  { name: "Lyfe Cafe", location: "Westport · Fairfield (2026)", href: "#" },
  { name: "Organika Kitchen", location: "Southport", href: "#" },
  { name: "Quattro Pazzi", location: "Fairfield", href: "#" },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center px-6 md:px-10 py-6">
        <Link href="/" className="font-semibold text-lg tracking-tight">DP</Link>
        <nav className="flex gap-6 md:gap-8">
          <Link href="/portfolio" className="text-sm opacity-100">
            Portfolio
          </Link>
          <Link href="/about" className="text-sm opacity-70 hover:opacity-100 transition-opacity">
            About
          </Link>
        </nav>
      </header>

      {/* Main */}
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 px-6 md:px-10 py-12 md:py-20">
        <div>
          <p className="text-xl md:text-2xl font-medium leading-relaxed tracking-tight">
            Health-focused hospitality.<br />
            No seed oils. Real ingredients.<br />
            Connecticut roots.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolio.map((item) => (
            <div key={item.name}>
              <a
                href={item.href}
                target={item.href !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-lg font-medium hover:underline underline-offset-4"
              >
                {item.name}
              </a>
              <p className="text-sm opacity-50 mt-1">{item.location}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="flex justify-between items-center px-6 md:px-10 py-6">
        <a href="mailto:me@dimitri.app" className="text-sm opacity-50 hover:opacity-100 transition-opacity">
          Contact
        </a>
        <span className="text-sm opacity-30">Lyfe Hospitality</span>
      </footer>
    </div>
  );
}
