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
            "Built and improved a user-facing portal for JPNAP, the largest Internet Exchange Service in Japan, enhancing usability and accessibility for end users.",
            "Implemented and maintained database migrations and CRUD functionality using Ruby on Rails (ActiveRecord) and MySQL, ensuring reliable data integrity.",
            "Designed backend features following MVC principles, improving code maintainability and supporting future feature expansion.",
            "Developed responsive frontend components using AngularJS, TypeScript, and Bootstrap, delivering a smooth and intuitive user experience.",
            "Improved application performance and responsiveness by contributing to a Single Page Application (SPA) architecture and frontend caching strategies."
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
            name: 'RSpec',
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
        role: 'Part-Time Software Engineer',
        startDate: '2022-11',
        endDate: '2025-05',
        accomplishments: [
            "Contributed to a full-stack enterprise application for standardizing employee health workflows, using Nuxt.js, Vue.js, and TypeScript on the frontend and Java Spring Boot on the backend.",
            "Developed serverless REST API endpoints using AWS Lambda, Python, and Node.js to handle data ingestion, transformation, and persistence.",
            "Architected and implemented a serverless reporting pipeline using AWS Step Functions and Python, transforming user-submitted data into individualized PDF reports with dynamic charts and scoring logic.",
            "Implemented dynamic PDF layout logic using ReportLab, calculating spacing and pagination to support variable-length sections, comments, and category counts across customers.",
            "Contributed to backend infrastructure supporting real-time data processing, integrating with existing systems to improve reliability and performance.",
            "Participated in peer code reviews, providing feedback to maintain code quality, consistency, and engineering best practices.",
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
        role: 'Software Developer Intern',
        startDate: '2023-06',
        endDate: '2023-10',
        accomplishments: [
            "Contributed to the development of a customer-facing payment portal using React.js, Node.js, and Express, supporting payment flows across Stripe, Alipay, WeChat Pay, Weibo Pay, and PayPay.",
            "Implemented GraphQL schemas and queries to fetch and render data dynamically, enabling responsive UI updates across the application.",
            "Collaborated with designers, product managers, and engineers to integrate and deploy new features within an agile development process.",
            "Wrote and maintained end-to-end and component tests using Cypress and Storybook, identifying and resolving issues to improve reliability and user experience.",
            "Improved interaction responsiveness by implementing optimistic UI updates using React Query, reducing perceived latency by 35%.",
            "Reduced page load times by 20% introducing aggressive client-side caching with React Query, minimizing redundant network requests.",
            "Participated in code reviews, sprint ceremonies, and knowledge-sharing sessions, contributing to team alignment and code quality."
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
            url: 'https://autolingual.io/',
            location: 'Tokyo, Japan',
            workplaceType: 'On-Site',
            jobType: 'Internship',
        },
        role: 'Software Developer Intern',
        startDate: '2024-02',
        endDate: '2024-05',
        accomplishments: [
            "Developed a full-stack, AI website translation application using Next.js (App Router), React, TypeScript, Gemini API and Firebase.",
            "Improved page load times by 25% by separating static and dynamic content, leveraging Static Site Generation alongside server-side rendering for faster initial loads.",
            "Implemented user authentication and data storage using Firebase Authentication and Firestore, supporting secure access and reliable data persistence.",
            "Designed strongly typed Firestore document models to enforce type safety and data consistency within a schema-less database.",
            "Contributed to the development of an embeddable, CDN-hosted client script that scrapes page content, invokes AI-based translation services, and dynamically injects translated content back into customer websites.",
            "Cached translated content in Firestore to reduce repeated AI translation calls, lowering API costs and improving content load times.",
            "Integrated AI-driven translation using Google Gemini to support automated, on-demand website localization.",
            "Architected the application using a layered approach to separate concerns across presentation, business logic, and data access, improving maintainability and scalability.",
            "Collaborated with a senior engineer to design, build, and launch the MVP from scratch within a four-month term, rapidly shipping features using a single Next.js codebase with shared server and client logic.", 
            "Leveraged serverless tooling including Next.js App Router, NextAuth, Firebase, and Firestore to enable rapid development and deployment.", 
            "Maintained technical documentation using JSDoc to support onboarding, code clarity, and long-term maintainability."],
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
        role: 'Software Developer Intern',
        startDate: '2024-09',
        endDate: '2025-01',
        accomplishments: [
            "Developed a full-stack, AI-powered CVE analysis tool using Python, JavaScript, HTML, and Tailwind CSS to streamline vulnerability research, generating AI-assisted summaries and remediation suggestions using LLaMA 3.1–70B.",
            "Implemented bulk CVE data ingestion by scraping and aggregating information from NIST NVD and CVE Mitre sources for faster retrieval and analysis.",
            "Researched potential AI integrations and automation workflows for tools used by the Operations team, identifying opportunities to improve efficiency and reduce manual work.",
            "Built serverless automation using Azure AD app registrations and Microsoft Graph API to provision role-based SharePoint document permissions via OAuth 2.0 client credentials, enabling automated onboarding and access management.",
            "Performed manual testing from an end-user perspective to identify functional issues and potential cybersecurity vulnerabilities.",
            "Designed and implemented unit tests using C# (.NET Core, NUnit) and E2E tests using Selenium to validatecore workflows and improve reliability on important government websites.",
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
    }, {
        company: {
            name: 'Musashi',
            logo: '/logo/musashi-logo.png',
            url: 'https://musashiamericas.com/ai-project/',
            location: 'Waterloo, Canada',
            workplaceType: 'On-Site',
            jobType: 'Internship',
        },
        role: 'Full Stack Developer Intern',
        startDate: '2025-06',
        endDate: '2025-09',
        accomplishments: [
            "Contributed to the development of an AI-driven visual inspection system for vehicle components, supporting defect detection and quality assurance.",
            "Implemented event-driven, real-time updates using WebSockets and MongoDB Change Streams, enabling instant defect notifications and live visual feedback during inspections.",
            "Developed a full-stack analytics application using Vue.js, TypeScript, Python, FastAPI, and Docker to monitor inspection results, system performance, and historical accuracy metrics.",
            "Processed and analyzed AI inspection outputs to surface predictions, confidence scores, acceptance thresholds, and relevant quality metrics.",
            "Implemented reusable base CRUD routers to standardize API development and improve backend development efficiency.",
            "Collaborated with cross-functional teams to integrate software components and meet project timelines.",
            "Worked within an agile development process to manage tasks, iterate on features, and deliver milestones on schedule.",
            "Implemented integration tests using Postman and integrated them into the CI/CD pipeline using Newman CLI to improve release reliability.",
        ],
        stacks: [
            {
                name: 'Vue.js',
            },
            {
                name: 'JavaScript',
            },
            {
                name: 'TypeScript',
            },
            {
                name: 'MongoDB',
            },
            {
                name: 'Storybook',
            },
            {
                name: 'Jest',
            },
            {
                name: 'Python'
            },
            {
                name: 'CSS3',
            },
            {
                name: 'HTML5',
            },
            {
                name: 'GitLab',
            },
            {
                name: 'Docker'
            },
            {
                name: 'Postman',
            },
            {
                name: 'Cypress'
            }
        ],
    }, {
        company: {
            name: 'Opslevel',
            logo: '/logo/opslevel.jpg',
            url: 'https://www.opslevel.com/',
            location: 'Toronto, Canada',
            workplaceType: 'Hybrid',
            jobType: 'Internship',
        },
        role: 'Software Developer Intern',
        startDate: '2025-10',
        endDate: '2026-01',
        accomplishments: [
            "Contributed to the development of OpsLevel, a internal developer portal that enables engineering teams to manage and streamline their service and infrastructures.",
            "Built and maintained frontend features using Vue.js and JavaScript, improving usability and responsiveness across core product experiences.",
            "Implemented backend functionality in Ruby on Rails, designing and consuming GraphQL APIs to support new product features.",
            "Developed features for the flagship AI Maintenance Agent, enabling automated repository maintenance through AI-driven workflows.",
            "Integrated with third-party platforms including GitHub, GitLab, and Bitbucket to support AI-powered repository maintenance and improve onboarding flows.",
            "Investigated and hotfixed production issues reported by customers, prioritizing fixes to maintain platform stability and reliability.",
            "Wrote unit tests using RSpec and Jest to validate backend and frontend functionality and prevent regressions.",
            "Collaborated in an agile environment, participating in daily standups, code reviews, and sprint planning with cross-functional teams."
        ],
        stacks: [
            {
                name: 'Vue.js',
            },
            {
                name: 'JavaScript',
            },
            {
                name: 'Ruby',
            },
            {
                name: 'Ruby on Rails'
            },
            {
                name: 'GraphQL',
            },
            {
                name: 'CSS3',
            },
            {
                name: 'HTML5',
            },
            {
                name: "Jest",
            },
            {
                name: "RSpec",
            },
            {
                name: 'GitLab',
            },
            {
                name: "MySQL",
            },
            {
                name: 'Docker'
            },
        ],
    }
]