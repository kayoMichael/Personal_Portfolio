'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';

import type { ContributionCalendar } from '@/src/utils/github';

interface ContributionsProps {
  data?: ContributionCalendar;
}

const Contributions = ({ data }: ContributionsProps) => {
  const [selectedContribution, setSelectedContribution] = useState<{
    count: number | null;
    date: string | null;
  }>({ count: null, date: null });

  const weeks = data?.weeks ?? [];
  const months =
    data?.months?.map((month) => {
      const filterContributionDay = weeks
        .filter((week) => week.firstDay.startsWith(month.firstDay.slice(0, 7)))
        .map((item) => item.contributionDays)
        .flat(1);

      const getContributionsByMonth = filterContributionDay.reduce(
        (prev, current) => prev + current.contributionCount,
        0
      );

      return {
        ...month,
        contributionsCount: getContributionsByMonth,
      };
    }) ?? [];

  const contributionColors = data?.colors ?? [];

  return (
    <div className='rounded-md bg-card p-3'>
      <div className='relative mb-4 flex flex-col justify-center overflow-hidden'>
        <div className='flex flex-col overflow-x-auto'>
          <ul className='flex justify-start gap-1 text-xs'>
            {months.map((month) => (
              <li
                className={`${month.totalWeeks < 2 && 'invisible'}`}
                key={month.firstDay}
                style={{ minWidth: 16.325 * month.totalWeeks }}
              >
                {month.name}
              </li>
            ))}
          </ul>

          <div className='flex justify-start gap-[3px]'>
            {weeks?.map((week) => (
              <div key={week.firstDay}>
                {week.contributionDays.map((contribution) => {
                  const backgroundColor =
                    contribution.contributionCount > 0 && contribution.color;
                  const getRandomDelayAnimate =
                    Math.random() * week.contributionDays.length * 0.15;

                  return (
                    <motion.span
                      animate='animate'
                      className='my-[2px] block h-[14.3px] w-[14.3px] rounded-sm bg-muted'
                      initial='initial'
                      key={contribution.date}
                      onMouseEnter={() => {
                        setSelectedContribution({
                          count: contribution.contributionCount,
                          date: contribution.date,
                        });
                      }}
                      onMouseLeave={() => {
                        setSelectedContribution({ count: null, date: null });
                      }}
                      style={backgroundColor ? { backgroundColor } : undefined}
                      variants={{
                        initial: { opacity: 0, translateY: -20 },
                        animate: {
                          opacity: 1,
                          translateY: 0,
                          transition: { delay: getRandomDelayAnimate },
                        },
                      }}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='flex flex-wrap items-center justify-between gap-2'>
        <div className='flex items-center gap-2 text-xs'>
          <span className='text-muted-foreground'>Less</span>
          <ul className='flex gap-1'>
            <motion.li className='h-3 w-3 rounded-sm bg-muted' />
            {contributionColors.map((color, index) => (
              <motion.li
                animate='animate'
                className='h-3 w-3 rounded-sm'
                initial='initial'
                key={color}
                style={{ backgroundColor: color }}
                variants={{
                  initial: { opacity: 0 },
                  animate: {
                    opacity: 1,
                    transition: { delay: index * 0.3 },
                  },
                }}
              />
            ))}
          </ul>
          <span>More</span>
        </div>
        <div
          className={`${selectedContribution?.date ? 'opacity-100' : 'opacity-0'} rounded bg-card p-1.5 font-cal text-xs text-card-foreground`}
        >
          {selectedContribution?.count} contributions on{' '}
          {selectedContribution?.date}
        </div>
      </div>
    </div>
  );
};

export default Contributions;
