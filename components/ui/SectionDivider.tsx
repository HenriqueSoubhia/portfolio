import { cn } from "@/lib/utils";

interface SectionDividerProps {
  text: string;
  side?: "left" | "right";
}

export function SectionDivider({ text, side = "left" }: SectionDividerProps) {
  return (
    <div className="w-full flex items-center justify-center py-24 sm:py-40">
      <div className="relative w-full border-t border-white/10">
        <div
          className={cn(
            "absolute top-0 -translate-y-1/2 flex items-center gap-3 bg-white/5 backdrop-blur-md px-5 py-2 border border-white/10 rounded-full text-white/50 text-xs font-mono tracking-[0.3em] uppercase z-20",
            side === "left" ? "left-6 sm:left-12 md:left-20" : "right-6 sm:right-12 md:right-20"
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-pulse"></span>
          {text}
        </div>
      </div>
    </div>
  );
}
