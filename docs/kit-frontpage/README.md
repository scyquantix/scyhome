# ScyQuantix — pacote de implementação da front page

> **Ponto de entrada:** `ESPECIFICACAO-MESTRA.md` (v2.0), que prevalece sobre este arquivo em caso de conflito. A copy canônica fica em `apps/web/src/content/home.pt-BR.json` (scyhome); os derivados deste kit são regenerados por `gerar-derivados.py`.

Comece por `07-implementacao/AGENTE.md`. A entrega é uma pasta de insumos, especificações e componentes de apoio; não é um aplicativo Next.js completo nem uma publicação.

## Escopo vigente
Uma única página institucional, em português, para apresentar a empresa e demonstrar a existência do projeto. Sem botões, formulários, cadastro, login ou acesso às ferramentas. Produtos apresentados como em desenvolvimento. A arte final é a referência visual; as remoções descritas neste pacote prevalecem sobre os controles que ainda aparecem nela.

## Conteúdo da pasta
| Pasta | Conteúdo |
|---|---|
| 01-referencias | Arte final, prancha da marca e campanha originais |
| 02-marca | Tokens CSS, especificações e dois SVGs recuperados do site atual |
| 03-textos | Copy organizada em JSON e Markdown |
| 04-secoes | Uma especificação para cada uma das nove seções |
| 05-componentes | Componentes React estáticos de apoio e estilos |
| 06-icones | SVGs encontrados no site atual e informação de procedência |
| 07-implementacao | Instruções do agente, mapa de composição e pendências |
| 08-validacao | Critérios de aceite e inventário com hashes |

Abra `catalogo.html` em um navegador para consultar as referências, os ativos e os textos lado a lado. O catálogo é material de trabalho, não o layout final.

## Limite importante dos arquivos disponíveis
A arte final e a campanha são imagens achatadas. Não existe neste pacote um arquivo original de fotografia do escritório sem textos, nem os três previews de produtos separados em alta resolução. Não use a imagem inteira da página como site. Reconstrua textos, cartões e previews em HTML/CSS. A falta do master limpo do hero está documentada em `07-implementacao/PENDENCIAS.md`; não foi disfarçada com uma fotografia diferente.

A fonte tipográfica oficial não foi fornecida. Os tamanhos, espaçamentos e breakpoints são orientações de implementação, não medidas oficiais certificadas. Os SVGs recuperados do site devem ser comparados à prancha antes de aprovação final.
