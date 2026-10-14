import { content } from "@/content/site";
import { siteUrl } from "./site-url";

export function buildJsonLd(): Record<string, unknown> {
  const { brand, seo, social, contact, services } = content;
  const person = {
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: brand.name,
    url: siteUrl,
    image: `${siteUrl}${seo.ogImage}`,
    description: seo.description,
    sameAs: [social.instagram, social.youtube],
    ...(contact.email ? { email: contact.email } : {}),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      person,
      ...services.items.map((s) => ({
        "@type": "Service",
        name: s.title,
        description: s.description,
        provider: { "@id": `${siteUrl}/#person` },
        areaServed: "PL",
      })),
    ],
  };
}

export function serializeJsonLd(data: Record<string, unknown>): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
