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
    techStack: ['Next.js', 'TailwindCSS', 'TypeScript', "PlanetScale", "Prisma", "HTML5", "CSS3"],
    github: 'https://github.com/kayoMichael/VioletTrack',
    url: 'https://violet-five.vercel.app/',
    image: '/projects/track.png',
    date: '2023',
}, {
    title: 'Portfolio Website',
    description: 'A responsive portfolio website built with Next.js and TailwindCSS.',
    techStack: ['Next.js', 'TailwindCSS', 'TypeScript', "HTML5", "CSS3"],
    github: 'https://github.com/kayoMichael/Personal_Portfolio',
    url: 'https://michael-li.vercel.app/',
    date: '2023',
    image: '/projects/portfolio.png',
}]

