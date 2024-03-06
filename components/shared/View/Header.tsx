'use client';

import React from 'react';
import { ModeToggle } from './ThemeSwitcher';
import NavLink from './NavLink';
import { headerItems } from '@/constants/headerItems';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Header = () => {
  const { toast } = useToast();

  return (
    <header className='fixed z-40 container right-0 left-0 w-full'>
      <nav className='relative mx-auto z-40 flex flex-row justify-center items-center py-3'>
        <ul className='flex-center p-2 max-sm:p-2 px-5 max-sm:px-3 shadow-lg backdrop-blur-lg bg-neutral-100/40 dark:bg-neutral-900/50 rounded-full gap-3 max-sm:gap-0'>
          {headerItems.map((link, index) => (
            <li key={index}>
              <NavLink route={link.route} label={link.label} />
            </li>
          ))}
          {/* <div className='pr-2 max-sm:pl-2 logo cursor-pointer'>Contact</div> */}
          <Button
            variant='ghost'
            className='rounded-full text-md font-normal	 p-2 text-black dark:text-white'
            onClick={() =>
              toast({
                title: 'Comming soon!',
                description: 'Underwork!',
              })
            }>
            Contact
          </Button>
          <div className='pr-2 max-sm:pl-2 logo cursor-pointer'>
            <ModeToggle />
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
