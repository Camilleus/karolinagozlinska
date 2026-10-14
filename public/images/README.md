# Zdjęcia

Pliki z placeholderami mają docelowe nazwy. Podmień je plikiem o tej samej nazwie
(JPG, sRGB, jakość ~80). Next.js sam wygeneruje AVIF/WebP i mniejsze rozmiary.
Ścieżki i alt-y edytujesz w `content/site.ts`.

## hero/
| Plik | Wymiary | Uwagi |
|---|---|---|
| `hero.jpg` | 1600×2000 px (pion, 4:5) | główne zdjęcie; twarz/sylwetka w górnych 2/3 kadru |
| `og.jpg` | 1200×630 px (poziom) | podgląd po udostępnieniu linku (Instagram, Messenger, WhatsApp) |

## portfolio/
Pion 1200×1500 px (4:5) albo poziom 1500×1000 px (3:2). Nazwa określa kategorię
w filtrze tylko pośrednio — kategorię ustawiasz w `content/site.ts`.

| Plik | Wymiary |
|---|---|
| `foto-01.jpg`, `foto-03.jpg`, `foto-04.jpg` | 1200×1500 |
| `foto-02.jpg` | 1500×1000 |
| `modeling-01.jpg`, `modeling-03.jpg` | 1200×1500 |
| `modeling-02.jpg`, `modeling-04.jpg` | 1500×1000 |

Nowe zdjęcie: dodaj plik i wpis w `content/site.ts` (`portfolio.items`) z poprawnymi
`width` i `height`.

## about/
| Plik | Wymiary |
|---|---|
| `about.jpg` | 1200×1500 px (pion, 4:5) |

## Wskazówki
- Maks. ~500 KB na plik źródłowy wystarczy; większe niepotrzebnie wydłużają deploy.
- Każde zdjęcie potrzebuje opisu (`alt`) w `content/site.ts`.
