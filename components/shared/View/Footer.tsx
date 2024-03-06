import { myName, socials } from '@/constants/about';
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='mt-16 grid grid-cols-3 max-sm:grid-cols-1 gap-6 wrapper max-sm:text-center '>
      <div className='col-span-2 pl-16 max-sm:pl-0'>
        <h3 className='my-2'>Designed & Built by {myName}</h3>
        <p className='mb-2'>Licensed under MIT.</p>
        <p className='mb-6'>&copy; {currentYear}</p>
      </div>

      <div className='grid grid-cols-2 max-sm:gap-y-4 content-center	'>
        <p className='pb-2 col-span-2 font-bold'>Socials & Contact</p>
        {socials.map((social, index) => (
          <a
            href={social.url}
            target='_blank'
            rel='noopener noreferrer'
            className='pt-2'
            key={index}>
            {social.name}
          </a>
        ))}
        
        <a
          // href='github.com/vaibd'
          target='_blank'
          className='pt-2'
          rel='noopener noreferrer'>
          Message
        </a>
      </div>
    </footer>
  );
};

export default Footer;
