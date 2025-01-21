interface Company {
  name: string
  logo: string
  url: string
  location: string
  workplaceType: 'Remote' | 'On-Site' | 'Hybrid'
  jobType: 'Internship' | 'Freelance' | 'Internship (4 month) -> Freelance'
}

interface Stack {
  name: string
  icon?: JSX.Element
}

interface Experience {
  company: Company
  role: string
  startDate: string
  endDate: string | null
  stacks: Stack[]
  accomplishments: string[]
}
export const ExperienceList: Experience[] = [
    {
        company: {
        name: 'Weseek',
        logo: '/logo/weseek.png',
        url: 'https://weseek.co.jp/en/',
        location: 'Tokyo, Japan',
        workplaceType: 'On-Site',
        jobType: 'Internship',
        },
        role: 'Software Engineer Intern',
        startDate: '2022-06',
        endDate: '2022-10',
        accomplishments: [
            "Spearheaded the development of a user-friendly portal site for an Internet Exchange Service as a Software Engineer Intern, enhancing user experience and accessibility.",
            "Managed Migration Files and executed CRUD (Create, Read, Update, Delete) operations using Active Record and MySQL, ensuring seamless data management and integrity.",
            "Leveraged MVC (Model-View-Controller) principles and Ruby on Rails framework to architect a robust backend system, prioritizing code maintainability and scalability for future iterations.",
            "Contributed to frontend development using, AngularJS, Typescript, and Bootstrap to craft Responsive front-end pages, incorporating caching mechanisms for efficient rendering and a seamless user interaction experience.",
            "Ensured optimal performance by adopting a no-refresh rendering approach, enhancing the overall usability of the portal site."
        ],
        stacks: [
        {
            name: 'Angular.js',
        },
        {
            name: 'TypeScript',
        },
        {
            name: 'JavaScript',
        },
        {
            name: 'HTML5',
        },
        {
            name: 'CSS3',
        },
        {
            name: 'Bootstrap',
        },
        {
            name: 'Ruby',
        },
        {
            name: 'Ruby on Rails',
        },
        {
            name: 'MySQL',
        }
    ],
    },
    {
        company: {
            name: 'Everforth ltd.',
            logo: '/logo/everforth.jpg',
            url: 'https://everforth.co.jp/',
            location: 'Tokyo, Japan',
            workplaceType: 'Remote',
            jobType: 'Freelance',
        },
        role: 'Full Stack Engineer',
        startDate: '2022-11',
        endDate: null,
        accomplishments: [
            "Part of the Development team as a backend engineer for a Serverless SaaS Mobile Application, outsourced from Kao Inc., one of the largest cosmetic companies in Japan.",
            "Developed multiple RESTful API endpoints utilizing AWS Lambda, Python, and Node.js to efficiently manage data manipulation and storage tasks.",
            "Currently spearheading the development of a multi-step form processing system leveraging AWS Step Functions and Amazon Aurora. This system is designed to manage user information, extract valuable insights, and store data in a relational database.",
            "Built scalable infrastructure for real-time data processing and analysis, ensuring seamless integration with existing systems and optimizing performance.",
            "Implemented robust security measures and compliance standards, safeguarding sensitive user data and ensuring regulatory compliance with industry standards.",
            "Actively participated in code reviews, providing valuable feedback and ensuring adherence to coding standards, best practices, and quality assurance.",
            "Developing a Full Stack Application utilizing Nuxt.JS in the frontend and Java Spring in the backend",
            "Replacing Existing AWS Lambda Applications to Java Spring Applications to improve flexibility and a more robust backend system."
        ],
        stacks: [
            {
                name: 'Python',
            },
            {
                name: 'AWS',
            },
            {
                name: "Serverless Framework"
            },
            {
                name: "Amazon Aurora"
            },
            {
                name: 'Postman',
            },
            {
                name: 'Node.js',
            },
            {
                name: 'TypeScript',
            },
            {
                name: "JavaScript"
            },
            {
                name: "Jest"
            },
            {
                name: "Spring"
            },
            {
                name: "Vue.js"
            },
            {
                name: "NuxtJS"
            },
            {
                name: "HTML5"
            },
            {
                name: "CSS3"
            }
        ]

    },
    {
        company: {
            name: 'Kaima Data Inc.',
            logo: '/logo/kaima.png',
            url: 'https://www.kaimadata.co.jp',
            location: 'Tokyo, Japan',
            workplaceType: 'Remote',
            jobType: 'Internship',
        },
        role: 'Software Engineer Intern',
        startDate: '2023-06',
        endDate: '2023-10',
        accomplishments: [
            "Contributed to the development of the company's payment portal, utilizing React.js, Node.js and Express to craft a seamless and intuitive payment interface for customers.",
            "Implemented GraphQl models and queries to fetch and display data dynamically, enhancing user experiences with real-time updates and responsive web applications.",
            "Worked closely with multidisciplinary teams, collaborating with designers, product managers, and software developers to seamlessly integrate and deploy new features.",
            "Conducted comprehensive testing and debugging procedures using Cypress and Storybook, identifying and rectifying issues promptly to ensure optimal performance and user satisfaction.",
            "Implemented performance optimizations to enhance the speed and efficiency of the payment portal, resulting in improved user experience and customer satisfaction.",
            "Participated in regular code reviews, knowledge-sharing sessions and scrum sessions, fostering a collaborative environment and facilitating continuous learning and growth among team members."
        ],
        stacks: [
            {
                name: 'React.js',
            },
            {
                name: 'Node.js',
            },
            {
                name: 'ExpressJS',
            },
            {
                name: 'TypeScript',
            },
            {
                name: 'JavaScript',
            },
            {
                name: "HTML5",
            },
            {
                name: "CSS3"
            },
            {
                name: 'Bootstrap',
            },
            {
                name: 'GraphQL',
            },
            {
                name: 'Cypress',
            },
            {
                name: 'Storybook',
            },
        ]

    },
     {
        company: {
            name: 'Enju Inc.',
            logo: '/logo/enju_inc.png',
            url: 'https://enju-corporate.studio.site/',
            location: 'Tokyo, Japan',
            workplaceType: 'On-Site',
            jobType: 'Internship',
        },
        role: 'Software Engineer Intern',
        startDate: '2024-02',
        endDate: '2024-08',
        accomplishments: [
            "Developing a Full Stack Website Tag Translation SaaS Application, leveraging Next.js App Router, React.js, TypeScript, and Firebase.",
            "Utilized Firebase Authentication and Firestore to manage user authentication and data storage, ensuring data security and integrity.",
            "Designed Firestore Document types to ensure typesafety and data integrity for a schema-less database.",
            "Implemented a Layers Architecture Approach to separate concerns and ensure code maintainability and scalability.",
            "Utilised Next.JS Server Actions to handle mutations on the Server and utilized React 19 useOptimistic and useTransition hook to optimistically update the UI.",
            "Adhered to an agile methodology for the software development process due to the constraint of budget, time and personel.",
            "Maintained and updated documentation for the software development process using JSDoc format.",],
        stacks: [
            {
                name: 'Next.js',
            },
            {
                name: 'React.js',
            },
            {
                name: 'TypeScript',
            },
            {
                name: 'JavaScript',
            },
            {
                name: "Firebase",
            },
            {
                name: "TailwindCSS"
            },
            {
                name: 'HTML5',
            },
            {
                name: 'CSS3',
            },
            {
                name: "ShadcnUI"
            }
        ]

    }, {
        company: {
            name: 'Ontario Ministry of Education',
            logo: "/logo/ministry_of_education.jpg",
            url: 'https://www.ontario.ca/page/ministry-education',
            location: 'Toronto, Canada',
            workplaceType: 'Hybrid',
            jobType: 'Internship',
        },
        role: '.Net Developer',
        startDate: '2024-09',
        endDate: '2024-12',
        accomplishments: [
            "Developed E2E Test automation scripts using Selenium for Various web applications of the Ministry of Education, ensuring the quality and reliability of the software products.",
            "Identified important areas to be tested and Developed unit tests using Nunit and C# to ensure that the product was functioning as intended.",
            "Researched potential AI integrations and automation workflows in current products used by the Operations team at the Ministry of Education.",
            "Developed a Full Stack AI powered CVE Analysis Tool using Python, Javascript, HTML and Tailwind CSS to streamline the process of finding information of Common Vulnerabilities and Exposures (CVE) utilizing llama 3.1-70b for AI Suggestions and Scrapping NIST NVD/CVE Mitre for bulk information retrieval without being rate limited.",
            "Throughly manually tested software products from the user perspective to identify pootential issues and cyber security vulnerabilities.",
            "Developed Power Automate Workflows to automate Role Based User Access Management for the Ministry of Education.",
        ],
        stacks: [
            {
                name: '.Net',
            },
            {
                name: 'C#',
            },
            {
                name: 'Selenium',
            },
            {
                name: 'Nunit',
            },
            {
                name: 'JavaScript',
            },
            {
                name: 'Python',
            },
            {
                name: 'HTML5',
            },
            {
                name: 'CSS3',
            },
            {
                name: 'TailwindCSS',
            },
        ]
    }
]