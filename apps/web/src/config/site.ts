export const siteConfig = {
  name: "ScyQuantix",
  tagline: "Tecnologia orientada por evidências",
  description:
    "Integramos dados de diferentes fontes, automatizamos relatórios e desenvolvemos painéis e aplicações sob medida para apoiar a gestão da sua empresa.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://scyquantix.com",
  domain: "scyquantix.com",
  locale: "pt_BR",
} as const;

/**
 * Foto do escritório ao pôr do sol (hero), servida de `public/`.
 * Enquanto for `null`, o hero usa o fundo azul de reserva.
 */
export const heroImage: { src: string; alt: string } | null = null;
