import { Container, Highlight, LogoSymbol } from "@scyquantix/ui";

/** Encerramento institucional; nesta fase a página não oferece contato. */
export function Closing() {
  return (
    <section className="py-20 lg:py-24">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-12">
        <LogoSymbol aria-hidden className="h-16 w-auto self-start sm:h-20 sm:self-center" />
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl font-bold tracking-tight text-balance text-navy-700 sm:text-3xl">
            Nascemos para gerar valor para pessoas, negócios e sociedade, através do{" "}
            <Highlight>uso responsável da tecnologia.</Highlight>
          </h2>
          <p className="mt-4 text-muted">Scy Scope, Scy Pivot e Scy Canvas estão em desenvolvimento.</p>
        </div>
      </Container>
    </section>
  );
}
