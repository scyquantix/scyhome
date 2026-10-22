# Cabeçalho

Componente: `HeaderSection`.
Fonte dos textos: chave `brand` de `03-textos/conteudo.pt-BR.json` (`brand.name` e `brand.tagline`).

## Composição
Logo à esquerda, fundo branco e respiro. À direita, menu de âncoras internas (v2.1): itens de `brand.nav` — Soluções, Produtos e Sobre — que rolam até `#solucoes`, `#produtos` e `#fundadores`, sem sair da página. Cabeçalho fixo no topo. Remover "Seja parceiro", menu hambúrguer, login, cadastro, contato e acesso à plataforma. Logo sem link.

## Semântica e observações
Alt da marca: ScyQuantix. Não duplicar o nome em leitor de tela. Menu em `<nav aria-label="Seções da página">`, com foco visível.

## Responsividade
Conservar a ordem de leitura. Abaixo de 480 px, os links ficam numa segunda linha sob a marca. Sem rolagem horizontal a 320 px. Respiro consistente e texto sem truncamento. Não copiar as medidas reduzidas do PNG literalmente para a página.

## Aceite
Comparar a seção à arte final e às exceções do escopo estático. Não inventar texto comercial, métricas, parcerias ou funcionalidades disponíveis.
