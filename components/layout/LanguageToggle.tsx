"use client";

import { useLanguage } from "@/lib/language-provider";
import clsx from "clsx";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center rounded-full border border-gray-300 p-0.5 bg-white">
      <button
        onClick={() => setLang("en")}
        className={clsx(
          "px-3 py-1 rounded-full text-sm font-medium transition cursor-pointer",
          lang === "en"
            ? "bg-orange-500 text-white shadow-sm"
            : "text-gray-700 hover:bg-gray-100"
        )}
      >
        EN
      </button>

      <button
        onClick={() => setLang("hi")}
        className={clsx(
          "px-3 py-1 rounded-full text-sm font-medium transition cursor-pointer",
          lang === "hi"
            ? "bg-orange-500 text-white shadow-sm"
            : "text-gray-700 hover:bg-gray-100"
        )}
      >
        हिंदी
      </button>
    </div>
  );
}
