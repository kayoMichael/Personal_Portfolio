import React from 'react';

import TimeLine from './timeline';

import PageHeader from '@/src/components/typography/header';
import Container from '@/src/components/ui/container';

const ExperiencePage = () => {
  return (
    <>
      <PageHeader
        description='A brief overview of my professional journey and career milestones.'
        title='Work Experience'
      />
      <Container>
        <TimeLine />
      </Container>
    </>
  );
};

export default ExperiencePage;
