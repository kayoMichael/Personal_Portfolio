'use client';

import { useState } from 'react';

import { differenceInMonths, differenceInYears, format } from 'date-fns';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { STACKS } from '@/src/components/icons/stacks';
import { Card, CardContent } from '@/src/components/ui/card';
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/src/components/ui/tooltip';

interface CompanyCardProps {
  logoSrc?: string;
  companyName: string;
  companyUrl: string;
  role: string;
  jobType: string;
  location: string;
  workplaceType: string;
  startDate: string;
  endDate: string | null;
  stacks: Array<{ name: string }>;
  accomplishments: string[];
}

export function CompanyCard({
  logoSrc = '/generic-company-logo.png',
  companyName,
  companyUrl,
  role,
  jobType,
  location,
  workplaceType,
  startDate,
  endDate,
  stacks,
  accomplishments,
}: CompanyCardProps) {
  const [expanded, setExpanded] = useState(false);

  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  const durationInYears = differenceInYears(end, start);
  const durationInMonths = (differenceInMonths(end, start) % 12) + 1;

  let durationText = '';
  if (durationInYears > 0) {
    durationText += `${durationInYears} yr${durationInYears > 1 ? 's' : ''} `;
  }
  if (durationInMonths > 0 || durationInYears === 0) {
    durationText += `${durationInMonths} mo${durationInMonths > 1 ? 's' : ''}`;
  }

  return (
    <Card className='w-full hover:shadow-md transition-shadow'>
      <CardContent className='flex gap-5 p-5'>
        {/* Logo */}
        <div className='relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-white'>
          <Image
            alt={`${companyName} logo`}
            className='object-contain p-1'
            fill
            src={logoSrc || '/placeholder.svg'}
          />
        </div>

        {/* Content */}
        <div className='flex-1 min-w-0 space-y-2'>
          {/* Header row */}
          <div className='flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1'>
            <div>
              <h3 className='text-lg font-semibold text-foreground'>{role}</h3>
              <div className='flex flex-wrap items-center gap-x-1.5 text-sm text-muted-foreground'>
                <Link
                  className='hover:text-foreground underline '
                  href={companyUrl}
                  target='_blank'
                >
                  {companyName}
                </Link>
                <span>·</span>
                <span>{jobType}</span>
                <span>·</span>
                <span>{location}</span>
                <span>·</span>
                <span>{workplaceType}</span>
              </div>
            </div>

            {/* Date & duration */}
            <div className='text-sm text-muted-foreground text-right'>
              <div>
                {format(start, 'MMM yyyy')} –{' '}
                {endDate ? format(end, 'MMM yyyy') : 'Present'}
              </div>
              <div className='text-xs'>{durationText}</div>
            </div>
          </div>

          {/* Tech stacks */}
          {stacks.length > 0 && (
            <div className='flex flex-wrap gap-1'>
              {stacks.map(({ name }) => (
                <TooltipProvider key={name}>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className='rounded-md bg-muted p-1 h-6 w-6 flex items-center justify-center'>
                        {STACKS[name]}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>{name}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          )}
          {accomplishments.length > 0 && (
            <div>
              <button
                className='flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors'
                onClick={() => {
                  setExpanded(!expanded);
                }}
              >
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    expanded ? 'rotate-180' : ''
                  }`}
                />
                <span>
                  {expanded ? 'Hide' : 'Show'} work details (
                  {accomplishments.length})
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  expanded
                    ? 'grid-rows-[1fr] opacity-100 mt-2'
                    : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <ul className='overflow-hidden space-y-1 text-sm text-muted-foreground'>
                  {accomplishments.map((item, index) => (
                    <li className='flex items-start gap-2' key={index}>
                      <span className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground' />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
