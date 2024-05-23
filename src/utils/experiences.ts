interface Company {
  name: string
  logo: string
  url: string
  location: string
  workplaceType: 'Remote' | 'On-Site'
  jobType: 'Internship' | 'Freelance' | 'Internship -> Freelance'
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
        startDate: '2021-06',
        endDate: '2021-10',
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
        role: 'Backend Engineer',
        startDate: '2021-11',
        endDate: null,
        accomplishments: [
            "Part of the Development team as a backend engineer for a Serverless SaaS Mobile Application, outsourced from Kao Inc., one of the largest cosmetic companies in Japan.",
            "Developed multiple RESTful API endpoints utilizing AWS Lambda, Python, and Node.js to efficiently manage data manipulation and storage tasks.",
            "Currently spearheading the development of a multi-step form processing system leveraging AWS Step Functions and Amazon Aurora. This system is designed to manage user information, extract valuable insights, and store data in a relational database.",
            "Built scalable infrastructure for real-time data processing and analysis, ensuring seamless integration with existing systems and optimizing performance.",
            "Implemented robust security measures and compliance standards, safeguarding sensitive user data and ensuring regulatory compliance with industry standards.",
            "Actively participated in code reviews, providing valuable feedback and ensuring adherence to coding standards, best practices, and quality assurance."
        ],
        stacks: [
            {
                name: 'Python',
            },
            {
                name: 'AWS',
            },
            {
                name: "AWS Aurora DB"
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
        startDate: '2022-06',
        endDate: '2022-10',
        accomplishments: [
            "Contributed to the development of the company's payment portal, leveraging React.js and Bootstrap to create a user-friendly and efficient payment experience for customers.",
            "Proficiently leveraged asynchronous API calls to fetch and process data, dynamically presenting information on the frontend, enhancing user experiences with real-time updates and responsive web applications",
            "Collaborated closely with cross-functional teams, including designers, product managers, and stakeholders to ensure seamless integration and implementation of new features.",
            "Conducted thorough testing and debugging to identify and resolve issues, ensuring optimal functionality and user experience.",
            
        ],
        stacks: [
            {
                name: 'Ruby',
            },
            {
                name: 'Ruby on Rails',
            },
            {
                name: 'Postman',
            },
            {
                name: 'MySQL',
            }
        ]

    },
     {
        company: {
            name: 'Enju Inc.',
            logo: '/logo/enju_inc.png',
            url: 'https://enju-corporate.studio.site/',
            location: 'Tokyo, Japan',
            workplaceType: 'On-Site',
            jobType: 'Internship -> Freelance',
        },
        role: 'Software Engineer Intern -> Freelance Software Engineer',
        startDate: '2024-02',
        endDate: null,
        accomplishments: [
            "Contributed to the development of the company's payment portal, leveraging Vue.js and Bootstrap to create a user-friendly and efficient payment experience for customers.",
            "Proficiently leveraged asynchronous API calls to fetch and process data, dynamically presenting information on the frontend, enhancing user experiences with real-time updates and responsive web applications",
        ],
        stacks: [
            {
                name: 'Ruby',
            },
            {
                name: 'Ruby on Rails',
            },
            {
                name: 'Postman',
            },
            {
                name: 'MySQL',
            }
        ]

    }
]