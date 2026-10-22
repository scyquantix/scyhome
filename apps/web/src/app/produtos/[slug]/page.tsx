import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Badge, buttonVariants, Container, Highlight } from "@scyquantix/ui";
import { ProductPreview } from "@/components/previews/product-preview";
import { getProduct, products, statusLabel } from "@/config/products";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps<"/produtos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return { title: product.name, description: product.description };
}

export default async function ProductPage({ params }: PageProps<"/produtos/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const [first, ...rest] = product.name.split(" ");

  return (
    <section className="bg-navy-800 text-white">
      <Container className="grid gap-12 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        <div>
          <Link
            href="/#produtos"
            className="inline-flex items-center gap-2 text-sm text-navy-100 hover:text-white"
          >
            <ArrowLeft aria-hidden className="size-4" /> Todos os produtos
          </Link>
          <Badge tone="outline-light" className="mt-8 flex w-fit">
            {statusLabel[product.status]}
          </Badge>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {first} <Highlight>{rest.join(" ")}</Highlight>
          </h1>
          <p className="mt-4 font-display text-xl font-semibold">{product.headline}</p>
          <p className="mt-3 max-w-xl text-lg text-navy-100">{product.description}</p>
          <p className="mt-4 text-sm font-medium text-cyan-300">{product.features.join(" · ")}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            {product.appUrl && (
              <a href={product.appUrl} className={buttonVariants({ size: "lg" })}>
                Acessar o {product.name} <ArrowRight aria-hidden className="size-4" />
              </a>
            )}
          </div>
        </div>
        <div className="rounded-xl bg-white p-4 shadow-2xl shadow-black/30">
          <ProductPreview kind={product.preview} />
          <p className="mt-3 text-center text-xs text-muted">Prévia conceitual. Produto em desenvolvimento.</p>
        </div>
      </Container>
    </section>
  );
}
