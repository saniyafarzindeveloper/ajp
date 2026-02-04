
import type { NavTranslations } from "./navigation";
import type { HeroTranslations } from "./hero";
import type { CoreMembersTranslations } from "./coreMembers";
import type { VisionTranslations } from "./vision";
import { AboutTranslations } from "./about";
import { CTATranslations } from "./cta";
import { DonateTranslations } from "./donate";
import { ContactTranslations } from "./contact";
import { EventsTranslations } from "./event";
import { FooterTranslations } from "./footer";

export type Dictionary = {
  nav: NavTranslations;
  hero: HeroTranslations;
  coreMembers: CoreMembersTranslations;
  vision: VisionTranslations;
  about: AboutTranslations;
  cta: CTATranslations;
  donatePage: DonateTranslations;
  contact: ContactTranslations;
  events: EventsTranslations;
  footer: FooterTranslations
};
