'use client';

import { useEffect, useRef, useState } from 'react';

import { ChevronDown } from 'lucide-react';
import { useLocale } from 'next-intl';

import { Button } from './ui/button';

import { type Locale, localeNames, locales } from '@/src/i18n/config';
import { usePathname, useRouter } from '@/src/i18n/navigation';

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const switchLocale = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='relative' ref={ref}>
      <Button
        className='gap-1'
        onClick={() => {
          setOpen(!open);
        }}
        size='sm'
        variant='ghost'
      >
        {localeNames[locale as Locale]}
        <ChevronDown
          className={`h-3 w-3 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </Button>
      {open && (
        <div className='absolute right-0 top-full z-50 mt-1 min-w-[140px] rounded-md border bg-white py-1 shadow-md dark:border-gray-800 dark:bg-gray-950'>
          {locales.map((l) => (
            <button
              className={`flex w-full items-center px-3 py-1.5 text-left text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${
                l === locale
                  ? 'font-semibold text-foreground'
                  : 'text-muted-foreground'
              }`}
              key={l}
              onClick={() => {
                switchLocale(l);
              }}
            >
              {localeNames[l]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
