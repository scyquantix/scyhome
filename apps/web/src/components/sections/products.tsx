import { ArrowRight, ChartColumnIncreasing, LayoutGrid, Search, type LucideIcon } from "lucide-react";
import { Badge, buttonVariants, Container, Highlight } from "@scyquantix/ui";
import { ProductPreview } from "@/components/previews/product-preview";
import { productHref, products, type Product } from "@/config/products";

const icons: Record<Product["preview"], LucideIcon> = {
  sql: Search,
  pivot: LayoutGrid,
  chart: ChartColumnIncreasing,
};

export function Products() {
  return (
    <section id="produtos" className="relative isolate overflow-hidden bg-navy-800 py-20 text-white lg:py-28">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(0,194,212,0.15),transparent_60%)]"
      />
      <Container>
        <Badge tone="outline-light">Em desenvolvimento</Badge>
        <h2 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-5xl">
          Explore. Analise. <Highlight>Visualize.</Highlight>
        </h2>
        <p className="mt-3 text-lg text-navy-100">
          Três produtos ScyQuantix para transformar dados públicos em conhecimento.
        </p>

        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {products.map((product) => {
            const Icon = icons[product.preview];
            const [first, ...rest] = product.name.split(" ");
            return (
              <li
                key={product.slug}
                className="flex flex-col rounded-xl border border-white/10 bg-navy-900/60 p-6 backdrop-blur"
              >
                <h3 className="flex items-center gap-3 font-display text-2xl font-bold">
                  <Icon aria-hidden className="size-7 text-cyan-500" />
                  <span>
                    {first} <Highlight>{rest.join(" ")}</Highlight>
                  </span>
                </h3>
                <p className="mt-4 font-semibold">{product.headline}</p>
                <p className="mt-2 text-sm text-navy-100">{product.description}</p>
                <p className="mt-4 text-xs font-semibold text-cyan-300">{product.features.join(" · ")}</p>
                <div className="mt-5 flex-1 rounded-lg bg-white p-3">
                  <ProductPreview kind={product.preview} compact />
                </div>
                <a
                  href={productHref(product)}
                  className={buttonVariants({ className: "mt-5 w-full" })}
                >
                  Conheça o {product.name} <ArrowRight aria-hidden className="size-4" />
                </a>
              </li>
            );
          })}
        </ul>
        <p className="mt-8 text-center text-xs text-navy-300">Prévias conceituais. Produtos em desenvolvimento.</p>
      </Container>
    </section>
  );
}
