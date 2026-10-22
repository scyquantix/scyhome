#!/usr/bin/env node
/**
 * Verificação estática da home (ESPECIFICACAO-MESTRA.md, cap. 26.2), sem dependências.
 * Lê o HTML gerado por `pnpm build` e confere: copy do JSON presente, um h1, ordem das
 * seções, ausência de controles/ações e nomes antigos, e o kit em sincronia com a copy.
 * Uso: pnpm build && node scripts/verificar-home.mjs
 */
import { readFileSync } from "node:fs";

const raiz = new URL("../", import.meta.url);
const ler = (caminho) => readFileSync(new URL(caminho, raiz), "utf8");

const copy = JSON.parse(ler("apps/web/src/content/home.pt-BR.json"));
const html = ler("apps/web/.next/server/app/index.html");
const corpo = html.slice(html.indexOf("<body"));
const semScripts = corpo.replace(/<script[\s\S]*?<\/script>/g, "");
const texto = semScripts
  .replace(/<!--[\s\S]*?-->/g, "")
  .replace(/<[^>]+>/g, "")
  .replace(/&amp;/g, "&")
  .replace(/&quot;/g, '"')
  .replace(/&#x27;|&#39;/g, "'")
  .replace(/&lt;/g, "<")
  .replace(/&gt;/g, ">");

const falhas = [];
const checar = (ok, mensagem) => ok || falhas.push(mensagem);

// T01 — toda string do JSON aparece na página (exceto identificadores técnicos).
const ignorar = new Set(["icon", "emphasis", "preview"]);
const strings = (valor, chave) =>
  typeof valor === "string"
    ? ignorar.has(chave) ? [] : [valor]
    : Object.entries(valor).flatMap(([k, v]) => strings(v, Array.isArray(valor) ? chave : k));
for (const s of strings(copy)) checar(texto.includes(s), `copy ausente: "${s}"`);
for (const p of copy.products.items) checar(texto.includes(p.preview), `legenda da prévia ausente: "${p.preview}"`);

// T02 — estrutura.
checar((semScripts.match(/<h1[\s>]/g) ?? []).length === 1, "deve haver exatamente um h1");
const ids = ["apresentacao", "solucoes", "exemplo", "fundadores", "processo", "produtos", "proposito"];
const posicoes = ids.map((id) => semScripts.indexOf(`id="${id}"`));
checar(posicoes.every((p) => p >= 0), `seções ausentes: ${ids.filter((_, i) => posicoes[i] < 0).join(", ")}`);
checar(posicoes.every((p, i) => i === 0 || p > posicoes[i - 1]), "seções fora de ordem");
checar(semScripts.includes('<main id="conteudo"'), "main#conteudo ausente");

// T03 — nenhuma ação: só o link "Pular para o conteúdo".
const links = [...semScripts.matchAll(/<a\s[^>]*href="([^"]*)"/g)].map((m) => m[1]);
checar(links.length === 1 && links[0] === "#conteudo", `links inesperados: ${links.join(", ")}`);
for (const [nome, re] of [
  ["button", /<button[\s>]/],
  ["form", /<form[\s>]/],
  ["input", /<input[\s>]/],
  ["select", /<select[\s>]/],
  ["textarea", /<textarea[\s>]/],
  ["nav", /<nav[\s>]/],
  ['role="button"', /role="button"/],
  ["contenteditable", /contenteditable/],
  ["mailto", /mailto:/],
  ["tabindex >= 0", /tabindex="(?!-)\d+"/i],
]) checar(!re.test(semScripts), `elemento proibido: ${nome}`);
for (const antigo of ["BR_ Explorer", "The Cubs", "The Publisher", "Explorador de dados", "Executar", "Conheça", "LinkedIn ", "Fale conosco", "Vamos conversar"])
  checar(!texto.includes(antigo), `texto proibido: "${antigo}"`);

// Kit em sincronia com a copy (o kit é derivado; ver docs/kit-frontpage/gerar-derivados.py).
const kit = JSON.parse(ler("docs/kit-frontpage/03-textos/conteudo.pt-BR.json"));
checar(JSON.stringify(kit) === JSON.stringify(copy), "kit desatualizado: rode python3 docs/kit-frontpage/gerar-derivados.py");

if (falhas.length) {
  console.error(`✗ ${falhas.length} falha(s):\n- ${falhas.join("\n- ")}`);
  process.exit(1);
}
console.log(`✓ home verificada: ${strings(copy).length} textos, ${ids.length} seções, nenhuma ação além do skip link.`);
