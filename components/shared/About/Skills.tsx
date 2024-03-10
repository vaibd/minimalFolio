import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SkillsProps } from "@/types/types";
import Image from "next/image";

const Skills = ({ skills }: SkillsProps) => {
  return (
    <Card className="mt-8 p-6 max-sm:p-3 text-center">
      <CardHeader className="text-xl pb-8 font-bold">Skills</CardHeader>
      <CardContent className="inline-flex	flex-wrap	justify-center gap-x-7 ">
        {skills.map((skill, index) => (
          <div key={index} className="p-4 flex flex-col items-center">
            <Image
              src={skill.icon}
              alt={skill.name}
              width={50}
              height={50}
              className="pb-2 hover:scale-110 transition duration-500 w-auto h-auto"
            />
            <p>{skill.name}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Skills;
