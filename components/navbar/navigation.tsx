import React from 'react';

import Link from 'next/link';

const NavigationBar = () => {
  return (
    <>
      <div className='fixed top-0 z-50 w-full bg-white shadow-sm dark:bg-gray-950'>
        <div className='container flex h-16 items-center justify-between px-4 md:px-6'>
          <Link className='flex items-center gap-2' href='#'>
            <span className='text-lg font-semibold'>Personal Profolio</span>
          </Link>
          <nav className='hidden gap-6 text-sm font-medium md:flex'>
            <Link
              className='relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 after:ease-in-out hover:after:w-full dark:after:bg-gray-50'
              href='#'
            >
              About Me
            </Link>
            <Link
              className='relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 after:ease-in-out hover:after:w-full dark:after:bg-gray-50'
              href='#'
            >
              Projects
            </Link>
            <Link
              className='relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 after:ease-in-out hover:after:w-full dark:after:bg-gray-50'
              href='#'
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
      </div>
      <main className='pt-16' />
    </>
  );
};

export default NavigationBar;
