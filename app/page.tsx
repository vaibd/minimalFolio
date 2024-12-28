import Hero from "@/components/shared/Hero";
import Projects from "@/components/shared/Project/Projects";

export default function Home() {
  if (process.env.NODE_ENV === "production") {
    /* eslint-disable no-console */
    console.log(
      "%c" + "Nothing to see here!",
      "color: #7289DA; -webkit-text-stroke: 2px black; font-size: 72px; font-weight: bold;"
    );
    /* eslint-enable no-console */
  }
  return (
    <>
      <Hero />
      <Projects />
    </>
  );
}
