import { Container, Highlight, SectionHeader } from "@scyquantix/ui";
import { content, splitEmphasis, splitTail } from "@/content/home";

export function FoundersSection() {
  const { eyebrow, title, description, items } = content.founders;
  const [start, end] = splitTail(title, 2);
  return (
    <section id="fundadores" className="py-section">
      <Container>
        <SectionHeader
          eyebrow={eyebrow}
          title={
            <>
              {start}
              <Highlight>{end}</Highlight>
            </>
          }
          description={description}
        />
        <div className="mt-10 grid gap-5 lg:mt-12 lg:grid-cols-2 lg:gap-6">
          {items.map((founder) => {
            const [before, emphasis, after] = splitEmphasis(founder.description, founder.emphasis);
            return (
              <article
                key={founder.name}
                className="relative overflow-hidden rounded-lg border border-line bg-white p-6 sm:p-8"
              >
                <HexPattern />
                <h3 className="relative font-display text-xl font-bold text-navy-700">{founder.name}</h3>
                <p className="relative mt-1 text-sm font-semibold text-cyan-ink">{founder.role}</p>
                <p className="relative mt-4 text-muted">
                  {before}
                  {emphasis && <strong className="font-semibold text-navy-700">{emphasis}</strong>}
                  {after}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/** Hexágonos inspirados no símbolo, no canto superior, acima da biografia. */
function HexPattern() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 150 100"
      className="pointer-events-none absolute -top-3 -right-6 w-32 text-cyan-500/25"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M100 4l40 23v46l-40 23-40-23V27z" />
      <path d="M100 26l21 12v24l-21 12-21-12V38z" />
      <path d="M40 30l20 11.5v23L40 76 20 64.5v-23z" />
    </svg>
  );
}
