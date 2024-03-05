import TimelineContainer from '@/components/shared/Timeline/TimelineContainer';
import TimelineDate from '@/components/shared/Timeline/TimelineDate';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { timeline } from '@/constants/timeline';

const Timeline = () => {
  return (
    <>
      <div className='mb-10 text-center'>
        <h1 className='heading-text'>Experiences throughout time</h1>
        <p className='text-lg mt-4'>
          Everything I've done, over passage of time.
        </p>
      </div>
      <Card className='w-[55dvw]'>
        <CardHeader className='pb-3'>
          <CardTitle className=''>Timeline</CardTitle>
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

export default Timeline;
