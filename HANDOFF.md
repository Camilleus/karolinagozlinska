# HANDOFF

Strona-wizytówka Karoliny Goźlińskiej — one-page, Next 16 App Router, Tailwind v4, deploy na Vercel.

## Architektura
- Treść: wyłącznie `content/site.ts` (obiekt `pl`, eksport `content`). Dodanie EN = nowy obiekt + routing.
- Formularz: `components/ContactForm.tsx` → Server Action `app/actions.ts` → Resend. Walidacja wspólna: `lib/validation.ts`. Honeypot: pole `website`.
- Preselekcja usługi: `ServiceCta` wysyła zdarzenie (`lib/service-select.ts`), `ContactForm` ustawia select.
- Fonty: Manrope (Google) w `app/fonts.ts`; Brice SemiExpanded czeka na pliki `.woff2` (fallback `Brice Fallback` w `globals.css`, instrukcja w `app/fonts/README.md`).
- Tymczasowe: `app/fonttest` (noindex) — usunąć przed finalnym deployem.

## Stan
Build czysty. Lighthouse mobile (lokalnie, build produkcyjny): Perf 97, A11y 100, BP 100, SEO 100, CLS 0.
Lista TODO treści i instrukcja Resend/Vercel: `README.md`.
