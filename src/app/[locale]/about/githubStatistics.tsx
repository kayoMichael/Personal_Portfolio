'use client';

import Link from 'next/link';

import OverviewCard from './overviewCard';
import Section from './section';

import type { GitHubUserContributionsCollection } from '@/src/utils/github';

import Contributions from '@/src/components/github/cotributions';
import { GitHub } from '@/src/components/icons/icons';
import Container from '@/src/components/ui/container';

interface Props {
  data: {
    user: { followers: number; public_repos: number };
    contributions: GitHubUserContributionsCollection | undefined;
  };
}

const GitHubInsights = ({ data }: Props) => {
  const contributions =
    data?.contributions?.contributionsCollection?.contributionCalendar;

  const totalContributions = contributions?.totalContributions ?? 0;
  const weeks = contributions?.weeks ?? [];

  const totalThisWeekContributions =
    weeks[weeks.length - 1]?.contributionDays
      ?.map((week) => week.contributionCount)
      ?.reduce((prev, curr) => prev + curr, 0) ?? 0;

  const totalContributionList = weeks.flatMap((week) =>
    week.contributionDays.map(
      (contributionDay) => contributionDay.contributionCount
    )
  );

  const bestContribution = Math.max(...totalContributionList) ?? 0;
  const averageContribution = (
    totalContributions / totalContributionList.length
  ).toFixed(2);

  return (
    <Container className='mt-10'>
      <Section
        appendix={
          <Link
            className='font-mono text-sm text-muted-foreground hover:text-foreground'
            href='https://github.com/kayoMichael'
            target='_blank'
          >
            @kayoMichael
          </Link>
        }
        description='A Quick Look at Followers, Repositories, and Contributions Activity from last year.'
        icon={<GitHub className='h-5 w-5' />}
        title='GitHub Insights'
      >
        <div className='flex flex-col'>
          <div className='grid gap-3 py-2 md:grid-cols-2'>
            <OverviewCard
              label='Public Repositories'
              value={data?.user?.public_repos ?? 0}
            />
            <OverviewCard
              label='Followers'
              value={data?.user?.followers ?? 0}
            />
          </div>
          <div className='relative my-3 flex flex-1 flex-col gap-2 rounded-xl bg-rainbow-gradient-inverse p-0.5'>
            <div className='h-full w-full rounded-xl bg-background'>
              <p className='absolute -top-3 left-3 bg-background px-2 font-cal'>
                Contributions
              </p>
              <div className='grid gap-3 p-2 md:grid-cols-4'>
                <OverviewCard label='Total' value={totalContributions} />
                <OverviewCard
                  label='This Week'
                  value={totalThisWeekContributions}
                />
                <OverviewCard label='Best Day' value={bestContribution} />
                <OverviewCard
                  label='Average'
                  unit='per day'
                  value={averageContribution}
                />
              </div>
              <div className='p-2'>
                <Contributions data={contributions} />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
};

export default GitHubInsights;
