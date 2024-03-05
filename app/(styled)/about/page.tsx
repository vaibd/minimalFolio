import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { about } from '@/constants/about';

export const metadata: Metadata = {
  title: 'About',
};

const About = () => {
  const { heading, professionalInfo, personalInfo, casualLife } = about;

  return (
    <Card className='w-[55dvw] p-6'>
      <CardHeader className='pb-3'>
        <CardTitle className='heading-text pb-10 text-center'>
          {heading}
        </CardTitle>
      </CardHeader>
      <CardContent className='grid gap-1'>
        {[professionalInfo, personalInfo, casualLife].map((info, index) => {
          return (
            <p key={index} className='pb-5'>
              {info}
            </p>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default About;
