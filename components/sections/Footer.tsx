import { useLanguage } from "@/contexts/LanguageContext";
import { motion, useReducedMotion } from "motion/react";
import {
  fadeIn,
  defaultTransition,
  defaultViewport,
  getLangTransition,
} from "@/lib/animations";

export function Footer() {
  const { t, isTransitioning } = useLanguage();
  const currentYear = new Date().getFullYear();
  const prefersReducedMotion = useReducedMotion();

  const { langAnimate, langTransition } = getLangTransition(isTransitioning);

  return (
    <footer className="w-full py-12 px-6 sm:px-12 md:px-20 max-w-[1600px] mx-auto">
      <motion.div
        className="w-full pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-8"
        initial={prefersReducedMotion ? "visible" : "hidden"}
        whileInView="visible"
        viewport={defaultViewport}
        variants={fadeIn}
        transition={defaultTransition}
      >
        <section className="flex flex-col items-center sm:items-start gap-1">
          <motion.p
            className="text-[10px] font-mono text-white/30 tracking-widest uppercase"
            animate={isTransitioning ? langAnimate : { opacity: 1, x: 0 }}
            transition={langTransition}
          >
            © {currentYear} {t.footer.rights}
          </motion.p>
          <motion.p
            className="text-[10px] font-mono text-white/20 tracking-tighter uppercase italic"
            animate={isTransitioning ? langAnimate : { opacity: 1, x: 0 }}
            transition={langTransition}
          >
            {t.footer.credit}
          </motion.p>
        </section>

        <nav className="flex items-center gap-6">
          <motion.a
            href="#hero"
            className="text-[10px] font-mono text-white/40 uppercase tracking-widest transition-colors"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <motion.span
              animate={isTransitioning ? langAnimate : { opacity: 1, x: 0 }}
              transition={langTransition}
            >
              {t.footer.backToTop}
            </motion.span>
          </motion.a>
        </nav>
      </motion.div>
    </footer>
  );
}

