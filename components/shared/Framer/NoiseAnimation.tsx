"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";

const NoiseAnimation = () => {
  if (process.env.NODE_ENV === "production") {
    /* eslint-disable no-console */
    console.log(
      "%c" + "Nothing to see here!",
      "color: #7289DA; -webkit-text-stroke: 2px black; font-size: 72px; font-weight: bold;"
    );
    /* eslint-enable no-console */
  }

  return (
    <div className="overflow-hidden h-dvh w-screen absolute z-0 block top-0 bottom-0 right-0 dark:bg-neutral-950 ">
      <LazyMotion features={domAnimation}>
        <m.div
          initial={{ transform: "translateX(-10%) translateY(-10%)" }}
          animate={{
            transform: "translateX(10%) translateY(10%)",
          }}
          transition={{
            repeat: Infinity,
            duration: 0.2,
            ease: "linear",
            repeatType: "mirror",
          }}
          style={{
            backgroundImage: 'url("/assets/images/black-noise.png")',
          }}
          className="pointer-events-none absolute -inset-[100%] opacity-[15%] "
        />
      </LazyMotion>
    </div>
  );
};
export default NoiseAnimation;
