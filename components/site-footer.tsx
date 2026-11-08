import { Leaf } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Press", href: "/press" },
  { label: "Contact", href: "/#contact" },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#06301f] text-[#eaf3ec]">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-xl font-extrabold tracking-tight flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0a7d4d] text-white">
            <Leaf size={15} aria-hidden="true" />
          </span>
          Lyfe Hospitality
        </p>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-[#eaf3ec] hover:text-[#16c47f]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="text-sm font-medium text-[#eaf3ec]/80">
          &copy; {new Date().getFullYear()} Lyfe Hospitality · Norwalk, CT
        </p>
      </div>
    </footer>
  );
}
