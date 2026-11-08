import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <nav className="footer-nav" aria-label="Footer">
          <Link href="/about">About</Link>
          <Link href="/#work">Work</Link>
          <Link href="/press">Press</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <p>Dimitri Pantzos · President, Lyfe Hospitality · Norwalk, Connecticut</p>
        <p>© 2026 Dimitri Pantzos</p>
      </div>
    </footer>
  );
}
