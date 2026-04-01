"use client";

import { useEffect } from "react";
import { getThemeByTime } from "@/lib/timeTheme";

export function ThemeProvider() {
  useEffect(() => {
    const updateTheme = () => {
      const currentHour = new Date().getHours();
      const bgColor = getThemeByTime(currentHour);

      document.documentElement.style.setProperty("--bg-color", bgColor);
    };

    updateTheme();

    const intervalId = setInterval(updateTheme, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return null;
}
