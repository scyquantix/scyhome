/**
 * Copy da front page. Fonte única: `home.pt-BR.json` (origem: kit em docs/kit-frontpage).
 * Ao alterar o JSON, rode `python3 docs/kit-frontpage/gerar-derivados.py` para atualizar o kit.
 */
import data from "./home.pt-BR.json";

export type SolutionIcon = "database" | "cog" | "chart-column-increasing" | "boxes";

export type HomeContent = {
  brand: { name: string; tagline: string; domain: string; nav: { label: string; target: string }[] };
  hero: { eyebrow: string; title: [string, string]; description: string; signature: string };
  solutions: {
    eyebrow: string;
    title: string;
    items: { problem: string; title: string; description: string; icon: SolutionIcon }[];
  };
  example: { title: string; description: string; steps: [string, string, string]; caption: string };
  founders: {
    eyebrow: string;
    title: string;
    description: string;
    items: { name: string; role: string; description: string; emphasis?: string }[];
  };
  process: { title: string; items: { number: string; title: string; description: string }[] };
  products: {
    status: string;
    title: string;
    description: string;
    items: { name: string; title: string; description: string; caption: string; preview: string }[];
    caption: string;
  };
  closing: { title: string; description: string };
  footer: { tagline: string; domain: string; copyright: string };
};

export const content = data as HomeContent;

/**
 * Separa `text` em [antes, destaque, depois] para destacar um trecho conhecido sem injetar HTML.
 * Sem `emphasis` (ou se o trecho não aparecer), devolve o texto inteiro.
 */
export function splitEmphasis(text: string, emphasis?: string): [string, string, string] {
  const start = emphasis ? text.indexOf(emphasis) : -1;
  if (!emphasis || start < 0) return [text, "", ""];
  return [text.slice(0, start), emphasis, text.slice(start + emphasis.length)];
}

/**
 * Divide um título em [início, fim] para o destaque em ciano: `fim` são as últimas `words`
 * palavras. Ex.: "O que sua empresa precisa resolver?" com 2 → ["O que sua empresa ", "precisa resolver?"].
 */
export function splitTail(text: string, words: number): [string, string] {
  const parts = text.split(" ");
  return [parts.slice(0, -words).join(" ") + " ", parts.slice(-words).join(" ")];
}
