'use client';
import React from 'react';

import Link from 'next/link';

import OverviewCard from './overviewCard';
import Section from './section';

import { WakaTime } from '@/src/components/icons/icons';
import PageHeader from '@/src/components/typography/header';
import Container from '@/src/components/ui/container';
import Progress from '@/src/components/ui/progress';

interface Props {
  weeklyStats: { data: { text?: string } };
  currentStats: {
    data: {
      human_readable_daily_average_including_other_language?: string;
      human_readable_total_including_other_language?: string;
      best_day?: { date: string };
      languages?: Array<{
        name: string;
        percent?: number;
      }>;
      editors?: Array<{
        name: string;
        percent?: number;
      }>;
    };
  };
}
const CodingStatistic = ({ weeklyStats, currentStats }: Props) => {
  const dailyAverage =
    currentStats.data?.human_readable_daily_average_including_other_language ??
    'N/A';
  const thisWeekTotal =
    currentStats.data?.human_readable_total_including_other_language ?? 'N/A';
  const bestDayDate = currentStats.data?.best_day?.date;
  const bestDay = bestDayDate ?? 'N/A';
  const allTimeSinceToday = weeklyStats.data?.text ?? 'N/A';
  const languages = currentStats.data?.languages ?? [];
  const editors = currentStats.data?.editors ?? [];
  const activities = [
    {
      title: 'Languages',
      data: languages,
      bg: 'bg-rainbow-gradient-inverse',
    },
    {
      title: 'Editors',
      data: editors,
      bg: 'bg-rainbow-gradient',
    },
  ];
  return (
    <>
      <PageHeader title='My Coding Statistics' />
      <Container>
        <Section
          appendix={
            <Link
              className='text-sm text-muted-foreground hover:underline'
              href='https://wakatime.com/@kayoMichael'
              passHref
            >
              Last modified: 5 minutes ago
            </Link>
          }
          description='My WakaTime last 7 days stats.'
          icon={<WakaTime className='h-5 w-5' />}
          title='Weekly Coding Activities'
        >
          <>
            <div className='mb-1 grid gap-3 py-2 md:grid-cols-2'>
              <OverviewCard label='Daily Coding Average' value={dailyAverage} />
              <OverviewCard
                label='This Week Coding Time'
                value={thisWeekTotal}
              />
              <OverviewCard label='Best Day Coding Time' value={bestDay} />
              <OverviewCard
                label='All Time Since Today'
                value={allTimeSinceToday}
              />
            </div>

            <div className='mt-2 flex flex-col gap-4 sm:flex-row'>
              {activities.map((activity) => (
                <div
                  className={`relative flex flex-1 flex-col gap-2 rounded-xl p-0.5 ${activity.bg}`}
                  key={activity.title}
                >
                  <div className='h-full w-full rounded-xl bg-background'>
                    <p className='absolute -top-3 left-3 bg-background px-2 font-cal'>
                      {activity.title}
                    </p>
                    <ul className='flex flex-col gap-1 px-4 py-3'>
                      {activity.data.map(
                        (item: { name: string; percent?: number }) => (
                          <li key={item.name}>
                            <Progress
                              className='bg-gradient-to-r from-pink-400 via-blue-500 to-purple-600'
                              data={item}
                            />
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </>
        </Section>
      </Container>
    </>
  );
};

export default CodingStatistic;
