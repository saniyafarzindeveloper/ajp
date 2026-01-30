"use client";

import { useLanguage } from "@/lib/language-provider";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <button
      onClick={() => setLang(lang === "en" ? "hi" : "en")}
      className="rounded-full border px-4 py-1 text-sm font-medium hover:bg-gray-100 transition"
    >
      {lang === "en" ? "हिंदी" : "English"}
    </button>
  );
}
