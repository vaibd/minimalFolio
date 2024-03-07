import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tools } from "@/types/types";
import Image from "next/image";
import LinkWrapper from "./LinkWrapper";

export function ContentCard({ logo, title, description, link }: Tools) {
  return (
    <LinkWrapper link={link}>
      <Card
        className="custom-hover inline-block mb-6 
    hover:scale-105 transition duration-500
    "
      >
        <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
          <div className="space-y-1">
            <CardTitle> {title} </CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <div className="h-full justify-self-end">
            {logo ? (
              <Image
                src={logo}
                width={75}
                height={75}
                loading="lazy"
                alt={`${title} logo`}
                style={{ width: "75px", height: "75px" }}
              />
            ) : null}
          </div>
        </CardHeader>
      </Card>
    </LinkWrapper>
  );
}
