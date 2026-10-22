import { Container, Logo } from "@scyquantix/ui";
import { content } from "@/content/home";

export function SiteFooter() {
  const { tagline, domain, copyright } = content.footer;
  return (
    <footer className="border-t border-line bg-white">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Logo className="text-base" />
          <p className="mt-3 text-sm text-muted">{tagline}</p>
        </div>
        <div className="text-sm text-muted sm:text-right">
          <p className="font-medium text-navy-700">{domain}</p>
          <p className="mt-1">{copyright}</p>
        </div>
      </Container>
    </footer>
  );
}
