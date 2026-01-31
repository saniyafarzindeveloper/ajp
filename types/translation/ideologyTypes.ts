export type ColorKey = "orange" | "yellow" | "green";

export type IdeologyPoint = {
  number: string;
  title: string;
  description: string;
  leaders?: string[];
  color: ColorKey;
};

export type IdeologySectionProps = {
  badgeLabel: string;
  title: string;
  description: string;
  points: IdeologyPoint[];
};
