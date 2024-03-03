'use client';

import * as React from 'react';
import { MoonIcon, ReloadIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import {
  TooltipTrigger,
  TooltipContent,
  Tooltip,
  TooltipProvider,
} from '@/components/ui/tooltip';
import { useLoaded } from '@/hooks/useLoaded';

const toggleTheme = (theme: string | undefined) =>
  theme === 'light' ? 'dark' : 'light';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const loaded = useLoaded();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant='ghost'
            size='icon'
            onClick={() => setTheme(toggleTheme(theme))}
            className='rounded-full custom-hover custom-hover-dark'>
            {loaded ? (
              theme === 'light' ? (
                <MoonIcon className='h-[1.23rem] w-[1.23rem] text-black' />
              ) : (
                <SunIcon className='h-[1.23rem] w-[1.23rem] text-white' />
              )
            ) : (
              <ReloadIcon className='mr-2 h-4 w-4 animate-spin' />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Switch to {toggleTheme(theme)} mode</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
