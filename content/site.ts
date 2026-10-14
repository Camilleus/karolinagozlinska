export type ServiceId = "sesje" | "spiew" | "modeling";
export type PortfolioCategory = "foto" | "modeling";

export interface Service {
  id: ServiceId;
  title: string;
  description: string;
  forWhom: string;
  cta: string;
}

export interface PortfolioItem {
  src: string;
  alt: string;
  category: PortfolioCategory;
  width: number;
  height: number;
}

const pl = {
  brand: {
    name: "Karolina Goźlińska",
    tagline: "fotografia · śpiew · modeling",
    locale: "pl_PL",
  },

  // TODO: Karolina — docelowa domena (zmień też NEXT_PUBLIC_SITE_URL na Vercelu)
  domain: "gozlinska.pl",

  seo: {
    title: "Karolina Goźlińska — fotografia, śpiew na ślub i event, modeling",
    // TODO: Karolina — zweryfikuj opis (max ~160 znaków)
    description:
      "Karolina Goźlińska: sesje zdjęciowe, śpiew na ślubach i eventach oraz współpraca modelingowa. Zapytaj o wolny termin.",
    ogImage: "/images/hero/og.jpg",
    ogImageAlt: "Karolina Goźlińska — fotografia, śpiew, modeling",
  },

  nav: [
    { href: "#uslugi", label: "Usługi" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#spiew", label: "Śpiew" },
    { href: "#o-mnie", label: "O mnie" },
    { href: "#kontakt", label: "Kontakt" },
  ],

  hero: {
    heading: "Karolina Goźlińska",
    // TODO: Karolina — jedno zdanie, które w 10 sekund mówi, co oferujesz
    lead: "Zdjęcia, które zostają na lata. Głos, który tworzy atmosferę ślubu i wydarzenia.",
    cta: "Zapytaj o termin",
    image: {
      src: "/images/hero/hero.jpg",
      alt: "Karolina Goźlińska — zdjęcie główne", // TODO: Karolina — opisz zdjęcie
      width: 1600,
      height: 2000,
    },
  },

  services: {
    heading: "Usługi",
    items: [
      {
        id: "sesje",
        title: "Sesje zdjęciowe",
        // TODO: Karolina — opis zakresu sesji (rodzaje, miejsca, czas dostawy zdjęć)
        description: "Sesje fotograficzne w naturalnym, artystycznym stylu.",
        // TODO: Karolina — dla kogo
        forWhom: "Dla osób, które chcą mieć zdjęcia z charakterem.",
        cta: "Zapytaj o sesję",
      },
      {
        id: "spiew",
        title: "Śpiew na ślub i event",
        // TODO: Karolina — repertuar, oprawa ceremonii, forma występu
        description: "Oprawa muzyczna ceremonii, przyjęć i wydarzeń.",
        // TODO: Karolina — dla kogo
        forWhom: "Dla par młodych i organizatorów wydarzeń.",
        cta: "Zapytaj o występ",
      },
      {
        id: "modeling",
        title: "Współpraca modelingowa",
        // TODO: Karolina — rodzaje współpracy (kampanie, lookbooki, TFP itp.)
        description: "Udział w sesjach i projektach wizerunkowych.",
        // TODO: Karolina — dla kogo
        forWhom: "Dla marek, fotografów i projektantów.",
        cta: "Zapytaj o współpracę",
      },
    ] satisfies Service[],
  },

  portfolio: {
    heading: "Portfolio",
    filters: [
      { value: "all", label: "Wszystko" },
      { value: "foto", label: "Foto" },
      { value: "modeling", label: "Modeling" },
    ] as const,
    // TODO: Karolina — podmień pliki w public/images/portfolio (zob. README) i uzupełnij alt-y
    items: [
      { src: "/images/portfolio/foto-01.jpg", alt: "Fotografia — zdjęcie 1", category: "foto", width: 1200, height: 1500 },
      { src: "/images/portfolio/foto-02.jpg", alt: "Fotografia — zdjęcie 2", category: "foto", width: 1500, height: 1000 },
      { src: "/images/portfolio/modeling-01.jpg", alt: "Modeling — zdjęcie 1", category: "modeling", width: 1200, height: 1500 },
      { src: "/images/portfolio/foto-03.jpg", alt: "Fotografia — zdjęcie 3", category: "foto", width: 1200, height: 1500 },
      { src: "/images/portfolio/modeling-02.jpg", alt: "Modeling — zdjęcie 2", category: "modeling", width: 1500, height: 1000 },
      { src: "/images/portfolio/foto-04.jpg", alt: "Fotografia — zdjęcie 4", category: "foto", width: 1200, height: 1500 },
      { src: "/images/portfolio/modeling-03.jpg", alt: "Modeling — zdjęcie 3", category: "modeling", width: 1200, height: 1500 },
      { src: "/images/portfolio/modeling-04.jpg", alt: "Modeling — zdjęcie 4", category: "modeling", width: 1500, height: 1000 },
    ] satisfies PortfolioItem[],
    lightbox: { close: "Zamknij", prev: "Poprzednie zdjęcie", next: "Następne zdjęcie" },
  },

  singing: {
    heading: "Śpiew",
    // TODO: Karolina — krótki opis (repertuar, jak wygląda występ)
    text: "Posłuchaj, jak brzmię na żywo.",
    // TODO: Karolina — ID filmu z YouTube (część po v= w adresie), np. "dQw4w9WgXcQ"
    videoId: "",
    videoTitle: "Karolina Goźlińska — występ",
    play: "Odtwórz film",
    channelCta: "Zobacz kanał na YouTube",
  },

  about: {
    heading: "O mnie",
    // TODO: Karolina — krótki tekst o sobie (2–3 akapity), bez faktów, których nie potwierdzisz
    paragraphs: [
      "Fotografuję, śpiewam i pracuję jako modelka. Łączy to jedno: lubię tworzyć obrazy i nastrój.",
    ],
    image: {
      src: "/images/about/about.jpg",
      alt: "Karolina Goźlińska — portret", // TODO: Karolina — opisz zdjęcie
      width: 1200,
      height: 1500,
    },
  },

  contact: {
    heading: "Zapytaj o termin",
    lead: "Napisz, czego potrzebujesz i kiedy. Odpowiem na wiadomość.", // TODO: Karolina — zadeklaruj czas odpowiedzi
    // TODO: Karolina — adres e-mail do wyświetlenia i mailto (puste = link ukryty)
    email: "",
    labels: {
      name: "Imię",
      email: "E-mail",
      phone: "Telefon (opcjonalnie)",
      service: "Rodzaj usługi",
      servicePlaceholder: "Wybierz usługę",
      date: "Data wydarzenia (opcjonalnie)",
      message: "Wiadomość",
      consent: "Zapoznałam/em się z polityką prywatności",
      submit: "Wyślij zapytanie",
      sending: "Wysyłanie…",
      success: "Dziękuję! Wiadomość dotarła, odezwę się wkrótce.",
      error: "Nie udało się wysłać wiadomości. Spróbuj ponownie lub napisz bezpośrednio.",
    },
    otherServiceLabel: "Inne / nie wiem jeszcze",
  },

  social: {
    instagram: "https://www.instagram.com/kgozlinska/",
    youtube: "https://www.youtube.com/channel/UC_C_KgtIiv8whMOVKuX0F0w",
  },

  footer: {
    privacy: "Polityka prywatności",
  },

  privacy: {
    heading: "Polityka prywatności",
    // TODO: Karolina — uzupełnij dane administratora; szablon warto zweryfikować prawnie
    controller: {
      name: "Karolina Goźlińska",
      address: "", // TODO: Karolina — adres lub „działalność nierejestrowana / NIP”
      email: "", // TODO: Karolina
    },
    updated: "", // TODO: Karolina — data ostatniej aktualizacji
    retention: "12 miesięcy od zakończenia korespondencji", // TODO: Karolina — potwierdź okres
  },
};

export const content = pl;
