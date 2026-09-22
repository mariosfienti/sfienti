"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { CONTENT, type Lang, type Content } from "@/lib/content";

interface LanguageContextValue {
  lang: Lang;
  toggleLang: () => void;
  t: Content;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("it");

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      toggleLang: () => setLang((prev) => (prev === "it" ? "en" : "it")),
      t: CONTENT[lang]
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
