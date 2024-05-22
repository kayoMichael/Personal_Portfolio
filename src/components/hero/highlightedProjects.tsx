'use client';
import React, { useRef } from 'react';

import { useInView, motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

import ProjectCard from '../projects/ProjectsCard';
import { Button } from '../ui/button';

import { Projects } from '@/src/utils/projects';

const HighlightedProjects = () => {
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
    <div className='mt-40'>
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
          <h2 className='font-cal font-bold text-primary'>
            Highlighted Projects
          </h2>
          <p className='font-cal text-xl text-secondary-foreground md:text-2xl'>
            What I&apos;ve been working on
          </p>
        </motion.div>
        <div className='my-4 flex items-center justify-start'>
          <Link href='/projects'>
            <Button variant='outline'>
              See All Projects {<ChevronRight className='h-4 w-4' />}
            </Button>
          </Link>
        </div>
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          className='my-4 md:flex items-center md:my-8 md:grid-cols-2 gap-8'
          initial={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {Projects.slice(0, 2).map((project) => (
            <div key={project.github}>
              <ProjectCard
                date={project.date}
                description={project.description}
                githubLink={project.github}
                image={project.image}
                name={project.title}
                techStack={project.techStack}
                url={project.url}
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HighlightedProjects;
