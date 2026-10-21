import Link from "next/link";
import { buttonVariants, Container, Logo } from "@scyquantix/ui";
import { contactHref, mainNav, siteConfig } from "@/config/site";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-mist bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/75">
      <Container className="flex h-16 items-center justify-between gap-6 lg:h-20">
        <Link href="/" aria-label={`${siteConfig.name}, página inicial`} className="shrink-0">
          <Logo withTagline className="text-base lg:text-lg" />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-navy-700 transition-colors hover:text-cyan-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          {siteConfig.platformUrl && (
            <>
              <span aria-hidden className="h-6 w-px bg-mist" />
              <a href={siteConfig.platformUrl} className="text-sm font-medium text-navy-700 hover:text-cyan-600">
                Acessar plataforma
              </a>
            </>
          )}
          <a href={contactHref} className={buttonVariants({ size: "sm" })}>
            Fale conosco
          </a>
        </div>

        <MobileNav />
      </Container>
    </header>
  );
}
