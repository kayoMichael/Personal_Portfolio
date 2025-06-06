import {
  AngularJS,
  Bootstrap,
  ChakraUI,
  CSS3,
  DaisyUI,
  FramerMotion,
  Git,
  HTML5,
  JavaScript,
  Jest,
  MySQL,
  NextJs,
  NodeJS,
  PlanetScale,
  PostMan,
  Prisma,
  Python,
  ReactJs,
  Redis,
  Ruby,
  RubyOnRails,
  ShadcnUI,
  Spring,
  TailwindCss,
  TypeScript,
  VueJs,
  AWSColor,
  AWSAurora,
  Cypress,
  StoryBook,
  GraphQL,
  ExpressJS,
  Firebase,
  Serverless,
  Dotnet,
  CSharp,
  Selenium,
  Nunit,
  Flask,
  Lambda,
  NuxtJS,
  Docker,
  MongoDB,
  R,
  GitLab,
  Pytorch,
  Numpy,
  ScikitLearn,
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
  Prisma: <Prisma className={cn('fill-[#2D3748] dark:fill-white')} />,
  PlanetScale: <PlanetScale className={cn('fill-black dark:fill-white')} />,
  Jest: <Jest className={cn('fill-[#C21325]')} />,
  Git: <Git className={cn('fill-[#F05032]')} />,
  Redis: <Redis className={cn('fill-[#DC382D]')} />,
  HTML5: <HTML5 className={cn('fill-[#E34F26]')} />,
  CSS3: <CSS3 className={cn('fill-[#1572B6]')} />,
  AWS: <AWSColor />,
  'Shadcn-UI': <ShadcnUI />,
  DaisyUI: <DaisyUI />,
  ChakraUI: <ChakraUI />,
  FramerMotion: <FramerMotion />,
  'Ruby on Rails': <RubyOnRails />,
  Ruby: <Ruby />,
  'Angular.js': <AngularJS />,
  MySQL: <MySQL />,
  'Node.js': <NodeJS />,
  Postman: <PostMan />,
  Python: <Python className={cn('fill-[#3776AB]')} />,
  'Amazon Aurora': <AWSAurora />,
  Cypress: <Cypress />,
  Storybook: <StoryBook />,
  GraphQL: <GraphQL />,
  ExpressJS: <ExpressJS />,
  Firebase: <Firebase />,
  ShadcnUI: <ShadcnUI />,
  'Serverless Framework': <Serverless />,
  '.Net': <Dotnet />,
  'C#': <CSharp />,
  Selenium: <Selenium />,
  Nunit: <Nunit />,
  Flask: <Flask />,
  'AWS Lambda': <Lambda />,
  NuxtJS: <NuxtJS />,
  Docker: <Docker />,
  MongoDB: <MongoDB />,
  R: <R />,
  GitLab: <GitLab />,
  Pytorch: <Pytorch />,
  Numpy: <Numpy />,
  'Scikit-Learn': <ScikitLearn />,
};
