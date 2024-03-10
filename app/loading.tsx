import { ReloadIcon } from "@radix-ui/react-icons";

const Loading = () => {
  return (
    <div className="content-z-index h-dvh flex-center">
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      Loading...
    </div>
  );
};

export default Loading;
