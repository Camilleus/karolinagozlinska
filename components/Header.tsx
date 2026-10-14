"use client";

import { useState } from "react";
import { content } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const { brand, nav } = content;

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" className="font-display text-lg font-semibold leading-tight">
          {brand.name}
        </a>

        <nav aria-label="Główna nawigacja" className="hidden md:block">
          <ul className="flex gap-phi-3">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="py-2 text-sm font-medium hover:text-brand-ink">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="-mr-2 flex size-12 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden className="relative block h-3.5 w-6">
            <span className={`absolute left-0 h-0.5 w-6 bg-ink transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-1.5 h-0.5 w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 h-0.5 w-6 bg-ink transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Menu mobilne" className="border-t border-ink/10 md:hidden">
          <ul className="px-5 py-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-3 font-display text-phi-1"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
