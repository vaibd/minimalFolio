import { Card, CardContent } from "@/components/ui/card";
import { IntroductionProps } from "@/types/types";

const Introduction = ({ about }: IntroductionProps) => {
  const { professionalInfo, personalInfo, casualLife } = about;

  return (
    <Card className="p-6 max-sm:p-3 transparent-cards">
      <CardContent className="grid gap-1">
        {[professionalInfo, personalInfo, casualLife].map((info, index) => {
          return (
            <p key={index} className="pt-5 p-text">
              {info}
            </p>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default Introduction;
