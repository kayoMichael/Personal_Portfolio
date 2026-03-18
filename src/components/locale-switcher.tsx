'use client';

import { useEffect, useRef, useState } from 'react';

import { Globe } from 'lucide-react';
import { useLocale } from 'next-intl';

import {
  type Locale,
  localeCodes,
  localeNames,
  locales,
} from '@/src/i18n/config';
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
      <button
        className='flex items-center gap-1.5 rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground'
        onClick={() => {
          setOpen(!open);
        }}
      >
        <Globe className='h-4 w-4 text-sky-400' />
        <span className='font-medium'>{localeCodes[locale as Locale]}</span>
      </button>
      {open && (
        <div className='absolute right-0 top-full z-50 mt-2 min-w-[160px] rounded-lg border bg-white py-1 shadow-lg dark:border-gray-800 dark:bg-gray-950'>
          {locales.map((l) => (
            <button
              className={`flex w-full items-center gap-3 px-3 py-2 text-left text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${
                l === locale
                  ? 'font-semibold text-foreground'
                  : 'text-muted-foreground'
              }`}
              key={l}
              onClick={() => {
                switchLocale(l);
              }}
            >
              <span className='w-6 text-xs font-medium text-muted-foreground'>
                {localeCodes[l]}
              </span>
              <span>{localeNames[l]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
