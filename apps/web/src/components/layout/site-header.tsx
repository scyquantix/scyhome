import { Container, Logo } from "@scyquantix/ui";

/** Só a marca: sem navegação nem ações nesta fase. A assinatura fica de fora porque não seria legível no tamanho do cabeçalho. */
export function SiteHeader() {
  return (
    <header className="border-b border-line bg-white">
      <Container className="flex h-[72px] items-center lg:h-[88px]">
        <Logo className="text-[20px] lg:text-[23px]" />
      </Container>
    </header>
  );
}
