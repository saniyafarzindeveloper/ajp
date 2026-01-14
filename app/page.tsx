import CoreMembers from "@/components/sections/CoreMembers";
import Hero from "@/components/sections/Hero";
import Ideology from "@/components/sections/Ideology";
import VisionSection from "@/components/sections/Vision";

export default function Home() {
  return (
    <>
      <Hero />
      <VisionSection />
      <Ideology />
      <CoreMembers />
    </>
  );
}
