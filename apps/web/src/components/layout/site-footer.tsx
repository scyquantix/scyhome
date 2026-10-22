import { Container, Logo } from "@scyquantix/ui";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-mist bg-white">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Logo />
          <p className="mt-3 text-sm text-muted">{siteConfig.tagline}.</p>
        </div>
        <div className="text-sm text-muted sm:text-right">
          <p className="font-medium text-navy-700">{siteConfig.domain}</p>
          <p className="mt-1">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>
      </Container>
    </footer>
  );
}
