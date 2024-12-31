'use client';
import React, { useState } from 'react';

import { Menu as MenuIcon } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { Button } from '../ui/button';
import Container from '../ui/container';

import { Sheet, SheetContent, SheetTrigger } from '@/src/components/ui/sheet';

const NavigationBar = ({ locale }: { locale: string }) => {
  const [open, setOpen] = useState(false);
  const t = useTranslations('General');

  const items = [
    {
      label: t('aboutMe'),
      href: `/${locale}/about`,
    },
    {
      label: t('experience'),
      href: `/${locale}/experience`,
    },
    {
      label: t('projects'),
      href: `/${locale}/projects`,
    },
  ];
  return (
    <>
      <Sheet onOpenChange={setOpen} open={open}>
        <div className='fixed top-0 z-50 w-full bg-white shadow-sm dark:bg-gray-950'>
          <Container>
            <SheetContent side='left'>
              <div className='flex flex-col items-start'>
                {items.map((item, index) => (
                  <Button
                    asChild
                    className='w-full justify-start'
                    key={index}
                    onClick={() => {
                      setOpen(false);
                    }}
                    variant='ghost'
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </Button>
                ))}
              </div>
            </SheetContent>
            <div className='flex h-16 items-center md:justify-between'>
              <SheetTrigger asChild>
                <Button className='md:hidden' size='icon' variant='ghost'>
                  <MenuIcon />
                </Button>
              </SheetTrigger>
              <Link className='flex items-center gap-2' href={`/${locale}`}>
                <span className='text-lg font-semibold'>
                  Personal Portfolio
                </span>
              </Link>
              <nav className='hidden gap-6 text-sm font-medium md:flex'>
                <Link
                  className='relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 after:ease-in-out hover:after:w-full dark:after:bg-gray-50'
                  href={`/${locale}/about`}
                >
                  {t('aboutMe')}
                </Link>
                <Link
                  className='relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 after:ease-in-out hover:after:w-full dark:after:bg-gray-50'
                  href={`/${locale}/experience`}
                >
                  {t('experience')}
                </Link>
                <Link
                  className='relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 after:ease-in-out hover:after:w-full dark:after:bg-gray-50'
                  href={`/${locale}/projects`}
                >
                  {t('projects')}
                </Link>
              </nav>
            </div>
          </Container>
        </div>
      </Sheet>
    </>
  );
};

export default NavigationBar;
