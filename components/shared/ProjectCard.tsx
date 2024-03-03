import {
  CircleIcon,
  StarIcon,
  GitHubLogoIcon,
  GlobeIcon,
  CalendarIcon,
} from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { project } from '@/types/types';
import Link from 'next/link';
import Image from 'next/image';

export function ProjectCard({
  logo,
  title,
  description,
  projectUrl,
  gitHubUrl,
  year,
  languages,
}: project) {


  languages.map((language) => {
    console.log('hey', language.color);
  });

  return (  
    <Card
      className='custom-hover custom-hover-dark inline-block mb-6 
    hover:scale-105 transition duration-500
    '>
      <CardHeader className='grid grid-cols-[1fr_110px] items-start gap-4 space-y-0'>
        <div className='space-y-1'>
          <CardTitle> {title} </CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <div className='h-full justify-self-end'>
          {logo ? (
            <Image
              src={logo}
              width={75}
              height={75}
              loading='lazy'
              alt={`${title} logo`}
            />
          ) : null}
        </div>
      </CardHeader>
      <CardContent>
        <div className='flex justify-between'>
          <div className='flex space-x-4 text-sm text-muted-foreground'>
            {languages.map((language) => (
              <div className='flex items-center'>
                <CircleIcon className={`mr-1 h-3 w-3 ${language.color}`} />
                {language.name}
              </div>
            ))}

            <div className='flex items-center'>
              <StarIcon className='mr-1 h-3 w-3' />
              20k
            </div>
            <div className='flex items-center'>
              <CalendarIcon className='mr-2' />
              Updated April 2023
            </div>
          </div>

          <div className='flex items-center'>
            {gitHubUrl ? (
              <Link href={gitHubUrl} target='_blank'>
                <Button variant='ghost' size='icon'>
                  <GitHubLogoIcon />
                </Button>
              </Link>
            ) : null}
            {projectUrl ? (
              <Link href={projectUrl} target='_blank'>
                <Button variant='ghost' size='icon'>
                  <GlobeIcon />
                </Button>
              </Link>
            ) : null}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
