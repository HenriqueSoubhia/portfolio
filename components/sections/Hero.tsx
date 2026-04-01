import { LocalTime } from "@/components/ui/LocalTime";
import { ArrowDownRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full h-dvh min-h-[600px] flex items-center overflow-hidden px-6 sm:px-12 md:px-20 container mx-auto pt-16">

      <div className="relative z-10 flex flex-col items-start w-full max-w-3xl mt-12 sm:mt-0">

        <LocalTime />

        <div className="flex flex-col gap-2 mb-8 relative">
          <span className="text-xs sm:text-sm text-white/40 tracking-[0.4em] font-sans font-medium uppercase flex items-center gap-2">
            フロントエンド開発者
            <Sparkles className="w-3 h-3 opacity-50" />
          </span>
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold font-experimental text-white tracking-tighter leading-[0.9]">
            Desenvolvedor<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-white/30 italic">
              Frontend.
            </span>
          </h2>
        </div>

        <div className="flex items-start gap-4">
          <ArrowDownRight className="w-8 h-8 text-white/50 shrink-0 mt-1" strokeWidth={1} />
          <p className="text-lg sm:text-xl text-white/70 max-w-sm sm:max-w-md font-light leading-relaxed">
            Criando interfaces fluidas, interativas e focadas na experiência do usuário.
            Desenhando soluções digitais que se adaptam perfeitamente.
          </p>
        </div>

      </div>

      <div className="absolute right-0 sm:right-4 md:right-8 h-full flex items-center justify-center p-2 sm:p-4 pointer-events-none">
        <h1
          className="font-bold flex flex-col font-heading gap-2 sm:gap-4 uppercase tracking-tighter text-white opacity-90 select-none mix-blend-overlay"
          style={{
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            fontSize: 'clamp(3.5rem, 18dvh, 15rem)',
            lineHeight: 0.82
          }}
          aria-label="Henrique Soubhia"
        >
          <span className="block" aria-hidden="true">Henrique</span>
          <span className="block" aria-hidden="true">Soubhia</span>
        </h1>
      </div>
    </section>
  );
}
