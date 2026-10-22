# ScyQuantix — site e apps

Monorepo (pnpm + Turborepo) da ScyQuantix. Nesta fase o site é uma única página
institucional (`/`), só informativa: sem menu, botões, formulários ou links de contato.
A estrutura já está pronta para receber os produtos (Scy Scope, Scy Pivot, Scy Canvas).

```
apps/
  web/                    Landing page (Next.js 16, App Router, Tailwind v4)
packages/
  ui/                     Design system: tokens da marca, logo SVG, componentes base
  typescript-config/      tsconfig compartilhado
```

## Rodando

```bash
corepack enable          # uma vez: disponibiliza o pnpm da versão fixada
pnpm install
pnpm dev                 # http://localhost:3000
pnpm build               # build de produção de todos os apps
pnpm typecheck
```

Copie `apps/web/.env.example` para `apps/web/.env.local` e ajuste os valores.

## Onde mexer

| O quê | Arquivo |
| --- | --- |
| Textos das seções (soluções, sócios, etapas) | `apps/web/src/config/content.ts` |
| Produtos (nome, textos, status, URL do app) | `apps/web/src/config/products.ts` |
| URL do site, foto do hero (`heroImage`) | `apps/web/src/config/site.ts` |
| Exemplo ilustrativo, encerramento | `apps/web/src/components/sections/example.tsx`, `closing.tsx` |
| Cores e tokens da marca | `packages/ui/src/styles.css` |
| Logo (símbolo + nome em contornos SVG) | `packages/ui/src/components/logo-paths.ts`, `logo.tsx`; arquivos avulsos em `apps/web/public/` |

## Escalando

- **Novo app** (ex.: `apps/scope`): crie com `next`, dependa de `@scyquantix/ui` e
  `@scyquantix/typescript-config`, importe `@scyquantix/ui/styles.css` e adicione
  `transpilePackages: ["@scyquantix/ui"]` no `next.config.ts`.
- **Páginas de produto**: o código de `/produtos/<slug>` continua no repositório, mas
  as rotas redirecionam temporariamente (307) para `/` — ver `next.config.ts`.
  Para reabri-las, remova o redirecionamento e volte a listá-las no `sitemap.ts`.
- **Foto do hero**: coloque o arquivo em `apps/web/public/` e preencha `heroImage`
  (`src` e `alt`) em `site.ts`. Sem ela, o hero usa o fundo azul de reserva.
- Pacotes compartilhados futuros (auth, cliente de API, conteúdo) entram em `packages/`.
