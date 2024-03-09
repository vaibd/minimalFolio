import { Metadata } from "next";
import { about, skills, timeline } from "@/constants/about";
import Introduction from "@/components/shared/About/Introduction";
import Skills from "@/components/shared/About/Skills";
import Experiences from "@/components/shared/About/Experiences";

export const metadata: Metadata = {
  title: "About",
};

const About = () => {
  return (
    <>
      <Introduction about={about} />

      <Skills skills={skills} />

      <Experiences timeline={timeline} />
    </>
  );
};

export default About;
