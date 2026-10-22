import { Container, Logo } from "@scyquantix/ui";
import { content } from "@/content/home";

/**
 * Marca e menu de âncoras internas (rolagem até a seção, sem sair da página). Fixo no topo
 * para o menu continuar à mão; a altura fica em `--altura-header` (globals.css), que também
 * dá o `scroll-margin-top` das seções. Sem ações externas nem logo clicável.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <Container className="flex h-(--altura-header) flex-col justify-center gap-2 min-[480px]:flex-row min-[480px]:items-center min-[480px]:justify-between">
        <Logo className="text-[20px] lg:text-[23px]" />
        <nav aria-label="Seções da página">
          <ul className="flex gap-6 text-sm font-medium text-navy-700 lg:gap-9 lg:text-[15px]">
            {content.brand.nav.map(({ label, target }) => (
              <li key={target}>
                <a
                  href={`#${target}`}
                  className="rounded-sm underline-offset-8 decoration-cyan-500 decoration-2 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-ink"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
