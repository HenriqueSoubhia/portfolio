"use client";

import { LocalTime } from "@/components/ui/LocalTime";
import { ArrowDownRightIcon, SparkleIcon } from "@phosphor-icons/react";

export function Hero() {
  return (
    <section
      className="relative w-full h-dvh min-h-[600px] flex items-center overflow-hidden px-6 sm:px-12 md:px-20 container mx-auto pt-16"
      id="hero"
    >
      <div className="relative z-10 flex flex-col items-start w-full max-w-3xl mt-12 sm:mt-0">
        <LocalTime />

        <div className="flex flex-col gap-2 mb-8 relative">
          <span className="text-xs sm:text-sm text-white/40 tracking-[0.4em] font-sans font-medium uppercase flex items-center gap-2">
            フロントエンド開発者
            <SparkleIcon className="w-3 h-3 opacity-50" weight="fill" />
          </span>
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold font-experimental text-white tracking-tighter leading-[0.9]">
            Desenvolvedor
            <span className="text-transparent bg-clip-text bg-linear-to-br from-white to-white/30 italic block">
              Frontend.
            </span>
          </h2>
        </div>

        <div className="flex items-start gap-4">
          <ArrowDownRightIcon
            className="w-8 h-8 text-white/50 shrink-0 mt-1"
            strokeWidth={1}
          />
          <p className="text-lg sm:text-xl text-white/70 max-w-sm sm:max-w-md font-light leading-relaxed">
            Criando interfaces fluidas, interativas e focadas na experiência do
            usuário. Desenhando soluções digitais que se adaptam perfeitamente.
          </p>
        </div>
      </div>

      <h1
        className="absolute right-0 sm:right-4 md:right-8 h-full flex flex-col items-center p-2 sm:p-4 pointer-events-none font-bold font-heading gap-2 sm:gap-4 uppercase tracking-tighter text-white opacity-30 select-none mix-blend-overlay md:opacity-90"
        style={{
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
          fontSize: "clamp(3.5rem, 18dvh, 15rem)",
          lineHeight: 0.82,
        }}
        aria-label="Henrique Soubhia"
      >
        <span className="block" aria-hidden="true">
          Henrique
        </span>
        <span className="block" aria-hidden="true">
          Soubhia
        </span>
      </h1>

      <a
        href="#about"
        className="absolute bottom-8 left-6 sm:left-12 md:left-20 flex items-center gap-3 text-white/50 hover:text-white transition-colors group"
        aria-label="Rolar para Sobre Mim"
      >
        <span className="text-xs tracking-[0.3em] uppercase font-mono">
          Scroll
        </span>
        <div className="w-px h-8 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[50%]"></div>
        </div>
      </a>
    </section>
  );
}
