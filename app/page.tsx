import CoreMembers from "@/components/sections/CoreMembers";
import Hero from "@/components/sections/Hero";
import Ideology from "@/components/sections/Ideology";
import VisionSection from "@/components/sections/Vision";

export default function Home() {
  return (
    <>
      <Hero />
      <VisionSection
        badgeLabel="Our Vision"
        title="A Stronger, Fairer India for Every Citizen"
        description="Our vision is to build a nation where opportunity, dignity, and justice are accessible to all — driven by transparent leadership, people-centric policies, and sustainable development."
        imageSrc="/images/poverty.jpg"
        points={[
          {
            number: "01",
            title: "Empowered Citizens",
            description:
              "A country where every citizen has access to quality education, healthcare, and opportunities to grow and thrive.",
            color: "orange",
          },
          {
            number: "02",
            title: "Responsible Governance",
            description:
              "Decision-making that is transparent, accountable, and focused on long-term national interest rather than short-term gains.",
            color: "yellow",
          },
          {
            number: "03",
            title: "Sustainable Progress",
            description:
              "Development that balances economic growth with environmental responsibility and social well-being.",
            color: "green",
          },
        ]}
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
