import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

interface SectionProps {
  id: string;
  heading: string;
  alt?: boolean;
  children: ReactNode;
}

export function Section({ id, heading, alt = false, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={alt ? "bg-cream-deep" : undefined}
    >
      <div className="mx-auto max-w-6xl px-5 py-phi-5 md:py-phi-6">
        <Reveal>
          <h2
            id={`${id}-heading`}
            className="mb-phi-3 font-display text-phi-2 font-semibold leading-tight md:mb-phi-4"
          >
            {heading}
          </h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
