import { cn } from "@scyquantix/ui";
import type { Product } from "@/config/products";

type Props = { kind: Product["preview"]; compact?: boolean };

/** Prévias conceituais dos produtos, desenhadas em HTML/CSS (sem dados reais). */
export function ProductPreview({ kind, compact = false }: Props) {
  return (
    <div aria-hidden className={cn("text-navy-700", compact ? "text-[0.6rem]" : "text-xs")}>
      {kind === "sql" && <SqlPreview />}
      {kind === "pivot" && <PivotPreview />}
      {kind === "chart" && <ChartPreview />}
    </div>
  );
}

function Sidebar({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-1.5">
      {items.map((item, index) => (
        <li
          key={item}
          className={cn(
            "rounded px-2 py-1",
            index === 0 ? "bg-navy-700 font-semibold text-white" : "text-muted",
          )}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function SqlPreview() {
  const lines = [
    ["SELECT", ""],
    ["", "  cliente_id,"],
    ["", "  data_evento,"],
    ["", "  tipo_evento,"],
    ["", "  valor"],
    ["FROM", " eventos"],
    ["WHERE", " ..."],
  ];
  return (
    <div className="grid grid-cols-[5.5rem_1fr] gap-3">
      <Sidebar items={["Catálogo", "Dados", "Tabelas", "Documentação"]} />
      <div className="rounded border border-mist p-2">
        <p className="mb-1.5 font-semibold">Consulta SQL</p>
        <pre className="font-mono leading-relaxed">
          {lines.map(([keyword, rest], index) => (
            <span key={index} className="block">
              <span className="mr-2 text-navy-300">{index + 1}</span>
              <span className="font-semibold text-cyan-600">{keyword}</span>
              {rest}
            </span>
          ))}
        </pre>
        <div className="mt-2 flex justify-end">
          <span className="rounded bg-cyan-500 px-2 py-0.5 font-semibold text-navy-900">▶ Executar</span>
        </div>
      </div>
    </div>
  );
}

function PivotPreview() {
  return (
    <div className="grid grid-cols-[5.5rem_1fr] gap-3">
      <div>
        <p className="mb-1.5 font-semibold">Dimensões</p>
        <ul className="flex flex-col gap-1.5 text-muted">
          {["Cliente", "Produto", "Região", "Período", "Canal"].map((item, index) => (
            <li key={item} className="flex items-center gap-1.5">
              <span
                className={cn(
                  "size-2.5 rounded-sm border border-navy-300",
                  index < 3 && "border-cyan-500 bg-cyan-500",
                )}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-2 content-start gap-2">
        <Field label="Linhas" value="Região" />
        <Field label="Colunas" value="Período" />
        <Field label="Valores" value="Valor" />
        <div className="col-span-2 mt-1 grid grid-cols-3 gap-1">
          {Array.from({ length: 9 }, (_, index) => (
            <span key={index} className={cn("h-2.5 rounded-sm", index < 3 ? "bg-navy-100" : "bg-mist")} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="mb-0.5 text-muted">{label}</p>
      <p className="rounded border border-mist px-1.5 py-0.5">{value}</p>
    </div>
  );
}

function ChartPreview() {
  const bars = [35, 55, 42, 70, 88, 64, 95];
  return (
    <div className="grid grid-cols-[5.5rem_1fr] gap-3">
      <div>
        <p className="mb-1.5 font-semibold">Elementos</p>
        <ul className="flex flex-col gap-1.5 text-muted">
          {["Barras", "Linhas", "Pizza", "Tabela", "Texto", "Filtros"].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-[1fr_auto] items-end gap-3">
        <div className="flex h-20 items-end gap-1 border-b border-l border-mist pl-1">
          {bars.map((height, index) => (
            <span
              key={index}
              style={{ height: `${height}%` }}
              className={cn("flex-1 rounded-t-sm", index % 2 ? "bg-navy-700" : "bg-cyan-500")}
            />
          ))}
        </div>
        <span
          className="size-12 rounded-full"
          style={{ background: "conic-gradient(#00c2d4 0 62%, #0b2d4a 62% 85%, #e5eaf0 85%)" }}
        />
      </div>
    </div>
  );
}
