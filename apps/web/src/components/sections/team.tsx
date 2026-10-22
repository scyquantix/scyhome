import { Container, Highlight, SectionHeader } from "@scyquantix/ui";
import { founders } from "@/config/content";

export function Team() {
  return (
    <section id="quem-somos" className="py-20 lg:py-28">
      <Container>
        <SectionHeader
          eyebrow="Quem somos"
          title={
            <>
              Visão de negócio e <Highlight>capacidade técnica.</Highlight>
            </>
          }
          description="Experiências complementares para compreender o negócio e construir a solução."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {founders.map((founder) => (
            <article
              key={founder.name}
              className="relative overflow-hidden rounded-xl border border-mist bg-white p-8"
            >
              <HexPattern />
              <h3 className="font-display text-xl font-bold text-navy-700">{founder.name}</h3>
              <p className="mt-1 text-sm font-semibold text-cyan-600">{founder.role}</p>
              <p className="relative mt-4 text-muted">
                {founder.bio.map((part, index) =>
                  index % 2 === 1 ? (
                    <strong key={index} className="font-semibold text-navy-700">
                      {part}
                    </strong>
                  ) : (
                    part
                  ),
                )}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function HexPattern() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 120 120"
      className="pointer-events-none absolute -top-6 -right-6 w-40 text-cyan-500/15"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M60 8l40 23v46l-40 23-40-23V31z" />
      <path d="M60 30l21 12v24L60 78 39 66V42z" />
    </svg>
  );
}
