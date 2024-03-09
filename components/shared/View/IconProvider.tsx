import GitHub from "@/components/icons/GitHub";
import LinkedIn from "@/components/icons/LinkedIn";
import Email from "@/components/icons/Email";

export const GetIcons = ({ iconName }: { iconName: string }) => {
  switch (iconName) {
    case "GitHub":
      return <GitHub />;
    case "LinkedIn":
      return <LinkedIn />;
    case "Email":
      return <Email />;
    default:
      return null;
  }
};
