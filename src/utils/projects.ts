export interface Project {
    title: string;
    description: string;
    date: string;
    image: string;
    url: string;
    github: string;
    techStack: string[];
}

export const Projects: Project[] = [{
    title: 'Task Management App',
    description: 'A Full Stack Task Management App with CRUD operations, authentication, and authorization.',
    techStack: ['Next.js', 'TailwindCSS', 'TypeScript', "PlanetScale", "Prisma", "HTML5", "CSS3", "Shadcn-UI", "DaisyUI"],
    github: 'https://github.com/kayoMichael/VioletTrack',
    url: 'https://violet-five.vercel.app/',
    image: '/projects/track.png',
    date: '2023',
}, {
    title: 'Portfolio Website',
    description: 'A responsive portfolio website built with Next.js and TailwindCSS.',
    techStack: ['Next.js', 'TailwindCSS', 'TypeScript', "HTML5", "CSS3", "Shadcn-UI", "FramerMotion"],
    github: 'https://github.com/kayoMichael/Personal_Portfolio',
    url: 'https://michael-li.vercel.app/',
    date: '2023',
    image: '/projects/portfolio.png',
}, {
    title: 'Game Display Website',
    description: "A Frontend Game Display Website built using the Rawg.IO API.",
    techStack: ['ReactJS', 'TypeScript', "HTML5", "CSS3", "ChakraUI"],
    github: '',
    url: 'https://game-page-mocha.vercel.app/',
    date: '2023',
    image: '/projects/game-page.png',
}]

