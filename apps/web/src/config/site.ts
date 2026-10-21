export const siteConfig = {
  name: "ScyQuantix",
  tagline: "Tecnologia orientada por evidências",
  description:
    "Integramos dados de diferentes fontes, automatizamos relatórios e desenvolvemos painéis e aplicações sob medida para apoiar a gestão da sua empresa.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://scyquantix.com",
  domain: "scyquantix.com",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contato@scyquantix.com",
  /** Portal autenticado (ainda não existe). Sem URL, o link não aparece. */
  platformUrl: process.env.NEXT_PUBLIC_PLATFORM_URL || null,
  locale: "pt_BR",
} as const;

export const contactHref = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(
  "Quero conversar sobre um desafio",
)}`;

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "Soluções", href: "/#solucoes" },
  { label: "Produtos", href: "/#produtos" },
  { label: "Sobre", href: "/#quem-somos" },
  { label: "Como trabalhamos", href: "/#como-trabalhamos" },
];
