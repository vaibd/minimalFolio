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
  type?: string;
};

export type ChildrenProps = {
  children: React.ReactNode;
};

export type IntroductionProps = {
  about: {
    heading: string;
    professionalInfo: string;
    personalInfo: string;
    casualLife: string;
  };
};

export type SkillsProps = {
  skills: {
    name: string;
    icon: string;
  }[];
};

export type ExperiencesProps = {
  timeline: {
    year: number;
    events: TimelineContainerProps[];
  }[];
};
