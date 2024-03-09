"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  TooltipTrigger,
  TooltipContent,
  Tooltip,
  TooltipProvider,
} from "@/components/ui/tooltip";

const toggleTheme = (theme: string | undefined) =>
  theme === "light" ? "dark" : "light";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(toggleTheme(theme))}
            className="rounded-full custom-hover"
          >
            <MoonIcon className="block dark:hidden h-[1.23rem] w-[1.23rem] text-black" />
            <SunIcon className="hidden dark:block h-[1.23rem] w-[1.23rem] text-white" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Switch to {toggleTheme(theme)} mode</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
