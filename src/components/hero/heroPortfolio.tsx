'use client';
import React from 'react';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { Button } from '../ui/button';

import Skills from './skills';

const HeroPortfolio = () => {
  /** Base Profile Animation */
  const animation = {
    hide: { x: -32, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };

  /** Button Animation */
  const buttonAnimation = {
    hide: { x: -16, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };

  return (
    <div className='bg-pattern py-16 lg:py-20'>
      <div>
        <div className='relative font-cal'>
          <motion.h1
            animate={animation.show}
            className=' mb-4 flex flex-col justify-center gap-1 bg-gradient-to-b from-foreground via-foreground/90 to-foreground/70 to-90% bg-clip-text pb-2 text-4xl font-bold text-transparent sm:text-5xl lg:text-6xl'
            initial={animation.hide}
            transition={{ delay: 0.1 }}
          >
            <span>
              Hi, My name is <span className='text-primary'>Michael Li</span>
            </span>
            <span>Software Engineer</span>
          </motion.h1>
          <motion.p
            animate={animation.show}
            className='bg-gradient-to-b from-foreground via-foreground/90 to-foreground/70 to-90% bg-clip-text font-bold text-transparent md:text-xl'
            initial={animation.hide}
            transition={{ delay: 0.2 }}
          >
            I like to build things for the web.
          </motion.p>
        </div>
      </div>
      <div className='mt-6 md:mt-8'>
        <motion.div
          animate={buttonAnimation.show}
          className='relative'
          initial={buttonAnimation.hide}
          transition={{ delay: 0.3 }}
        >
          <Link href='/about'>
            <Button variant='outline'>Explore More</Button>
          </Link>
        </motion.div>
        <Skills />
      </div>
    </div>
  );
};

export default HeroPortfolio;
