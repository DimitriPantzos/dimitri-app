const currently = [
  {
    name: "Lyfe Hospitality",
    href: null,
    note: "A Connecticut restaurant group devoted to eating well — parent of the five concepts below.",
  },
  {
    name: "Pizza Lyfe",
    href: "https://pizzalyfe.com",
    note: "Craft pizza made with clean, better-for-you ingredients.",
  },
  {
    name: "Lyfe Cafe",
    href: "https://lyfe.cafe",
    note: "Health-forward bowls, smoothies, and coffee in Westport.",
  },
  {
    name: "Organika Kitchen",
    href: "https://organikact.com",
    note: "An organic, plant-powered kitchen and juicery.",
  },
  {
    name: "Quattro Pazzi",
    href: "https://quattropazzi.com",
    note: "A beloved Italian trattoria in Fairfield.",
  },
  {
    name: "Sweet Lyfe",
    href: "https://sweetlyfe.app",
    note: "Small-batch ice cream from a micro creamery.",
  },
];

const previously = [
  {
    name: "Dr. Praeger's",
    note: "Led national foodservice growth across QSR chains, K-12 programs, and hospitality.",
  },
  {
    name: "Daring Foods",
    note: "Built foodservice distribution for plant-based chicken.",
  },
  {
    name: "Violife",
    note: "Helped take plant-based dairy from regional label to national staple.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[var(--muted)] mb-5">
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-[41rem] px-6 py-20 md:py-28 text-[16px] leading-[1.75]">
      {/* Name */}
      <h1 className="text-[26px] font-semibold tracking-tight">
        Dimitri Pantzos
      </h1>
      <p className="mt-1.5 text-[var(--muted)]">
        Restaurateur &amp; Operator · Norwalk, Connecticut
      </p>

      {/* Intro */}
      <p className="mt-9">
        I build restaurants that make eating well easy. After years spent
        growing plant-based brands into national foodservice staples, I came
        home to Connecticut to build{" "}
        <span className="font-medium">Lyfe Hospitality</span> — a family of
        five restaurant concepts with one standard: the food people love
        should love them back.
      </p>

      {/* Currently */}
      <section className="mt-14">
        <SectionLabel>Currently</SectionLabel>
        <ul className="space-y-4">
          {currently.map((item) => (
            <li key={item.name}>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium"
                >
                  {item.name}
                </a>
              ) : (
                <span className="font-medium">{item.name}</span>
              )}
              <span className="text-[var(--muted)]"> — {item.note}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Previously */}
      <section className="mt-14">
        <SectionLabel>Previously</SectionLabel>
        <ul className="space-y-4">
          {previously.map((item) => (
            <li key={item.name}>
              <span className="font-medium">{item.name}</span>
              <span className="text-[var(--muted)]"> — {item.note}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section className="mt-14">
        <SectionLabel>Get in Touch</SectionLabel>
        <ul className="space-y-4">
          <li>
            <a href="mailto:me@dimitri.app" className="font-medium">
              me@dimitri.app
            </a>
          </li>
          <li>
            <a href="tel:+12035511003" className="font-medium">
              (203) 551-1003
            </a>
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="mt-20 border-t border-black/10 pt-6 text-[13px] text-[var(--muted)]">
        &copy; {new Date().getFullYear()} Dimitri Pantzos
      </footer>
    </main>
  );
}
