import CoreMembers from "@/components/sections/CoreMembers";
import Hero from "@/components/sections/Hero";
import Ideology from "@/components/sections/Ideology";
import VisionSection from "@/components/sections/Vision";
import { visionData } from "@/data/vision";

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
        badgeLabel="Our Ideology"
        title="Principles That Shape Our Governance"
        description="Our ideology is grounded in the belief that governance must be ethical, inclusive, and accountable — focused on lasting national progress rather than temporary political gains."
        closingText="These principles guide our leadership, policies, and actions. They define not only what we commit to, but how we govern and remain accountable to the people of India."
        points={[
          {
            number: "01",
            title: "Citizens Before Politics",
            description:
              "Every decision we take is guided by its impact on ordinary citizens, with special focus on voices that are often ignored or left behind.",
            color: "orange",
          },
          {
            number: "02",
            title: "Equitable Development",
            description:
              "Growth must be fair and balanced, reaching every region, community, and individual so that opportunity is not limited by geography or background.",
            color: "yellow",
          },
          {
            number: "03",
            title: "Integrity in Public Life",
            description:
              "Transparency, accountability, and ethical conduct are non-negotiable foundations of public service and decision-making.",
            color: "green",
          },
        ]}
      />

      <CoreMembers />
    </>
  );
}
