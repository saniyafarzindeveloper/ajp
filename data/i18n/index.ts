// import en from "./en.json";
// import hi from "./hi.json";

// export const dictionaries = {
//   en,
//   hi,
// };

// export type Language = keyof typeof dictionaries;


import en from "./en.json";
import hi from "./hi.json";
import { NavTranslations } from "@/types/navigation";

export type Language = "en" | "hi";

export const dictionaries: Record<
  Language,
  {
    nav: NavTranslations;
  }
> = {
  en,
  hi,
};
