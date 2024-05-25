import Link from 'next/link';

import { FOOTER_ICON_LINKS, FOOTER_LINKS } from './footerLinks';

import Container from '@/src/components/ui/container';

const Footer = () => (
  <footer className='bg-pattern mb-10 mt-24 pt-16 text-sm'>
    <Container>
      <nav className='mb-8 grid grid-cols-2 gap-y-2 sm:grid-cols-3'>
        {FOOTER_LINKS.map((groups, index) => (
          <div
            className='flex flex-col items-start gap-2'
            key={`group-${index}`}
          >
            {groups.map(({ title, url }) => (
              <Link
                className='font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground'
                href={url}
                key={title}
              >
                {title}
              </Link>
            ))}
          </div>
        ))}
      </nav>
      <div className='flex items-center justify-between gap-4'>
        <div className='font-medium'>
          &copy; {new Date().getFullYear()} <Link href='/'>Michael Li</Link> ——{' '}
          <em className='text-muted-foreground'>Waterloo, Canada</em>
        </div>
        <div className='flex gap-4'>
          {FOOTER_ICON_LINKS.map(({ title, url, icon, className }) => (
            <Link
              className={`text-muted-foreground transition-colors duration-200 ease-out ${className}`}
              href={url}
              key={title}
              target='_blank'
              title={title}
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
