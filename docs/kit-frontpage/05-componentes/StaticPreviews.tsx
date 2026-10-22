import './previews.css';

/** Componentes conceituais estáticos. Não são as aplicações dos produtos. */
export function ScopePreview() {
 return <figure className="sq-preview"><div className="sq-preview-grid"><aside><strong>Catálogo</strong><p>Dados públicos</p><p>Tabelas</p><p>Documentação</p></aside><div><strong>Consulta SQL</strong><pre>{'SELECT regiao, periodo, valor\nFROM dados_publicos;'}</pre></div></div><figcaption>Scy Scope — prévia conceitual</figcaption></figure>;
}
export function PivotPreview() {
 return <figure className="sq-preview"><div className="sq-preview-grid"><aside><strong>Dimensões</strong><p>Região</p><p>Período</p><p>Categoria</p></aside><div><p>Linhas: Região</p><p>Colunas: Período</p><p>Valores: Valor</p><table><caption>Estrutura ilustrativa, sem resultados reais</caption><thead><tr><th>Região</th><th>Período</th><th>Valor</th></tr></thead><tbody><tr><td>—</td><td>—</td><td>—</td></tr></tbody></table></div></div><figcaption>Scy Pivot — prévia conceitual</figcaption></figure>;
}
export function CanvasPreview() {
 return <figure className="sq-preview"><div className="sq-preview-grid"><aside><strong>Visualizações</strong><p>Barras</p><p>Linhas</p><p>Indicadores</p></aside><div className="sq-chart" role="img" aria-label="Gráfico ilustrativo, sem dados reais"><i/><i/><i/><i/><i/></div></div><figcaption>Scy Canvas — prévia conceitual</figcaption></figure>;
}
export function DataFlow() {
 return <figure className="sq-flow"><ol>{['Sistemas e arquivos','Dados organizados','Painel de acompanhamento'].map((item,i)=><li key={item}><span aria-hidden="true">0{i+1}</span><strong>{item}</strong></li>)}</ol><figcaption>Exemplo ilustrativo de solução, sem dados de clientes.</figcaption></figure>;
}
