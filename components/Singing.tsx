import { content } from "@/content/site";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { YouTubeLite } from "./YouTubeLite";

export function Singing() {
  const { singing, social } = content;

  return (
    <Section id="spiew" heading={singing.heading}>
      <Reveal>
        <p className="mb-phi-3 max-w-xl text-phi-1 text-ink-muted">{singing.text}</p>
        {singing.videoId ? (
          <YouTubeLite videoId={singing.videoId} title={singing.videoTitle} playLabel={singing.play} />
        ) : (
          <div className="flex aspect-video w-full items-center justify-center rounded-sm bg-cream-deep p-phi-3 text-center text-ink-muted">
            {/* TODO: Karolina — wstaw videoId w content/site.ts, a tu pojawi się odtwarzacz */}
            Film pojawi się tutaj.
          </div>
        )}
        <a
          href={social.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-phi-2 inline-block font-semibold text-brand-ink underline underline-offset-4"
        >
          {singing.channelCta}
        </a>
      </Reveal>
    </Section>
  );
}
