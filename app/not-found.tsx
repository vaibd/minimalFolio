'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className='flex items-center justify-center h-dvh'>
      <Card className='w-[420px] border-none'>
        <CardHeader className='text-center'>
          <CardTitle className='lg:text-7xl text-4xl'>404</CardTitle>
          <CardDescription>
            The page you're looking for doesn't exist.
          </CardDescription>
        </CardHeader>
        <CardFooter className='flex justify-center'>
          <Button onClick={() => router.back()}>Go Back</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
