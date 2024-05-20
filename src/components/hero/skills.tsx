import React from 'react';

import { motion } from 'framer-motion';

import {
  AWS,
  CSS3,
  HTML5,
  JavaScript,
  MySQL,
  NextJs,
  Python,
  ReactJs,
  Redis,
  Spring,
  TailwindCss,
  TypeScript,
  VueJs,
} from '@/src/components/icons/icons';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/src/components/ui/tooltip';
import { cn } from '@/src/utils/cn';

interface Stack {
  title: string;
  colorClass: string;
  icon: JSX.Element;
}

const stacks: Stack[] = [
  {
    title: 'React.js',
    colorClass: 'hover:text-[#61DAFB]',
    icon: <ReactJs className='h-6 w-6' />,
  },
  {
    title: 'Next.js',
    colorClass: 'hover:text-black dark:hover:text-white',
    icon: <NextJs className='h-6 w-6' />,
  },
  {
    title: 'HTML5',
    colorClass: 'hover:text-[#E34F26]',
    icon: <HTML5 className='h-6 w-6' />,
  },
  {
    title: 'CSS3',
    colorClass: 'hover:text-[#1572B6]',
    icon: <CSS3 className='h-6 w-6' />,
  },
  {
    title: 'Python',
    colorClass: 'hover:text-[#3776AB]',
    icon: <Python className='h-6 w-6' />,
  },
  {
    title: 'Javascript',
    colorClass: 'hover:text-[#F7DF1E]',
    icon: <JavaScript className='h-6 w-6' />,
  },
  {
    title: 'TypeScript',
    colorClass: 'hover:text-[#3178C6]',
    icon: <TypeScript className='h-6 w-6' />,
  },
  {
    title: 'Vue.js',
    colorClass: 'hover:text-[#4FC08D]',
    icon: <VueJs className='h-6 w-6' />,
  },
  {
    title: 'Tailwind CSS',
    colorClass: 'hover:text-[#06B6D4]',
    icon: <TailwindCss className='h-6 w-6' />,
  },
  {
    title: 'Spring',
    colorClass: 'hover:text-[#6DB33F]',
    icon: <Spring className='h-6 w-6' />,
  },
  {
    title: 'Redis',
    colorClass: 'hover:text-[#DC382D]',
    icon: <Redis className='h-6 w-6' />,
  },
  {
    title: 'AWS',
    colorClass: 'hover:text-[#FF9900]',
    icon: <AWS className='h-6 w-6' />,
  },
  {
    title: 'MySQL',
    colorClass: 'hover:text-[#4479A1]',
    icon: <MySQL className='h-8 w-8' />,
  },
];

const Skills = () => {
  const animation = {
    hide: { x: -8, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };

  return (
    <div className='mt-11 lg:mt-15'>
      <motion.p
        animate={animation.show}
        className={cn('mb-2 text-sm text-secondary-foreground')}
        initial={animation.hide}
        transition={{ delay: 0.4 }}
      >
        Tech Stack and Tools
      </motion.p>
      <motion.div
        animate='show'
        className={cn('flex flex-wrap gap-2')}
        initial='hide'
        transition={{ delayChildren: 0.5, staggerChildren: 0.015 }}
      >
        {stacks.map(({ title, colorClass, icon }) => (
          <TooltipProvider key={title}>
            <Tooltip>
              <TooltipTrigger>
                <motion.div
                  className={cn(
                    'text-muted-foreground transition duration-200',
                    colorClass
                  )}
                  variants={animation}
                >
                  {icon}
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>{title}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
