import { content } from "@/content/site";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? `https://${content.domain}`;
