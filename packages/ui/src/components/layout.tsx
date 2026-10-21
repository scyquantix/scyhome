import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "../cn";

export function Container({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)} {...props} />;
}

type EyebrowProps = { children: ReactNode; tone?: "dark" | "light"; className?: string };

/** Rótulo em caixa alta com traço ciano, como nos layouts da marca. */
export function Eyebrow({ children, tone = "dark", className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em]",
        tone === "light" ? "text-navy-100" : "text-navy-500",
        className,
      )}
    >
      <span aria-hidden className="h-0.5 w-8 bg-cyan-500" />
      {children}
    </p>
  );
}

type SectionHeaderProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  tone?: "dark" | "light";
  className?: string;
};

export function SectionHeader({ eyebrow, title, description, tone = "dark", className }: SectionHeaderProps) {
  const light = tone === "light";
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl",
          eyebrow && "mt-4",
          light ? "text-white" : "text-navy-700",
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-3 text-lg", light ? "text-navy-100" : "text-muted")}>{description}</p>
      )}
    </div>
  );
}

/** Destaque ciano dentro de títulos. */
export function Highlight({ children }: { children: ReactNode }) {
  return <span className="text-cyan-500">{children}</span>;
}

type BadgeProps = { children: ReactNode; tone?: "cyan" | "outline-light"; className?: string };

export function Badge({ children, tone = "cyan", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em]",
        tone === "cyan" ? "bg-cyan-50 text-cyan-700" : "border border-cyan-500/60 text-cyan-300",
        className,
      )}
    >
      {children}
    </span>
  );
}
