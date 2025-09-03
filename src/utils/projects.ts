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
    title: 'Generative AI Image Store',
    description: 'An Open Marketplace for AI Generated Images built with the MERN stack and Deployed on Google Cloud.',
    techStack: ['React.js', 'Node.js', 'ExpressJS', 'MongoDB', 'Docker', 'TailwindCSS', 'TypeScript', 'HTML5', 'CSS3', 'Shadcn-UI'],
    github: 'https://github.com/kayoMichael/AI-JPG-Store',
    url: 'https://ai-img-store-979936343537.northamerica-northeast2.run.app/',
    image: '/projects/MERNApp.png',
    date: '2025',
}, {
    title: "Python Library for Analytical Soccer Data",
    description: "A Python Package that allows users to fetch advanced soccer statistics and data and expose it as an API or create Machine Learning Datasets.",
    techStack: ["Python", "Flask", "Serverless Framework", "AWS", "AWS Lambda"],
    github: 'https://github.com/kayoMichael/premier_league',
    url: 'https://pypi.org/project/premier-league/',
    date: '2024',
    image: '/projects/premier-league.avif',
},{
    title: 'Full Stack AI CVE Analysis APP',
    description: 'An AI Powered CVE Analysis that allows users to bulk search and analyze CVEs without gettting rate limited.',
    techStack: ['JavaScript', 'Python', 'TailwindCSS', "HTML5"],
    github: 'https://github.com/kayoMichael/CVE',
    image: '/projects/CVE-analysis.png',
    date: '2024',
},
{
    title: 'Neural Network to predict outcomes of professional Soccer Matches',
    description: "A Neural Network built with Pytorch to classify professional soccer matches",
    techStack: ["Python", "Pytorch", "Numpy", "Scikit-Learn"],
    github: 'https://github.com/kayoMichael/Premier_League_Predictions',
    image: '/projects/NeuralNetwork.jpg',
    date: '2025',
},
{
    title: 'Multiple Linear Regression Model',
    description: "A complete multiple linear regression analysis of teen gambling behavior in Britain, using the teengamb dataset",
    techStack: ["R"],
    github: 'https://github.com/kayoMichael/Linear-Regression-Analysis',
    image: '/projects/linear-regression.png',
    date: '2025',
},
{
    title: 'Task Management App',
    description: 'A Full Stack Task Management App with CRUD operations, authentication, and authorization.',
    techStack: ['Next.js', 'React.js', 'TailwindCSS', 'TypeScript', "PlanetScale", "Prisma", "HTML5", "CSS3", "Shadcn-UI", "DaisyUI"],
    github: 'https://github.com/kayoMichael/VioletTrack',
    url: 'https://violet-five.vercel.app/',
    image: '/projects/track.png',
    date: '2023',
},
{
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

