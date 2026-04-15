"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, useReducedMotion } from "motion/react";
import {
  fadeUp,
  staggerContainer,
  defaultTransition,
  defaultViewport,
  getLangTransition,
} from "@/lib/animations";

export function About() {
  const { t, isTransitioning } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  const { langAnimate, langTransition } = getLangTransition(isTransitioning);

  return (
    <section
      id="about"
      className="relative w-full min-h-dvh flex items-center bg-transparent py-24 sm:py-32 px-6 sm:px-12 md:px-20 max-w-[1600px] mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-20 w-full items-start">
        <motion.header
          className="md:col-span-5 flex flex-col items-start md:sticky md:top-40"
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeUp}
          transition={defaultTransition}
        >
          <motion.span
            className="text-white/40 font-mono text-xs sm:text-sm tracking-[0.2em] mb-4"
            animate={isTransitioning ? langAnimate : { opacity: 1, x: 0 }}
            transition={langTransition}
          >
            {t.about.sectionLabel}
          </motion.span>
          <motion.h2
            className="text-[clamp(2.3rem,10vw,8rem)] font-bold font-experimental text-white tracking-tighter uppercase leading-[0.9]"
            animate={isTransitioning ? langAnimate : { opacity: 1, x: 0 }}
            transition={langTransition}
          >
            {t.about.title}
            <span className="block">{t.about.titleSuffix}</span>
          </motion.h2>
        </motion.header>

        <motion.div
          className="md:col-span-7 flex flex-col gap-12"
          variants={staggerContainer}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={defaultViewport}
          animate={isTransitioning ? langAnimate : { opacity: 1, x: 0 }}
          transition={langTransition}
        >
          <motion.header
            className="flex items-center gap-4 border-l-4 border-white pl-5 py-2"
            variants={fadeUp}
            transition={defaultTransition}
          >
            <span className="text-white font-bold font-heading tracking-widest uppercase text-base sm:text-lg">
              FIAP
            </span>
            <span className="text-white/40 font-light">—</span>
            <motion.span
              className="text-white/80 font-light tracking-wider text-sm sm:text-base"
            >
              {t.about.role}
            </motion.span>
          </motion.header>

          <motion.article
            className="flex flex-col gap-6"
            variants={fadeUp}
            transition={defaultTransition}
          >
            <motion.p
              className="text-[clamp(1rem,2.5vw,1.25rem)] text-white/80 font-light leading-relaxed max-w-2xl"
            >
              {t.about.bio1}
            </motion.p>
            <motion.p
              className="text-[clamp(1rem,2.5vw,1.25rem)] text-white/80 font-light leading-relaxed max-w-2xl"
            >
              {t.about.bio2}
            </motion.p>
          </motion.article>

          <motion.figure
            className="relative w-full max-w-sm aspect-3/4 overflow-hidden bg-white/5 border border-white/10 mt-4 group"
            variants={fadeUp}
            transition={defaultTransition}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white/20 transition-colors group-hover:text-white/40">
              <Image
                src="/henrique.png"
                alt={t.about.photoAlt}
                width={750}
                height={1000}
                loading="eager"
                priority
                draggable={false}
              />
            </div>
            <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-white/20"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white/20"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-white/20"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-white/20"></div>
          </motion.figure>
        </motion.div>
      </div>
    </section>
  );
}
