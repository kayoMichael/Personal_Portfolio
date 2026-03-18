interface Company {
  name: string
  logo: string
  url: string
}

interface Stack {
  name: string
  icon?: JSX.Element
}

interface Experience {
  key: string
  company: Company
  startDate: string
  endDate: string | null
  stacks: Stack[]
  accomplishmentCount: number
}
export const ExperienceList: Experience[] = [
    {
        key: 'weseek',
        company: {
        name: 'Weseek',
        logo: '/logo/weseek.png',
        url: 'https://weseek.co.jp/en/',
        },
        startDate: '2022-06',
        endDate: '2022-10',
        accomplishmentCount: 5,
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
        key: 'everforth',
        company: {
            name: 'Everforth ltd.',
            logo: '/logo/everforth.jpg',
            url: 'https://everforth.co.jp/',
        },
        startDate: '2022-11',
        endDate: '2025-05',
        accomplishmentCount: 6,
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
        key: 'kaima',
        company: {
            name: 'Kaima Data Inc.',
            logo: '/logo/kaima.png',
            url: 'https://www.kaimadata.co.jp',
        },
        startDate: '2023-06',
        endDate: '2023-10',
        accomplishmentCount: 7,
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
        key: 'enju',
        company: {
            name: 'Enju Inc.',
            logo: '/logo/enju_inc.png',
            url: 'https://autolingual.io/',
        },
        startDate: '2024-02',
        endDate: '2024-05',
        accomplishmentCount: 11,
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
        key: 'ontario',
        company: {
            name: 'Ontario Ministry of Education',
            logo: "/logo/ministry_of_education.jpg",
            url: 'https://www.ontario.ca/page/ministry-education',
        },
        startDate: '2024-09',
        endDate: '2025-01',
        accomplishmentCount: 6,
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
        key: 'musashi',
        company: {
            name: 'Musashi',
            logo: '/logo/musashi-logo.png',
            url: 'https://musashiamericas.com/ai-project/',
        },
        startDate: '2025-06',
        endDate: '2025-09',
        accomplishmentCount: 8,
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
        key: 'opslevel',
        company: {
            name: 'Opslevel',
            logo: '/logo/opslevel.jpg',
            url: 'https://www.opslevel.com/',
        },
        startDate: '2025-10',
        endDate: '2026-01',
        accomplishmentCount: 8,
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
