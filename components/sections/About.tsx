export function About() {
  return (
    <section
      id="about"
      className="relative w-full min-h-dvh flex items-center bg-transparent py-24 sm:py-32 px-6 sm:px-12 md:px-20 container mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-20 w-full items-start">
        <header className="md:col-span-4 flex flex-col items-start md:sticky md:top-40">
          <span className="text-white/40 font-mono text-xs sm:text-sm tracking-[0.2em] mb-4">
            01. PROFILE
          </span>
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-bold font-experimental text-white tracking-tighter uppercase leading-[0.9]">
            Sobre
            <span className="block">Mim.</span>
          </h2>
        </header>

        <div className="md:col-span-8 flex flex-col gap-12">
          <div className="flex items-center gap-4 border-l-4 border-white pl-5 py-2">
            <span className="text-white font-bold font-heading tracking-widest uppercase text-base sm:text-lg">
              FIAP
            </span>
            <span className="text-white/40 font-light">—</span>
            <span className="text-white/80 font-light tracking-wider text-sm sm:text-base">
              DESENVOLVEDOR WEB
            </span>
          </div>

          <article className="flex flex-col gap-6">
            <p className="text-lg sm:text-xl text-white/80 font-light leading-relaxed max-w-2xl">
              Sou apaixonado por converter problemas complexos em soluções
              visuais minimalistas e altamente eficientes. Meu foco é o
              desenvolvimento Front-end, onde acredito que a estética aliada à
              performance dita o sucesso da experiência do usuário moderno.
            </p>

            <p className="text-lg sm:text-xl text-white/80 font-light leading-relaxed max-w-2xl">
              Atualmente atuo como Desenvolvedor Web na <strong>FIAP</strong>,
              uma das instituições de tecnologia e inovação mais renomadas,
              local onde desempenho um papel tático no ambiente imersivo,
              lapidando minhas habilidades para entregar ecossistemas
              sustentáveis através de código limpo.
            </p>
          </article>

          <figure className="relative w-full max-w-sm aspect-3/4 overflow-hidden bg-white/5 border border-white/10 mt-4 group">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white/20 transition-colors group-hover:text-white/40">
              <span className="font-sans tracking-widest text-xs uppercase mb-2">
                [ Espaço de Fotografia ]
              </span>
              <span className="font-mono text-[0.65rem] opacity-50">
                750x1000 MAX
              </span>
            </div>

            <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-white/20"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white/20"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-white/20"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-white/20"></div>
          </figure>
        </div>
      </div>
    </section>
  );
}
