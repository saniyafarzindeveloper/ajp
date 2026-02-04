export type EventTranslation = {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  tag: string;
  image: string;
};

export type EventsTranslations = {
  heroTitle: string;
  heroDescription: string;
  viewDetails: string;
  emptyState: string;

  meta: {
    date: string;
    time: string;
    location: string;
  };

  events: EventTranslation[];
};
