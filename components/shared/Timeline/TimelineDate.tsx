import {
  TooltipTrigger,
  TooltipContent,
  Tooltip,
  TooltipProvider,
} from "@/components/ui/tooltip";

const TimelineDate = ({ date }: { date: number }) => {
  return (
    <div className="relative ">
      <div className="absolute inset-0 flex items-center ">
        <span className="w-full border-t dark:border-neutral-700	" />
      </div>
      <div className="relative flex justify-center text-xs">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="px-2 background-color dim-text	">{date}</span>
            </TooltipTrigger>
            <TooltipContent>
              <p>Start Date</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default TimelineDate;
