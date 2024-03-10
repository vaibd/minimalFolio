import Education from "@/components/icons/Education";
import Work from "@/components/icons/Work";
import { TimelineContainerProps } from "@/types/types";

const TimelineContainer = ({
  title,
  subTitle,
  type,
}: TimelineContainerProps) => {
  return (
    <div className="grid grid-cols-[20px,2fr] space-x-4 rounded-md p-3 transition-all custom-hover">
      {type === "education" ? (
        <Education className="fill-current w-full h-full" />
      ) : (
        <Work className="fill-current w-full h-full" />
      )}
      <div className="space-y-1">
        <p className="text-sm font-medium leading-none">{title}</p>
        <p className="text-sm dim-text">{subTitle}</p>
      </div>
    </div>
  );
};

export default TimelineContainer;
