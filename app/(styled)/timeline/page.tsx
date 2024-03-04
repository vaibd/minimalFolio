import TimelineDate from '@/components/shared/Timeline/TimelineDate';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const Timeline = () => {
  return (
    <Card className='max-w-[980px]'>
      <CardHeader className='pb-3'>
        <CardTitle className=''>Timeline</CardTitle>
        <CardDescription>
          A timeline of my projects and experiences.
        </CardDescription>
      </CardHeader>
      <CardContent className='grid gap-1'>
        <TimelineDate date='2024' />
      </CardContent>
    </Card>
  );
};

export default Timeline;
