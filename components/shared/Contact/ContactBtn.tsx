"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const ContactBtn = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { toast } = useToast();

  return (
    <Button
      variant="ghost"
      className={`rounded-full text-md font-normal p-2 text-black dark:text-white ${className}`}
      onClick={() =>
        toast({
          title: "Comming soon!",
          description: "Underwork!",
        })
      }
    >
      {children}
    </Button>
  );
};

export default ContactBtn;
