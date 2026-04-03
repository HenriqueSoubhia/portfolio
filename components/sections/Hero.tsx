"use client";

import { LocalTime } from "@/components/ui/LocalTime";
import { ArrowDownRightIcon, SparkleIcon } from "@phosphor-icons/react";

export function Hero() {
  return (
    <section
      className="relative w-full h-dvh min-h-[600px] flex items-center overflow-hidden"
      id="hero"
    >
      <div className="relative w-full max-w-[1600px] mx-auto h-full flex items-center px-6 sm:px-12 md:px-20">
        <div className="relative z-10 flex flex-col items-start w-full max-w-3xl mt-12 sm:mt-0">
          <LocalTime />

          <div className="flex flex-col gap-2 mb-8 relative">
            <span className="text-[clamp(0.6rem,2vw,0.875rem)] text-white/40 tracking-[0.4em] font-sans font-medium uppercase flex items-center gap-2">
              フロントエンド開発者
              <SparkleIcon className="w-3 h-3 opacity-50" weight="fill" />
            </span>
            <h2 className="text-[clamp(2.3rem,10vw,8rem)] font-bold font-experimental text-white tracking-tighter leading-[0.85] text-balance">
              Desenvolvedor
              <span className="text-transparent bg-clip-text bg-linear-to-br from-white to-white/30 italic block">
                Frontend.
              </span>
            </h2>
          </div>

          <div className="flex items-start gap-4">
            <ArrowDownRightIcon
              className="w-6 h-6 sm:w-8 sm:h-8 text-white/50 shrink-0 mt-1"
              strokeWidth={1}
            />
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-sm sm:max-w-md font-light leading-relaxed text-balance">
              Criando interfaces fluidas, interativas e focadas na experiência
              do usuário. Desenhando soluções digitais que se adaptam
              perfeitamente.
            </p>
          </div>
        </div>

        <h1
          className="absolute right-0 sm:right-6 md:right-12 h-full flex flex-col items-start pt-8 sm:pt-16 pointer-events-none font-bold font-heading gap-2 sm:gap-4 uppercase tracking-tighter text-white opacity-15 md:opacity-90 select-none mix-blend-overlay"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            fontSize: "clamp(2rem, 18dvh, 12rem)",
            lineHeight: 0.8,
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
      </div>
    </section>
  );
}
