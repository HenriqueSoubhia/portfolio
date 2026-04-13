"use client";

import { LocalTime } from "@/components/ui/LocalTime";
import { ArrowDownRightIcon, SparkleIcon } from "@phosphor-icons/react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, useReducedMotion } from "motion/react";
import { fadeUp, fadeIn, staggerContainer, defaultTransition, defaultViewport } from "@/lib/animations";

export function Hero() {
  const { t } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="relative w-full h-dvh min-h-[600px] flex items-center overflow-hidden"
      id="hero"
    >
      <div className="relative w-full max-w-[1600px] mx-auto h-full flex items-center px-6 sm:px-12 md:px-20">
        <motion.div
          className="relative z-10 flex flex-col items-start w-full max-w-3xl mt-12 sm:mt-0"
          variants={staggerContainer}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          animate="visible"
        >
          <motion.div variants={fadeUp} transition={defaultTransition}>
            <LocalTime />
          </motion.div>

          <motion.div
            className="flex flex-col gap-2 mb-8 relative"
            variants={fadeUp}
            transition={{ ...defaultTransition, delay: 0.1 }}
          >
            <span className="text-[clamp(0.6rem,2vw,0.875rem)] text-white/40 tracking-[0.4em] font-sans font-medium uppercase flex items-center gap-2">
              {t.hero.tagline}
              <SparkleIcon className="w-3 h-3 opacity-50" weight="fill" />
            </span>
            <h2 className="text-[clamp(2.3rem,10vw,8rem)] font-bold font-experimental text-white tracking-tighter leading-[0.85] text-balance">
              {t.hero.title}
              <span className="text-transparent bg-clip-text bg-linear-to-br from-white to-white/30 italic block">
                {t.hero.titleHighlight}
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="flex items-start gap-4"
            variants={fadeUp}
            transition={{ ...defaultTransition, delay: 0.2 }}
          >
            <ArrowDownRightIcon
              className="w-6 h-6 sm:w-8 sm:h-8 text-white/50 shrink-0 mt-1"
              strokeWidth={1}
            />
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-sm sm:max-w-md font-light leading-relaxed text-balance">
              {t.hero.description}
            </p>
          </motion.div>
        </motion.div>

        <motion.h1
          className="absolute right-0 sm:right-6 md:right-12 h-full flex flex-col items-start pt-8 sm:pt-16 pointer-events-none font-bold font-heading gap-2 sm:gap-4 uppercase tracking-tighter text-white opacity-15 md:opacity-90 select-none mix-blend-overlay"
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            fontSize: "clamp(2rem, 18dvh, 12rem)",
            lineHeight: 0.8,
          }}
          aria-label="Henrique Soubhia"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...defaultTransition, duration: 1.2, delay: 0.4 }}
        >
          <span className="block" aria-hidden="true">
            Henrique
          </span>
          <span className="block" aria-hidden="true">
            Soubhia
          </span>
        </motion.h1>

        <motion.a
          href="#about"
          className="absolute bottom-8 left-6 sm:left-12 md:left-20 flex items-center gap-3 text-white/50 transition-colors group"
          aria-label={t.hero.scrollAriaLabel}
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...defaultTransition, delay: 0.6 }}
          whileHover={{ y: -2 }}
        >
          <span className="text-xs tracking-[0.3em] uppercase font-mono">
            {t.hero.scroll}
          </span>
          <div className="w-px h-8 bg-white/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[50%]"></div>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
