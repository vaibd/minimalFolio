import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TimelineDate from "../Timeline/TimelineDate";
import TimelineContainer from "../Timeline/TimelineContainer";
import { ExperiencesProps } from "@/types/types";

const Experiences = ({ timeline }: ExperiencesProps) => {
  return (
    <Card className="mt-8 p-6 max-sm:p-3">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl">Experiences throughout time</CardTitle>
        <p>Everything I&apos;ve done, over passage of time.</p>
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
