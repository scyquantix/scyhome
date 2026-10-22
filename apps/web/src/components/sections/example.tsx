import { ArrowDown, ArrowRight, Cloud, Database } from "lucide-react";
import { Container, Highlight, SectionHeader } from "@scyquantix/ui";

const stages = [
  { title: "Sistemas e arquivos", illustration: <SourcesIllustration /> },
  { title: "Dados organizados", illustration: <TableIllustration /> },
  { title: "Painel de acompanhamento", illustration: <DashboardIllustration /> },
];

export function Example() {
  return (
    <section id="exemplo" className="bg-sky-wash py-20 lg:py-24">
      <Container>
        <SectionHeader
          title={
            <>
              Da informação dispersa à <Highlight>visão do negócio.</Highlight>
            </>
          }
          description="Um exemplo de projeto: reunir dados de vendas e despesas em uma visão gerencial."
        />
        <ol className="mt-12 flex flex-col items-stretch gap-4 lg:flex-row lg:items-center">
          {stages.map((stage, index) => (
            <li key={stage.title} className="flex flex-1 flex-col items-stretch gap-4 lg:flex-row lg:items-center">
              {index > 0 && (
                <span aria-hidden className="flex justify-center text-cyan-500 lg:-mt-8">
                  <ArrowRight className="hidden size-6 lg:block" />
                  <ArrowDown className="size-6 lg:hidden" />
                </span>
              )}
              <div className="flex-1">
                <div
                  aria-hidden
                  className="flex h-36 items-center justify-center rounded-xl border border-mist bg-white p-5 shadow-sm"
                >
                  {stage.illustration}
                </div>
                <h3 className="mt-3 text-center font-display text-sm font-semibold text-navy-700">
                  {stage.title}
                </h3>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-center text-xs text-muted">
          Exemplo ilustrativo de solução, sem dados de clientes.
        </p>
      </Container>
    </section>
  );
}

function Tile({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span className="flex size-14 items-center justify-center rounded-lg border border-mist bg-mist-50 text-navy-700">
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
        <span className="rounded-sm bg-navy-700 px-1 py-0.5 text-[0.6rem] font-bold text-white">CSV</span>
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
      <div className="flex flex-col gap-1.5 rounded-md border border-mist p-2">
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
    <div className="flex w-full max-w-56 items-end gap-4">
      <div className="flex h-20 flex-1 items-end gap-1 border-b border-l border-mist pl-1">
        {bars.map((height, index) => (
          <span
            key={index}
            style={{ height: `${height}%` }}
            className={index % 2 ? "flex-1 rounded-t-sm bg-cyan-500" : "flex-1 rounded-t-sm bg-navy-700"}
          />
        ))}
      </div>
      <span
        className="relative size-16 shrink-0 rounded-full"
        style={{ background: "conic-gradient(#00c2d4 0 65%, #0b2d4a 65% 85%, #e5eaf0 85%)" }}
      >
        <span className="absolute inset-3 rounded-full bg-white" />
      </span>
    </div>
  );
}
