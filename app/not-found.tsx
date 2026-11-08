import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <SiteShell>
      <section className="wrap section">
        <h1 className="page-title">Page not found.</h1>
        <p className="section-link">
          <Link className="text-link" href="/">
            Home
          </Link>
        </p>
      </section>
    </SiteShell>
  );
}
