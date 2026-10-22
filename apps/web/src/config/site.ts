export const siteConfig = {
  /** Origem canônica (www). O domínio sem www deve redirecionar para cá na configuração do Vercel. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.scyquantix.com",
  title: "ScyQuantix | Soluções em dados",
  description:
    "Integramos dados, automatizamos relatórios e desenvolvemos painéis e aplicações sob medida para apoiar a gestão da sua empresa.",
  locale: "pt_BR",
} as const;

/**
 * Foto limpa do escritório ao pôr do sol (hero), servida de `public/`. Decorativa (alt vazio).
 * Enquanto for `null`, o hero fica no estado provisório em navy — fidelidade visual pendente.
 */
export const heroImage: { src: string } | null = null;
