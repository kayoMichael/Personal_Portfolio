import {
  ShapesIcon,
  LayoutDashboardIcon,
  BookOpenText,
  AtSign,
} from 'lucide-react';

import {
  GitHub,
  LeetCode,
  LinkedIn,
  WakaTime,
} from '@/src/components/icons/icons';

interface NavLink {
  path: string;
  labelKey: string;
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
    labelKey: 'projects',
    icon: <ShapesIcon className='size-5' />,
  },
  {
    path: ROUTES.dashboard,
    labelKey: 'home',
    icon: <LayoutDashboardIcon className='size-5' />,
  },
  {
    path: ROUTES.experience,
    labelKey: 'workExperience',
    icon: <BookOpenText className='size-5' />,
  },
  {
    path: ROUTES.code,
    labelKey: 'codingStats',
    icon: <AtSign className='size-5' />,
  },
];

export const FOOTER_LINKS_KEYS = [
  [
    {
      titleKey: 'codingStats',
      url: ROUTES.code,
    },
    {
      titleKey: 'home',
      url: ROUTES.dashboard,
    },
  ],
  [
    {
      titleKey: 'projects',
      url: ROUTES.projects,
    },
    {
      titleKey: 'experience',
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
  {
    title: 'LeetCode',
    url: 'https://leetcode.com/u/kayoMichael/',
    icon: <LeetCode />,
    className: 'group text-gray-400',
  },
  {
    title: 'WakaTime',
    url: 'https://wakatime.com/@ff7a628d-e3ce-4703-b2b1-90de73b20dca',
    icon: <WakaTime />,
    className: 'hover:text-black',
  },
];
