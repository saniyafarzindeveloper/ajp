export type AboutTranslations = {
  hero: {
    titleLine1: string;
    titleLine2: string;
    description: string;
  };

  whoWeAre: {
    title: string;
    paragraph1: string;
    paragraph2: string;
  };

  visionMission: {
    vision: {
      label: string;
      title: string;
      description: string;
    };
    mission: {
      label: string;
      title: string;
      description: string;
    };
  };

  coreValues: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
      color: "orange" | "yellow" | "green";
    }[];
  };
};
