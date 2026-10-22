import { Container, SectionHeader } from "@scyquantix/ui";
import { content } from "@/content/home";

export function ProcessSection() {
  const { title, items } = content.process;
  return (
    <section id="processo" className="bg-ice py-section">
      <Container>
        <SectionHeader title={title} />
        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-6">
          {items.map((step, index) => (
            <li key={step.number}>
              <div className="flex items-center gap-4">
                {/* A lista ordenada já anuncia a posição; o número é visual. */}
                <span
                  aria-hidden
                  className="flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-cyan-500 bg-white font-display font-bold text-navy-700"
                >
                  {step.number}
                </span>
                {index < items.length - 1 && (
                  <span aria-hidden className="hidden h-px flex-1 bg-cyan-500/50 lg:block" />
                )}
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-navy-700">{step.title}</h3>
              <p className="mt-1 text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
