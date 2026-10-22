/**
 * Registro dos produtos ScyQuantix. Textos vêm de `content/home.pt-BR.json`; aqui ficam
 * só os metadados técnicos (rota, status, app, tipo de prévia), ligados pelo nome do produto.
 * `preview` (do JSON) descreve a prévia em texto; `previewKind` escolhe o desenho.
 * As páginas /produtos/<slug> estão redirecionadas para / nesta fase (ver next.config.ts).
 */
import { content } from "@/content/home";

export type ProductStatus = "em-desenvolvimento" | "beta" | "disponivel";
export type PreviewKind = "sql" | "pivot" | "chart";

type ProductMeta = { slug: string; status: ProductStatus; appUrl: string | null; previewKind: PreviewKind };

const meta: Record<string, ProductMeta> = {
  "Scy Scope": { slug: "scope", status: "em-desenvolvimento", appUrl: process.env.NEXT_PUBLIC_SCOPE_URL || null, previewKind: "sql" },
  "Scy Pivot": { slug: "pivot", status: "em-desenvolvimento", appUrl: process.env.NEXT_PUBLIC_PIVOT_URL || null, previewKind: "pivot" },
  "Scy Canvas": { slug: "canvas", status: "em-desenvolvimento", appUrl: process.env.NEXT_PUBLIC_CANVAS_URL || null, previewKind: "chart" },
};

export const products = content.products.items.map((item) => {
  const itemMeta = meta[item.name];
  if (!itemMeta) throw new Error(`Produto sem metadados em config/products.ts: ${item.name}`);
  return { ...item, ...itemMeta };
});

export type Product = (typeof products)[number];

export const statusLabel: Record<ProductStatus, string> = {
  "em-desenvolvimento": "Em desenvolvimento",
  beta: "Beta",
  disponivel: "Disponível",
};

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
