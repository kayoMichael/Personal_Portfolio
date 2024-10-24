export interface Project {
    title: string;
    description: string;
    date: string;
    image: string;
    url?: string;
    github: string;
    techStack: string[];
}

export const Projects: Project[] = [{
    title: 'Task Management App',
    description: 'A Full Stack Task Management App with CRUD operations, authentication, and authorization.',
    techStack: ['Next.js', 'React.js', 'TailwindCSS', 'TypeScript', "PlanetScale", "Prisma", "HTML5", "CSS3", "Shadcn-UI", "DaisyUI"],
    github: 'https://github.com/kayoMichael/VioletTrack',
    url: 'https://violet-five.vercel.app/',
    image: '/projects/track.png',
    date: '2023',
}, {
    title: "Premier League Web Scrapper and API",
    description: "A web scrapper that scrapes the premier league website for data and serves it as an API.",
    techStack: ["Python", "Flask", "Serverless Framework", "AWS", "AWS Lambda"],
    github: 'https://github.com/kayoMichael/premier_league',
    date: '2024',
    image: '/projects/premier-league.avif',
},{
    title: 'Portfolio Website',
    description: 'A responsive portfolio website built with Next.js and TailwindCSS.',
    techStack: ['Next.js', 'React.js', 'TailwindCSS', 'TypeScript', "HTML5", "CSS3", "Shadcn-UI", "FramerMotion"],
    github: 'https://github.com/kayoMichael/Personal_Portfolio',
    url: 'https://michael-li.vercel.app/',
    date: '2023',
    image: '/projects/portfolio.png',
}, {
    title: 'Game Display Website',
    description: "A Frontend Game Display Website built using the Rawg.IO API.",
    techStack: ['React.js', 'TypeScript', "HTML5", "CSS3", "ChakraUI"],
    github: 'https://github.com/kayoMichael/Game-Page',
    url: 'https://game-page-mocha.vercel.app/',
    date: '2023',
    image: '/projects/game-page.png',
}, {
    title: "Gym Landing Page",
    description: "A Gym Landing Page built with only vanilla CSS and HTML for educational purposes",
    techStack: ["HTML5", "CSS3"],
    github: 'https://github.com/kayoMichael/Workout-Land-page',
    url: "https://vanilla-workout.vercel.app/",
    date: '2022',
    image: '/projects/gym-landing.png'
}]

