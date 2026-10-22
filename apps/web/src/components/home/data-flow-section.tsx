import type { ReactNode } from "react";
import { ArrowDown, ArrowRight, Cloud, Database } from "lucide-react";
import { Container, Highlight, SectionHeader } from "@scyquantix/ui";
import { content, splitTail } from "@/content/home";
import { Donut } from "./previews/donut";

const illustrations = [<SourcesIllustration key="sources" />, <TableIllustration key="table" />, <DashboardIllustration key="dashboard" />];

/** Exemplo ilustrativo: fontes → dados organizados → painel. Sem dados reais. */
export function DataFlowSection() {
  const { title, description, steps, caption } = content.example;
  const [start, end] = splitTail(title, 3);
  return (
    <section id="exemplo" className="bg-ice py-section">
      <Container>
        <SectionHeader
          title={
            <>
              {start}
              <Highlight>{end}</Highlight>
            </>
          }
          description={description}
        />
        <figure className="mt-10 lg:mt-12">
          <ol className="flex flex-col gap-4 lg:flex-row lg:items-center">
            {steps.map((step, index) => (
              <li key={step} className="flex min-w-0 flex-1 flex-col gap-4 lg:flex-row lg:items-center">
                {index > 0 && (
                  <span aria-hidden className="flex justify-center text-cyan-500 lg:-mt-9">
                    <ArrowRight className="hidden size-6 lg:block" />
                    <ArrowDown className="size-6 lg:hidden" />
                  </span>
                )}
                <div className="min-w-0 flex-1">
                  <div
                    aria-hidden
                    className="flex h-40 items-center justify-center rounded-lg border border-line bg-white p-5 shadow-sm"
                  >
                    {illustrations[index]}
                  </div>
                  <p className="mt-3 text-center font-display text-base font-semibold text-navy-700">{step}</p>
                </div>
              </li>
            ))}
          </ol>
          <figcaption className="mt-8 text-center text-sm text-muted">{caption}</figcaption>
        </figure>
      </Container>
    </section>
  );
}

function Tile({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="flex size-14 items-center justify-center rounded-lg border border-line bg-ice text-navy-700">
        {children}
      </span>
      <span className="h-1.5 w-10 rounded-full bg-mist" />
      <span className="h-1.5 w-7 rounded-full bg-mist" />
    </div>
  );
}

function SourcesIllustration() {
  return (
    <div className="flex gap-4">
      <Tile>
        <Database strokeWidth={1.5} className="size-7" />
      </Tile>
      <Tile>
        <span className="rounded-sm bg-navy-700 px-1.5 py-0.5 text-xs font-bold text-white">CSV</span>
      </Tile>
      <Tile>
        <Cloud strokeWidth={1.5} className="size-7 fill-cyan-500 text-cyan-500" />
      </Tile>
    </div>
  );
}

function TableIllustration() {
  return (
    <div className="w-full max-w-56">
      <div className="mb-2 flex justify-between">
        <span className="h-2 w-16 rounded-full bg-navy-100" />
        <span className="h-2 w-6 rounded-full bg-mist" />
      </div>
      <div className="flex flex-col gap-1.5 rounded-md border border-line p-2">
        {[0, 1, 2, 3, 4].map((row) => (
          <div key={row} className="flex items-center gap-2">
            <span className={row % 2 ? "size-1.5 rounded-full bg-cyan-500" : "size-1.5 rounded-full bg-navy-700"} />
            <span className="h-1.5 flex-[2] rounded-full bg-mist" />
            <span className="h-1.5 flex-1 rounded-full bg-mist" />
            <span className="h-1.5 flex-1 rounded-full bg-mist" />
          </div>
        ))}
      </div>
    </div>
  );
}

function DashboardIllustration() {
  const bars = [30, 50, 40, 75, 60, 90, 70];
  return (
    <div className="w-full max-w-60">
      <div className="mb-3 flex items-center justify-between">
        <span className="h-2 w-20 rounded-full bg-navy-700" />
        <span className="flex gap-1">
          <span className="h-2 w-5 rounded-full bg-mist" />
          <span className="h-2 w-5 rounded-full bg-mist" />
        </span>
      </div>
      <div className="flex items-end gap-4">
        <div className="flex h-16 flex-1 items-end gap-1 border-b border-l border-line pl-1">
          {bars.map((height, index) => (
            <span
              key={index}
              style={{ height: `${height}%` }}
              className={index % 2 ? "flex-1 rounded-t-sm bg-cyan-500" : "flex-1 rounded-t-sm bg-navy-700"}
            />
          ))}
        </div>
        <Donut className="size-16" />
      </div>
    </div>
  );
}

