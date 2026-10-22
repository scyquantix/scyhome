import type { LucideIcon } from "lucide-react";
import { Boxes, ChartColumnIncreasing, Cog, Database } from "lucide-react";
import { Container, Highlight, SectionHeader } from "@scyquantix/ui";
import { content, splitTail, type SolutionIcon } from "@/content/home";

const icons: Record<SolutionIcon, LucideIcon> = {
  database: Database,
  cog: Cog,
  "chart-column-increasing": ChartColumnIncreasing,
  boxes: Boxes,
};

export function SolutionsSection() {
  const { eyebrow, title, items } = content.solutions;
  const [start, end] = splitTail(title, 2);
  return (
    <section id="solucoes" className="py-section">
      <Container>
        <SectionHeader
          eyebrow={eyebrow}
          title={
            <>
              {start}
              <Highlight>{end}</Highlight>
            </>
          }
        />
        <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-12 lg:gap-6">
          {items.map((item) => {
            const Icon = icons[item.icon];
            return (
              <li
                key={item.title}
                className="flex flex-col gap-4 rounded-lg border border-line bg-white p-6 min-[400px]:flex-row min-[400px]:gap-5 lg:p-7"
              >
                <Icon aria-hidden strokeWidth={1.5} className="size-11 shrink-0 text-navy-700" />
                <div className="min-w-0">
                  <h3 className="font-display text-xl leading-tight font-semibold text-navy-700">{item.problem}</h3>
                  <p className="mt-1.5 text-sm font-semibold text-cyan-ink">{item.title}</p>
                  <p className="mt-2 text-muted">{item.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
