import type { Metadata } from "next";
import Link from "next/link";
import { Portrait } from "@/components/portrait";
import { SiteShell } from "@/components/site-shell";
import { aboutChapters } from "@/lib/content";

const description =
  "Dimitri Pantzos on growing up in family restaurants, opening Organika, and building Pizza Lyfe, Lyfe Cafe and Sweet Lyfe in Westport.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Dimitri Pantzos",
    description,
    url: "https://dimitri.app/about",
  },
  twitter: {
    title: "About — Dimitri Pantzos",
    description,
  },
};

export default function AboutPage() {
  return (
    <SiteShell>
      <article className="wrap section about-grid">
        <header className="about-lead">
          <p className="eyebrow">About</p>
          <h1 className="page-title">Dimitri Pantzos</h1>
          <p className="lede">
            A Connecticut restaurateur who has been in kitchens since he was a kid.
          </p>
        </header>
        <div className="about-portrait">
          <Portrait
            framed
            sizes="(min-width: 1024px) 420px, 100vw"
          />
        </div>
        <div className="about-body">
          {aboutChapters.map((chapter) => (
            <section key={chapter.title} className="chapter">
              <h2 className="h2">{chapter.title}</h2>
              <p className="body">{chapter.body}</p>
            </section>
          ))}
          <p className="about-links">
            <Link className="text-link" href="/#work">
              See the restaurants →
            </Link>
            <Link className="text-link" href="/press">
              Press →
            </Link>
          </p>
          <p className="source-line">
            Story drawn from published features in Westport Lifestyle (October 2026) and Westport, Weston &amp; Wilton magazine (November/December 2026).
          </p>
        </div>
      </article>
    </SiteShell>
  );
}
