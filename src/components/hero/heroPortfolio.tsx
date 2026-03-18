'use client';
import React from 'react';

import { FileText } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { FOOTER_ICON_LINKS } from '../footer/footerLinks';
import { Button } from '../ui/button';

import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/src/components/ui/tooltip';

const HeroPortfolio = () => {
  const t = useTranslations('hero');

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
          <div className='flex gap-4 mt-6'>
            {FOOTER_ICON_LINKS.map(({ title, url, icon, className }) => (
              <TooltipProvider key={title}>
                <Tooltip>
                  <TooltipTrigger>
                    <Link
                      className={`text-muted-foreground transition-colors duration-200 ease-out ${className}`}
                      href={url}
                      key={title}
                      target='_blank'
                      title={title}
                    >
                      {icon}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>{title}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>

        <div className='xl:col-span-3'>
          {/* Bio text with prose styling */}
          <div className='prose max-w-none dark:prose-dark'>
            <p>
              {t.rich('bio1', {
                universityLink: (chunks) => (
                  <Link href={t('universityUrl')} target='_blank'>
                    {chunks}
                  </Link>
                ),
              })}
            </p>
            <p>{t('bio2')}</p>
            <p>{t('bio3')}</p>
          </div>

          {/* Buttons outside of prose */}
          <div className='flex flex-wrap gap-4 mt-8'>
            <Button asChild className='gap-2' variant='outline'>
              <Link href='/resume/Michael-Li-Resume.pdf' target='_blank'>
                <FileText className='h-4 w-4' />
                {t('resume')}
              </Link>
            </Button>
            <Button asChild className='gap-2' variant='outline'>
              <Link href='/resume/co-op-work-term.pdf' target='_blank'>
                <FileText className='h-4 w-4' />
                {t('coopEvaluations')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPortfolio;
