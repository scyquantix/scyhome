import { Container, Highlight } from "@scyquantix/ui";
import { content, splitTail } from "@/content/home";

/** Encerramento institucional; nesta fase a página não oferece contato. */
export function PurposeSection() {
  const { title, description } = content.closing;
  const [start, end] = splitTail(title, 4);
  return (
    <section id="proposito" className="py-section">
      <Container>
        <span aria-hidden className="block h-0.5 w-12 bg-cyan-500" />
        <h2 className="mt-6 max-w-4xl font-display text-2xl leading-snug font-bold tracking-tight text-balance text-navy-700 sm:text-[1.75rem] lg:text-[2.125rem]">
          {start}
          <Highlight>{end}</Highlight>
        </h2>
        <p className="mt-4 text-body text-muted">{description}</p>
      </Container>
    </section>
  );
}
