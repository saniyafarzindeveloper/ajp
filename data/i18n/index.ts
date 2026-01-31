// import { HeroTranslations } from "@/types/translation/hero";
// import en from "./en";
// import hi from "./hi";
// import { NavTranslations } from "@/types/translation/navigation";
// import { CoreMembersTranslations } from "@/types/translation/coreMembers";
// import { VisionTranslations } from "@/types/translation/vision";

// export type Language = "en" | "hi";

// export const dictionaries: Record<
//   Language,
//   {
//     nav: NavTranslations;
//     hero: HeroTranslations;
//     coreMembers: CoreMembersTranslations;
//     vision: VisionTranslations;
//   }
// > = {
//   en,
//   hi,
// };

import en from "./en";
import hi from "./hi";
import type { Dictionary } from "@/types/translation/dictionary";

export type Language = "en" | "hi";

export const dictionaries: Record<Language, Dictionary> = {
  en,
  hi,
};