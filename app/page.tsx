import type { Metadata } from "next";
import Link from "next/link";
import { ContactSlab } from "@/components/contact-slab";
import { Portrait } from "@/components/portrait";
import { PressList } from "@/components/press-list";
import { SiteShell } from "@/components/site-shell";
import { WorkIndex } from "@/components/work-index";
import { personJsonLd } from "@/lib/content";

const description =
  "Dimitri Pantzos is a Connecticut restaurateur behind Pizza Lyfe, Lyfe Cafe, Sweet Lyfe, Organika and Quattro Pazzi. Story, restaurants, press and contact.";

export const metadata: Metadata = {
  title: {
    absolute: "Dimitri Pantzos — Restaurateur, Westport, Connecticut",
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Dimitri Pantzos — Restaurateur, Westport, Connecticut",
    description,
    url: "https://dimitri.app/",
  },
  twitter: {
    title: "Dimitri Pantzos — Restaurateur, Westport, Connecticut",
    description,
  },
};

export default function Home() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <section id="top" className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Restaurateur · Connecticut</p>
            <h1 className="hero-title">
              <span>Dimitri</span>
              <span>Pantzos</span>
            </h1>
            <p className="lede">
              I run Pizza Lyfe, Lyfe Cafe, Sweet Lyfe and Organika across Westport, Milford and Southport, and lead Lyfe Hospitality.
            </p>
            <div className="hero-actions">
              <a className="btn" href="#work">
                See the restaurants
              </a>
              <Link className="text-link" href="/about">
                Read my story
              </Link>
            </div>
          </div>
          <Portrait
            priority
            framed
            caption
            sizes="(min-width: 1200px) 560px, (min-width: 768px) 45vw, 100vw"
          />
        </div>
      </section>

      <section id="about" className="band-alt">
        <span id="leadership" />
        <div className="wrap section">
          <p className="eyebrow">The story</p>
          <h2 className="h2">Raised in the kitchen.</h2>
          <p className="body story-body">
            My family&apos;s restaurant story began with Quattro Pazzi, Osianna Mediterranean Taverna and Post Road Diner. I spent my after-school hours in our restaurants. In 2016 I opened Organika in Southport with my aunt Kathy. After a stretch in plant-based foodservice with brands like Violife, I came back to open Pizza Lyfe in Westport in December 2022 — then Lyfe Cafe across the street, then Sweet Lyfe next door.
          </p>
          <p className="section-link">
            <Link className="text-link" href="/about">
              The full story →
            </Link>
          </p>
        </div>
      </section>

      <span id="brands" />
      <section id="work">
        <div className="wrap section">
          <p className="eyebrow">Work</p>
          <h2 className="h2">The restaurants.</h2>
          <p className="body story-body">
            Each name opens that restaurant’s site. Instagram is its official account.
          </p>
          <WorkIndex />
        </div>
      </section>

      <section className="band-alt">
        <div className="wrap section">
          <p className="eyebrow">In print</p>
          <h2 className="h2">Recent features.</h2>
          <PressList heading="h3" teaser />
          <p className="section-link">
            <Link className="text-link" href="/press">
              All press →
            </Link>
          </p>
        </div>
      </section>

      <ContactSlab />
    </SiteShell>
  );
}
