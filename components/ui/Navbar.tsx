"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Sobre", href: "#about" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
];

export function Navbar() {
  const [lang, setLang] = useState<"PT" | "EN">("PT");
  const [isOpen, setIsOpen] = useState(false);

  const toggleLang = () => {
    setLang(lang === "PT" ? "EN" : "PT");
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 px-4 py-4 sm:px-8 md:px-16 pointer-events-none">
        <nav className="flex items-center justify-between max-w-[1600px] mx-auto pointer-events-auto">
          <Link
            href="#hero"
            className="font-heading font-bold text-xl tracking-widest uppercase text-white hover:opacity-70 transition-opacity"
            aria-label="Ir para a página inicial"
            onClick={closeMenu}
          >
            HS.
          </Link>

          <div className="flex items-center gap-6 sm:gap-10">
            <ul className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-[0.2em] uppercase text-white/70">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Lang switcher */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 text-xs font-bold tracking-[0.2em] px-4 py-2 rounded-full border border-white/20 hover:border-white/60 text-white backdrop-blur-sm transition-all cursor-pointer"
              aria-label={`Alterar idioma para ${lang === "PT" ? "Inglês" : "Português"}`}
            >
              <span
                className={cn(
                  "transition-opacity",
                  lang === "PT" ? "opacity-100" : "opacity-40",
                )}
              >
                PT
              </span>
              <span className="opacity-30 font-light mix-blend-overlay">|</span>
              <span
                className={cn(
                  "transition-opacity",
                  lang === "EN" ? "opacity-100" : "opacity-40",
                )}
              >
                EN
              </span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 cursor-pointer"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
            >
              <span
                className={cn(
                  "block w-6 h-px bg-white transition-all duration-300 origin-center",
                  isOpen && "translate-y-[3.5px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "block w-6 h-px bg-white transition-all duration-300 origin-center",
                  isOpen && "-translate-y-[3.5px] -rotate-45",
                )}
              />
            </button>
          </div>
        </nav>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-500",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-2xl"
          onClick={closeMenu}
        />

        <nav className="relative z-10 flex flex-col items-start justify-end h-full px-8 pb-24 gap-6">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={cn(
                "text-4xl font-experimental font-bold text-white uppercase tracking-tight transition-all duration-500",
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0",
              )}
              style={{ transitionDelay: isOpen ? `${i * 80}ms` : "0ms" }}
            >
              <span className="text-white/30 font-mono text-sm mr-4 tracking-widest">
                0{i + 1}.
              </span>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
