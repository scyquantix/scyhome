import { ChartColumnIncreasing, LayoutGrid, Search, type LucideIcon } from "lucide-react";
import { Badge, Container, Highlight } from "@scyquantix/ui";
import { products, type PreviewKind } from "@/config/products";
import { content, splitTail } from "@/content/home";
import { ProductPreview } from "./previews/product-preview";

const icons: Record<PreviewKind, LucideIcon> = {
  sql: Search,
  pivot: LayoutGrid,
  chart: ChartColumnIncreasing,
};

export function ProductsSection() {
  const { status, title, description, caption } = content.products;
  const [start, end] = splitTail(title, 1);
  return (
    <section id="produtos" className="relative isolate overflow-hidden bg-navy-800 py-section text-white">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(0,194,212,0.12),transparent_60%)]"
      />
      <Container>
        <Badge tone="outline-light">{status}</Badge>
        <h2 className="mt-5 font-display text-h2 font-bold tracking-tight text-balance">
          {start}
          <Highlight tone="light">{end}</Highlight>
        </h2>
        <p className="mt-3 text-body text-navy-100">{description}</p>

        <ul className="mt-10 grid gap-5 lg:mt-12 lg:grid-cols-3 lg:gap-6">
          {products.map((product) => {
            const Icon = icons[product.previewKind];
            const [first, ...rest] = product.name.split(" ");
            return (
              <li
                key={product.slug}
                className="flex min-w-0 flex-col rounded-lg border border-cyan-500/20 bg-navy-900/70 p-5 sm:p-6"
              >
                <h3 className="flex items-center gap-3 font-display text-2xl font-bold">
                  <Icon aria-hidden strokeWidth={1.75} className="size-7 shrink-0 text-cyan-500" />
                  <span>
                    {first} <Highlight tone="light">{rest.join(" ")}</Highlight>
                  </span>
                </h3>
                <p className="mt-4 font-semibold">{product.title}</p>
                <p className="mt-2 text-navy-100">{product.description}</p>
                <p className="mt-4 text-sm font-semibold text-cyan-300">{product.caption}</p>
                <div className="mt-5 flex flex-1 flex-col justify-end">
                  <ProductPreview
                    kind={product.previewKind}
                    label={`${product.name}, prévia conceitual: ${product.preview}.`}
                  />
                </div>
              </li>
            );
          })}
        </ul>
        <p className="mt-8 text-center text-sm text-navy-100">{caption}</p>
      </Container>
    </section>
  );
}

