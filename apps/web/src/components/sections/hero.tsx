import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants, Container, Eyebrow, LogoSymbol } from "@scyquantix/ui";
import { contactHref } from "@/config/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-800 text-white">
      <HeroBackdrop />
      <Container className="grid items-center gap-12 py-20 lg:grid-cols-[1.15fr_1fr] lg:py-28">
        <div>
          <Eyebrow tone="light">Tecnologia orientada por evidências</Eyebrow>
          <h1 className="mt-6 font-display text-4xl leading-[1.08] font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Soluções em dados.
            <span className="block text-cyan-500">Do desafio à entrega.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-navy-100">
            Integramos dados de diferentes fontes, automatizamos relatórios e desenvolvemos painéis e
            aplicações sob medida para apoiar a gestão da sua empresa.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href={contactHref} className={buttonVariants({ size: "lg" })}>
              Converse sobre seu desafio <ArrowRight aria-hidden className="size-4" />
            </a>
            <Link href="/#solucoes" className={buttonVariants({ variant: "outline-light", size: "lg" })}>
              Conheça nossas soluções <ArrowRight aria-hidden className="size-4" />
            </Link>
          </div>
          <p className="mt-10 flex items-center gap-3 text-sm font-medium text-cyan-300">
            <span aria-hidden className="h-0.5 w-8 bg-cyan-500" />
            Método, clareza e valor real.
          </p>
        </div>

        <div aria-hidden className="relative mx-auto hidden w-full max-w-sm lg:block">
          <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl" />
          <LogoSymbol className="relative w-full drop-shadow-[0_20px_50px_rgba(0,194,212,0.25)]" />
        </div>
      </Container>
    </section>
  );
}

/** Grade técnica e brilho ciano, no lugar da fotografia do mockup. */
function HeroBackdrop() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-800 to-navy-700" />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at 70% 40%, #000 20%, transparent 75%)",
        }}
      />
      <div className="absolute -top-40 right-[-10%] size-[36rem] rounded-full bg-cyan-500/10 blur-3xl" />
    </div>
  );
}
