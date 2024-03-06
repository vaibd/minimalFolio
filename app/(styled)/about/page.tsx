import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { about } from '@/constants/about';
import { timeline } from '@/constants/timeline';
import TimelineDate from '@/components/shared/Timeline/TimelineDate';
import TimelineContainer from '@/components/shared/Timeline/TimelineContainer';

export const metadata: Metadata = {
  title: 'About',
};

const About = () => {
  const { heading, professionalInfo, personalInfo, casualLife } = about;

  return (
    <>
      <Card className='w-[55dvw] p-6'>
        <CardHeader className='heading-text text-center'>{heading}</CardHeader>
        <CardContent className='grid gap-1'>
          {[professionalInfo, personalInfo, casualLife].map((info, index) => {
            return (
              <p key={index} className='pt-5'>
                {info}
              </p>
            );
          })}
        </CardContent>
      </Card>

      <Card className='w-[55dvw] mt-10'>
        <CardHeader className='pb-3'>
          <CardTitle className='text-xl'>Experiences throughout time</CardTitle>
          <p>Everything I've done, over passage of time.</p>
        </CardHeader>
        <CardContent className='grid gap-1'>
          {timeline.map((project, index) => (
            <div key={index}>
              <TimelineDate date={project.year} />
              {project.events.map((event, index) => (
                <TimelineContainer
                  key={index}
                  title={event.title}
                  subTitle={event.subTitle}
                />
              ))}
            </div>
          ))}
        </CardContent>
      </Card>
    </>
  );
};

export default About;
