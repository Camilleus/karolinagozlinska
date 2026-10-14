import { content } from "@/content/site";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { ServiceCta } from "./ServiceCta";

export function Services() {
  const { services } = content;

  return (
    <Section id="uslugi" heading={services.heading} alt>
      <ul className="grid gap-phi-3 md:grid-cols-3">
        {services.items.map((s) => (
          <li key={s.id}>
            <Reveal className="h-full">
              <article className="flex h-full flex-col rounded-sm border-t-4 border-brand bg-cream p-phi-3">
                <h3 className="font-display text-phi-1 font-semibold leading-snug">{s.title}</h3>
                <p className="mt-phi-1 text-ink-muted">{s.description}</p>
                <p className="mt-phi-1 text-sm">
                  <span className="font-semibold text-brand-ink">Dla kogo: </span>
                  {s.forWhom}
                </p>
                <div className="mt-auto pt-phi-3">
                  <ServiceCta id={s.id} label={s.cta} />
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
