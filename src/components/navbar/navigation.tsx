'use client';
import React, { useState } from 'react';

import { Menu as MenuIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

import LocaleSwitcher from '../locale-switcher';
import { Button } from '../ui/button';
import Container from '../ui/container';

import { Sheet, SheetContent, SheetTrigger } from '@/src/components/ui/sheet';
import { Link } from '@/src/i18n/navigation';

const NavigationBar = () => {
  const [open, setOpen] = useState(false);
  const t = useTranslations('nav');

  const items = [
    {
      label: t('experience'),
      href: '/experience' as const,
    },
    {
      label: t('projects'),
      href: '/projects' as const,
    },
    {
      label: t('codingStats'),
      href: '/coding' as const,
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
            <div className='flex h-16 items-center justify-between'>
              {/* Left: hamburger (mobile only) */}
              <SheetTrigger asChild>
                <Button className='md:hidden' size='icon' variant='ghost'>
                  <MenuIcon />
                </Button>
              </SheetTrigger>

              {/* Center-left: brand */}
              <Link className='flex items-center gap-2' href='/'>
                <span className='text-lg font-semibold'>{t('brand')}</span>
              </Link>

              {/* Right side: nav links + separator + locale switcher (desktop) */}
              <div className='hidden items-center md:flex'>
                <nav className='flex items-center gap-6 text-sm font-medium'>
                  <Link
                    className='relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 after:ease-in-out hover:after:w-full dark:after:bg-gray-50'
                    href='/experience'
                  >
                    {t('experience')}
                  </Link>
                  <Link
                    className='relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 after:ease-in-out hover:after:w-full dark:after:bg-gray-50'
                    href='/projects'
                  >
                    {t('projects')}
                  </Link>
                  <Link
                    className='relative inline-block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 after:ease-in-out hover:after:w-full dark:after:bg-gray-50'
                    href='/coding'
                  >
                    {t('codingStats')}
                  </Link>
                </nav>
                <div className='mx-4 h-5 w-px bg-gray-200 dark:bg-gray-700' />
                <LocaleSwitcher />
              </div>

              {/* Right side: locale switcher (mobile) */}
              <div className='md:hidden'>
                <LocaleSwitcher />
              </div>
            </div>
          </Container>
        </div>
      </Sheet>
    </>
  );
};

export default NavigationBar;
