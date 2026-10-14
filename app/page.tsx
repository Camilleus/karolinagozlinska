import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Singing } from "@/components/Singing";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { buildJsonLd, serializeJsonLd } from "@/lib/json-ld";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildJsonLd()) }}
      />
      <Hero />
      <Services />
      <Portfolio />
      <Singing />
      <About />
      <Contact />
    </>
  );
}
