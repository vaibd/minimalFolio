"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ route, label }: { route: string; label: string }) => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <Link
      href={route}
      className={`px-3 backdrop:blur-lg py-2 hover:transparent text-black dark:text-white custom-hover ease-in-out rounded-full transition-all cursor-pointer ${
        isActive(route) ? "active" : ""
      } `}
    >
      {label}
    </Link>
  );
};

export default NavLink;
