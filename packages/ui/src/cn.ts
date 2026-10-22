import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/** Ensina ao tailwind-merge os tamanhos de texto do tema (styles.css), senão `text-h2` vira "cor" e some. */
const twMerge = extendTailwindMerge({
  extend: { theme: { text: ["h1", "h2", "body"] } },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
