import { ContentCard } from "@/components/shared/ContentCard/ContentCard";
import { tools } from "@/constants/tools";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const page = () => {
  return (
    <div>
      <h1 className="mt-6 heading-text mb-3 text-center">Tools</h1>
      <p className="mb-16 text-center">
        A list of tools I use on a daily basis.
      </p>

      {tools.map((category, index) => {
        return (
          <div key={index}>
            <h2 className="text-xl py-4 px-1">{category.category}</h2>
            <div className="w-full columns-1 gap-6 md:columns-2">
              {category.tools.map((tool, index) => {
                return (
                  <ContentCard
                    key={index}
                    logo={tool.logo}
                    title={tool.name}
                    description={tool.description}
                    link={tool.link ? tool.link : ""}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default page;
