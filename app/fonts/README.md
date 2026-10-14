# Brice SemiExpanded

Font komercyjny (Studio Sun), nie ma go w Google Fonts. Wymagana licencja webowa.

## Oczekiwane pliki (w tym folderze)

- `Brice-SemiExpanded-Regular.woff2` (waga 400)
- `Brice-SemiExpanded-SemiBold.woff2` (waga 600)

## Włączenie

1. Wgraj pliki `.woff2` do `app/fonts/`.
2. W `app/fonts.ts` odkomentuj import `localFont` i blok `brice`.
3. W `app/layout.tsx` dodaj `brice.variable` do `className` elementu `<html>`.
4. Otwórz `/fonttest` i sprawdź: Karolina Goźlińska, ąęśźżńłóć ĄĘŚŹŻŃŁÓĆ.
   Jeśli brakuje glifów, zgłoś to przed wdrożeniem.

Do tego czasu strona używa szerokiego sansa systemowego (`Brice Fallback`
w `globals.css`, z `size-adjust`), więc po wgraniu fontu przesunięcie layoutu
jest minimalne.

Brice jest fontem display: tylko nagłówki, nazwa marki i CTA.
