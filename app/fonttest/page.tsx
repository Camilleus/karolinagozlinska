import type { Metadata } from "next";
import { DM_Sans, Figtree, Manrope } from "next/font/google";

// TODO: usuń cały folder app/fonttest (oraz wpis w robots.ts) przed finalnym deployem.
export const metadata: Metadata = {
  title: "Test fontów",
  robots: { index: false, follow: false },
};

const subsets: ("latin" | "latin-ext")[] = ["latin", "latin-ext"];
const manrope = Manrope({ subsets });
const dmSans = DM_Sans({ subsets });
const figtree = Figtree({ subsets });

const SAMPLES = [
  { label: "Brice SemiExpanded (fallback, dopóki nie ma plików .woff2)", className: "font-display" },
  { label: "Manrope", className: manrope.className },
  { label: "DM Sans", className: dmSans.className },
  { label: "Figtree", className: figtree.className },
];

export default function FontTestPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-phi-4 px-5 py-phi-5">
      <h1 className="text-sm font-semibold uppercase tracking-widest text-ink-muted">Test fontów (noindex)</h1>
      {SAMPLES.map((s) => (
        <section key={s.label} className={s.className}>
          <h2 className="mb-2 font-sans text-sm text-ink-muted">{s.label}</h2>
          <p className="text-phi-3 font-semibold leading-tight">Karolina Goźlińska</p>
          <p className="mt-2 text-phi-2">ąęśźżńłóć ĄĘŚŹŻŃŁÓĆ</p>
          <p className="mt-2 text-phi-0">Zażółć gęślą jaźń — Pchnąć w tę łódź jeża lub ośm skrzyń fig.</p>
        </section>
      ))}
    </div>
  );
}
