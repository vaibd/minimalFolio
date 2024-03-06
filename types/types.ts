export type Languages = {
  name: string;
  color: string;
};

export type Project = {
  logo: string;
  title: string;
  description: string;
  projectUrl?: string;
  gitHubUrl?: string;
  year: string;
  languages: Languages[];
};

export type Tools = {
  logo: string;
  title: string;
  description: string;
  link: string;
};

export type TimelineContainerProps = {
  title: string;
  subTitle: string;
};

export type ChildrenProps = {
  children: React.ReactNode;
};
