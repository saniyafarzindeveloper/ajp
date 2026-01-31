// export type VisionPointTranslation = {
//   number: string;
//   title: string;
//   description: string;
//   color: "orange" | "yellow" | "green";
// };

// export type VisionTranslations = {
//   badgeLabel: string;
//   title: string;
//   description: string;
//   imageSrc: string;
//   points: VisionPointTranslation[];
// };


export type VisionColor = "orange" | "yellow" | "green";

export type VisionPointTranslation = {
  number: string;
  title: string;
  description: string;
  color: VisionColor;
};

export type VisionTranslations = {
  badgeLabel: string;
  title: string;
  description: string;
  imageSrc: string;
  points: VisionPointTranslation[];
};
