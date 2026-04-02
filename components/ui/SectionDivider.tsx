import { cn } from "@/lib/utils";

interface SectionDividerProps {
  text: string;
  side?: "left" | "right";
}

export function SectionDivider({ text, side = "left" }: SectionDividerProps) {
  return (
    <div className="w-full relative py-20 sm:py-32 flex items-center">
      <hr className="w-full border-white/10" aria-hidden="true" />
      <div
        className={cn(
          "absolute flex items-center gap-2.5 bg-white/5 backdrop-blur-md px-4 py-2 border border-white/10 rounded-full text-white/50 text-[10px] sm:text-xs font-mono tracking-[0.3em] uppercase z-20",
          side === "left"
            ? "left-6 sm:left-12 md:left-20 flex-row"
            : "right-6 sm:right-12 md:right-20 flex-row-reverse",
        )}
      >
        <span
          className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse shrink-0"
          aria-hidden="true"
        />
        <span className="leading-none mt-px">{text}</span>
      </div>
    </div>
  );
}
