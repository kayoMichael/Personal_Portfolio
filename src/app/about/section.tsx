'use client';

import { useRef } from 'react';

import { motion, useInView } from 'framer-motion';

interface SectionProps {
  title: string;
  description: string;
  icon: JSX.Element;
  children: React.ReactNode;
  appendix?: React.ReactNode;
}

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

const Section = ({
  title,
  description,
  icon,
  children,
  appendix,
}: SectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <motion.section
      animate={isInView ? 'animate' : 'initial'}
      className='will-change-[transform, opacity] flex flex-col gap-2'
      initial='initial'
      ref={sectionRef}
      transition={{ duration: 0.5 }}
      variants={variants}
    >
      <div className='flex items-center gap-1 font-cal text-xl font-medium'>
        {icon}
        <h2 className='capitalize'>{title}</h2>
      </div>
      <div className='flex flex-col justify-between gap-2 md:flex-row md:items-center'>
        <p>{description}</p>
        {appendix && <>{appendix}</>}
      </div>
      <>{children}</>
    </motion.section>
  );
};

export default Section;
