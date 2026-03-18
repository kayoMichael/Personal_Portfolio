export interface Project {
    key: string;
    date: string;
    image: string;
    url?: string;
    github: string;
    techStack: string[];
}

export const Projects: Project[] = [{
    key: 'aiJpgStore',
    techStack: ['React.js', 'Node.js', 'ExpressJS', 'MongoDB', 'Docker', 'TailwindCSS', 'TypeScript', 'HTML5', 'CSS3', 'Shadcn-UI'],
    github: 'https://github.com/kayoMichael/AI-JPG-Store',
    url: 'https://ai-img-store-979936343537.northamerica-northeast2.run.app/',
    image: '/projects/MERNApp.png',
    date: '2025',
}, {
    key: 'premierLeague',
    techStack: ["Python", "Flask", "Serverless Framework", "AWS", "AWS Lambda"],
    github: 'https://github.com/kayoMichael/premier_league',
    url: 'https://pypi.org/project/premier-league/',
    date: '2024',
    image: '/projects/premier-league.avif',
},{
    key: 'chess',
    techStack: ["C++"],
    github: "https://github.com/kayoMichael/chess",
    date: '2026',
    image: '/projects/chess.png'
},
{
    key: 'cve',
    techStack: ['JavaScript', 'Python', 'TailwindCSS', "HTML5"],
    github: 'https://github.com/kayoMichael/CVE',
    image: '/projects/CVE-analysis.png',
    date: '2024',
},
{
    key: 'baseballMcp',
    techStack: ['Python'],
    github: 'https://github.com/kayoMichael/bowman-prospects-mcp',
    image: '/projects/baseball-mcp.png',
    date: '2025'
},
{
    key: 'neuralNetwork',
    techStack: ["Python", "Pytorch", "Numpy", "Scikit-Learn"],
    github: 'https://github.com/kayoMichael/Premier_League_Predictions',
    image: '/projects/NeuralNetwork.jpg',
    date: '2025',
},
{
    key: 'linearRegression',
    techStack: ["R"],
    github: 'https://github.com/kayoMichael/Linear-Regression-Analysis',
    image: '/projects/linear-regression.png',
    date: '2025',
},
{
    key: 'taskManagement',
    techStack: ['Next.js', 'React.js', 'TailwindCSS', 'TypeScript', "PlanetScale", "Prisma", "HTML5", "CSS3", "Shadcn-UI", "DaisyUI"],
    github: 'https://github.com/kayoMichael/VioletTrack',
    url: 'https://violet-five.vercel.app/',
    image: '/projects/track.png',
    date: '2023',
},
{
    key: 'portfolio',
    techStack: ['Next.js', 'React.js', 'TailwindCSS', 'TypeScript', "HTML5", "CSS3", "Shadcn-UI", "FramerMotion"],
    github: 'https://github.com/kayoMichael/Personal_Portfolio',
    url: 'https://michael-li.vercel.app/',
    date: '2023',
    image: '/projects/portfolio.png',
}, {
    key: 'gamePage',
    techStack: ['React.js', 'TypeScript', "HTML5", "CSS3", "ChakraUI"],
    github: 'https://github.com/kayoMichael/Game-Page',
    url: 'https://game-page-mocha.vercel.app/',
    date: '2023',
    image: '/projects/game-page.png',
}, {
    key: 'gymLanding',
    techStack: ["HTML5", "CSS3"],
    github: 'https://github.com/kayoMichael/Workout-Land-page',
    url: "https://vanilla-workout.vercel.app/",
    date: '2022',
    image: '/projects/gym-landing.png'
}]
