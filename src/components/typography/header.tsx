'use client';

import { forwardRef } from 'react';

import { motion } from 'framer-motion';

import Container from '../ui/container';

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  centered?: boolean;
}

const PageHeader = forwardRef<HTMLDivElement, PageHeaderProps>(
  ({ title, description, centered, ...props }, ref) => {
    const animation = {
      hide: centered ? { y: 32, opacity: 0 } : { x: -32, opacity: 0 },
      show: centered ? { y: 0, opacity: 1 } : { x: 0, opacity: 1 },
    };

    return (
      <div className='bg-pattern pt-10 lg:pt-14' ref={ref} {...props}>
        <Container
          className={`pointer-events-none select-none overflow-hidden ${centered && 'text-center'}`}
        >
          <motion.div
            animate={animation.show}
            initial={animation.hide}
            transition={{ delay: 0.1 }}
          >
            <h1 className='pb-2 font-cal text-4xl font-bold md:text-5xl lg:text-6xl'>
              {title}
            </h1>
          </motion.div>
          {description && (
            <motion.div
              animate={animation.show}
              initial={animation.hide}
              transition={{ delay: 0.2 }}
            >
              <p className='mt-2 font-cal text-lg'>{description}</p>
            </motion.div>
          )}
        </Container>
      </div>
    );
  }
);

PageHeader.displayName = 'PageHeader';
export default PageHeader;
