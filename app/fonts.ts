import { Manrope } from "next/font/google";
// import localFont from "next/font/local";

export const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  display: "swap",
});

// TODO: Karolina — po wgraniu plików do app/fonts/ (zob. app/fonts/README.md)
// odkomentuj blok, import localFont powyżej i dodaj `brice.variable` do <html> w layout.tsx.
// export const brice = localFont({
//   src: [
//     { path: "./fonts/Brice-SemiExpanded-Regular.woff2", weight: "400", style: "normal" },
//     { path: "./fonts/Brice-SemiExpanded-SemiBold.woff2", weight: "600", style: "normal" },
//   ],
//   variable: "--font-brice",
//   display: "swap",
//   adjustFontFallback: "Arial",
// });
