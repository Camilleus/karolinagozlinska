# Karolina Goźlińska — strona-wizytówka

Next.js (App Router) + TypeScript + Tailwind v4. Cała treść: `content/site.ts`.

```bash
npm install
cp .env.example .env.local   # uzupełnij RESEND_API_KEY i CONTACT_EMAIL
npm run dev
```

## TODO dla Karoliny (wszystko oznaczone `// TODO: Karolina` w kodzie)

**`content/site.ts`**
- [ ] hasło w hero (`hero.lead`), opis SEO (`seo.description`)
- [ ] opisy 3 usług: `description`, `forWhom` (zakres, repertuar, rodzaje współpracy)
- [ ] ID filmu YouTube (`singing.videoId`) i krótki opis sekcji Śpiew
- [ ] tekst „O mnie” (`about.paragraphs`)
- [ ] adres e-mail do wyświetlenia (`contact.email`) — pusty = brak linku mailto
- [ ] czas odpowiedzi w `contact.lead`
- [ ] alt-y wszystkich zdjęć
- [ ] dane administratora, data aktualizacji i okres przechowywania w `privacy` (szablon warto zweryfikować prawnie)
- [ ] docelowa domena (`domain`)

**Zdjęcia** — podmień placeholdery wg `public/images/README.md`.

**Font Brice SemiExpanded** — wgraj `.woff2` wg `app/fonts/README.md` i sprawdź `/fonttest`.

**Przed finalnym deployem** — usuń `app/fonttest/` oraz `disallow: "/fonttest"` w `app/robots.ts`.

## Resend

1. Konto na resend.com → API Keys → utwórz klucz.
2. Zmienne środowiskowe (lokalnie `.env.local`, na Vercelu Settings → Environment Variables):
   - `RESEND_API_KEY` — klucz,
   - `CONTACT_EMAIL` — adres, na który przychodzą zapytania,
   - `CONTACT_FROM` — nadawca, np. `Karolina Goźlińska <kontakt@gozlinska.pl>`.
3. Bez weryfikacji domeny Resend wysyła tylko z `onboarding@resend.dev` i tylko na adres właściciela konta Resend (domyślna wartość `CONTACT_FROM`).
4. Weryfikacja domeny: Resend → Domains → Add Domain → dodaj podane rekordy DNS (SPF, DKIM) u rejestratora → Verify. Potem ustaw `CONTACT_FROM` na adres z tej domeny.

## Vercel i domena

1. vercel.com → Add New → Project → zaimportuj repo `Camilleus/karolinagozlinska` (framework wykryje się sam).
2. Dodaj zmienne z sekcji Resend oraz `NEXT_PUBLIC_SITE_URL=https://gozlinska.pl` (zmień, jeśli domena inna). Deploy.
3. Settings → Domains → Add `gozlinska.pl` (i `www`). U rejestratora ustaw rekordy DNS dokładnie takie, jakie pokaże panel Vercela.
4. Po zmianie zmiennych środowiskowych zrób redeploy.

## Kolory (WCAG AA)

`brand #FA9860` tylko tła/przyciski/linie (nie tekst); `brand-ink #A84A1A` tekst w kolorze marki (5.2:1 na `cream`, 4.7:1 na `cream-deep`); `ink #2E211A` tekst główny i tekst na przyciskach (7.2:1 na `brand`).
