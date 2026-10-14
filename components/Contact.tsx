import { content } from "@/content/site";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { ContactForm } from "./ContactForm";

export function Contact() {
  const { contact, social } = content;
  const link = "font-semibold text-brand-ink underline underline-offset-4";

  return (
    <Section id="kontakt" heading={contact.heading}>
      <div className="grid gap-phi-4 md:grid-cols-[1.618fr_1fr]">
        <Reveal>
          <p className="mb-phi-3 max-w-xl text-phi-1 text-ink-muted">{contact.lead}</p>
          <ContactForm />
        </Reveal>
        <Reveal>
          <ul className="space-y-phi-1">
            {contact.email && (
              <li>
                <a href={`mailto:${contact.email}`} className={link}>
                  {contact.email}
                </a>
              </li>
            )}
            <li>
              <a href={social.instagram} target="_blank" rel="noopener noreferrer" className={link}>
                Instagram @kgozlinska
              </a>
            </li>
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
