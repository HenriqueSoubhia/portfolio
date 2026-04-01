"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [lang, setLang] = useState<"PT" | "EN">("PT");

  const toggleLang = () => {
    setLang(lang === "PT" ? "EN" : "PT");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 py-4 sm:px-8 md:px-16 pointer-events-none">
      <nav className="flex items-center justify-between container mx-auto pointer-events-auto">

        <Link
          href="/"
          className="font-heading font-bold text-xl tracking-widest uppercase text-white hover:opacity-70 transition-opacity"
          aria-label="Ir para a página inicial"
        >
          HS.
        </Link>

        <div className="flex items-center gap-6 sm:gap-10">

          <ul className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-[0.2em] uppercase text-white/70">
            <li>
              <Link href="#sobre" className="hover:text-white transition-colors">Sobre</Link>
            </li>
            <li>
              <Link href="#projetos" className="hover:text-white transition-colors">Projetos</Link>
            </li>
            <li>
              <Link href="#contato" className="hover:text-white transition-colors">Contato</Link>
            </li>
          </ul>

          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 text-xs font-bold tracking-[0.2em] px-4 py-2 rounded-full border border-white/20 hover:border-white/60 text-white backdrop-blur-sm transition-all"
            aria-label={`Alterar idioma para ${lang === "PT" ? "Inglês" : "Português"}`}
          >
            <span className={cn("transition-opacity cursor-pointer", lang === "PT" ? "opacity-100" : "opacity-40")}>PT</span>
            <span className="opacity-30 font-light mix-blend-overlay">|</span>
            <span className={cn("transition-opacity cursor-pointer", lang === "EN" ? "opacity-100" : "opacity-40")}>EN</span>
          </button>

        </div>
      </nav>
    </header>
  );
}
