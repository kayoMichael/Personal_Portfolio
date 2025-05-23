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
              Hello, My name is Michael (Heyang) Li, a Student at the{' '}
              <Link
                href='https://en.wikipedia.org/wiki/University_of_Waterloo_Faculty_of_Mathematics'
                target='_blank'
              >
                University of Waterloo
              </Link>{' '}
              and an aspiring Software Engineer.
            </p>
            <p>
              I am currently pursuing a Bachelor of Mathematics and a Computer
              Science Minor (co-op) at the University of Waterloo Faculty of
              Mathematics, where I am honing my skills in software development
              and computer science. I am passionate about technology and
              software development, and I am always looking for new
              opportunities to learn and grow in this field.
            </p>
            <p>
              Throughout years, I have gained valuable experiences in crafting
              scalable software systems that meet both technical and business
              requirements, utilizing a range of programming languages such as{' '}
              <Link href='https://www.python.org/' target='_blank'>
                Python
              </Link>
              ,{' '}
              <Link href='https://www.javascript.com/' target='_blank'>
                JavaScript
              </Link>
              , and{' '}
              <Link href='https://www.typescriptlang.org/' target='_blank'>
                TypeScript
              </Link>
              ,
              <Link href='https://www.java.com/ja/' target='_blank'>
                Java
              </Link>
              , Leveraging my proficiency in backend frameworks like{' '}
              <Link href='https://nodejs.org/en' target='_blank'>
                NodeJS
              </Link>
              ,{' '}
              <Link href='https://expressjs.com/' target='_blank'>
                ExpressJS
              </Link>
              , and{' '}
              <Link href='https://www.serverless.com/' target='_blank'>
                Serverless Framework
              </Link>{' '}
              coupled with expertise in frontend frameworks such as{' '}
              <Link href='https://reactjs.org/' target='_blank'>
                React
              </Link>{' '}
              and{' '}
              <Link href='https://nextjs.org/' target='_blank'>
                NextJS
              </Link>
              , allows me to deliver efficient and effective software solutions
              that meet the unique needs of organizations.
            </p>
            <p>
              Outside of School, I am currently freelancing as a Software
              Enginner for a private Company and working on side projects that I
              am interested in. Since I am in the Co-op Program, I have 3 past
              internships in the Software Development field and from those
              experiences I feel like I have grown as a Software Engineer.
            </p>
            <p>
              I consider myself a curious and inquisitive person, always eager
              to learn and improve my skills. In my free time, I enjoy working
              on personal side projects, as it provides me with an opportunity
              to explore new technologies and further my knowledge and
              expertise. I am also a continuous learner, and I actively seek out
              new learning opportunities in order to stay up-to-date with the
              latest industry advancements.
            </p>
            <p>
              Besides software development, I also have a strong appreciation
              for mathematics and problem-solving. I enjoy tackling complex
              problems and finding creative solutions to them, and I believe
              that my background in mathematics has helped me develop strong
              analytical and problem-solving skills that I can apply to my work
              in software development.
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
