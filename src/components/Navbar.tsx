"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/signals", label: "Signals" },
  { href: "/leaderboard", label: "Leaderboard" },
  { href: "/top-winners", label: "Top Winners" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#f5c542] to-[#d4a017] shadow-lg shadow-[#f5c542]/20">
            <span className="text-sm leading-none">🐝</span>
          </div>
          <span className="font-[family-name:var(--font-space)] text-lg font-semibold tracking-tight text-white">
            Humble Bee <span className="text-[#f5c542]">Signals</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                  active ? "text-[#f5c542]" : "text-neutral-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/signals"
            className="btn-gold hidden rounded-full px-4 py-1.5 text-sm font-semibold sm:inline-flex"
          >
            Explore Signals
          </Link>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-neutral-400 transition hover:bg-white/5 hover:text-white md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-black/95 backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-0.5 px-4 py-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                  pathname === link.href
                    ? "bg-[#f5c542]/10 text-[#f5c542]"
                    : "text-neutral-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/signals"
              onClick={() => setOpen(false)}
              className="btn-gold mt-2 rounded-full px-4 py-2.5 text-center text-sm font-semibold"
            >
              Explore Signals
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
