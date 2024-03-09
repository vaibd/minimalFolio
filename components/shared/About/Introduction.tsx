import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { IntroductionProps } from "@/types/types";

const Introduction = ({ about }: IntroductionProps) => {
  const { heading, professionalInfo, personalInfo, casualLife } = about;

  return (
    <Card className="p-6 max-sm:p-3">
      <CardHeader className="heading-text text-center">{heading}</CardHeader>
      <CardContent className="grid gap-1">
        {[professionalInfo, personalInfo, casualLife].map((info, index) => {
          return (
            <p key={index} className="pt-5">
              {info}
            </p>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default Introduction;
