'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { CardBody, CardContainer, CardItem } from '../ui/3d-card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';

import { STACKS } from '@/src/components/icons/stacks';

interface Props {
  name: string;
  description: string;
  date: string;
  image: string;
  url?: string;
  githubLink: string;
  techStack: string[];
}

const ProjectCard = ({
  name,
  description,
  image,
  url,
  githubLink,
  techStack,
}: Props) => {
  return (
    <CardContainer className='inter-var mt-10'>
      <CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border  '>
        <CardItem
          className='text-xl font-bold text-neutral-600 dark:text-white'
          translateZ='50'
        >
          {name}
        </CardItem>
        <CardItem
          as='p'
          className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
          translateZ='60'
        >
          {description}
        </CardItem>
        <CardItem className='w-full mt-4' translateZ='100'>
          <Image
            alt='thumbnail'
            className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
            height='1000'
            src={image}
            width='1000'
          />
        </CardItem>
        <div className='flex items-center mt-6 ml-3'>
          <CardItem>
            <div className='flex items-center gap-2'>
              {techStack.map((tech) => (
                <TooltipProvider key={tech}>
                  <Tooltip key={tech}>
                    <TooltipTrigger>{STACKS[tech]}</TooltipTrigger>
                    <TooltipContent>{tech}</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </CardItem>
        </div>
        <div className='flex justify-between items-center mt-10'>
          <CardItem
            as={Link}
            className='px-4 py-2 rounded-xl text-xs font-normal dark:text-white'
            href={githubLink}
            target='__blank'
            translateZ={20}
          >
            Code →
          </CardItem>
          {url && (
            <CardItem
              as={Link}
              className='px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold'
              href={url}
              target='__blank'
              translateZ={20}
            >
              Preview Page
            </CardItem>
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;
