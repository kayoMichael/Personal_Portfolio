'use client';
import React, { useRef } from 'react';

import { useInView, motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

import ProjectCard from '../projects/ProjectsCard';
import { Button } from '../ui/button';

import { CompanyCard } from './companyCard';

import { ExperienceList } from '@/src/utils/experiences';
import { Projects } from '@/src/utils/projects';

interface Props {
  project: boolean;
}
const HighlightedProjects = ({ project }: Props) => {
  /** Projects Card Animation */
  const projectsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(projectsRef, { once: true, margin: '-100px' });
  const variants = {
    initial: {
      y: 40,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div className='mt-28'>
      <motion.div
        animate={isInView ? 'animate' : 'initial'}
        className='will-change-[transform, opacity]'
        initial='initial'
        ref={projectsRef}
        transition={{ duration: 0.5 }}
        variants={variants}
      >
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          className='mb-4 flex flex-col'
          initial={{ y: 30, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className='font-cal font-bold text-primary md:text-2xl'>
            {project ? 'Recent Projects' : 'Recent Work Experiences'}
          </h2>
        </motion.div>
        <div className='flex items-center justify-start mt-5'>
          {project ? (
            <Link href='/projects'>
              <Button variant='outline'>
                All Projects {<ChevronRight className='h-4 w-4' />}
              </Button>
            </Link>
          ) : (
            <Link href='/experience'>
              <Button variant='outline'>
                All Work Experiences {<ChevronRight className='h-4 w-4' />}
              </Button>
            </Link>
          )}
        </div>
        {project ? (
          <motion.div
            animate={{ y: 0, opacity: 1 }}
            className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-6'
            initial={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {Projects.slice(0, 2).map((project) => (
              <ProjectCard
                date={project.date}
                description={project.description}
                githubLink={project.github}
                image={project.image}
                key={project.github}
                name={project.title}
                techStack={project.techStack}
                url={project.url}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            animate={{ y: 0, opacity: 1 }}
            className='flex flex-col gap-4 mt-6'
            initial={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {ExperienceList.slice(-2)
              .toReversed()
              .map((experience) => (
                <CompanyCard
                  accomplishments={experience.accomplishments}
                  companyName={experience.company.name}
                  companyUrl={experience.company.url}
                  endDate={experience.endDate}
                  jobType={experience.company.jobType}
                  key={experience.company.name}
                  location={experience.company.location}
                  logoSrc={experience.company.logo}
                  role={experience.role}
                  stacks={experience.stacks}
                  startDate={experience.startDate}
                  workplaceType={experience.company.workplaceType}
                />
              ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default HighlightedProjects;
