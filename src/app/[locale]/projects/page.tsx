'use client';
import React from 'react';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import ProjectCard from '@/src/components/projects/ProjectsCard';
import PageHeader from '@/src/components/typography/header';
import Container from '@/src/components/ui/container';
import { Projects } from '@/src/utils/projects';

const ProjectsPage = () => {
  const t = useTranslations('projects');
  const tp = useTranslations('projectItems');

  return (
    <>
      <PageHeader description={t('pageDescription')} title={t('pageTitle')} />
      <Container>
        <motion.div
          animate={{ y: 0, opacity: 1 }}
          className='my-8 grid w-full grid-cols-1 md:grid-cols-2 gap-16'
          initial={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {Projects.map((project) => (
            <div className='flex justify-center' key={project.github}>
              <ProjectCard
                date={project.date}
                description={tp(`${project.key}.description`)}
                githubLink={project.github}
                image={project.image}
                name={tp(`${project.key}.title`)}
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
