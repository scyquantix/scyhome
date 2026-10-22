import { Container, Eyebrow } from "@scyquantix/ui";

export default function NotFound() {
  return (
    <Container className="py-32">
      <Eyebrow>Erro 404</Eyebrow>
      <h1 className="mt-4 font-display text-4xl font-bold text-navy-700">Página não encontrada.</h1>
      <p className="mt-3 text-lg text-muted">O endereço acessado não existe ou foi movido.</p>
    </Container>
  );
}
