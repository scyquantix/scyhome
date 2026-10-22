import { Container, Logo } from "@scyquantix/ui";

export function SiteHeader() {
  return (
    <header className="border-b border-mist bg-white">
      <Container className="flex h-16 items-center lg:h-20">
        <Logo withTagline className="text-base lg:text-lg" />
      </Container>
    </header>
  );
}
