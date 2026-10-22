#!/usr/bin/env python3
"""Regenera os derivados do kit a partir da copy canônica do site.

Fonte única: apps/web/src/content/home.pt-BR.json (lida pela página).
Derivados: 03-textos/conteudo.pt-BR.json, 03-textos/textos-por-secao.md,
os blocos de conteúdo de catalogo.html e 08-validacao/inventario.json.

Uso, na raiz do repositório: python3 docs/kit-frontpage/gerar-derivados.py
"""
import datetime
import hashlib
import html
import json
import re
from pathlib import Path

KIT = Path(__file__).resolve().parent
FONTE = KIT.parent.parent / "apps/web/src/content/home.pt-BR.json"

conteudo = json.loads(FONTE.read_text(encoding="utf-8"))


def bloco(valor):
    return json.dumps(valor, ensure_ascii=False, indent=2)


(KIT / "03-textos/conteudo.pt-BR.json").write_text(bloco(conteudo) + "\n", encoding="utf-8")

md = [
    "# Textos da página",
    "Derivado de `apps/web/src/content/home.pt-BR.json` por `gerar-derivados.py`; não editar à mão.",
    "",
]
for chave, valor in conteudo.items():
    md += [f"## {chave}", "```json", bloco(valor), "```", ""]
(KIT / "03-textos/textos-por-secao.md").write_text("\n".join(md), encoding="utf-8")

catalogo = KIT / "catalogo.html"
pagina = catalogo.read_text(encoding="utf-8")
for chave, valor in conteudo.items():
    padrao = re.compile(rf"(<h2>{re.escape(chave)}</h2>\s*<pre>).*?(</pre>)", re.S)
    pagina, n = padrao.subn(lambda m: m.group(1) + html.escape(bloco(valor)) + m.group(2), pagina)
    if n != 1:
        raise SystemExit(f"catalogo.html: bloco '{chave}' encontrado {n} vezes")
catalogo.write_text(pagina, encoding="utf-8")

inventario = KIT / "08-validacao/inventario.json"
arquivos = sorted(p for p in KIT.rglob("*") if p.is_file() and p != inventario)
inventario.write_text(
    bloco(
        {
            "data": datetime.date.today().isoformat(),
            "arquivos": [
                {
                    "arquivo": p.relative_to(KIT).as_posix(),
                    "bytes": p.stat().st_size,
                    "sha256": hashlib.sha256(p.read_bytes()).hexdigest(),
                }
                for p in arquivos
            ],
        }
    )
    + "\n",
    encoding="utf-8",
)
print(f"Derivados regenerados; inventário com {len(arquivos)} arquivos.")
