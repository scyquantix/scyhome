import { Container, Highlight, SectionHeader } from "@scyquantix/ui";
import { solutions } from "@/config/content";

export function Solutions() {
  return (
    <section id="solucoes" className="py-20 lg:py-28">
      <Container>
        <SectionHeader
          eyebrow="Soluções"
          title={
            <>
              O que sua empresa <Highlight>precisa resolver?</Highlight>
            </>
          }
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {solutions.map(({ icon: Icon, problem, service, description }) => (
            <li
              key={service}
              className="flex gap-5 rounded-xl border border-mist bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8"
            >
              <Icon aria-hidden strokeWidth={1.5} className="size-10 shrink-0 text-navy-700" />
              <div>
                <h3 className="font-display text-lg font-semibold text-navy-700">{problem}</h3>
                <p className="mt-1 text-sm font-semibold text-cyan-600">{service}</p>
                <p className="mt-2 text-muted">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
