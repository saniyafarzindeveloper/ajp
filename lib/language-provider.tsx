"use client";

import { createContext, useContext, useState } from "react";
import { dictionaries } from "@/data/i18n";
import type { Language } from "@/data/i18n";
import type { Dictionary } from "@/types/translation/dictionary";

type LanguageContextType = {
  lang: Language;
  t: Dictionary;
  setLang: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] = useState<Language>("en");

  return (
    <LanguageContext.Provider
      value={{
        lang,
        t: dictionaries[lang],
        setLang,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return ctx;
}
