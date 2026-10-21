import { ArrowRight } from "lucide-react";
import { buttonVariants, Container, Highlight } from "@scyquantix/ui";
import { contactHref, siteConfig } from "@/config/site";

export function ContactCta() {
  return (
    <section id="contato" className="py-20 lg:py-24">
      <Container className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-navy-700 sm:text-4xl">
            Vamos conversar sobre <Highlight>seu desafio?</Highlight>
          </h2>
          <p className="mt-3 text-lg text-muted">
            Conte-nos o que precisa resolver. Entraremos em contato para entender o contexto e avaliar
            os próximos passos.
          </p>
        </div>
        <div className="flex flex-col items-start gap-2 lg:items-end">
          <a href={contactHref} className={buttonVariants({ size: "lg" })}>
            Fale conosco <ArrowRight aria-hidden className="size-4" />
          </a>
          <span className="text-sm text-muted">{siteConfig.contactEmail}</span>
        </div>
      </Container>
    </section>
  );
}
