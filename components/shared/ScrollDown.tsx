"use client";

import { ChevronDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useEffect, useState } from "react";

const ScrollDown = () => {
  const [hasScrolled, setHasScrolled] = useState(true);
  console.log(hasScrolled);

  const toggleVisibility = () => {
    if (window.scrollY > 50) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    toggleVisibility();

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = e.currentTarget.href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    window.scrollTo({
      top: (elem?.getBoundingClientRect().top || 0) - 120,
      behavior: "smooth",
    });
  };

  return (
    <>
      {hasScrolled ? null : (
        <Link
          href="#projects"
          onClick={handleScroll}
          className="text-black/70 dark:text-white/70 text-2xl max-md:text-lg fixed bottom-4 left-0 right-0"
        >
          <p className="contents cursor-pointer">
            <span className="max-md:hidden">Scroll down&nbsp;</span>
            <span className="md:hidden">Swipe Up&nbsp;</span>
            for Projects
            <ChevronDownIcon className="w-8 h-8 m-auto max-md:rotate-180" />
          </p>
        </Link>
      )}
    </>
  );
};

export default ScrollDown;
