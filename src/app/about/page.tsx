import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { getContributions, getGitHubUser } from './actions';
import CodingStatistic from './codingStatistics';
import GitHubInsights from './githubStatistics';
import TechStack from './techStack';

import PageHeader from '@/src/components/typography/header';
import Container from '@/src/components/ui/container';

const AboutPage = async () => {
  let weeklyStats, currentStats, githubData;
  try {
    weeklyStats = await fetch(
      'https://wakatime.com/api/v1/users/current/all_time_since_today',
      {
        method: 'GET',
        headers: {
          Authorization: `Basic ${Buffer.from(
            process.env.WAKATIME_API_KEY ?? ''
          ).toString('base64')}`,
        },
        next: { revalidate: 1800 },
      }
    ).then(async (res) => await res.json());
    currentStats = await fetch(
      'https://wakatime.com/api/v1/users/current/stats',
      {
        method: 'GET',
        headers: {
          Authorization: `Basic ${Buffer.from(
            process.env.WAKATIME_API_KEY ?? ''
          ).toString('base64')}`,
        },
        next: { revalidate: 1800 },
      }
    ).then(async (res) => await res.json());

    githubData = await Promise.all([getGitHubUser(), getContributions()]).then(
      ([user, contributions]) => ({
        user,
        contributions,
      })
    );
  } catch {
    redirect('/404');
  }
  return (
    <>
      <PageHeader description='Personal Profile' title='About Me' />
      <Container className='mt-10'>
        <div className='items-start space-y-2 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:space-y-0'>
          <div className='flex flex-col items-center xl:sticky xl:top-24'>
            <Image
              alt='Michael Li'
              className='rounded-full object-cover xl:rounded-xl'
              height={256}
              quality={100}
              src='/profile/portfolio.jpg'
              width={256}
            />
            <div className='flex flex-col items-center py-2'>
              <h3 className='font-cal text-xl'>Michael Li</h3>
              <h4 className='font-cal text-muted-foreground'>
                Software Engineer
              </h4>
              <h4 className='font-cal text-muted-foreground'>
                Student: (2021 ~ 2026)
              </h4>
            </div>
          </div>

          <div className='prose max-w-none dark:prose-dark xl:col-span-3'>
            <h2 className='font-cal text-2xl lg:text-3xl'>
              Personal Information
            </h2>
            <p>
              Hello, my name is Michael Li, a student at the{' '}
              <Link
                href='https://en.wikipedia.org/wiki/University_of_Waterloo_Faculty_of_Mathematics'
                target='_blank'
              >
                University of Waterloo
              </Link>{' '}
              studying Mathematics with a Computing minor, focused on software
              engineering.
            </p>
            <p>
              My coursework includes algorithms, data structures, linear
              algebra, object-oriented programming, computer systems,
              distributed systems, statistics, numerical computation, and
              databases.
            </p>
            <p>
              I have completed six internships and nearly two years of part-time
              software development work across industries including developer
              platforms, government, SaaS, payment systems, and infrastructure
              tooling.
            </p>
            <h2 className='font-cal text-2xl lg:text-3xl'>Tech Stack</h2>
            <TechStack />
          </div>
        </div>
      </Container>
      <CodingStatistic currentStats={currentStats} weeklyStats={weeklyStats} />
      <GitHubInsights data={githubData} />
    </>
  );
};

export default AboutPage;
