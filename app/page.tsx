const currently = [
  {
    name: "lyfe hospitality",
    href: null,
    note: "a connecticut restaurant group devoted to eating well. parent of the five below.",
  },
  {
    name: "pizza lyfe",
    href: "https://pizzalyfe.com",
    note: "craft pizza with clean, better-for-you ingredients.",
  },
  {
    name: "lyfe cafe",
    href: "https://lyfe.cafe",
    note: "health-forward bowls, smoothies & coffee in westport.",
  },
  {
    name: "organika kitchen",
    href: "https://organikact.com",
    note: "organic, plant-powered kitchen and juicery.",
  },
  {
    name: "quattro pazzi",
    href: "https://quattropazzi.com",
    note: "a beloved italian trattoria in fairfield.",
  },
  {
    name: "sweet lyfe",
    href: "https://sweetlyfe.app",
    note: "small-batch ice cream from a micro creamery.",
  },
];

const previously = [
  {
    name: "dr. praeger's",
    note: "led national foodservice growth — qsr chains, k-12, hospitality.",
  },
  {
    name: "daring foods",
    note: "built foodservice distribution for plant-based chicken.",
  },
  {
    name: "violife",
    note: "took plant-based dairy from regional label to national staple.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[15px] font-semibold lowercase mb-4">{children}</h2>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-[40rem] px-6 py-16 md:py-24 text-[15px] leading-relaxed">
      {/* name */}
      <h1 className="text-xl font-semibold lowercase">dimitri pantzos</h1>
      <p className="mt-1 text-[var(--muted)]">
        restaurateur &amp; operator · norwalk, connecticut
      </p>

      {/* intro */}
      <p className="mt-8">
        i build restaurants that make eating well easy. after years growing
        plant-based brands into national foodservice staples, i came home to
        connecticut to build{" "}
        <span className="font-medium text-[var(--ink)]">lyfe hospitality</span>{" "}
        — a family of five food concepts with one standard: the food people
        love should love them back.
      </p>

      {/* currently */}
      <section className="mt-12">
        <SectionLabel>currently</SectionLabel>
        <ul className="space-y-3">
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
              )}{" "}
              <span className="text-[var(--muted)]">— {item.note}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* previously */}
      <section className="mt-12">
        <SectionLabel>previously</SectionLabel>
        <ul className="space-y-3">
          {previously.map((item) => (
            <li key={item.name}>
              <span className="font-medium">{item.name}</span>{" "}
              <span className="text-[var(--muted)]">— {item.note}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* say hello */}
      <section className="mt-12">
        <SectionLabel>say hello</SectionLabel>
        <ul className="space-y-3">
          <li>
            <a href="mailto:me@dimitri.app" className="font-medium">
              me@dimitri.app
            </a>
          </li>
          <li>
            <a href="tel:+12035511003" className="font-medium">
              203 551 1003
            </a>
          </li>
        </ul>
      </section>

      {/* footer */}
      <footer className="mt-16 border-t border-black/10 pt-6 text-[13px] text-[var(--muted)]">
        &copy; {new Date().getFullYear()} dimitri pantzos
      </footer>
    </main>
  );
}
