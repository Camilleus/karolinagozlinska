import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content/site";

export const metadata: Metadata = {
  title: `${content.privacy.heading} — ${content.brand.name}`,
  alternates: { canonical: "/polityka-prywatnosci" },
};

export default function PrivacyPage() {
  const { privacy, brand } = content;
  const c = privacy.controller;

  return (
    <article className="mx-auto max-w-2xl space-y-phi-2 px-5 py-phi-5">
      <h1 className="font-display text-phi-2 font-semibold">{privacy.heading}</h1>
      {privacy.updated && <p className="text-sm text-ink-muted">Ostatnia aktualizacja: {privacy.updated}</p>}

      <h2 className="pt-phi-2 font-display text-phi-1 font-semibold">1. Administrator danych</h2>
      <p>
        Administratorem Twoich danych osobowych jest {c.name}
        {c.address ? `, ${c.address}` : ""}
        {c.email ? `, e-mail: ${c.email}` : ""}.
        {/* TODO: Karolina — uzupełnij adres i e-mail w content/site.ts */}
      </p>

      <h2 className="pt-phi-2 font-display text-phi-1 font-semibold">2. Jakie dane i w jakim celu</h2>
      <p>
        Przez formularz kontaktowy zbieram: imię, adres e-mail, numer telefonu (opcjonalnie), rodzaj usługi,
        datę wydarzenia (opcjonalnie) i treść wiadomości. Używam ich wyłącznie do odpowiedzi na Twoje zapytanie
        i prowadzenia korespondencji w sprawie oferty.
      </p>

      <h2 className="pt-phi-2 font-display text-phi-1 font-semibold">3. Podstawa prawna</h2>
      <p>
        Art. 6 ust. 1 lit. b RODO (podjęcie działań na Twoje żądanie przed zawarciem umowy) oraz art. 6 ust. 1
        lit. f RODO (prawnie uzasadniony interes: odpowiedź na zapytanie, ewentualna obrona roszczeń).
      </p>

      <h2 className="pt-phi-2 font-display text-phi-1 font-semibold">4. Odbiorcy danych</h2>
      <p>
        Wiadomości z formularza przekazuję przez dostawcę poczty Resend (Resend, Inc., USA) oraz hostuję stronę
        na platformie Vercel (Vercel Inc., USA). Dane mogą być przetwarzane poza EOG na podstawie standardowych
        klauzul umownych.
      </p>

      <h2 className="pt-phi-2 font-display text-phi-1 font-semibold">5. Okres przechowywania</h2>
      <p>Dane przechowuję przez {privacy.retention}, chyba że przepisy wymagają dłuższego okresu.</p>

      <h2 className="pt-phi-2 font-display text-phi-1 font-semibold">6. Twoje prawa</h2>
      <p>
        Masz prawo dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia oraz
        sprzeciwu wobec przetwarzania. Możesz także złożyć skargę do Prezesa Urzędu Ochrony Danych Osobowych
        (uodo.gov.pl). Podanie danych jest dobrowolne, ale niezbędne, aby odpowiedzieć na zapytanie.
      </p>

      <h2 className="pt-phi-2 font-display text-phi-1 font-semibold">7. Pliki cookies i analityka</h2>
      <p>
        Strona nie używa własnych plików cookies ani narzędzi analitycznych. Osadzony film z YouTube ładuje się
        dopiero po kliknięciu, z domeny youtube-nocookie.com.
      </p>

      <p className="pt-phi-3">
        <Link href="/" className="font-semibold text-brand-ink underline underline-offset-4">
          ← Wróć na stronę {brand.name}
        </Link>
      </p>
    </article>
  );
}
