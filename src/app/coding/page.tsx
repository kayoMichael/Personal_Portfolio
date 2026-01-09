import React from 'react';

import { redirect } from 'next/navigation';

import { getContributions, getGitHubUser } from './actions';
import CodingStatistic from './codingStatistics';
import GitHubInsights from './githubStatistics';

const CodingPage = async () => {
  let currentStats, githubData;
  try {
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
      <CodingStatistic currentStats={currentStats} />
      <GitHubInsights data={githubData} />
    </>
  );
};

export default CodingPage;
