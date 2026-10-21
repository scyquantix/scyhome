import Link from "next/link";
import { Container, Logo } from "@scyquantix/ui";
import { mainNav, siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-mist bg-white">
      <Container className="flex flex-col gap-8 py-10 lg:flex-row lg:items-center lg:justify-between">
        <Logo withTagline />
        <nav aria-label="Rodapé">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-navy-700">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-cyan-600">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="text-sm text-muted lg:text-right">
          <p>
            <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-cyan-600">
              {siteConfig.contactEmail}
            </a>
          </p>
          <p className="mt-1">
            © {new Date().getFullYear()} {siteConfig.name} · {siteConfig.domain}
          </p>
        </div>
      </Container>
    </footer>
  );
}
