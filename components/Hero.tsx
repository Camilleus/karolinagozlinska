import Image from "next/image";
import { content } from "@/content/site";
import { buttonClass } from "@/lib/ui";

export function Hero() {
  const { brand, hero } = content;

  return (
    <section id="top" aria-labelledby="hero-heading" className="mx-auto max-w-6xl px-5 pb-phi-5 pt-phi-3 md:py-phi-5">
      <div className="grid items-center gap-phi-3 md:grid-cols-[1fr_1.618fr] md:gap-phi-5">
        <div className="order-2 md:order-1">
          <p className="mb-phi-1 text-sm font-medium uppercase tracking-[0.2em] text-ink-muted">
            {brand.tagline}
          </p>
          <h1 id="hero-heading" className="font-display text-phi-3 font-semibold leading-[1.1]">
            {hero.heading}
          </h1>
          <p className="mt-phi-2 max-w-md text-phi-1 text-ink-muted">{hero.lead}</p>
          <a href="#kontakt" className={`${buttonClass} mt-phi-3`}>
            {hero.cta}
          </a>
        </div>
        <div className="order-1 md:order-2">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            width={hero.image.width}
            height={hero.image.height}
            priority
            sizes="(min-width: 768px) 60vw, 100vw"
            className="h-auto max-h-[75svh] w-full rounded-sm object-cover md:max-h-[85svh]"
          />
        </div>
      </div>
    </section>
  );
}
