import { cn } from "@scyquantix/ui";
import type { PreviewKind } from "@/config/products";
import { Donut } from "./donut";

type Props = { kind: PreviewKind; label: string };

/**
 * Prévias conceituais e estáticas dos produtos (sem dados reais nem controles).
 * O desenho é decorativo; a legenda (somente leitor de tela) diz o que ele representa,
 * e a descrição completa fica no cartão do produto.
 */
export function ProductPreview({ kind, label }: Props) {
  return (
    <figure className="rounded-lg bg-white p-3 text-xs text-navy-700">
      <div
        aria-hidden
        className="grid gap-3 min-[400px]:grid-cols-[max-content_minmax(0,1fr)] [&>*]:min-w-0"
      >
        {kind === "sql" && <SqlPreview />}
        {kind === "pivot" && <PivotPreview />}
        {kind === "chart" && <ChartPreview />}
      </div>
      <figcaption className="sr-only">{label}</figcaption>
    </figure>
  );
}

function SideList({ title, items, active }: { title: string; items: string[]; active?: boolean }) {
  return (
    <div className="border-b border-mist pb-2 min-[400px]:border-r min-[400px]:border-b-0 min-[400px]:pr-2 min-[400px]:pb-0">
      <p className={cn("mb-2 w-fit font-semibold", active && "rounded bg-navy-700 px-2 py-1 text-white")}>{title}</p>
      <ul className="flex flex-wrap gap-x-3 gap-y-1 text-muted min-[400px]:flex-col min-[400px]:gap-2">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

/** Linhas neutras no lugar de valores. */
function Bars({ rows, cols, header = true }: { rows: number; cols: number; header?: boolean }) {
  return (
    <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
      {Array.from({ length: rows * cols }, (_, index) => (
        <span
          key={index}
          className={cn("h-2 rounded-sm", header && index < cols ? "bg-navy-100" : "bg-mist")}
        />
      ))}
    </div>
  );
}

function SqlPreview() {
  const lines: [string, string][] = [
    ["SELECT", ""],
    ["", "  regiao,"],
    ["", "  periodo,"],
    ["", "  valor"],
    ["FROM", " dados_publicos;"],
  ];
  return (
    <>
      <SideList title="Catálogo" items={["Dados", "Tabelas", "Documentação"]} active />
      <div className="flex flex-col gap-2">
        <p className="font-semibold">Consulta SQL</p>
        <pre className="font-mono text-xs leading-[1.45] break-words whitespace-pre-wrap">
          {lines.map(([keyword, rest], index) => (
            <span key={index} className="block">
              <span className="mr-2 text-navy-300">{index + 1}</span>
              <span className="font-semibold text-cyan-ink">{keyword}</span>
              {rest}
            </span>
          ))}
        </pre>
        <Bars rows={3} cols={3} />
      </div>
    </>
  );
}

function PivotPreview() {
  const areas: [string, string][] = [
    ["Linhas", "Região"],
    ["Colunas", "Período"],
    ["Valores", "Valor"],
  ];
  return (
    <>
      <SideList title="Dimensões" items={["Região", "Período", "Categoria"]} />
      <div className="flex flex-col gap-2">
        <dl className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-2 gap-y-1.5">
          {areas.map(([area, value]) => (
            <div key={area} className="contents">
              <dt className="text-muted">{area}</dt>
              <dd className="truncate rounded bg-navy-50 px-1.5 py-0.5 font-medium">{value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-1 grid grid-cols-[auto_minmax(0,1fr)] gap-1">
          <span className="w-5" />
          <Bars rows={1} cols={3} />
          {[0, 1, 2].map((row) => (
            <div key={row} className="contents">
              <span className="h-2 w-5 rounded-sm bg-navy-100" />
              <Bars rows={1} cols={3} header={false} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function ChartPreview() {
  const bars = [35, 55, 42, 70, 88, 64, 95];
  return (
    <>
      <SideList title="Elementos" items={["Barras", "Linhas", "Indicadores"]} />
      <div className="flex h-40 flex-col gap-2">
        <span className="h-2 w-2/3 rounded-full bg-navy-100" />
        <div className="flex min-h-0 flex-1 items-end gap-3">
          <div className="flex h-full min-w-0 flex-1 items-end gap-1 border-b border-l border-mist pl-1">
            {bars.map((height, index) => (
              <span
                key={index}
                style={{ height: `${height}%` }}
                className={cn("flex-1 rounded-t-sm", index % 2 ? "bg-navy-700" : "bg-cyan-500")}
              />
            ))}
          </div>
          <div className="flex flex-col items-center gap-2">
            <Donut className="size-14" />
            <span className="h-2 w-10 rounded-full bg-mist" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <span className="h-5 rounded border border-mist bg-ice" />
          <span className="h-5 rounded border border-mist bg-ice" />
        </div>
      </div>
    </>
  );
}
