import { HeroTranslations } from "@/types/translation/hero";
import en from "./en.json";
import hi from "./hi.json";
import { NavTranslations } from "@/types/translation/navigation";
import { IdeologyTranslations } from "@/types/translation/ideology";

export type Language = "en" | "hi";

export const dictionaries: Record<
  Language,
  {
    nav: NavTranslations;
    hero: HeroTranslations;
    ideology: IdeologyTranslations
  }
  
> = {
  en,
  hi,
};
