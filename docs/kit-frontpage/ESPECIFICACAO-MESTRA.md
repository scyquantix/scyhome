# ScyQuantix — auditoria e especificação mestra da front page

> **Nota de versionamento (scyhome, 2026-10-22).** Texto recebido colado no chat e
> salvo aqui sem alterar o conteúdo. Perdas da colagem: as imagens das seções 2.1 e
> 2.2 (ver `01-referencias/arte-final-aprovada.png` e `01-referencias/prancha-da-marca.jpeg`)
> e a célula "Title" da tabela do capítulo 24, quebrada pelo caractere `|`; o valor
> foi restaurado a partir de `07-implementacao/COMPOSICAO.md`. Este documento é o
> ponto de entrada do kit e prevalece sobre os demais arquivos em caso de conflito.

Versão: 2.0 — revisão do pacote de implementação.
Data editorial: 21 de outubro de 2026, America/Sao_Paulo.
Destino: agente responsável pelo repositório e implementação do site.
Entrega desta revisão: diagnóstico, decisões, conteúdo e requisitos de implementação. Não constitui alteração ou publicação do site.

> **Conclusão da auditoria:** o pacote é uma base útil e está íntegro, mas NÃO está perfeito nem contém todos os masters necessários para uma réplica visual exata. Os textos, referências e estrutura estão disponíveis; a fotografia limpa do hero, a identificação da fonte e a aprovação dos vetores da marca permanecem pendentes. Os componentes de apoio precisam de refinamento. Este documento resolve as ambiguidades de especificação e estabelece critérios objetivos de conclusão.

## 1. Como utilizar este documento

1. Extrair o ZIP scyquantix-frontpage-implementacao.zip.
2. Colocar este Markdown na raiz da pasta extraída scyquantix-frontpage/. Os caminhos relativos de imagens e arquivos abaixo partem dessa raiz.
3. Ler primeiro o diagnóstico, o escopo vigente e a matriz de alterações da arte.
4. Aplicar as correções de consistência do capítulo 5 aos arquivos auxiliares do pacote antes de consumi-los.
5. Implementar as seções usando os textos integrais deste documento e a arte final como referência visual.
6. Executar a matriz de validação e entregar evidências e pendências.

O ZIP anterior não foi regravado por esta revisão. As correções estão consolidadas aqui para o agente aplicar. Este documento prevalece sobre os arquivos auxiliares anteriores em caso de conflito. Não é necessário conhecer as mensagens anteriores do chat para executar o trabalho.

### 1.1 Vocabulário de status

| Status | Significado |
|---|---|
| Confirmado | Presente nos arquivos ou explicitamente solicitado pelo usuário |
| Diretriz | Decisão de implementação desta especificação, ajustável apenas sem contrariar o objetivo |
| Pendente | Insumo ou verificação ainda não disponível |
| Exemplo | Representação ilustrativa; não é evidência de resultado comercial |

Não tratar escolhas de CSS como medidas oficiais da marca. Não confundir referência visual aprovada com um master vetorial aprovado.

## 2. Evidências e extensão da auditoria

Foram lidos os documentos de seções, copy, tokens, componentes TSX, CSS, instruções, checklist e inventário. Foram comparados os textos estruturados, as chaves referenciadas e os nomes de ícones. Foram inspecionadas visualmente a arte final e a prancha de marca. Foram verificadas integridade ZIP, hashes do inventário, dimensões/decodificação das imagens e estrutura dos vetores.

| Verificação | Resultado |
|---|---|
| Arquivos no pacote | 36, incluindo o inventário |
| Integridade do ZIP | Sem erro de integridade detectado |
| SHA-256 dos arquivos inventariados | Sem divergências detectadas |
| Referência principal | PNG de 725 × 2169 px |
| Prancha da marca | JPEG de 1448 × 1086 px |
| Campanha institucional | JPEG de 1170 × 1163 px |
| Conteúdo JSON | Legível e estruturalmente válido |
| Ícones referenciados no JSON | Todos existem |
| Correspondência JSON/Markdown | Divergência no identificador do ícone do terceiro cartão |
| Referências de seções ao JSON | O cabeçalho aponta para `header`, chave inexistente |
| Build da aplicação | Não executado: o pacote não contém um projeto Next.js completo |
| Renderização dos componentes em aplicação | Não executada nesta auditoria; necessária no repositório |
| Aprovação visual dos SVGs extraídos | Não demonstrada pelo pacote; não presumir equivalência ao master |
| Publicação, domínio, autenticação, APIs | Não alterados nem revalidados por esta auditoria |

Os registros anteriores usam 22/10/2026, provenientes do ambiente de execução. A data editorial desta revisão segue o contexto local fornecido. Isso não altera o conteúdo dos ativos nem comprova uma nova consulta ao site.

### 2.1 Referência de layout

Arte final de referência — contém ações antigas que devem ser removidas (`01-referencias/arte-final-aprovada.png`).

Uso: sequência, atmosfera, equilíbrio entre seções, hierarquia e motivos gráficos. Não publicar esse PNG como corpo da página e não copiar seus controles interativos.

### 2.2 Referência de marca

Prancha oficial da ScyQuantix (`01-referencias/prancha-da-marca.jpeg`).

Uso: símbolo, assinatura, grafia e cores. A imagem tem elementos de apresentação da marca, não novas seções obrigatórias para a home.

## 3. Diagnóstico: o que precisa ser corrigido

| ID | Prioridade | Constatação | Correção | Evidência de conclusão |
|---|---|---|---|---|
| A01 | Bloqueia fidelidade exata | Hero não existe como fotografia limpa separada | Localizar o master no repositório/arquivos autorizados; manter a pendência caso ausente | Arquivo limpo, origem registrada e comparação visual |
| A02 | Alta | `01-header.md` referencia `header`, ausente no JSON | Consumir `brand.name` e `brand.tagline` | Nenhuma leitura de chave inexistente |
| A03 | Média | Markdown/catalogação antigos usam `chart-no-axes-column-increasing`; JSON usa `chart-column-increasing` | Fixar `chart-column-increasing` e regenerar projeções do JSON | Mesma referência em todos os arquivos |
| A04 | Alta | Ciano oficial sobre branco tem aproximadamente 2,17:1 | Usar navy para texto em superfícies claras; preservar ciano em acentos e fundos escuros | Medição de cores efetivamente renderizadas |
| A05 | Alta | `DataFlow` contém apenas caixas numeradas | Implementar as três miniaturas: fontes, tabela organizada e painel com gráficos | Fluxo reconhecível como o da arte |
| A06 | Alta | Preview Canvas tem somente barras | Construir composição com barras, rosca e painel de elementos estático | Canvas visualmente distinto do Pivot |
| A07 | Alta | Preview Pivot tem uma tabela mínima com uma linha | Construir dimensões, áreas de linhas/colunas/valores e matriz ilustrativa | Experiência de tabela dinâmica reconhecível |
| A08 | Média | Alturas percentuais das barras dependem de contêiner sem altura explícita | Dar altura definida ao canvas ilustrativo e mínimo zero aos itens de grid | Barras visíveis e sem overflow em todos os tamanhos |
| A09 | Alta | Fonte oficial não identificada | Conferir fonte e licença no repositório; documentar aproximação quando inevitável | Família/pesos/origem registrados |
| A10 | Alta | Vetores do site atual não são masters certificados | Comparar símbolo e wordmark à prancha; preservar proporções | Aprovação visual ou divergências explícitas |
| A11 | Média | SVGs trazem `role=img` e `aria-hidden=true`; cores dos ícones usam `currentColor` | Definir semântica no componente e escolher modo correto de inclusão | Logo anunciado uma vez; cores corretas |
| A12 | Alta | Arte contém CTAs, links, menu e formulário antigos | Aplicar matriz de remoção, inclusive controles internos dos previews | Nenhuma ação residual no DOM ou visual |
| A13 | Média | Responsividade e composição tinham orientações genéricas | Aplicar medidas iniciais, regras de grade e critérios desta revisão | Capturas em desktop, tablet e mobile |
| A14 | Média | Metadados, favicon e imagem social não estão fechados como ativos | Verificar o que já existe; usar apenas marca/arte válida e declarar faltas | Metadados sem rotas/imagens quebradas |
| A15 | Média | Redirecionar todas as rotas antigas poderia afetar serviços | Inventariar rotas; restringir mudança às páginas públicas incompletas autorizadas | Relação de rotas e comportamento antes/depois |

A ausência de master do hero impede afirmar “idêntico ao original”. Não impede construir textos, seções, responsividade e demais visuais. Não usar uma fotografia genérica ou geração nova para encobrir essa lacuna.

## 4. Objetivo, posicionamento e escopo vigente

A home apresenta a ScyQuantix ao mundo como empresa de soluções em dados. Deve responder com clareza:

1. O que fazemos? Integração de dados, automação, indicadores e aplicações sob medida.
2. Que problemas resolvemos? Informação fragmentada, tarefas manuais, baixa visibilidade de resultados e necessidades específicas.
3. Quem está por trás? Dois fundadores com experiências complementares de negócio e tecnologia.
4. Como conduzimos um projeto? Entendimento, proposta, desenvolvimento e entrega.
5. O que estamos construindo? Scy Scope, Scy Pivot e Scy Canvas, ainda em desenvolvimento.

Nesta fase, o objetivo é presença institucional e compreensão da proposta. Não é conversão por formulário, venda direta ou acesso ao produto. A ausência de CTA é uma decisão explícita deste lançamento, não uma omissão a ser “corrigida” por marketing.

### 4.1 Incluído

- Uma home pública em /, em português do Brasil.
- Nove blocos na ordem especificada.
- Preservação da identidade visual e copy.
- Apresentação estática dos produtos em desenvolvimento.
- Layout adaptável, semântica, metadados básicos e validação visual.
- Recursos locais de marca e imagens, quando disponíveis.

### 4.2 Fora desta implementação

- Login, cadastro, OAuth, LinkedIn, pagamentos, assinaturas ou gestão de planos.
- Consultas SQL executáveis, APIs, upload, editor, filtros, exportação ou compartilhamento real.
- Aplicações Scy Scope, Scy Pivot ou Scy Canvas e suas páginas de produto.
- Novos bancos, buckets, tabelas, políticas RLS, middleware de autorização ou contas.
- Mudanças de DNS, Cloudflare, Supabase, Vercel, domínio, GitHub ou faturamento.
- Formulário, chat, newsletter, e-mail acionável, contato ou captação de leads.
- Menus, navegação por âncoras, aba Parceiros ou página de parceiros nesta fase.
- Animações obrigatórias, áudio, vídeo, autoplay, parallax ou carrosséis.

Pedidos antigos de login, cadastro, parceiros e produto funcional estão suspensos para esta primeira página. A capacidade futura pode aparecer na descrição do produto, sempre acompanhada do status de desenvolvimento.

### 4.3 Regra sobre ações

Não renderizar controles de produto ou navegação. Retirar também ícones de ação, cursor pointer, handlers, focos e efeitos de hover que sugiram clique. Elementos button, form, input, select, textarea, role=button e áreas contenteditable não fazem parte da home.

Única exceção prevista: link acessível “Pular para o conteúdo”, visível ao receber foco e direcionado ao `<main>`. Não criar menu móvel vazio. Não deixar botões desabilitados ou apenas transparentes.

## 5. Consistência dos arquivos e precedência

### 5.1 Ordem de decisão

1. Escopo atual e regras explícitas deste documento.
2. Textos integrais e status dos produtos aqui transcritos.
3. Prancha oficial para forma da marca e paleta.
4. Arte final para composição, sequência e linguagem visual.
5. Medidas e componentes de apoio como implementação inicial.

Em conflito entre raster e texto, prevalece o texto revisado. Em conflito entre botão do raster e escopo, retirar o botão. Em conflito entre um SVG do site atual e a prancha, não substituir a marca oficial pelo SVG sem resolver a divergência.

### 5.2 Patches obrigatórios no pacote

| Arquivo | Ajuste |
|---|---|
| `04-secoes/01-header.md` | Trocar a referência `header` por `brand`; usar nome e assinatura de marca |
| `03-textos/textos-por-secao.md` | Regenerar a partir do JSON canônico; corrigir o identificador do terceiro ícone |
| `catalogo.html` | Regenerar o conteúdo exibido a partir do mesmo JSON; não usar a cópia antiga como fonte independente |
| `02-marca/tokens.css` | Manter cores oficiais; eliminar instrução ambígua sobre texto ciano e incorporar as regras de contraste |
| `05-componentes/StaticPreviews.tsx` | Refinar fluxo, Pivot e Canvas conforme capítulos de composição |
| `05-componentes/previews.css` | Adicionar `min-width:0`, altura explícita do gráfico e tratamento mobile |
| `08-validacao/inventario.json` | Atualizar hashes após qualquer alteração; não manter o inventário antigo como se fosse atual |
| `README.md` e `07-implementacao/AGENTE.md` | Indicar este documento como ponto de entrada para a revisão |

A chave correta no JSON existente para o terceiro ícone é chart-column-increasing. O arquivo 06-icones/chart-column-increasing.svg está presente. Não é necessário criar ou instalar outro ícone para resolver essa divergência.

Manter uma única fonte de copy em JSON. Markdown, catálogo e componentes devem derivar dela ou ser conferidos contra ela. Não carregar JSON com dangerouslySetInnerHTML.

## 6. Inventário dos ativos e política de uso

| Ativo | Uso permitido | Limitação |
|---|---|---|
| `01-referencias/arte-final-aprovada.png` | Referência visual de toda a página | Raster achatado, baixa resolução para produção, contém ações antigas |
| `01-referencias/prancha-da-marca.jpeg` | Conferência de marca, cores e proporções | Não substitui logo vetorial separado |
| `01-referencias/campanha-institucional.jpeg` | Atmosfera fotográfica e propósito | Contém texto e marca embutidos; não é background limpo |
| `02-marca/simbolo-site-atual.svg` | Candidato a símbolo da implementação | Validar equivalência com a prancha |
| `02-marca/wordmark-site-atual.svg` | Candidato ao lettering da implementação | Não presumir que inclui assinatura/tagline |
| Sete SVGs em `06-icones/` | Ícones de apoio | Extraídos do site, verificar licença/distribuição existente |
| `05-componentes/StaticPreviews.tsx` | Base conceitual em React | Não reproduz sozinho o detalhamento do raster |
| `02-marca/tokens.css` | Paleta e parâmetros de partida | Tipografia e medidas não são oficiais |

### 6.1 Hero: requisito de origem e fidelidade

Procurar primeiro nos assets do repositório e arquivos já autorizados a fotografia limpa que deu origem ao hero. Conferir escritório, janelas verticais, luz do pôr do sol, notebook/mesa e enquadramento. A campanha e o hero da página não têm exatamente o mesmo enquadramento; não tratar as duas peças como se fossem um único master intercambiável.

Não extrair um pequeno recorte de 725 px e ampliá-lo como fotografia de alta resolução. Não recortar o raster da página com textos/CTAs ainda presentes. Não publicar a campanha inteira por trás de HTML duplicado. Não alegar que upscaling recupera o master original.

Se o master não existir: implementar o restante, manter um estado provisório interno legível em navy e registrar explicitamente “hero provisório — fidelidade visual pendente”. Esse estado não satisfaz o aceite visual final. Uma nova fotografia ou edição generativa é uma alternativa de design, não recuperação empírica do original.

### 6.2 Marca e SVGs

- Preservar geometria, inclinação, espaço negativo e cubo central do símbolo.
- Preservar “ScyQuantix”, com Q destacado conforme a referência.
- Não recriar o lettering digitando com uma fonte parecida quando houver master válido.
- Os SVGs extraídos têm gradientes; não substituir as cores internas por um fill global.
- Definir dimensões e viewBox sem distorção. Não cortar partes do símbolo.
- Se inline em header e footer, evitar IDs de gradiente duplicados entre instâncias; usar IDs específicos ou imagens SVG externas.
- Se a marca for um `<img>`, fornecer alt="ScyQuantix" no elemento. Se for composição de dois SVGs inline, definir um único nome acessível no grupo e esconder as partes decorativas.
- Não deixar aria-hidden=true no único elemento que identifica a empresa sem alternativa acessível.
- Assinatura em HTML pode acompanhar a marca se não existir no lockup; não duplicá-la se já estiver embutida.

### 6.3 Ícones

| Papel | Arquivo existente |
|---|---|
| Integração de dados | `database.svg` |
| Automação | `cog.svg` |
| Indicadores | `chart-column-increasing.svg` |
| Aplicações sob medida | `boxes.svg` |
| Scy Scope | `search.svg` |
| Scy Pivot | `layout-grid.svg` |
| Scy Canvas | `chart-column.svg` ou variante crescente, escolher uma e manter |

Manter estilo linear coerente. Ícones decorativos: aria-hidden=true. Se incluídos como `<img>` externo, currentColor não herda automaticamente o CSS do documento pai; usar a biblioteca existente ou SVG inline para controlar a cor. Não transformar ícones em elementos focáveis. Conferir a licença do pacote Lucide presente no projeto; a nota de procedência não substitui o texto da licença aplicável.

## 7. Sistema visual

### 7.1 Paleta e contraste

| Token | Cor | Função |
|---|---|---|
| Navy oficial | `#0B2D4A` | Texto principal em fundos claros; faixas escuras |
| Ciano oficial | `#00C2D4` | Acentos gráficos, texto sobre navy e detalhes |
| Grafite oficial | `#1F2937` | Corpo de texto |
| Cinza claro oficial | `#E5EAF0` | Superfícies e divisórias |
| Branco de interface | `#FFFFFF` | Fundo e texto sobre navy |
| Texto secundário proposto | `#526271` | Descrições em superfícies claras |
| Fundo gelado proposto | `#F3FAFC` | Alternância discreta de seções |
| Ciano escuro funcional proposto | `#007D8A` | Alternativa de texto de destaque sobre branco; não é cor oficial da marca |

Contrastes calculados por luminância relativa sobre cores sólidas:

| Combinação | Relação aproximada | Aplicação |
|---|--:|---|
| Ciano oficial / branco | 2,17:1 | Não usar em texto informativo, nem em títulos apenas por serem grandes |
| Ciano oficial / navy | 6,49:1 | Adequado para o texto previsto nesta combinação |
| Navy / branco | 14,11:1 | Preferencial em superfícies claras |
| Texto secundário / branco | 6,28:1 | Adequado para descrições |
| Ciano escuro proposto / branco | 4,88:1 | Possível destaque de texto em superfície branca |

Adotar navy para textos em branco como solução padrão de menor alteração à paleta oficial. Conservar o ciano na linha decorativa e em outras áreas da composição. Se escolhido o ciano escuro funcional, documentar a derivação. Não recolorir o logo por causa dessa regra.

O critério de contraste textual considera 4,5:1 para texto normal e 3:1 para texto grande, com exceções específicas como logotipos. A referência visual não dispensa legibilidade. Conferir o contraste sobre o trecho real da fotografia e sobre cada fundo, não apenas sobre tokens abstratos. Fonte: W3C, SC 1.4.3, no capítulo de referências.

### 7.2 Tipografia

Não há identificação oficial da família no pacote. Inspecionar a fonte já usada no repositório, sua licença e pesos. Comparar largura das letras, corpo, terminais e ritmo com a arte. Se ainda desconhecida, registrar a substituição como aproximação.

| Elemento | Desktop inicial | Mobile inicial | Peso / entrelinha |
|---|---|---|---|
| H1 | 52–64 px | 34–40 px | 700–800 / 1,08–1,15 |
| H2 | 34–44 px | 26–32 px | 700 / 1,15–1,25 |
| Título de cartão | 20–24 px | 19–22 px | 600–700 / 1,25 |
| Corpo | 17–18 px | 16–17 px | 400 / 1,5–1,6 |
| Eyebrow | 12–13 px | 11–12 px | 600 / 1,4; tracking moderado |
| Legenda | 13–14 px | 12–14 px | 400 / 1,4 |
| Código do preview | 12–14 px | 12–14 px | Monoespaçada / 1,45 |

São faixas iniciais, não medições oficiais. Não comprimir os textos para caber no raster estreito. Não usar texto comercial de 10–11 px. Rótulos minúsculos ilustrativos do mockup devem ser reconstruídos legivelmente ou representados como linhas decorativas sem significado.

### 7.3 Grade, dimensões e ritmo

- Container central: até 1200 px, com largura fluida e padding lateral.
- Padding lateral inicial: 20 px no celular, 32 px no tablet, até 48–64 px em telas largas.
- Espaçamento entre seções: aproximadamente 48–64 px no celular e 64–88 px no desktop, ajustado à densidade real.
- Gap entre cartões: 20–24 px.
- Raio dos cartões: 8 px como ponto de partida.
- Bordas claras de 1 px; sombras leves apenas nas miniaturas/planos ilustrativos.
- Evitar cápsulas gigantes, glassmorphism, brilho excessivo, fundo preto uniforme ou blocos com aparência de dashboard real.
- Não atribuir altura fixa a seções com texto. min-height pode ajudar no hero, mas não pode cortar conteúdo em zoom.
- A remoção de botões encurta blocos. Redistribuir respiro sem deixar espaços vazios equivalentes ao botão removido.

### 7.4 Motivos gráficos

Conservar linhas finas ciano e geometrias de cubos/hexágonos inspiradas no símbolo, especialmente nas laterais de fundadores e faixa de produtos. São decoração; devem ficar atrás do conteúdo, com opacidade discreta, pointer-events:none e sem anúncio por leitor de tela. Não redesenhar o logo dentro dos motivos nem deixar linhas atravessarem o texto.

## 8. Estrutura de conteúdo e componentes

| Ordem | ID sugerido | Componente | Chave JSON | Superfície |
|---|---|---|---|---|
| 1 | — | `SiteHeader` | `brand` | Branco |
| 2 | `apresentacao` | `HeroSection` | `hero` | Foto + navy |
| 3 | `solucoes` | `SolutionsSection` | `solutions` | Branco |
| 4 | `exemplo` | `DataFlowSection` | `example` | Claro azulado |
| 5 | `fundadores` | `FoundersSection` | `founders` | Branco |
| 6 | `processo` | `ProcessSection` | `process` | Claro azulado |
| 7 | `produtos` | `ProductsSection` | `products` | Navy |
| 8 | `proposito` | `PurposeSection` | `closing` | Branco |
| 9 | — | `SiteFooter` | `footer` e `brand` | Branco |

Os IDs servem à organização e acessibilidade, não são obrigação de criar navegação. main deve ter id="conteudo". Header e footer ficam fora do main. Exatamente um h1 no hero; h2 nas seções; h3 em cartões. Não escolher heading apenas por tamanho de fonte.

## 9. Cabeçalho

Objetivo: identificação imediata da empresa, com aparência institucional.

- Fundo branco em toda a largura, logo à esquerda alinhado ao container do conteúdo.
- Altura inicial de 80–96 px no desktop e 68–80 px no celular, sem impedir crescimento do conteúdo.
- Lockup sugerido entre 200 e 260 px de largura no desktop e 180–220 px no mobile, sujeito à proporção real.
- Mostrar assinatura apenas se continuar legível; não redimensionar a marca para forçar microtexto ilegível.
- Não adicionar slogan novo, informações societárias, endereço ou selos.
- Não tornar o logo um link nesta versão estritamente estática.
- Não usar header sticky por padrão; o header da arte não exige esse comportamento.
- Retirar menu, separador vertical e CTAs. Não centralizar artificialmente a marca para preencher o espaço eliminado.

Aceite: marca com proporção correta; sem itens à direita, menu hamburger, foco ou navegação residual; mesmo alinhamento lateral das seções.

## 10. Hero

Objetivo: explicar o negócio em poucos segundos e manter a atmosfera visual aprovada.

Composição de desktop: texto à esquerda, fotografia de escritório ao pôr do sol mais visível à direita. Área textual de aproximadamente 48–58% da largura útil, conforme a quebra de linhas. Altura inicial de aproximadamente 480–620 px em desktop largo, sem copiar a altura do raster em pixels.

Camadas, do fundo para a frente:

1. Fotografia limpa correspondente à referência, com dimensões reservadas.
2. Sobreposição navy forte à esquerda e transição suave à direita.
3. Motivo geométrico decorativo, se necessário à fidelidade.
4. Eyebrow, h1, parágrafo e assinatura em HTML.

Título: primeira frase branca; segunda frase ciano sobre navy. Não usar um `<br>` fixo entre cada palavra. As duas frases podem ser spans em bloco no desktop; no celular, aceitar quebra natural mantendo as frases reconhecíveis. Parágrafo com largura confortável, sem cobrir notebook ou ponto luminoso principal quando houver espaço.

Na remoção dos CTAs, posicionar a assinatura após o parágrafo com respiro de 24–32 px como ponto de partida. Não manter buraco vazio. A linha ciano da assinatura é decoração.

No mobile: priorizar leitura, reforçar overlay, ajustar object-position, permitir altura automática e preservar parte reconhecível da cena. Não esconder a copy para mostrar a fotografia. Não substituir a foto por uma marca gigante.

Aceite: conteúdo integral, alto contraste, cena correta, nenhuma palavra embutida no background duplicando o HTML e nenhum CTA.

## 11. Soluções

Eyebrow “Soluções”, linha curta ciano e título completo. Quatro cartões na ordem do JSON; leitura da esquerda para a direita, de cima para baixo.

Desktop: grade 2×2. Cada cartão tem ícone linear à esquerda e conteúdo à direita. Ícone aproximadamente 40–48 px, padding de 24–28 px e borda discreta. Altura determinada pelo conteúdo; cartões da mesma linha podem esticar igualmente.

Hierarquia dentro do cartão:

1. Problema do cliente como h3 em navy.
2. Nome da solução em destaque menor, navy ou ciano escuro acessível.
3. Descrição em texto secundário.

O problema e o nome da solução são complementares; não eliminar um deles. Não expandir as descrições para incluir ferramentas, tecnologias ou buzzwords. Não adicionar ícone de seta ou “Saiba mais”.

No celular: uma coluna, ícone ao lado do título se houver largura; em 320 px pode ficar acima do texto. Manter a ordem dos cartões, sem carrossel.

Aceite: quatro problemas distinguíveis; texto legível; nenhum cartão parece clicável; ícones coerentes com os arquivos.

## 12. Fluxo ilustrativo: da informação à gestão

A implementação anterior com três caixas numeradas é insuficiente para replicar o modelo. Este bloco precisa ser uma demonstração visual da transformação dos dados.

### 12.1 Miniatura 1 — Sistemas e arquivos

Um cartão branco que agrupa três fontes visuais: banco de dados, arquivo tabular/CSV e nuvem. Usar ícones simples, pequenas linhas de placeholder e compartimentos claros. “CSV” pode ser um rótulo estático; não é um botão de download. Não usar logos de serviços.

### 12.2 Miniatura 2 — Dados organizados

Cartão com cabeçalho e aproximadamente quatro a seis linhas visuais. Pequenos marcadores coloridos e barras neutras representam registros normalizados. Não precisam ser dados verdadeiros; evitar valores e organizações reais. Não usar estado de loading animado: as linhas são parte da ilustração estática.

### 12.3 Miniatura 3 — Painel de acompanhamento

Cartão com dois objetos: gráfico de barras e rosca, mais pequenas linhas decorativas de título. Gráficos sem números comerciais ou percentuais de resultado. Formas devem ser distinguíveis mesmo em impressão sem cor.

Entre miniaturas no desktop: setas ciano decorativas. No mobile: empilhar e orientar conectores verticalmente, ou retirar conectores se a lista ordenada continuar inequívoca. Labels ficam abaixo de cada miniatura e a legenda sob o conjunto.

Sem interatividade, sem carrossel, sem animação de dados chegando. A legenda esclarece que se trata de exemplo sem dados de clientes. Não apresentar como case realizado.

Aceite: as três etapas são visualmente diferentes, a progressão é evidente e os gráficos não se confundem com indicadores reais da ScyQuantix.

## 13. Fundadores

Eyebrow, título e frase de apresentação, seguidos por dois cartões de mesma importância. Fabrício à esquerda e Leonardo à direita no desktop; essa ordem permanece no mobile.

- Nome como h3; “Cofundador” logo abaixo.
- Biografia em corpo legível, sem truncamento e sem “ver mais”.
- Destacar em negrito o trecho de atendimento a demandas do Banco Central do Brasil e reportes regulatórios.
- Não fazer o trecho destacado parecer um link.
- Motivos geométricos leves à direita dos cartões, sem reduzir a largura útil do texto excessivamente.
- Retirar “Perfil no LinkedIn” e sua seta.
- Não incluir fotos nesta composição; as capturas de perfis não são retratos prontos para publicação.

A biografia de Fabrício mantém os 16 anos e a referência ao Itaú Unibanco presentes na arte. A experiência é pessoal dos fundadores. Não transferi-la à empresa como “16 anos de ScyQuantix”, nem insinuar que o Banco Central contratou ou endossa a empresa. Usar “reportes regulatórios”, conforme a solicitação do usuário; não “repórteres”.

Não acrescentar cargos C-level, títulos acadêmicos, ferramentas ou resultados quantitativos não fornecidos. Leonardo deve ser apresentado pelas capacidades de engenharia, análise, sistemas e eficiência, com linguagem executiva.

Aceite: ambas as biografias completas, sem logos de instituições, sem links sociais e sem uma hierarquia visual que minimize um fundador.

## 14. Como trabalhamos

Título e quatro etapas em ordem. Cada etapa tem número em círculo de contorno ciano, título em navy e descrição. Uma linha fina conecta as etapas no desktop.

Usar lista ordenada. Não duplicar números no anúncio acessível quando houver marcador customizado. Não transformar círculos em tabs ou passos clicáveis.

- Desktop largo: quatro colunas.
- Tablet: 2×2 ou lista vertical conforme legibilidade; não forçar quatro colunas estreitas.
- Mobile: lista vertical com alinhamento consistente e conector opcional.

O conector não deve atravessar a linha de texto. A etapa “Proposta” contém escopo, prazos, entregas e investimento; isso descreve o processo, sem preço público. Não adicionar SLA ou compromisso de resposta.

Aceite: sequência compreensível sem interação e sem promessas adicionais.

## 15. Produtos: faixa institucional de desenvolvimento

Fundo navy, status “Em desenvolvimento” em destaque discreto no início, título com as três ações e subtítulo explicativo. Os três cartões têm ordem Scy Scope, Scy Pivot e Scy Canvas.

Cada cartão contém:

1. Ícone do produto e nome.
2. Frase de valor.
3. Descrição comercial integral.
4. Linha curta de capacidades.
5. Preview estático.

Não existe CTA ao final. Não deixar espaço reservado para “Conheça”. Status é texto, não botão em formato de pílula com hover. A legenda geral deve permanecer visível abaixo dos três cartões.

Desktop largo: três colunas iguais. Corpo do cartão com flex/grid para alinhar os previews na base sem fixar altura da copy. Fundo escuro sutilmente distinto da faixa, borda azul/ciano discreta e raio moderado. Não aproximar os cartões a ponto de formar uma única interface.

Tablet e mobile: uma coluna por padrão antes que a copy e o preview fiquem estreitos. Não usar carrossel. Pode haver largura máxima de cartão para preservar proporção, centralizada dentro do container.

### 15.1 Scy Scope — preview

Janela ilustrativa clara, com catálogo lateral e consulta SQL à direita. Rótulos possíveis: “Catálogo”, “Dados”, “Tabelas”, “Documentação” e “Consulta SQL”. Não usar âncoras para esses rótulos.

Exemplo de texto monoespaçado:

```sql
SELECT regiao, periodo, valor
FROM dados_publicos;
```

Esse exemplo descreve uma consulta fictícia, não schema real existente. Não adicionar botão executar, play, resultado carregando ou contador de registros. Pequenos elementos de navegação interna podem ser desenhos neutros, mas não devem parecer controles ativos.

Entendimento esperado: exploração técnica de dados públicos organizados e consulta, com possibilidade futura de API empresarial. Não promete serviço disponível hoje.

### 15.2 Scy Pivot — preview

Representar a experiência de tabela dinâmica, não uma tabela comum isolada:

- Coluna lateral “Dimensões” com Região, Período e Categoria como texto.
- Área “Linhas” com Região.
- Área “Colunas” com Período.
- Área “Valores” com Valor.
- Matriz com pelo menos três linhas visuais e três colunas, incluindo cabeçalhos; células com traços ou blocos de placeholder.

Chips não terão X de remover, setas de dropdown, checkboxes ou handles de arraste. Não insinuar persistência de sessão. O texto externo explica salvar visões e estudos como capacidade planejada; o preview não salva nada.

Se usar tabela HTML, dar caption e scope nos cabeçalhos. Se o desenho for puramente decorativo e a descrição externa já explicar o conceito, esconder o desenho do leitor de tela e manter a legenda textual.

Entendimento esperado: o usuário escolhe dimensões e cruza dados para montar análises, sem precisar conhecer o modelo interno.

### 15.3 Scy Canvas — preview

Representar composição visual de painéis, com lista de tipos de visualização e área de canvas com dois objetos distintos: barras e rosca. Incluir linhas neutras de título e um painel secundário menor se necessário para aproximar a referência.

Não usar botão de adicionar (+), imagem clicável, engrenagem, alças de redimensionamento ou ícone de exportação. As áreas vazias podem ser retângulos neutros, sem borda tracejada de drop zone.

Definir altura explícita da área dos gráficos, por exemplo 160–200 px no preview, ajustada ao cartão. Não depender apenas de min-height no ancestral para alturas percentuais das barras. min-width:0 deve estar nos itens de grid que contêm código, tabelas ou figuras.

Entendimento esperado: construção de visualizações e painéis sobre a mesma base de dados do Scy Pivot. Não descrever stack, OLAP, medalhão ou infraestrutura no texto institucional.

### 15.4 Dados ilustrativos e status

Alturas de barras e segmentos de rosca são puramente visuais. Não adicionar valores que pareçam provar resultados. Não usar dados pessoais, clientes, empresas identificáveis ou totais de produção. “Prévias conceituais. Produtos em desenvolvimento.” deve ficar próximo ao conjunto.

## 16. Encerramento institucional

Retirar toda a seção antiga de contato, inclusive título de conversa, texto de retorno, campos, labels, botão, nota de uso dos dados e link de política associado ao formulário.

Substituir por bloco claro com a frase de propósito existente na campanha e indicação dos três produtos em desenvolvimento. Não acrescentar “entre em contato”, e-mail ou promessa de lançamento.

A frase de propósito é longa: tratá-la como um bloco tipográfico de aproximadamente 28–36 px no desktop e 24–28 px no mobile, com largura máxima confortável. Não forçar a frase em uma linha. A linha complementar pode ficar em corpo menor. Conservar respiro e linha decorativa curta.

Aceite: encerramento conclusivo, institucional e coerente com uma página sem captação de contato.

## 17. Rodapé

Fundo branco, logo em tamanho menor, assinatura, domínio como texto simples e copyright. Mesmo alinhamento do container. No desktop pode haver dois grupos; no celular empilhar.

Não usar navegação, links sociais, telefone, endereço, selos, parceiros ou links para políticas inexistentes. Não apagar documentos legais existentes do projeto; apenas não inventar rotas. Se o ambiente atual possui coleta ou exigências de consentimento já implementadas, inventariar antes de remover componentes globais; esta especificação não autoriza desativar obrigações existentes.

Copyright do conteúdo entregue: “© 2026 ScyQuantix.” Em futuras atualizações, usar o ano de publicação de modo consistente, sem diferença entre renderização servidor/cliente. Não inventar razão social ou CNPJ.

## 18. Matriz completa de labels e ações removidos

| Local na arte | Elemento antigo | Tratamento nesta fase |
|---|---|---|
| Header | Soluções, Produtos, Seja parceiro/Parceiros, Sobre | Não renderizar navegação |
| Header | Acessar plataforma, login, cadastrar | Remover |
| Header | Fale conosco | Remover |
| Hero | Converse sobre seu desafio | Remover bloco de CTA e seta |
| Hero | Conheça nossas soluções | Remover bloco de CTA e seta |
| Fundadores | Perfil no LinkedIn | Remover texto acionável e seta |
| Scope | Play/executar consulta | Remover inclusive da ilustração reconstruída |
| Pivot | Remover seleção, dropdowns, checkbox | Não reproduzir como controle; usar texto estático |
| Canvas | +, adicionar imagem, controles de edição | Remover; substituir por composição estática |
| Produtos | Conheça o Scy Scope/Pivot/Canvas | Remover todos os três botões |
| Contato | Vamos conversar sobre seu desafio? | Substituir pelo propósito |
| Contato | Nome, E-mail, Empresa/projeto, Qual desafio… | Remover labels e campos |
| Contato | Enviar mensagem | Remover |
| Contato | Uso de dados e Política de Privacidade do formulário | Retirar junto ao formulário; não apagar políticas existentes do projeto |
| Footer | Soluções, Produtos, Seja parceiro, Privacidade, Contato | Não apresentar navegação nessa versão |
| Footer | scyquantix.com | Manter como texto sem link |

Não criar uma seção “Parceiros” só para preencher o espaço removido. Nenhuma parceria foi comprovada neste pacote.

## 19. Copy integral para implementação

Os textos a seguir são a fonte editorial desta revisão. Preservar grafia, acentos e nomes. A descrição de funcionalidades permanece no contexto “Em desenvolvimento”. As chaves técnicas não devem aparecer ao público.

### 19.1 Marca

Nome: ScyQuantix
Assinatura: Tecnologia orientada por evidências.
Domínio: scyquantix.com

### 19.2 Hero

Eyebrow: Tecnologia orientada por evidências

H1, frase 1: Soluções em dados.
H1, frase 2: Do desafio à entrega.

Integramos dados de diferentes fontes, automatizamos relatórios e desenvolvemos painéis e aplicações sob medida para apoiar a gestão da sua empresa.

Assinatura: Método, clareza e valor real.

### 19.3 Soluções

Eyebrow: Soluções

Título: O que sua empresa precisa resolver?

Cartão 1 — Dados espalhados entre sistemas

Solução: Integração e organização de dados

Reunimos informações de sistemas e arquivos em uma base organizada para análise.

Cartão 2 — Relatórios que dependem de trabalho manual

Solução: Automação de rotinas

Automatizamos a preparação e a atualização dos dados que alimentam seus relatórios.

Cartão 3 — Dificuldade para acompanhar resultados

Solução: Indicadores e painéis de gestão

Definimos indicadores e painéis a partir das decisões que sua empresa precisa tomar.

Cartão 4 — Seu processo exige uma solução sob medida?

Solução: Aplicações sob medida

Desenvolvemos ferramentas para consultar informações, executar análises e apoiar processos específicos.

### 19.4 Fluxo

Título: Da informação dispersa à visão do negócio.

Um exemplo de projeto: reunir dados de vendas e despesas em uma visão gerencial.

Etapas: Sistemas e arquivos → Dados organizados → Painel de acompanhamento

Legenda: Exemplo ilustrativo de solução, sem dados de clientes.

### 19.5 Fundadores

Eyebrow: Quem somos

Título: Visão de negócio e capacidade técnica.

Experiências complementares para compreender o negócio e construir a solução.

Fabrício Toccoli Fenili
Cofundador

Reúne visão de negócio e liderança técnica, construídas em 16 anos no Itaú Unibanco. Sua experiência abrange planejamento, engenharia de dados e automação, incluindo atendimento a demandas do Banco Central do Brasil e elaboração de reportes regulatórios.

Leonardo Souza
Cofundador

Reúne experiência em engenharia de dados, análise estatística e desenvolvimento de sistemas. Atua na automação e otimização de processos, conectando necessidades de gestão à construção de aplicações e análises, com foco em eficiência e uso responsável de recursos.

### 19.6 Processo

Título: Como trabalhamos

- 01 — Entendimento: Necessidade e objetivos
- 02 — Proposta: Escopo, prazos, entregas e investimento
- 03 — Desenvolvimento: Construção e validação com você
- 04 — Entrega: Documentação e orientação de uso

### 19.7 Produtos

Status: Em desenvolvimento

Título: Explore. Analise. Visualize.

Três produtos ScyQuantix para transformar dados públicos em conhecimento.

Scy Scope

Explore dados públicos.

Consulte dados públicos organizados gratuitamente. Para empresas, planos pagos de acesso por API.

Resumo: Consultas gratuitas · API empresarial

Scy Pivot

Transforme perguntas em análises.

Cruze dados em tabelas dinâmicas no navegador. Salve suas visões, filtros e relatórios e compartilhe estudos no LinkedIn.

Resumo: Consultas gratuitas · Análises salvas

Scy Canvas

Dê forma às suas análises.

Crie gráficos e painéis a partir da mesma base de dados do Scy Pivot. Organize suas visualizações em um ambiente gratuito.

Resumo: Criação visual · Base compartilhada

Legenda do conjunto: Prévias conceituais. Produtos em desenvolvimento.

### 19.8 Propósito

Nascemos para gerar valor para pessoas, negócios e sociedade, através do uso responsável da tecnologia.

Scy Scope, Scy Pivot e Scy Canvas estão em desenvolvimento.

### 19.9 Rodapé

ScyQuantix
Tecnologia orientada por evidências.
scyquantix.com
© 2026 ScyQuantix.

## 20. Responsividade e comportamento

| Faixa | Layout esperado |
|---|---|
| 320–639 px | Header simples; hero fluido; cartões, fundadores, etapas e produtos em uma coluna |
| 640–1023 px | Soluções em duas colunas se legíveis; fundadores podem permanecer em uma; processo 2×2; produtos em uma |
| 1024–1279 px | Soluções 2×2; fundadores em duas; processo em quatro; produtos em três apenas se preview e copy couberem |
| ≥1280 px | Layout desktop completo, container até 1200 px |

Não aplicar uma redução proporcional do PNG para mobile. Reorganizar a grade, preservar a ordem e permitir altura natural. Não esconder conteúdo comercial no mobile. Evitar white-space:nowrap em títulos e overflow:hidden em contêineres de texto.

O gráfico decorativo pode ter overflow recortado dentro da figura, mas conteúdo textual não. As tabelas conceituais devem ser simples o suficiente para caber; não transformar a home em uma interface com rolagem horizontal.

Em 200% de ampliação, texto deve continuar acessível. Verificar reflow a 320 CSS px, inclusive equivalente a 1280 px em zoom 400%. O critério de reflow admite exceções para conteúdos intrinsecamente bidimensionais, mas os previews desta home podem ser simplificados sem depender delas. Fonte: W3C SC 1.4.10.

## 21. Acessibilidade e semântica

- html lang="pt-BR".
- Um main, header e footer; títulos conectados às seções por semântica natural ou aria-labelledby quando útil.
- Um único h1; não pular níveis para imitar estilos.
- Link de salto para #conteudo e foco visível; destino preparado para receber foco quando necessário.
- Figuras com legendas, gráficos explicitamente ilustrativos e ícones decorativos ocultos de tecnologia assistiva.
- A identidade da empresa deve ser anunciada uma vez em cada lockup, sem duplicação símbolo/wordmark/tagline.
- Nenhuma simulação de campo, botão ou editor anunciado como interativo.
- Se usar tabela semântica, cabeçalhos identificáveis e caption. Se ilustração decorativa, não narrar cada barra ou célula sem significado.
- Contraste verificado no CSS computado e na área real de imagem.
- Não depender apenas de cor para diferenciar os produtos: cada um possui nome, frase e preview distintos.
- Sem animações obrigatórias. Se algum movimento decorativo já existir e for mantido, respeitar preferência de movimento reduzido e não ocultar conteúdo antes da animação.
- Não bloquear zoom nem definir escalas máximas restritivas.

Este checklist não certifica conformidade integral de acessibilidade. O agente deve verificar a implementação real e relatar limitações.

## 22. Orientação técnica para o projeto existente

### 22.1 Organização sugerida

Adaptar aos caminhos reais do repositório; não criar uma segunda aplicação ou migrar router apenas para seguir estes nomes.

| Responsabilidade | Local sugerido |
|---|---|
| Página inicial | Rota `/` já existente |
| Conteúdo | `content/home.pt-BR.json` |
| Seções | `components/home/` |
| Marca e ícones compartilhados | `components/brand/`, `components/icons/` |
| Previews | `components/home/previews/` |
| Tokens | Arquivo global de design tokens existente |
| Imagens e SVGs | Diretório de assets estáticos existente |

Conservar o gerenciador de pacotes e lockfile. Não atualizar dependências sem necessidade comprovada. Preferir renderização estática/servidor disponível no projeto. Os componentes descritos não exigem estado, hooks de interação ou chamadas de rede em tempo de execução.

Não consultar documentação de uma versão diferente para implementar APIs específicas: verificar primeiro a versão instalada. Este documento é uma especificação de comportamento e não fixa uma versão de Next.js.

### 22.2 Dados e componentes

- Tipar o conteúdo conforme as chaves existentes; não usar any para esconder campos ausentes.
- Um componente recebe seus dados por props; não duplicar descrições em múltiplos arquivos.
- Destacar o trecho da biografia por partes estruturadas ou tratamento de substring conhecido, sem injeção de HTML arbitrário.
- Usar arrays estáveis com keys apropriadas.
- Não calcular posições com tamanhos de viewport em JavaScript quando CSS resolver.
- Não adicionar biblioteca de gráficos para barras e rosca decorativas; HTML/CSS/SVG são suficientes.
- Não incluir SDK de Supabase, OAuth ou analytics apenas para essa página.

### 22.3 Correção mínima de CSS dos previews

O trecho abaixo resolve riscos de estrutura, mas não substitui o refinamento visual dos capítulos 12 e 15:

```css
.sq-preview-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
  gap: 12px;
}
.sq-preview-grid > * { min-width: 0; }
.sq-preview pre {
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}
.sq-chart {
  height: 180px;
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
}
.sq-preview img,
.sq-preview svg { max-width: 100%; }
```

Reavaliar fonte de 10–11 px e overflow:hidden do exemplo antigo. Não cortar legenda ou tabela para manter altura artificial.

### 22.4 Rotas e integração

Inventariar as rotas reais antes de alterar comportamento. Não inferir que /produtos/scope, /produtos/pivot e /produtos/canvas existem apenas porque eram nomes sugeridos.

A home não deve criar links para rotas incompletas. Se essas rotas forem placeholders públicos do mesmo lançamento, documentar redirecionamento temporário para / conforme o padrão do projeto. Não criar um redirect coringa que atinja callbacks, assets, APIs, painéis ou serviços já existentes. Não apagar páginas ou autenticação de aplicações independentes.

Esta auditoria não autoriza deploy nem mudanças de infraestrutura. Preparar o diff e as evidências no fluxo já autorizado para o projeto.

## 23. Desempenho e mídia

- Fotografia do hero otimizada, sem ampliar raster pequeno para aparentar alta resolução.
- Usar mecanismo de imagem já adotado pelo projeto e reservar dimensões/aspect ratio para evitar saltos.
- Imagem principal acima da dobra sem lazy-loading inadequado; imagens abaixo podem carregar depois.
- Não carregar a prancha completa ou a arte final na página pública como assets invisíveis de referência.
- Não usar imagens externas de LinkedIn, perfis ou fontes não controladas.
- Carregar apenas pesos de fonte utilizados, com estratégia de fallback estável.
- Sem vídeo, bibliotecas de editor, tabelas dinâmicas reais, chart engines ou SDKs de produto nesta home.
- Nenhuma consulta de dados de usuário ao abrir a página.
- Sem skeleton animado para conteúdo que já é estático.

Meta interna: carregamento leve e layout estável em conexão móvel. Medir tamanho transferido, LCP e deslocamentos com as ferramentas do projeto e reportar resultados; não declarar pontuação ou garantia antes de medir.

## 24. SEO e apresentação pública

| Campo | Conteúdo / regra |
|---|---|
| Title | `ScyQuantix \| Soluções em dados` |
| Description | `Integramos dados, automatizamos relatórios e desenvolvemos painéis e aplicações sob medida para apoiar a gestão da sua empresa.` |
| Idioma | pt-BR |
| Canonical | Origem de produção confirmada no projeto; escolher www ou sem www conforme configuração existente |
| Open Graph title | Mesmo título editorial ou título institucional equivalente sem nova promessa |
| Open Graph description | Mesma descrição institucional |
| Open Graph image | Ativo válido existente ou derivação aprovada; nunca caminho quebrado ou arte inteira vertical |
| Favicon | Símbolo aprovado e legível em pequeno tamanho |
| Robots | Produção institucional indexável; ambientes de preview tratados conforme configuração existente |
| Sitemap | Apenas páginas públicas válidas do escopo; não listar produtos indisponíveis |

Não alterar DNS para “corrigir” canonical. Não adicionar dados estruturados com CNPJ, endereço, avaliações, clientes, preços, perfis ou fundação não confirmados. Não inventar políticas legais ou banner de cookies para uma coleta que não foi introduzida; também não remover controles preexistentes sem compreender o ambiente.

Favicon e social image não estão fechados como novos masters neste pacote. Conferir assets do repositório. Registrar pendência se ausentes, sem inventar origem ou declarar concluído.

## 25. Plano de implementação

Etapa 1 — Levantamento

- Ler instruções locais do repositório.
- Identificar branch, estado de trabalho, comandos existentes e arquivos da home.
- Mapear assets, fonte, metadados, layout global e rotas.
- Localizar o hero limpo e comparar vetores da marca.
- Não sobrescrever alterações do usuário sem compreender seu propósito.

Etapa 2 — Consistência editorial

- Aplicar patches de chaves e ícones.
- Fixar JSON como fonte única.
- Conferir nomes finais dos produtos e biografias.
- Regenerar documentação derivada se ela acompanhar a entrega.

Etapa 3 — Estrutura

- Implementar as nove seções e landmarks.
- Remover controles e rotas de navegação da home.
- Montar grids responsivas e copy completa antes de ajustar detalhes.

Etapa 4 — Fidelidade visual

- Aplicar marca, hero e overlay.
- Ajustar tipografia, dimensões, respiros e alternância de fundos.
- Construir miniaturas do fluxo e previews de produtos com fidelidade suficiente.
- Alinhar cartões, motivos gráficos e rodapé.

Etapa 5 — Validação e entrega

- Executar build e verificações existentes.
- Conferir conteúdo, ausência de ações e responsividade.
- Comparar capturas por seção à referência com exceções documentadas.
- Relatar o que foi concluído, o que foi testado e o que falta.

Não suspender todas as tarefas pela ausência do hero: concluir as partes independentes. Não encerrar declarando “perfeito” se o master ou a validação visual continuam pendentes.

## 26. Matriz de testes e evidências

| ID | Verificação | Método | Critério de aprovação |
|---|---|---|---|
| T01 | Integridade de copy | Comparação ao JSON/textos integrais | Sem perdas, trocas ou promessas novas |
| T02 | Estrutura | Inspeção DOM | Nove blocos, um h1 e headings coerentes |
| T03 | Ações removidas | DOM + teclado + inspeção visual | Nenhum CTA, campo, handler ou foco residual |
| T04 | Skip link | Navegação por Tab | Aparece ao foco e alcança o main |
| T05 | Marca | Comparação com prancha | Geometria, nome, cores e proporção preservados |
| T06 | Hero | Comparação com arte | Cena correta, texto legível, sem texto duplicado no raster |
| T07 | Fluxo | Comparação por seção | Fontes → organização → painel reconhecíveis |
| T08 | Fundadores | Revisão editorial | Ambos completos; 16 anos e experiência regulatória mantidos |
| T09 | Produtos | Revisão visual e conteúdo | Três identidades distintas e status de desenvolvimento visível |
| T10 | Previews | Inspeção responsiva | Nenhum controle simulado, corte ou gráfico colapsado |
| T11 | Mobile | 320 e 360 CSS px | Sem overflow horizontal ou truncamento |
| T12 | Tablet | 768 px | Grades legíveis, sequência preservada |
| T13 | Desktop | 1024 e 1440 px | Grids equilibradas; previews não comprimidos |
| T14 | Zoom | 200% e reflow equivalente a 320 CSS px | Sem perda de texto ou navegação bidimensional da página |
| T15 | Contraste | Cores computadas e fundos reais | Texto atende critérios definidos; foto verificada |
| T16 | Build | Comandos do projeto | Build e checagens aplicáveis sem falhas novas |
| T17 | Console/rede | Inspeção na execução local/preview | Sem erros relevantes, assets 404 ou chamadas desnecessárias |
| T18 | SEO | Head e arquivos de configuração | Título, descrição, canonical e imagens válidos |
| T19 | Rotas | Inventário antes/depois | Nenhum serviço existente afetado por redirecionamento indevido |
| T20 | Desempenho | Ferramentas existentes | Resultado medido e limitações reportadas, sem pontuação inventada |

### 26.1 Comparação visual correta

Produzir captura de página completa em desktop e mobile, mais recortes de hero, fluxo e produtos quando necessário. Capturas são evidências de QA, não novos assets da página.

Não exigir igualdade pixel a pixel com a arte inteira: a remoção de menus, CTAs e formulário muda a altura e o conteúdo. Comparar por seção, considerando as mudanças autorizadas. Não usar essa diferença como desculpa para trocar fotografia, ordem, estilo dos cartões ou hierarquia.

Aprovação visual deve conferir: enquadramento, largura textual, escala dos títulos, proporção de logo, respiros, alinhamento das bordas, altura relativa dos previews, contraste e alternância de superfícies.

### 26.2 Testes automatizados proporcionais

Reutilizar os testes e verificadores existentes. Um teste simples pode procurar controles proibidos e conferir nomes/status. Evitar testes que apenas reescrevem o JSON e comparam a cópia consigo mesma. Revisão visual é necessária para problemas que estrutura e hashes não detectam.

Não alegar testes de produto, autenticação, APIs ou banco: essas funcionalidades não fazem parte desta entrega.

## 27. Critérios de conclusão e bloqueios

### 27.1 Pode ser declarado concluído agora, após implementação e testes

- Copy e semântica.
- Nove seções e remoção das ações.
- Grids e responsividade.
- Fluxo e previews estáticos reconstruídos.
- Correções de contraste.
- Metadados que dependam apenas de informação confirmada.

### 27.2 Não declarar concluído sem evidência adicional

- Réplica visual exata do hero, enquanto faltar master limpo correspondente.
- Uso da tipografia oficial, enquanto sua identidade/origem não estiver confirmada.
- Equivalência dos SVGs ao master oficial, sem comparação visual suficiente.
- Aplicação testada, sem execução no repositório.
- Deploy em domínio, sem publicação e verificação efetivamente realizadas.
- Produto funcional, pois a página é apenas institucional.

### 27.3 Checklist final do agente

- [ ] A empresa é compreensível no hero sem rolar a página.
- [ ] Os quatro problemas de negócio estão claros.
- [ ] A imagem e a marca respeitam o material fornecido.
- [ ] Nenhum botão ou formulário reapareceu por componente global.
- [ ] Produtos mantêm nomes finais e status de desenvolvimento.
- [ ] As biografias estão completas, executivas e sem exageros.
- [ ] O fluxo visual foi implementado além das caixas numeradas.
- [ ] Os previews Pivot e Canvas têm composição específica, não apenas uma tabela e um gráfico genéricos.
- [ ] Texto ciano sobre branco foi resolvido de maneira legível.
- [ ] JSON, Markdown e catálogo não divergem.
- [ ] Grids funcionam nas larguras previstas e em zoom.
- [ ] Imagens e metadados não possuem referências quebradas.
- [ ] Build e verificações foram executados e registrados.
- [ ] Assets pendentes estão explicitamente identificados.
- [ ] Nenhuma alteração de infraestrutura ocorreu como efeito colateral.

## 28. Formato do relatório de entrega do agente

Entregar um relatório curto com:

1. Arquivos alterados e finalidade.
2. Correções aplicadas em relação aos achados A01–A15.
3. Origem dos ativos finais, especialmente hero, marca e fonte.
4. Comandos de validação executados e resultados reais.
5. Capturas desktop/mobile e comparação com a arte.
6. Pendências objetivas, sem esconder aproximações.
7. Estado da publicação: não publicada, preview disponível ou produção verificada, apenas conforme o que ocorreu.

O aceite não deve ser baseado na quantidade de arquivos ou em “parece moderno”. Deve demonstrar que a página mantém a identidade aprovada, comunica claramente a empresa e respeita a fase institucional sem funcionalidades públicas.

## 29. Referências técnicas consultadas

- W3C — Understanding SC 1.4.3: Contrast (Minimum): base para os limites de contraste textual. Os valores numéricos das combinações da paleta foram calculados nesta auditoria.
- W3C — Understanding SC 1.4.10: Reflow: base para verificação a 320 CSS px e preservação de conteúdo em ampliação.

As demais decisões de layout são diretrizes desta implementação derivadas da arte e do escopo. Não são apresentadas como medições oficiais ou validações do site publicado.

## 30. Identificação do pacote auditado

- Arquivo: scyquantix-frontpage-implementacao.zip.
- Tamanho: 2369128 bytes.
- SHA-256: 0a81cf835593c8b8f7907a3d27ffa3a5d058bdc91b782c609a62a99729f0d9ad.
- Referências e textos: arquivos locais do pacote entregue anteriormente.
- Esta especificação é complementar e deve acompanhar o ZIP; não inclui os bytes das imagens dentro do Markdown.
