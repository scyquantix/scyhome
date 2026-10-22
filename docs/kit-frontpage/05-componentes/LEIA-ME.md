# Componentes de apoio

> **Atualização (2026-10-22).** O refinamento pedido na `ESPECIFICACAO-MESTRA.md` (cap. 12 e 15: fluxo com três miniaturas, Pivot com dimensões/áreas/matriz, Canvas com barras e rosca) foi feito diretamente na implementação do scyhome, em `apps/web/src/components/home/previews/` e `apps/web/src/components/home/data-flow-section.tsx`. Este `StaticPreviews.tsx` fica como base conceitual original; `previews.css` recebeu a correção mínima do cap. 22.3.

`StaticPreviews.tsx` fornece quatro componentes sem estado, rede ou eventos. São sugestões novas de reconstrução semântica dos previews achatados, não código recuperado da arte. Integrar no projeto existente e ajustar proporções à referência. O gráfico usa alturas ilustrativas, não métricas de desempenho.

Os componentes não dependem de autenticação, Supabase, R2 ou APIs. Não adicionar botões, campos editáveis, handles de arraste ou cursores de ação. As descrições comerciais completas devem ficar fora das figuras, nos cartões de produto.
