# Instruções para o agente de implementação

> **Ponto de entrada:** `ESPECIFICACAO-MESTRA.md` (v2.0), que prevalece sobre este arquivo em caso de conflito. A copy canônica fica em `apps/web/src/content/home.pt-BR.json` (scyhome); os derivados deste kit são regenerados por `gerar-derivados.py`.

## Objetivo
Ajustar o projeto existente para uma única front page institucional ScyQuantix. Entregar a identidade da arte final, mantendo os textos deste pacote e removendo toda chamada para ação. Não criar aplicações ou repositórios novos. Não publicar produtos incompletos como disponíveis.

## Prioridade das fontes
1. Escopo estático atual: sem botões, formulários, login ou cadastro.
2. Textos estruturados de `03-textos/conteudo.pt-BR.json`.
3. Arte final para hierarquia, sequência, composição e atmosfera.
4. Prancha oficial para marca e cores.
5. Tokens e componentes de apoio, adaptáveis ao projeto.

O PNG ainda mostra controles antigos. Eles NÃO devem ser implementados. O catálogo de arquivos também NÃO é o desenho final do site.

## Execução
1. Ler instruções do repositório e identificar home, layout, estilos, assets e fonte existente. Registrar estado inicial.
2. Usar o projeto Next.js existente. Manter estrutura e dependências compatíveis, sem migração desnecessária.
3. Implementar as nove seções na ordem de `04-secoes` e importar a copy do JSON. Não renderizar a home como uma imagem.
4. Reutilizar vetores existentes após comparação com a prancha. O hero deve preservar o escritório ao pôr do sol; procurar o master no repositório. Se ausente, registrar a pendência e não declarar fidelidade visual concluída.
5. Recriar previews em DOM/CSS usando os componentes de apoio como ponto de partida. Não copiar textos minúsculos/ilegíveis do raster nem botões do mockup.
6. Não renderizar botões ou âncoras de CTA, ícones clicáveis, nav de produtos, menu móvel, formulários, inputs, selects, mailto ou links de redes sociais. Retirar também da árvore de acessibilidade. Não apenas usar opacity:0 ou pointer-events:none.
7. Pode existir um link acessível 'Pular para o conteúdo', visível ao receber foco. Esta é a única exceção funcional à regra de ausência de ações.
8. Não apagar serviços existentes. Não modificar Supabase, RLS, Cloudflare, DNS, domínio, contas ou faturamento. A home não exige backend ou credenciais. Não adicionar rastreadores.
9. Revisar rotas de produtos já expostas: para este lançamento, impedir navegação pública para páginas incompletas. Se adequado ao projeto, redirecionar temporariamente as antigas rotas de produtos para `/`, sem exclusão destrutiva.
10. Executar build, verificação de tipos/lint existentes e checklist visual. Entregar diff, screenshots desktop/mobile e lista objetiva de pendências. Publicação segue o fluxo autorizado do projeto; este pacote não executa deploy.

## Conteúdo e honestidade
Banco Central do Brasil e Itaú Unibanco são referências à trajetória de Fabrício, não clientes ou parceiros confirmados da ScyQuantix. Não usar seus logos. Não acrescentar cargos, números de resultados ou biografias não fornecidos.

Nomes finais: Scy Scope, Scy Pivot, Scy Canvas. Remover denominações anteriores BR_ Explorer, The Cubs e The Publisher. Os textos de funcionalidades descrevem produtos em desenvolvimento, com status e legenda próximos e visíveis.

## Resultado esperado
Uma única página, responsiva, acessível, visualmente coerente com a arte final, sem caminhos para funcionalidades indisponíveis. Se faltar o hero original limpo, concluir o restante e reportar essa lacuna específica.
