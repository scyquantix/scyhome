import { Container, SectionHeader } from "@scyquantix/ui";
import { steps } from "@/config/content";

export function HowWeWork() {
  return (
    <section id="como-trabalhamos" className="bg-sky-wash py-20 lg:py-24">
      <Container>
        <SectionHeader title="Como trabalhamos" />
        <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, index) => (
            <li key={step.title} className="relative">
              <div className="flex items-center gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-cyan-500 bg-white font-display font-bold text-navy-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {index < steps.length - 1 && (
                  <span aria-hidden className="hidden h-px flex-1 bg-cyan-500/40 lg:block" />
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
