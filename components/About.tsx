import Image from "next/image";
import { content } from "@/content/site";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function About() {
  const { about } = content;

  return (
    <Section id="o-mnie" heading={about.heading} alt>
      <div className="grid items-center gap-phi-3 md:grid-cols-[1fr_1.618fr] md:gap-phi-5">
        <Reveal>
          <Image
            src={about.image.src}
            alt={about.image.alt}
            width={about.image.width}
            height={about.image.height}
            sizes="(min-width: 768px) 38vw, 100vw"
            loading="lazy"
            className="h-auto w-full rounded-sm"
          />
        </Reveal>
        <Reveal>
          <div className="max-w-xl space-y-phi-2 text-phi-1">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
