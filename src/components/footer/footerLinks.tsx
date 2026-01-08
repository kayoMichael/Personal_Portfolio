import {
  ShapesIcon,
  LayoutDashboardIcon,
  BookOpenText,
  AtSign,
} from 'lucide-react';

import { GitHub, LinkedIn } from '@/src/components/icons/icons';

interface NavLink {
  path: string;
  label: string;
  icon: JSX.Element;
  onlyShowOnDropdownMenu?: boolean;
}

interface FooterIconLink {
  title: string;
  url: string;
  icon: JSX.Element;
  className: string;
}

export const ROUTES = {
  projects: '/projects',
  experience: '/experience',
  code: '/coding',
  dashboard: '/',
};

export const NAV_LINKS: NavLink[] = [
  {
    path: ROUTES.projects,
    label: 'Projects',
    icon: <ShapesIcon className='size-5' />,
  },
  {
    path: ROUTES.dashboard,
    label: 'Home',
    icon: <LayoutDashboardIcon className='size-5' />,
  },
  {
    path: ROUTES.experience,
    label: 'Work Experience',
    icon: <BookOpenText className='size-5' />,
  },
  {
    path: ROUTES.code,
    label: 'Coding Stats',
    icon: <AtSign className='size-5' />,
  },
];

export const FOOTER_LINKS = [
  [
    {
      title: 'Coding Stats',
      url: ROUTES.code,
    },
    {
      title: 'Home',
      url: ROUTES.dashboard,
    },
  ],
  [
    {
      title: 'Projects',
      url: ROUTES.projects,
    },
    {
      title: 'Experience',
      url: ROUTES.experience,
    },
  ],
];

export const FOOTER_ICON_LINKS: FooterIconLink[] = [
  {
    title: 'GitHub',
    url: 'https://github.com/kayoMichael',
    icon: <GitHub />,
    className: 'hover:text-current',
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/michael-li-72115222b/',
    icon: <LinkedIn />,
    className: 'hover:text-[#0A66C2]',
  },
];
