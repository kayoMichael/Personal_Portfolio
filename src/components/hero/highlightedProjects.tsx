'use client';
import React, { useRef } from 'react';

import { useInView, motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

import ProjectCard from '../projects/ProjectsCard';
import { Button } from '../ui/button';

import { CompanyCard } from './companyCard';

import { Link } from '@/src/i18n/navigation';
import { ExperienceList } from '@/src/utils/experiences';
import { Projects } from '@/src/utils/projects';

interface Props {
  project: boolean;
}
const HighlightedProjects = ({ project }: Props) => {
  const t = useTranslations('hero');
  const tp = useTranslations('projectItems');

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
            {project ? t('recentProjects') : t('recentExperiences')}
          </h2>
        </motion.div>
        <div className='flex items-center justify-start mt-5'>
          {project ? (
            <Link href='/projects'>
              <Button variant='outline'>
                {t('allProjects')} {<ChevronRight className='h-4 w-4' />}
              </Button>
            </Link>
          ) : (
            <Link href='/experience'>
              <Button variant='outline'>
                {t('allExperiences')} {<ChevronRight className='h-4 w-4' />}
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
            {Projects.slice(0, 2).map((proj) => (
              <ProjectCard
                date={proj.date}
                description={tp(`${proj.key}.description`)}
                githubLink={proj.github}
                image={proj.image}
                key={proj.github}
                name={tp(`${proj.key}.title`)}
                techStack={proj.techStack}
                url={proj.url}
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
                  accomplishmentCount={experience.accomplishmentCount}
                  companyName={experience.company.name}
                  companyUrl={experience.company.url}
                  endDate={experience.endDate}
                  key={experience.company.name}
                  logoSrc={experience.company.logo}
                  stacks={experience.stacks}
                  startDate={experience.startDate}
                  translationKey={experience.key}
                />
              ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default HighlightedProjects;
