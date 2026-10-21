import { useId, type SVGProps } from "react";
import { cn } from "../cn";
import {
  SYMBOL_VIEWBOX,
  symbolPaths,
  WORDMARK_VIEWBOX,
  wordmarkLetters,
  wordmarkQ,
} from "./logo-paths";

type Tone = "color" | "mono";

type LogoSymbolProps = Omit<SVGProps<SVGSVGElement>, "viewBox"> & {
  /** `mono` usa `currentColor` com variações de opacidade, como na versão monocromática. */
  tone?: Tone;
  title?: string;
};

type Piece = keyof typeof symbolPaths;

/** Ordem de desenho, preenchimento colorido e opacidade na versão mono. */
const pieces: { key: Piece; fill: string; mono: number }[] = [
  { key: "top", fill: "top", mono: 1 },
  { key: "mid", fill: "mid", mono: 0.8 },
  { key: "low", fill: "low", mono: 0.8 },
  { key: "right", fill: "right", mono: 0.65 },
  { key: "stem", fill: "stem", mono: 0.85 },
  { key: "tail", fill: "tail", mono: 0.6 },
  { key: "cubeTop", fill: "#13C3DF", mono: 0.5 },
  { key: "cubeLeft", fill: "#0B6A8A", mono: 0.85 },
  { key: "cubeRight", fill: "#049BBA", mono: 0.65 },
];

/**
 * Símbolo ScyQuantix: S e Q em estrutura hexagonal isométrica com o cubo
 * central (evidência, estrutura e valor real).
 */
export function LogoSymbol({ tone = "color", title = "ScyQuantix", className, ...props }: LogoSymbolProps) {
  const id = useId();
  const mono = tone === "mono";
  const gradient = (name: string) => (name.startsWith("#") ? name : `url(#${id}-${name})`);

  return (
    <svg viewBox={SYMBOL_VIEWBOX} role="img" aria-label={title} className={cn("shrink-0", className)} {...props}>
      {!mono && (
        <defs>
          <linearGradient id={`${id}-top`} x1="344" y1="2" x2="2" y2="200" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#05365A" />
            <stop offset="1" stopColor="#022640" />
          </linearGradient>
          <linearGradient id={`${id}-mid`} x1="2" y1="250" x2="335" y2="470" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#105479" />
            <stop offset="1" stopColor="#063959" />
          </linearGradient>
          <linearGradient id={`${id}-low`} x1="2" y1="480" x2="335" y2="700" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#105174" />
            <stop offset="1" stopColor="#042E4B" />
          </linearGradient>
          <linearGradient id={`${id}-right`} x1="0" y1="20" x2="0" y2="520" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#05C2DC" />
            <stop offset="0.5" stopColor="#0985A6" />
            <stop offset="1" stopColor="#0A466A" />
          </linearGradient>
          <linearGradient id={`${id}-stem`} x1="0" y1="330" x2="0" y2="544" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#13597F" />
            <stop offset="1" stopColor="#094563" />
          </linearGradient>
          <linearGradient id={`${id}-tail`} x1="380" y1="540" x2="717" y2="660" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#04B4D2" />
            <stop offset="1" stopColor="#0A7599" />
          </linearGradient>
        </defs>
      )}
      {/* O contorno da mesma cor arredonda levemente os cantos, como na arte original. */}
      <g strokeWidth={8} strokeLinejoin="round">
        {pieces.map(({ key, fill, mono: opacity }) => {
          const paint = mono ? "currentColor" : gradient(fill);
          return (
            <path key={key} d={symbolPaths[key]} fill={paint} stroke={paint} opacity={mono ? opacity : undefined} />
          );
        })}
      </g>
    </svg>
  );
}

type WordmarkProps = Omit<SVGProps<SVGSVGElement>, "viewBox"> & {
  /** `light` para fundos escuros; `mono` usa `currentColor`. */
  variant?: "default" | "light" | "mono";
  title?: string;
};

/** Nome "ScyQuantix" em contornos vetoriais, fiel à tipografia da identidade. */
export function Wordmark({ variant = "default", title = "ScyQuantix", className, ...props }: WordmarkProps) {
  const id = useId();
  const mono = variant === "mono";
  const letters = variant === "light" ? "#FFFFFF" : mono ? "currentColor" : "#0B2D4A";
  const q = mono ? "currentColor" : `url(#${id}-q)`;

  return (
    <svg viewBox={WORDMARK_VIEWBOX} role="img" aria-label={title} className={cn("shrink-0", className)} {...props}>
      {!mono && (
        <defs>
          <linearGradient id={`${id}-q`} x1="0" y1="4" x2="0" y2="86" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#00C2D4" />
            <stop offset="0.6" stopColor="#06A9C6" />
            <stop offset="1" stopColor="#0A7FA0" />
          </linearGradient>
        </defs>
      )}
      <path fill={letters} fillRule="evenodd" d={wordmarkLetters} />
      <path fill={q} fillRule="evenodd" d={wordmarkQ} />
    </svg>
  );
}

type LogoProps = {
  /** `light` para fundos escuros. */
  variant?: "default" | "light" | "mono";
  withTagline?: boolean;
  /** O tamanho do logo acompanha o `font-size` (ex.: `text-lg`, `text-2xl`). */
  className?: string;
};

/** Variação horizontal: símbolo à esquerda, nome e assinatura à direita. */
export function Logo({ variant = "default", withTagline = false, className }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-[0.55em] text-lg", className)}>
      <LogoSymbol tone={variant === "mono" ? "mono" : "color"} aria-hidden className="h-[2.3em] w-auto" />
      <span className="flex flex-col">
        <Wordmark variant={variant} aria-hidden className="h-[1.15em] w-auto" />
        <span className="sr-only">ScyQuantix</span>
        {withTagline && (
          <span
            className={cn(
              "mt-[0.35em] text-[0.24em] leading-none font-medium tracking-[0.2em] whitespace-nowrap uppercase",
              variant === "light" ? "text-navy-100" : variant === "mono" ? "text-current" : "text-muted",
            )}
          >
            Tecnologia orientada por evidências
          </span>
        )}
      </span>
    </span>
  );
}
