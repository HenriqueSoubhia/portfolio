"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "motion/react";
import { getLangTransition } from "@/lib/animations";

export function Navbar() {
  const { lang, switchLang, isTransitioning, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const { langAnimate, langTransition } = getLangTransition(isTransitioning);

  const NAV_LINKS = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 w-full z-50 px-4 py-4 sm:px-8 md:px-16 pointer-events-none"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      >
        <nav className="flex items-center justify-between max-w-[1600px] mx-auto pointer-events-auto">
          <Link
            href="#hero"
            className="font-heading font-bold text-xl tracking-widest uppercase text-white"
            aria-label="Ir para a página inicial"
            onClick={closeMenu}
          >
            HS.
          </Link>

          <div className="flex items-center gap-6 sm:gap-10">
            <ul className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-[0.2em] uppercase text-white/70">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <motion.span
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="inline-block"
                  >
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      <motion.span
                        animate={isTransitioning ? langAnimate : { opacity: 1, x: 0 }}
                        transition={langTransition}
                      >
                        {link.label}
                      </motion.span>
                    </Link>
                  </motion.span>
                </li>
              ))}
            </ul>

            <motion.button
              onClick={switchLang}
              className="flex items-center gap-1.5 text-xs font-bold tracking-[0.2em] px-4 py-2 rounded-full border border-white/20 text-white backdrop-blur-sm transition-all cursor-pointer uppercase"
              aria-label={`Alterar idioma para ${lang === "pt" ? "Inglês" : "Português"}`}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15 }}
            >
              <span
                className={cn(
                  "transition-opacity",
                  lang === "pt" ? "opacity-100" : "opacity-40",
                )}
              >
                PT
              </span>
              <span className="opacity-30 font-light mix-blend-overlay">|</span>
              <span
                className={cn(
                  "transition-opacity",
                  lang === "en" ? "opacity-100" : "opacity-40",
                )}
              >
                EN
              </span>
            </motion.button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 cursor-pointer"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
            >
              <span
                className={cn(
                  "block w-6 h-px bg-white origin-center transition-all duration-300",
                  isOpen && "translate-y-[3.5px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "block w-6 h-px bg-white origin-center transition-all duration-300",
                  isOpen && "-translate-y-[3.5px] -rotate-45",
                )}
              />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-2xl"
              onClick={closeMenu}
            />

            <nav className="relative z-10 flex flex-col items-start justify-end h-full px-8 pb-24 gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                    delay: i * 0.08,
                  }}
                >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="text-4xl font-experimental font-bold text-white uppercase"
                    >
                      <span className="text-white/30 font-mono text-sm mr-4">
                        0{i + 1}.
                      </span>
                      <motion.span
                        animate={isTransitioning ? langAnimate : { opacity: 1, x: 0 }}
                        transition={langTransition}
                      >
                        {link.label}
                      </motion.span>
                    </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
