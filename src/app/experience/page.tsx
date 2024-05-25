import React from 'react';

import { FileText } from 'lucide-react';
import Link from 'next/link';

import TimeLine from './timeline';

import PageHeader from '@/src/components/typography/header';
import { Button } from '@/src/components/ui/button';
import Container from '@/src/components/ui/container';

const ExperiencePage = () => {
  return (
    <>
      <PageHeader
        description='A brief overview of my professional journey and career milestones.'
        title='Work Experience'
      />
      <Container>
        <div className='mb-12 md:mb-16'>
          <Button asChild className='gap-x-1 mt-10' variant='outline'>
            <Link href='/resume/Michael_(Heyang)_Li_Resume.pdf' target='_blank'>
              <FileText />
              Download Resume
            </Link>
          </Button>
        </div>
        <TimeLine />
      </Container>
    </>
  );
};

export default ExperiencePage;
