import { LocalTime } from "@/components/ui/LocalTime";

export function Hero() {
  return (
    <section className="relative w-full h-dvh min-h-[600px] flex items-center overflow-hidden px-6 sm:px-12 md:px-20 container mx-auto">

      <div className="relative z-10 flex flex-col items-start w-full max-w-3xl mt-12 sm:mt-0">

        <LocalTime />

        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-heading text-white tracking-tight mb-6 leading-tight flex flex-col">
          Desenvolvedor
          <span className="text-white/60">Frontend.</span>
        </h2>

        <p className="text-lg sm:text-lg text-white/70 max-w-sm sm:max-w-md font-light leading-relaxed">
          Criando interfaces fluidas, interativas e focadas na experiência do usuário.
          Desenhando soluções digitais que se adaptam perfeitamente.
        </p>

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
