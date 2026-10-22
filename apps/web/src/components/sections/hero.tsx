import Image from "next/image";
import { Container, Eyebrow } from "@scyquantix/ui";
import { heroImage } from "@/config/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-800 text-white">
      <HeroBackdrop />
      <Container className="py-20 sm:py-24 lg:py-28">
        <div className="max-w-xl lg:max-w-2xl">
          <Eyebrow tone="light">Tecnologia orientada por evidências</Eyebrow>
          <h1 className="mt-6 font-display text-4xl leading-[1.08] font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Soluções em dados.
            <span className="block text-cyan-500">Do desafio à entrega.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-navy-100">
            Integramos dados de diferentes fontes, automatizamos relatórios e desenvolvemos painéis e
            aplicações sob medida para apoiar a gestão da sua empresa.
          </p>
          <p className="mt-8 flex items-center gap-3 text-sm font-medium text-cyan-300">
            <span aria-hidden className="h-0.5 w-8 bg-cyan-500" />
            Método, clareza e valor real.
          </p>
        </div>
      </Container>
    </section>
  );
}

/**
 * Foto do escritório com sobreposição escura (mais densa à esquerda, onde fica o texto).
 * Sem foto configurada, usa a grade técnica com brilho ciano.
 */
function HeroBackdrop() {
  if (heroImage) {
    return (
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_center]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-navy-950/75 lg:bg-transparent lg:bg-gradient-to-r lg:from-navy-950/95 lg:via-navy-900/75 lg:to-navy-900/10"
        />
      </div>
    );
  }

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
