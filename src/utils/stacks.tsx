import {
  Bootstrap,
  CSS3,
  Git,
  HTML5,
  JavaScript,
  Jest,
  Markdown,
  NextJs,
  PlanetScale,
  Prisma,
  ReactJs,
  Redis,
  Spring,
  TailwindCss,
  TypeScript,
  VueJs,
} from '@/src/components/icons/icons';
import { cn } from '@/src/utils/cn';

type StackProps = Record<string, JSX.Element>;

export const STACKS: StackProps = {
  TypeScript: <TypeScript className={cn('fill-[#3178C6]')} />,
  JavaScript: <JavaScript className={cn('fill-[#F7DF1E]')} />,
  'Next.js': <NextJs className={cn('fill-black dark:fill-white')} />,
  'React.js': <ReactJs className={cn('fill-[#61DAFB]')} />,
  'Vue.js': <VueJs className={cn('fill-[#4FC08D]')} />,
  Spring: <Spring className={cn('fill-[#6DB33F]')} />,
  TailwindCSS: <TailwindCss className={cn('fill-[#06B6D4]')} />,
  Bootstrap: <Bootstrap className={cn('fill-[#7952B3]')} />,
  Markdown: <Markdown className={cn('fill-black dark:fill-white')} />,
  Prisma: <Prisma className={cn('fill-[#2D3748] dark:fill-white')} />,
  PlanetScale: <PlanetScale className={cn('fill-black dark:fill-white')} />,
  Jest: <Jest className={cn('fill-[#C21325]')} />,
  Git: <Git className={cn('fill-[#F05032]')} />,
  Redis: <Redis className={cn('fill-[#DC382D]')} />,
  HTML5: <HTML5 className={cn('fill-[#E34F26]')} />,
  CSS3: <CSS3 className={cn('fill-[#1572B6]')} />,
};
