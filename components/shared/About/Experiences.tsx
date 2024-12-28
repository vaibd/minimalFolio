import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TimelineDate from "../Timeline/TimelineDate";
import TimelineContainer from "../Timeline/TimelineContainer";
import { ExperiencesProps } from "@/types/types";

const Experiences = ({ timeline }: ExperiencesProps) => {
  return (
    <Card className="p-6 max-sm:p-3 transparent-cards">
      <CardHeader className="pb-3">
        <CardTitle className="heading-text">
          Experiences throughout time
        </CardTitle>
        <p className="p-text">
          Everything I&apos;ve done, over the passage of time.
        </p>
      </CardHeader>
      <CardContent className="grid gap-1">
        {timeline.map((project, index) => (
          <div key={index}>
            <TimelineDate date={project.year} />
            {project.events.map((event, index) => (
              <TimelineContainer
                key={index}
                title={event.title}
                subTitle={event.subTitle}
                type={event.type}
              />
            ))}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Experiences;
