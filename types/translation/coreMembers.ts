export type CoreLeaderTranslation = {
  name: string;
  role: string;
  bio: string;
};

export type CoreMembersTranslations = {
  badge: string;
  title: string;
  description: string;
  leaders: CoreLeaderTranslation[];
};
