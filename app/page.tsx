"use client";
import CoreMembers from "@/components/sections/CoreMembers";
import Hero from "@/components/sections/Hero";
import VisionSection from "@/components/sections/Vision";
import { useLanguage } from "@/lib/language-provider";

export default function Home() {
  const { t } = useLanguage();
  return (
    <>
      <Hero />
      <VisionSection
        badgeLabel={t.vision.badgeLabel}
        title={t.vision.title}
        description={t.vision.description}
        points={t.vision.points}
        imageSrc={t.vision.imageSrc}
      />
      <CoreMembers />
    </>
  );
}
