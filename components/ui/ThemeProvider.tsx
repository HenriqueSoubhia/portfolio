"use client";

import { useEffect } from "react";
import { getThemeByTime } from "@/lib/timeTheme";

export function ThemeProvider() {
  const isDev = process.env.NODE_ENV === "development";

  useEffect(() => {
    if (isDev) return;

    const updateTheme = () => {
      const currentHour = new Date().getHours();
      const bgColor = getThemeByTime(currentHour);

      document.documentElement.style.setProperty("--bg-color", bgColor);
    };

    updateTheme();

    const intervalId = setInterval(updateTheme, 60000);

    return () => clearInterval(intervalId);
  }, [isDev]);

  return null;
}
