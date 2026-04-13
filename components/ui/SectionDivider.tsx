"use client";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "motion/react";
import { fadeIn, scaleX, defaultTransition, defaultViewport } from "@/lib/animations";

interface SectionDividerProps {
  text: string;
  side?: "left" | "right";
}

export function SectionDivider({ text, side = "left" }: SectionDividerProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="w-full relative py-20 sm:py-32 flex items-center">
      <motion.hr
        className="w-full border-white/10 origin-left"
        aria-hidden="true"
        initial={prefersReducedMotion ? "visible" : "hidden"}
        whileInView="visible"
        viewport={defaultViewport}
        variants={scaleX}
        transition={{ ...defaultTransition, duration: 0.8 }}
        style={{ originX: side === "left" ? 0 : 1 }}
      />
      <div className="absolute inset-0 max-w-[1600px] mx-auto">
        <motion.div
          className={cn(
            "absolute top-1/2 -translate-y-1/2 flex items-center gap-2.5 bg-white/5 backdrop-blur-md px-4 py-2 border border-white/10 rounded-full text-white/50 text-[10px] sm:text-xs font-mono tracking-[0.3em] uppercase z-20",
            side === "left"
              ? "left-6 sm:left-12 md:left-20 flex-row"
              : "right-6 sm:right-12 md:right-20 flex-row-reverse",
          )}
          initial={prefersReducedMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeIn}
          transition={{ ...defaultTransition, delay: 0.4 }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse shrink-0"
            aria-hidden="true"
          />
          <span className="leading-none mt-px">{text}</span>
        </motion.div>
      </div>
    </div>
  );
}
