import React from 'react';

import Link from 'next/link';

import Container from '../ui/container';

const NavigationBar = () => {
  return (
    <>
      <div className='fixed top-0 z-50 w-full bg-white shadow-sm dark:bg-gray-950'>
        <Container>
          <div className='flex h-16 items-center justify-between'>
            <Link className='flex items-center gap-2' href='/'>
              <span className='text-lg font-semibold'>Personal Portfolio</span>
            </Link>
            <nav className='hidden gap-6 text-sm font-medium md:flex'>
              <Link
                className='relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 after:ease-in-out hover:after:w-full dark:after:bg-gray-50'
                href='/about'
              >
                About Me
              </Link>
              <Link
                className='relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 after:ease-in-out hover:after:w-full dark:after:bg-gray-50'
                href='/projects'
              >
                Projects
              </Link>
              <Link
                className='relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 after:ease-in-out hover:after:w-full dark:after:bg-gray-50'
                href='/experience'
              >
                Experience
              </Link>
              <Link
                className='relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 after:ease-in-out hover:after:w-full dark:after:bg-gray-50'
                href='#'
              >
                Blog
              </Link>
            </nav>
          </div>
        </Container>
      </div>
      <main className='pt-16' />
    </>
  );
};

export default NavigationBar;
