"use client";

import { useEffect, useState } from "react";

export function LocalTime() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (!time) {
    return <div className="h-6 w-32 mb-8 opacity-0"></div>;
  }

  return (
    <div className="flex items-center gap-3 text-sm font-semibold tracking-widest text-white/70 uppercase mb-8">
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
      </span>
      <span>
        Local Time <span className="mx-2">—</span>{" "}
        <time dateTime={time}>{time}</time>
      </span>
    </div>
  );
}
