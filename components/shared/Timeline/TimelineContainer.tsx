import { TimelineContainerProps } from '@/types/types';
import {
 BackpackIcon,
 DesktopIcon
} from '@radix-ui/react-icons';

const TimelineContainer = ({ title, subTitle }: TimelineContainerProps) => {
  return (
    <div className='grid grid-cols-[20px,2fr] space-x-4 rounded-md p-3 transition-all custom-hover'>
      <BackpackIcon className='h-full w-full' />
      <div className='space-y-1'>
        <p className='text-sm font-medium leading-none'>{title}</p>
        <p className='text-sm dim-text'>{subTitle}</p>
      </div>
    </div>
  );
};

export default TimelineContainer;
