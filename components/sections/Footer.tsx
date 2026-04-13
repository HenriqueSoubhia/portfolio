"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion, useReducedMotion } from "motion/react";
import { fadeIn, defaultTransition, defaultViewport } from "@/lib/animations";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.footer
      className="w-full py-12 px-6 sm:px-12 md:px-20 max-w-[1600px] mx-auto"
      initial={prefersReducedMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={defaultViewport}
      variants={fadeIn}
      transition={defaultTransition}
    >
      <div className="w-full pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <p className="text-[10px] font-mono text-white/30 tracking-widest uppercase">
            © {currentYear} {t.footer.rights}
          </p>
          <p className="text-[10px] font-mono text-white/20 tracking-tighter uppercase italic">
            {t.footer.credit}
          </p>
        </div>

        <div className="flex items-center gap-6">
          <motion.a
            href="#hero"
            className="text-[10px] font-mono text-white/40 uppercase tracking-widest transition-colors"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            {t.footer.backToTop}
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
}
