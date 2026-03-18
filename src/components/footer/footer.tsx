'use client';

import { useTranslations } from 'next-intl';

import { FOOTER_ICON_LINKS, FOOTER_LINKS_KEYS } from './footerLinks';

import Container from '@/src/components/ui/container';
import { Link } from '@/src/i18n/navigation';

const Footer = () => {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');

  return (
    <footer className='bg-pattern mb-10 mt-24 pt-16 text-sm'>
      <Container>
        <nav className='mb-8 grid grid-cols-2 gap-y-2 sm:grid-cols-3'>
          {FOOTER_LINKS_KEYS.map((groups, index) => (
            <div
              className='flex flex-col items-start gap-2'
              key={`group-${index}`}
            >
              {groups.map(({ titleKey, url }) => (
                <Link
                  className='font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground'
                  href={url}
                  key={titleKey}
                >
                  {nav(titleKey)}
                </Link>
              ))}
            </div>
          ))}
        </nav>
        <div className='flex items-center justify-between gap-4'>
          <div className='font-medium'>
            &copy; {new Date().getFullYear()} <Link href='/'>{t('name')}</Link>{' '}
            —— <em className='text-muted-foreground'>{t('location')}</em>
          </div>
          <div className='flex gap-4'>
            {FOOTER_ICON_LINKS.map(({ title, url, icon, className }) => (
              <a
                className={`text-muted-foreground transition-colors duration-200 ease-out ${className}`}
                href={url}
                key={title}
                rel='noreferrer'
                target='_blank'
                title={title}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
