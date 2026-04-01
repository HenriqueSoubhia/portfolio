import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utilitário padrão de mercado para mesclar classes Tailwind.
 * Combina condicionalmente classes usando \`clsx\` e resolve conflitos de estilo usando \`twMerge\`.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
