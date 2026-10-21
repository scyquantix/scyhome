import { cn } from "../cn";

export type ButtonVariant = "primary" | "outline" | "outline-light" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 " +
  "disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-cyan-500 text-navy-900 hover:bg-cyan-400",
  outline: "border border-navy-700/25 text-navy-700 hover:border-navy-700 hover:bg-navy-50",
  "outline-light": "border border-white/40 text-white hover:border-white hover:bg-white/10",
  ghost: "text-navy-700 hover:bg-navy-50",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

/**
 * Classes de botão para aplicar em `<button>`, `<a>` ou `next/link`,
 * sem acoplar o pacote ao roteador de nenhum app.
 */
export function buttonVariants({
  variant = "primary",
  size = "md",
  className,
}: { variant?: ButtonVariant; size?: ButtonSize; className?: string } = {}) {
  return cn(base, variants[variant], sizes[size], className);
}
