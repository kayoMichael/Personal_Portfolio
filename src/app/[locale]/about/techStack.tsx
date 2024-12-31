'use client';

import { useEffect, useState } from 'react';

import { STACKS } from '@/src/components/icons/stacks';
import Marquee from '@/src/components/ui/marquee';

const TechStack = () => {
  const [shuffledStacks, setShuffledStacks] = useState<
    Array<[string, React.ReactNode]>
  >([]);

  useEffect(() => {
    const stacks = Object.entries(STACKS);
    const shuffled = [...stacks].sort(() => Math.random() - 0.5);
    setShuffledStacks(shuffled);
  }, []);

  const sliders = Array.from({ length: 2 }, (_, index) => {
    const stackSliders = [...shuffledStacks].sort(() => Math.random() - 0.5);

    return (
      <Marquee fade key={index} pauseOnHover reverse={index === 1}>
        {stackSliders.map(([title, icon], index) => (
          <div
            className={
              'flex items-center gap-4 rounded-lg bg-card p-3 shadow-border'
            }
            key={index}
          >
            {icon}
            <span>{title}</span>
          </div>
        ))}
      </Marquee>
    );
  });

  return <div className='space-y-4 overflow-hidden'>{sliders}</div>;
};

export default TechStack;
