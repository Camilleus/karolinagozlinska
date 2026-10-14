"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { content, type PortfolioCategory } from "@/content/site";
import { Section } from "./Section";
import { Lightbox } from "./Lightbox";

type Filter = "all" | PortfolioCategory;

export function Portfolio() {
  const { portfolio } = content;
  const [filter, setFilter] = useState<Filter>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const visible = useMemo(
    () => portfolio.items.filter((i) => filter === "all" || i.category === filter),
    [portfolio.items, filter],
  );

  return (
    <Section id="portfolio" heading={portfolio.heading}>
      <div role="group" aria-label="Filtr kategorii" className="mb-phi-3 flex flex-wrap gap-phi-1">
        {portfolio.filters.map((f) => (
          <button
            key={f.value}
            type="button"
            aria-pressed={filter === f.value}
            onClick={() => setFilter(f.value)}
            className={`min-h-11 rounded-full border-2 border-ink px-phi-2 text-sm font-semibold transition-colors ${
              filter === f.value ? "bg-brand" : "bg-transparent hover:bg-cream-deep"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <ul className="columns-2 gap-phi-1 md:columns-3 md:gap-phi-2">
        {visible.map((item, i) => (
          <li key={item.src} className="mb-phi-1 break-inside-avoid md:mb-phi-2">
            <button type="button" onClick={() => setOpenIndex(i)} className="block w-full overflow-hidden rounded-sm">
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                loading="lazy"
                sizes="(min-width: 1152px) 360px, (min-width: 768px) 33vw, 50vw"
                className="h-auto w-full transition-transform duration-500 hover:scale-[1.03] motion-reduce:transition-none motion-reduce:hover:scale-100"
              />
              <span className="sr-only">Powiększ: {item.alt}</span>
            </button>
          </li>
        ))}
      </ul>

      <Lightbox items={visible} index={openIndex} labels={portfolio.lightbox} onChange={setOpenIndex} />
    </Section>
  );
}
