import { about } from '@/constants';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'About',
};

const About = () => {
  const { heading, professionalInfo, personalInfo, casualLife } = about;

  return (
    <>
      <div className='heading-text pb-10 text-center'> {heading} </div>

      {[professionalInfo, personalInfo, casualLife].map((info, index) => {
        return (
          <p key={index} className='pb-5'>
            {info}
          </p>
        );
      })}
    </>
  );
};

export default About;
