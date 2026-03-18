'use client';
import React from 'react';

import { useTranslations } from 'next-intl';

import TimeLine from './timeline';

import PageHeader from '@/src/components/typography/header';
import Container from '@/src/components/ui/container';

const ExperiencePage = () => {
  const t = useTranslations('experience');

  return (
    <>
      <PageHeader
        className='mb-10 mt-20'
        description={t('pageDescription')}
        title={t('pageTitle')}
      />
      <Container>
        <TimeLine />
      </Container>
    </>
  );
};

export default ExperiencePage;
