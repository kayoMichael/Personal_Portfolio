export interface Project {
    name: string;
    description: string;
    date: string;
    image: string;
    url: string;
    githubLink: string;
    techStack: Array<{ title: string; colorClass: string; icon: JSX.Element }>;
}

export const Projects = [{
    title: 'Portfolio',
    description: 'Personal portfolio website built with Next.js and Tailwind CSS.',
    techStack: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    github: 'https://github.com/kayoMichael/VioletTrack',
    url: 'https://violet-five.vercel.app/',
    image: '/projects/track.png',
    date: '2023',
}]

