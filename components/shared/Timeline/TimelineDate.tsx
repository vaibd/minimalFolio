const TimelineDate = ({ date }: { date: string }) => {
  return (
    <div className='relative '>
      <div className='absolute inset-0 flex items-center '>
        <span className='w-full border-t dark:border-neutral-700	' />
      </div>
      <div className='relative flex justify-center text-xs uppercase'>
        <span className='px-2 background-color dim-text	'>{date}</span>
      </div>
    </div>
  );
};

export default TimelineDate;
