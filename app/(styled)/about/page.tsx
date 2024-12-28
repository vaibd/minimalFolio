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
    <section className="space-y-6">
      <h1 className="mt-6 mb-10 text-center"> {about.heading}</h1>

      <Introduction about={about} />
      <Skills skills={skills} />
      <Experiences timeline={timeline} />
    </section>
  );
};

export default About;
