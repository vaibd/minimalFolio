export type languages = {
  name: string;
  color: string;
};

export type project = {
  logo: string;
  title: string;
  description: string;
  projectUrl?: string;
  gitHubUrl?: string;
  year: string;
  languages: languages[];
};

export type TimelineContainerProps = {
  title: string;
  subTitle: string;
};