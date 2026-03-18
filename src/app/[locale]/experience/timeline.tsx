'use client';
import React from 'react';

import { differenceInMonths, differenceInYears, format } from 'date-fns';
import { enUS, ja, fr, zhCN, es, ko } from 'date-fns/locale';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

import { STACKS } from '@/src/components/icons/stacks';
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/src/components/ui/tooltip';
import { ExperienceList } from '@/src/utils/experiences';

const dateLocales = { en: enUS, ja, fr, zh: zhCN, es, ko };

const TimeLine = () => {
  const t = useTranslations('experience');
  const te = useTranslations('experiences');
  const locale = useLocale();
  const dateLocale = dateLocales[locale as keyof typeof dateLocales] ?? enUS;

  return (
    <>
      <div className='prose max-w-none px-4 dark:prose-dark'>
        <ol className='list-none space-y-4 border-l border-border pl-10'>
          {ExperienceList.map(
            ({
              key,
              company,
              startDate,
              endDate,
              stacks,
              accomplishmentCount,
            }) => {
              const start = new Date(startDate);
              const end = endDate ? new Date(endDate) : new Date();

              const durationInYears = differenceInYears(end, start);
              const durationInMonths =
                (differenceInMonths(end, start) % 12) + 1;

              let durationText = '';
              if (durationInYears > 0) {
                durationText +=
                  durationInYears > 1
                    ? t('yrs', { count: durationInYears })
                    : t('yr', { count: durationInYears });
                durationText += ' ';
              }

              if (durationInMonths > 0 || durationInYears === 0) {
                durationText +=
                  durationInMonths > 1
                    ? t('mos', { count: durationInMonths })
                    : t('mo', { count: durationInMonths });
              }

              const accomplishments = Array.from(
                { length: accomplishmentCount },
                (_, i) => te(`${key}.accomplishment${i + 1}`)
              );
              const displayName = te.has(`${key}.companyName`)
                ? te(`${key}.companyName`)
                : company.name;

              return (
                <li className='relative h-full' key={company.name}>
                  <div className='absolute -left-[68px] bottom-0 mt-0 h-full'>
                    <div className='sticky top-20 flex items-start'>
                      <Image
                        alt={displayName}
                        className='rounded-full ml-0 bg-white shadow-sm object-cover h-14 w-14"'
                        height={60}
                        src={company.logo}
                        style={{ objectFit: 'contain' }}
                        width={60}
                      />
                    </div>
                  </div>
                  <div className='flex flex-col items-start gap-1 md:flex-row'>
                    <div className='flex flex-col space-y-1 leading-snug'>
                      <h2 className='my-0 font-cal text-lg'>
                        {te(`${key}.role`)}
                      </h2>
                      <div className='flex items-center gap-1 text-muted-foreground'>
                        <Link
                          className='text-muted-foreground underline hover:text-foreground'
                          href={company.url}
                          target='_blank'
                        >
                          {displayName}
                        </Link>
                        <span>&middot;</span>
                        <span>{te(`${key}.jobType`)}</span>
                      </div>
                      <div className='flex gap-1 text-muted-foreground'>
                        <div className='flex gap-1'>
                          <span>
                            {format(start, 'MMM yyyy', { locale: dateLocale })}
                          </span>{' '}
                          -{' '}
                          <span>
                            {endDate
                              ? format(end, 'MMM yyyy', { locale: dateLocale })
                              : t('present')}
                          </span>
                        </div>
                        <span>&middot;</span>
                        <span>{durationText}</span>
                      </div>
                      <div className='flex items-center gap-1 text-muted-foreground'>
                        <span>{te(`${key}.location`)}</span>
                        <span>&middot;</span>
                        <span>{te(`${key}.workplaceType`)}</span>
                      </div>
                    </div>
                  </div>
                  <div className='my-4 flex flex-row flex-wrap gap-1'>
                    {stacks.map(({ name }) => (
                      <TooltipProvider key={name}>
                        <Tooltip>
                          <TooltipTrigger>
                            <div className='rounded-lg bg-card p-1.5'>
                              {STACKS[name]}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>{name}</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ))}
                  </div>
                  <ul className='pl-0'>
                    {accomplishments.map((accomplishment, index) => (
                      <li className='my-1 leading-snug' key={index}>
                        <span className='text-muted-foreground'>
                          {accomplishment}
                        </span>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }
          )}
        </ol>
        <div className='mt-12'>
          <p className='text-muted-foreground'>
            {t('lastUpdatedAt')}{' '}
            <time className='font-cal' dateTime='2026-01-05'>
              2026-01-05
            </time>
          </p>
        </div>
      </div>
    </>
  );
};

export default TimeLine;
