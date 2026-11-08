"use client";

import { Leaf, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navLinks } from "@/lib/site";

function isCurrent(href: string, pathname: string) {
  return href === pathname;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) {
      if (wasOpen.current) {
        menuButtonRef.current?.focus();
        wasOpen.current = false;
      }
      return;
    }

    wasOpen.current = true;
    firstLinkRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#0a1f16]/8 bg-[#f7faf5]/85 backdrop-blur-md">
        <nav
          className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between gap-4"
          aria-label="Primary"
        >
          <Link
            href="/"
            className="font-display text-lg font-extrabold tracking-tight flex items-center gap-2 shrink-0"
            onClick={() => setMenuOpen(false)}
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0a7d4d] text-white">
              <Leaf size={15} aria-hidden="true" />
            </span>
            Lyfe
          </Link>
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const current = isCurrent(link.href, pathname);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={current ? "page" : undefined}
                  className={`text-sm font-medium transition-colors ${
                    current
                      ? "text-[#0a7d4d]"
                      : "text-[#0a1f16]/65 hover:text-[#0a7d4d]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/#contact"
              className="rounded-full bg-[#0a1f16] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0a7d4d] transition-colors"
            >
              Get in Touch
            </Link>
            <button
              ref={menuButtonRef}
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#0a1f16]/15 text-[#0a1f16] lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="hub-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </header>

      {menuOpen ? (
        <div className="lg:hidden">
          <button
            type="button"
            className="fixed inset-0 z-40 bg-[#06301f]/40"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
          <div
            id="hub-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed inset-y-0 right-0 z-40 flex w-[min(20rem,88vw)] flex-col bg-[#f7faf5] px-6 pt-24 pb-8 shadow-[-16px_0_48px_-24px_rgba(6,48,31,0.35)]"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {navLinks.map((link, index) => {
                const current = isCurrent(link.href, pathname);
                return (
                  <Link
                    key={link.href}
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={link.href}
                    aria-current={current ? "page" : undefined}
                    className={`rounded-2xl px-4 py-3 text-lg font-semibold hover:bg-[#0a7d4d]/10 hover:text-[#0a7d4d] ${
                      current ? "text-[#0a7d4d]" : "text-[#0a1f16]"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <Link
              href="/#contact"
              className="mt-6 rounded-full bg-[#0a1f16] px-6 py-3 text-center text-sm font-semibold text-white hover:bg-[#0a7d4d]"
              onClick={() => setMenuOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
}
