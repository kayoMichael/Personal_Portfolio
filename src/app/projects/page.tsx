'use client';
import React from 'react';

import { motion } from 'framer-motion';

import ProjectCard from '@/src/components/projects/ProjectsCard';
import PageHeader from '@/src/components/typography/header';
import Container from '@/src/components/ui/container';
import { Projects } from '@/src/utils/projects';

const ProjectsPage = () => {
  return (
    <>
      <PageHeader
        description='A collection of Projects I have built.'
        title='Projects'
      />
      <Container>
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          className='my-8 grid w-full auto-cols-fr grid-cols-1 gap-24 md:my-12 md:grid-cols-2'
          initial={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {Projects.map((project) => (
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
      </Container>
    </>
  );
};

export default ProjectsPage;
