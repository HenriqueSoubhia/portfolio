"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { ReactNode } from "react";

export function LanguageTransition({ children }: { children: ReactNode }) {
  const { isTransitioning } = useLanguage();

  return (
    <motion.div
      animate={{
        opacity: isTransitioning ? 0 : 1,
        y: isTransitioning ? 8 : 0,
      }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
