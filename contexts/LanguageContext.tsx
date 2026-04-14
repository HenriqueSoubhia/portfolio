"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { dictionary, type Lang, type Dictionary } from "@/lib/i18n";

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  switchLang: () => void;
  isTransitioning: boolean;
  t: Dictionary;
}

const TRANSITION_DURATION = 200;

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const t = dictionary[lang];

  const switchLang = useCallback(() => {
    setIsTransitioning(true);

    setTimeout(() => {
      setLang((prev) => (prev === "pt" ? "en" : "pt"));

      requestAnimationFrame(() => {
        setIsTransitioning(false);
      });
    }, TRANSITION_DURATION);
  }, []);

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, switchLang, isTransitioning, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside a <LanguageProvider>");
  }
  return ctx;
}
