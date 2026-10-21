"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@scyquantix/ui";
import { contactHref, mainNav, siteConfig } from "@/config/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="menu-mobile"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={() => setOpen((value) => !value)}
        className="-mr-2 inline-flex size-10 items-center justify-center rounded-md text-navy-700 hover:bg-navy-50"
      >
        {open ? <X className="size-6" /> : <Menu className="size-6" />}
      </button>

      {open && (
        <nav
          id="menu-mobile"
          aria-label="Principal"
          className="absolute inset-x-0 top-full border-b border-mist bg-white shadow-lg"
        >
          <ul className="flex flex-col px-4 py-4">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 font-medium text-navy-700 hover:bg-navy-50"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {siteConfig.platformUrl && (
              <li>
                <a
                  href={siteConfig.platformUrl}
                  className="block rounded-md px-3 py-3 font-medium text-navy-700 hover:bg-navy-50"
                >
                  Acessar plataforma
                </a>
              </li>
            )}
            <li className="mt-3">
              <a href={contactHref} className={buttonVariants({ className: "w-full" })}>
                Fale conosco
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
