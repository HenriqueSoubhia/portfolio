"use client";

import { getThemeByTime } from "@/lib/timeTheme";

const DEBUG_TIMES = [
  { label: "02h (Madrugada)", hour: 2 },
  { label: "06h (Amanhecer)", hour: 6 },
  { label: "10h (Manhã)", hour: 10 },
  { label: "14h (Tarde)", hour: 14 },
  { label: "17h (Pôr do sol)", hour: 17 },
  { label: "21h (Noite)", hour: 21 },
];

export function ThemeDebugger() {
  const isVisible = process.env.NODE_ENV === "development";

  if (!isVisible) return null;

  const forceTheme = (hour: number) => {
    const color = getThemeByTime(hour);
    document.documentElement.style.setProperty("--bg-color", color);
  };

  return (
    <div className="fixed bottom-6 left-6 z-9999 p-4 bg-black/80 backdrop-blur-2xl border border-white/10 rounded-2xl flex flex-col gap-4 shadow-3xl pointer-events-auto">
      <div className="flex items-center justify-between gap-8">
        <span className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest">
          Time Debugger (DEV)
        </span>
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {DEBUG_TIMES.map((time) => (
          <button
            key={time.label}
            onClick={() => forceTheme(time.hour)}
            className="px-3 py-2 bg-white/5 hover:bg-white/20 border border-white/5 rounded-lg text-left transition-colors"
          >
            <div className="flex flex-col gap-1">
              <span className="text-[8px] font-mono text-white/50 uppercase tracking-tighter">
                {time.label}
              </span>
              <div
                className="w-full h-1.5 rounded-full"
                style={{ backgroundColor: getThemeByTime(time.hour) }}
              />
            </div>
          </button>
        ))}
      </div>

      <p className="text-[8px] text-white/30 font-mono italic leading-tight max-w-[140px]">
        * Use para validar o contraste entre as cores e o conteúdo branco.
      </p>
    </div>
  );
}
