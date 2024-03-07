"use client";

import { Button } from "@/components/ui/button";
import { ChildrenProps } from "@/types/types";
import { useRouter } from "next/navigation";

const GoBack = ({ children }: ChildrenProps) => {
  const router = useRouter();
  return <Button onClick={() => router.back()}> {children} </Button>;
};

export default GoBack;
