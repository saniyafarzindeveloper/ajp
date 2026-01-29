import CoreMembers from "@/components/sections/CoreMembers";
import Hero from "@/components/sections/Hero";
import Ideology from "@/components/sections/Ideology";
import VisionSection from "@/components/sections/Vision";
import { visionData } from "@/data/vision";
import { ideologyData } from "@/data/ideology";

export default function Home() {
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
        badgeLabel={ideologyData.badgeLabel}
        title={ideologyData.title}
        description={ideologyData.description}
        points={ideologyData.points}
        // closingText={ideologyData.closingText}
      />
      <CoreMembers />
    </>
  );
}
