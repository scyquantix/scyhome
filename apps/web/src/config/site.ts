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
 * Origem: `01-referencias/img-base.jpeg` do kit, sem a faixa preta do rodapé.
 * Com `null`, o hero volta ao estado provisório em navy.
 */
export const heroImage: { src: string } | null = { src: "/hero-escritorio.jpg" };
