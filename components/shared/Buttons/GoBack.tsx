'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

interface GoBackProps {
  children: React.ReactNode;
}

const GoBack = ({ children }: GoBackProps) => {
  const router = useRouter();
  return <Button onClick={() => router.back()}> {children} </Button>;
};

export default GoBack;
