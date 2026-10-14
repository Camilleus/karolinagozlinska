import { content } from "@/content/site";

export function Footer() {
  const { brand, social, footer } = content;
  const link = "underline underline-offset-4 hover:text-brand";

  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-phi-2 px-5 py-phi-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-phi-1 font-semibold">{brand.name}</p>
          <p className="text-sm text-cream/80">{brand.tagline}</p>
        </div>
        <ul className="flex flex-wrap gap-x-phi-3 gap-y-phi-1 text-sm">
          <li>
            <a href={social.instagram} target="_blank" rel="noopener noreferrer" className={link}>
              Instagram
            </a>
          </li>
          <li>
            <a href={social.youtube} target="_blank" rel="noopener noreferrer" className={link}>
              YouTube
            </a>
          </li>
          <li>
            <a href="/polityka-prywatnosci" className={link}>
              {footer.privacy}
            </a>
          </li>
        </ul>
        <p className="text-sm text-cream/80">
          © {new Date().getFullYear()} {brand.name}
        </p>
      </div>
    </footer>
  );
}
