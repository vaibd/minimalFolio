import { projects } from '@/constants';
import { ProjectCard } from './ProjectCard';

const Projects = () => {
  return (
    <>
      <h1 className='mt-6 heading-text mb-3 text-center'>Projects</h1>
      <p className='mb-16 text-center'>
        Explore some of the projects I worked on in the past.
      </p>
      <div className='w-full columns-1 gap-6 md:columns-2'>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            logo={project.logo}
            title={project.title}
            description={project.description}
            projectUrl={project.projectUrl}
            gitHubUrl={project.gitHubUrl}
            year={project.year}
            languages={project.languages}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;
