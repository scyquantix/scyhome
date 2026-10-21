# ScyQuantix — site e apps

Monorepo (pnpm + Turborepo) da ScyQuantix. Começa com a landing page e já está
estruturado para receber os produtos (Scy Scope, Scy Pivot, Scy Canvas) e a plataforma.

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
| Menu, e-mail de contato, URL do site | `apps/web/src/config/site.ts` |
| Cores e tokens da marca | `packages/ui/src/styles.css` |
| Logo (símbolo + nome em contornos SVG) | `packages/ui/src/components/logo-paths.ts`, `logo.tsx`; arquivos avulsos em `apps/web/public/` |

## Escalando

- **Novo app** (ex.: `apps/scope`): crie com `next`, dependa de `@scyquantix/ui` e
  `@scyquantix/typescript-config`, importe `@scyquantix/ui/styles.css` e adicione
  `transpilePackages: ["@scyquantix/ui"]` no `next.config.ts`.
- **Conectar à landing**: defina `NEXT_PUBLIC_SCOPE_URL` (ou PIVOT/CANVAS). O botão
  do produto passa a levar ao app; sem a variável, leva a `/produtos/<slug>`.
- **Plataforma**: `NEXT_PUBLIC_PLATFORM_URL` faz aparecer "Acessar plataforma" no menu.
- Pacotes compartilhados futuros (auth, cliente de API, conteúdo) entram em `packages/`.
