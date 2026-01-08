'use client';
import React from 'react';

import { FileText } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../ui/button';

const HeroPortfolio = () => {
  return (
    <div className='mt-24'>
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

        <div className='xl:col-span-3'>
          {/* Bio text with prose styling */}
          <div className='prose max-w-none dark:prose-dark'>
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
              I have completed 6 internships and nearly 2 years of part-time
              software development work across industries including computer
              vision, developer platforms, government, SaaS, payment systems,
              and infrastructure tooling.
            </p>
          </div>

          {/* Buttons outside of prose */}
          <div className='flex flex-wrap gap-4 mt-8'>
            <Button asChild className='gap-2' variant='outline'>
              <Link href='/resume/Michael-Li-Resume.pdf' target='_blank'>
                <FileText className='h-4 w-4' />
                Resume
              </Link>
            </Button>
            <Button asChild className='gap-2' variant='outline'>
              <Link href='/resume/co-op-work-term.pdf' target='_blank'>
                <FileText className='h-4 w-4' />
                Co-op Employer Evaluations (UW)
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPortfolio;
