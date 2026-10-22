# ScyQuantix — site e apps

Monorepo (pnpm + Turborepo) da ScyQuantix. Nesta fase o site é uma única página
institucional (`/`), só informativa: o único menu é o de âncoras do cabeçalho (rola até a seção,
sem sair da página); sem botões, formulários ou links de contato.
A estrutura já está pronta para receber os produtos (Scy Scope, Scy Pivot, Scy Canvas).

```
apps/
  web/                    Landing page (Next.js 16, App Router, Tailwind v4)
packages/
  ui/                     Design system: tokens da marca, logo SVG, componentes base
  typescript-config/      tsconfig compartilhado
```

## Fonte de verdade

`docs/kit-frontpage/` — kit da front page. Comece por `ESPECIFICACAO-MESTRA.md` (v2.0):
escopo, copy, sistema visual, contraste e critérios de aceite. Prevalece sobre o resto do kit.

## Rodando

```bash
corepack enable          # uma vez: disponibiliza o pnpm da versão fixada
pnpm install
pnpm dev                 # http://localhost:3000
pnpm build               # build de produção de todos os apps
pnpm typecheck
pnpm verificar           # depois do build: copy, estrutura e só links internos na home
```

Copie `apps/web/.env.example` para `apps/web/.env.local` e ajuste os valores.

## Onde mexer

| O quê | Arquivo |
| --- | --- |
| Textos da página (fonte única) | `apps/web/src/content/home.pt-BR.json` — depois rode `python3 docs/kit-frontpage/gerar-derivados.py` |
| Seções da home | `apps/web/src/components/home/` (uma por seção, na ordem de `app/page.tsx`) |
| Prévias dos produtos | `apps/web/src/components/home/previews/` |
| Metadados dos produtos (rota, status, app) | `apps/web/src/config/products.ts` |
| URL canônica, título/descrição, foto do hero (`heroImage`) | `apps/web/src/config/site.ts` |
| Cores, escala tipográfica e respiros | `packages/ui/src/styles.css` (tokens do kit) |
| Logo (símbolo + nome em contornos SVG) | `packages/ui/src/components/logo-paths.ts`, `logo.tsx`; arquivos avulsos em `apps/web/public/` |

**Contraste:** o ciano oficial (`cyan-500`) só em decoração ou sobre navy. Texto ciano sobre
fundo claro usa `cyan-ink` (#007D8A); `<Highlight>` já escolhe pelo `tone`.

## Escalando

- **Novo app** (ex.: `apps/scope`): crie com `next`, dependa de `@scyquantix/ui` e
  `@scyquantix/typescript-config`, importe `@scyquantix/ui/styles.css` e adicione
  `transpilePackages: ["@scyquantix/ui"]` no `next.config.ts`.
- **Páginas de produto**: o código de `/produtos/<slug>` continua no repositório, mas
  as rotas redirecionam temporariamente (307) para `/` — ver `next.config.ts`.
  Para reabri-las, remova o redirecionamento e volte a listá-las no `sitemap.ts`.
- **Foto do hero**: `apps/web/public/hero-escritorio.jpg`, ligada por `heroImage` em `site.ts`
  (com `null`, o hero volta ao estado provisório em navy).
- **Menu do cabeçalho**: itens em `brand.nav` do JSON (`label` + `target`, o `id` da seção).
  O `pnpm verificar` falha se um link apontar para fora da página ou para uma seção inexistente.
- **Domínio**: a origem canônica é `https://www.scyquantix.com`. O domínio sem `www`
  precisa de registro DNS e redirecionamento configurados no Vercel (fora do código).
- Pacotes compartilhados futuros (auth, cliente de API, conteúdo) entram em `packages/`.
