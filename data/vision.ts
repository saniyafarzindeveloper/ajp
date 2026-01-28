import type { VisionPoint } from "@/components/sections/Vision";

export const visionData = {
  badgeLabel: "Our Vision",
  title: "A democratic India for everyone",
  description:
    "Aam Janta Party (India) is committed to building a modern India that progresses along the path of science, technology and culture, strengthening the foundations of education, employment, healthcare and security",

  imageSrc: "https://images.unsplash.com/photo-1745962979027-c5e51183cf40?q=80&w=2131&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  points: [
    {
      number: "01",
      title: "Empowered & Educated Society",
      description:
        "Strengthening education, science, and technology to create informed, skilled, and self-reliant citizens across the nation.",
      color: "orange",
    },
    {
      number: "02",
      title: "Equality & Social Justice",
      description:
        "Eliminating caste, gender, and social discrimination to ensure equal rights, dignity, and opportunity for all citizens.",
      color: "yellow",
    },
    {
      number: "03",
      title: "Democratic & Peaceful Nation",
      description:
        "Upholding constitutional values, democratic institutions, and peaceful civic engagement to build a just and united India.",
      color: "green",
    },
  ] satisfies VisionPoint[],
} as const;
