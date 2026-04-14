"use client";

import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  ArrowUpRightIcon,
} from "@phosphor-icons/react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, useReducedMotion } from "motion/react";
import {
  fadeUp,
  staggerContainer,
  defaultTransition,
  defaultViewport,
  getLangTransition,
} from "@/lib/animations";

const SOCIALS = [
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
];

export function Contact() {
  const { t, isTransitioning } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  const { langAnimate, langTransition } = getLangTransition(isTransitioning);

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden flex flex-col pt-24 sm:pt-32 px-6 sm:px-12 md:px-20 max-w-[1600px] mx-auto pb-12"
    >
      <motion.header
        className="flex flex-col gap-8 mb-20 lg:mb-32"
        initial={prefersReducedMotion ? "visible" : "hidden"}
        whileInView="visible"
        viewport={defaultViewport}
        variants={staggerContainer}
      >
        <div className="flex flex-col gap-2">
          <motion.span
            className="text-white/40 font-mono text-xs sm:text-sm tracking-[0.2em] uppercase"
            animate={isTransitioning ? langAnimate : { opacity: 1, x: 0 }}
            transition={langTransition}
          >
            {t.contact.sectionLabel}
          </motion.span>
          <motion.h2
            className="text-[clamp(2.3rem,10vw,8rem)] font-bold font-experimental text-white tracking-tighter uppercase leading-[0.85]"
            animate={isTransitioning ? langAnimate : { opacity: 1, x: 0 }}
            transition={langTransition}
          >
            {t.contact.title}
            <span className="block">{t.contact.titleSuffix}</span>
          </motion.h2>
        </div>
      </motion.header>

      <div className="flex flex-col md:flex-row justify-between items-end gap-16 mb-32">
        <motion.article
          className="flex flex-col gap-6 max-w-xl"
          variants={fadeUp}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={defaultViewport}
          transition={defaultTransition}
        >
          <motion.p
            className="text-[clamp(1.25rem,3vw,1.875rem)] text-white font-light font-heading leading-tight tracking-tight"
            animate={isTransitioning ? langAnimate : { opacity: 1, x: 0 }}
            transition={langTransition}
          >
            {t.contact.description}
          </motion.p>

          <motion.a
            href="mailto:contato@henriquesoubhia.com"
            className="group flex items-center gap-4 text-[clamp(1.75rem,5vw,3rem)] font-experimental font-bold text-white w-fit"
            whileHover={{ x: 8 }}
            whileTap={{ scale: 0.97 }}
            animate={isTransitioning ? langAnimate : { opacity: 1, x: 0 }}
            transition={langTransition}
          >
            <span>{t.contact.cta}</span>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-500 overflow-hidden">
              <ArrowUpRightIcon className="w-6 h-6 text-black" />
            </div>
          </motion.a>
        </motion.article>

        <address className="flex flex-col gap-4 items-end not-italic">
          <div className="flex flex-col gap-3 items-end">
            <motion.span
              className="text-white/30 font-mono text-[10px] uppercase tracking-widest mb-2"
              animate={isTransitioning ? langAnimate : { opacity: 1, x: 0 }}
              transition={langTransition}
            >
              {t.contact.socials}
            </motion.span>

            {SOCIALS.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 group transition-transform duration-300"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.2 }}
              >
                <motion.span className="text-white/50 group-hover:text-white font-mono text-xs tracking-widest uppercase mt-0.5">
                  {social.name}
                </motion.span>

                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/50 group-hover:text-white group-hover:border-white/30 transition-colors">
                  {social.icon}
                </div>
              </motion.a>
            ))}
          </div>
        </address>
      </div>
    </section>
  );
}
