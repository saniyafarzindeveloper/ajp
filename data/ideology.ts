import type { IdeologyPoint } from "@/components/sections/Ideology"
export const ideologyData = {
    badgeLabel:"Our Commitments & Ideological Foundations",
  title:"Ideas That Shape Our National Vision",
  description:"Aam Janta Party (India) is founded on democratic values, social justice, and national unity. Our ideology draws inspiration from India’s greatest leaders and constitutional principles to build an equal, peaceful, and progressive nation.",
  // closingText:"Guided by the Constitution of India and inspired by visionary national leaders, our ideology is not limited to words — it is reflected in our actions, policies, and unwavering commitment to the people of India.",
 points:[
  {
    number: "01",
    title: "Democracy, Equality & Social Justice",
    description:
      "We believe in a democratic India where every citizen enjoys political, social, and economic justice free from discrimination.",
    leaders: ["Dr. B. R. Ambedkar"],
    color: "orange",
  },
  {
    number: "02",
    title: "National Unity & Inclusive Nationalism",
    description:
      "Our ideology upholds national unity, integrity, and social harmony while rejecting all forms of division.",
    leaders: ["Sardar Vallabhbhai Patel"],
    color: "yellow",
  },
  {
    number: "03",
    title: "Scientific Temper & Peaceful Progress",
    description:
      "We promote scientific thinking, peaceful democratic movements, and non-violent civic engagement.",
    leaders: [
      "Dr. A. P. J. Abdul Kalam",
      "Mahatma Gandhi",
      "Maulana Abul Kalam Azad",
    ],
    color: "green",
  },
] satisfies IdeologyPoint[],
}  as const


