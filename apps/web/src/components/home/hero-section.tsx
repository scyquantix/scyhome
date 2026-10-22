import Image from "next/image";
import { Container, Eyebrow } from "@scyquantix/ui";
import { heroImage } from "@/config/site";
import { content } from "@/content/home";

export function HeroSection() {
  const { eyebrow, title, description, signature } = content.hero;
  return (
    <section id="apresentacao" className="relative isolate overflow-hidden bg-navy-800 text-white">
      <HeroBackdrop />
      <Container className="flex items-center py-16 sm:py-20 lg:min-h-[520px]">
        <div className="max-w-2xl lg:max-w-[58%]">
          <Eyebrow tone="light">{eyebrow}</Eyebrow>
          <h1 className="mt-6 font-display text-h1 font-bold tracking-tight text-balance">
            <span className="lg:block">{title[0]}</span>{" "}
            <span className="text-cyan-500 lg:block">{title[1]}</span>
          </h1>
          <p className="mt-6 max-w-xl text-body text-navy-100">{description}</p>
          <p className="mt-8 flex items-center gap-3 text-sm font-medium text-cyan-300">
            <span aria-hidden className="h-0.5 w-8 bg-cyan-500" />
            {signature}
          </p>
        </div>
      </Container>
    </section>
  );
}

/**
 * Foto do escritório (decorativa) com sobreposição navy, mais densa à esquerda.
 * Sem a foto limpa, fica o estado provisório em navy: fidelidade visual pendente.
 */
function HeroBackdrop() {
  if (!heroImage) {
    return <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 to-navy-800" />;
  }
  return (
    <div aria-hidden className="absolute inset-0 -z-10">
      <Image src={heroImage.src} alt="" fill priority sizes="100vw" className="object-cover object-[70%_center]" />
      <div className="absolute inset-0 bg-navy-950/80 lg:bg-transparent lg:bg-gradient-to-r lg:from-navy-950/95 lg:via-navy-900/75 lg:to-navy-900/10" />
    </div>
  );
}
