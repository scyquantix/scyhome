/**
 * Registro dos produtos ScyQuantix. É a fonte única para a landing,
 * as páginas /produtos/<slug>, o sitemap e, no futuro, a navegação entre apps.
 * Para conectar um app, defina a variável de ambiente correspondente.
 */

export type ProductStatus = "em-desenvolvimento" | "beta" | "disponivel";

export type Product = {
  slug: string;
  name: string;
  headline: string;
  description: string;
  features: [string, string];
  status: ProductStatus;
  /** URL do app publicado. Sem URL, o CTA leva à página do produto no site. */
  appUrl: string | null;
  preview: "sql" | "pivot" | "chart";
};

export const products: Product[] = [
  {
    slug: "scope",
    name: "Scy Scope",
    headline: "Explore dados públicos.",
    description:
      "Consulte dados públicos organizados gratuitamente. Para empresas, planos pagos de acesso por API.",
    features: ["Consultas gratuitas", "API empresarial"],
    status: "em-desenvolvimento",
    appUrl: process.env.NEXT_PUBLIC_SCOPE_URL || null,
    preview: "sql",
  },
  {
    slug: "pivot",
    name: "Scy Pivot",
    headline: "Transforme perguntas em análises.",
    description:
      "Cruze dados em tabelas dinâmicas no navegador. Salve suas visões, filtros e relatórios e compartilhe estudos no LinkedIn.",
    features: ["Consultas gratuitas", "Análises salvas"],
    status: "em-desenvolvimento",
    appUrl: process.env.NEXT_PUBLIC_PIVOT_URL || null,
    preview: "pivot",
  },
  {
    slug: "canvas",
    name: "Scy Canvas",
    headline: "Dê forma às suas análises.",
    description:
      "Crie gráficos e painéis a partir da mesma base de dados do Scy Pivot. Organize suas visualizações em um ambiente gratuito.",
    features: ["Criação visual", "Base compartilhada"],
    status: "em-desenvolvimento",
    appUrl: process.env.NEXT_PUBLIC_CANVAS_URL || null,
    preview: "chart",
  },
];

export const statusLabel: Record<ProductStatus, string> = {
  "em-desenvolvimento": "Em desenvolvimento",
  beta: "Beta",
  disponivel: "Disponível",
};

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function productHref(product: Product) {
  return product.appUrl ?? `/produtos/${product.slug}`;
}
