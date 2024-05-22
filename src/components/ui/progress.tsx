'use client';

import { motion } from 'framer-motion';

interface ProgressProps {
  data: { name: string; percent?: number };
  className?: string;
}

const Progress = ({ data, className }: ProgressProps) => {
  const { name, percent = 0 } = data;

  const variants = {
    initial: { width: 0 },
    animate: {
      width: `${percent}%`,
      transition: { delay: 0.8 },
    },
  };

  return (
    <div className='flex items-center justify-between gap-3'>
      <div className='w-24'>{name}</div>
      <div className='relative flex h-3 flex-1 justify-center rounded-full bg-muted'>
        <motion.span
          animate='animate'
          className={`absolute left-0 top-0 h-3 rounded-full px-3 ${className}`}
          initial='initial'
          variants={variants}
        >
          &ensp;
        </motion.span>
      </div>
      <div className='w-8 text-right'>{percent.toFixed(0)}%</div>
    </div>
  );
};

export default Progress;
