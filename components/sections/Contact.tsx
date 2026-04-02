"use client";

import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  ArrowUpRightIcon,
} from "@phosphor-icons/react";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden flex flex-col pt-24 sm:pt-32 px-6 sm:px-12 md:px-20 container mx-auto pb-12"
    >
      <header className="flex flex-col gap-8 mb-20 lg:mb-32">
        <div className="flex flex-col gap-2">
          <span className="text-white/40 font-mono text-xs sm:text-sm tracking-[0.2em] uppercase">
            03. PRÓXIMOS PASSOS
          </span>
          <h2 className="text-6xl sm:text-7xl md:text-[8rem] font-bold font-experimental text-white tracking-tighter uppercase leading-[0.85]">
            VAMOS <span className="block">CONVERSAR.</span>
          </h2>
        </div>
      </header>

      <div className="flex flex-col md:flex-row justify-between items-end gap-16 mb-32">
        <div className="flex flex-col gap-6 max-w-xl">
          <p className="text-2xl sm:text-3xl text-white font-light font-heading leading-tight tracking-tight">
            Tenha um projeto em mente ou apenas queira bater um papo sobre
            tecnologia? Adoraria ouvir de você.
          </p>
          <a
            href="mailto:contato@henriquesoubhia.com"
            className="group flex items-center gap-4 text-4xl sm:text-5xl font-experimental font-bold text-white hover:opacity-70 transition-all duration-300 w-fit"
          >
            Mandar Olá
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-500 overflow-hidden">
              <ArrowUpRightIcon className="w-6 h-6 text-black" />
            </div>
          </a>
        </div>

        <div className="flex flex-col gap-4 items-end">
          <div className="flex flex-col gap-3 items-end">
            <span className="text-white/30 font-mono text-[10px] uppercase tracking-widest mb-2">
              SOCIAIS
            </span>
            {[
              {
                name: "LinkedIn",
                href: "https://linkedin.com",
                icon: <LinkedinLogoIcon className="w-4 h-4" />,
              },
              {
                name: "GitHub",
                href: "https://github.com",
                icon: <GithubLogoIcon className="w-4 h-4" />,
              },
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 group hover:translate-x-2 transition-transform duration-300"
              >
                <span className="text-white/50 group-hover:text-white font-mono text-xs tracking-widest uppercase mt-0.5">
                  {social.name}
                </span>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/50 group-hover:text-white group-hover:border-white/30 transition-colors">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
