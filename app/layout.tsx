import type { Metadata, Viewport } from "next";
import { manrope } from "./fonts";
import { content } from "@/content/site";
import { siteUrl } from "@/lib/site-url";
import { Header } from "@/components/Header";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#F6F4F0",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: content.seo.title,
  description: content.seo.description,
  openGraph: {
    type: "website",
    locale: content.brand.locale,
    siteName: content.brand.name,
    title: content.seo.title,
    description: content.seo.description,
    images: [{ url: content.seo.ogImage, width: 1200, height: 630, alt: content.seo.ogImageAlt }],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={manrope.variable}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-ink"
        >
          Przejdź do treści
        </a>
        <Header />
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
