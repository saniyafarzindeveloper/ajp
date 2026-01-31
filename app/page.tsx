'use client';
import CoreMembers from "@/components/sections/CoreMembers";
import Hero from "@/components/sections/Hero";
import Ideology from "@/components/sections/Ideology";
import VisionSection from "@/components/sections/Vision";
import { visionData } from "@/data/vision";
// import { ideologyData } from "@/data/ideology";
import { useLanguage } from "@/lib/language-provider";

export default function Home() {
  const { t } = useLanguage();
  return (
    <>
      <Hero />
      <VisionSection
        badgeLabel={visionData.badgeLabel}
        title={visionData.title}
        description={visionData.description}
        points={visionData.points}
        imageSrc={visionData.imageSrc}
      />
      <Ideology
      badgeLabel={t.ideology.badgeLabel}
      title={t.ideology.title}
      description={t.ideology.description}
      points={t.ideology.points}
    />
      <CoreMembers />
    </>
  );
}
