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

// fix for tailwind not recognizing dynamic classes
const colorVariants = {
  NextJS: 'text-sky-400',
  ReactJS: 'text-blue-400',
  NodeJS: 'text-green-300',
  MySQL: 'text-purple-400',
  Ruby: 'text-rose-500',
  EmberJS: 'text-red-300',
  MongoDB: 'text-teal-300',
}

export function ProjectCard({
  logo,
  title,
  description,
  projectUrl,
  gitHubUrl,
  year,
  languages,
}: project) {

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
              style={{ width: '75px', height: '75px' }}
            />
          ) : null}
        </div>
      </CardHeader>
      <CardContent>
        <div className='flex justify-between'>
          <div className='flex space-x-4 text-sm text-muted-foreground'>
            {languages.map((language, i) => (
              <div key={i} className='flex items-center'>
               
                <CircleIcon className={`mr-1 h-3 w-3 ${colorVariants[language.name as keyof typeof colorVariants]}`} />
                {language.name}
              </div>
            ))}

            <div className='flex items-center'>
              <CalendarIcon className='mr-2' />
              {year}
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
 {/* text-sky-600 

*/}