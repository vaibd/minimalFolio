import { hero } from "@/constants/about";
import ScrollDown from "./ScrollDown";

const Landing = () => {
  const { heading, heading2, content } = hero;

  return (
    <div className="text-center content-z-index h-dvh flex items-center">
      <div className="content-z-index relative">
        <h1 className="text-black/70 dark:text-white/70 text-9xl max-md:text-6xl font-bold mb-4">
          {heading}
        </h1>
        <h1 className="text-black/70 dark:text-white/70 text-7xl max-md:text-4xl font-bold mb-4">
          {heading2}
        </h1>
        <p className="text-black/70 dark:text-white/70 mt-14 max-md:mt-8 text-3xl max-md:text-xl">
          {content}
        </p>
        <ScrollDown />
      </div>
    </div>
  );
};

export default Landing;
