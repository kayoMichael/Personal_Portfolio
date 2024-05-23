interface Company {
  name: string
  logo: string
  url: string
  location: string
  workplaceType: 'Remote' | 'On-Site'
  jobType: 'Internship' | 'Freelance'
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
            "Fullstack intern developing a portal site for an Internet Exchange Service.",
            "Constructed Migration Files and Performed CRUD operations using Active Record and MySQL.",
            "Utilized MVC principles and Ruby on Rails for backend development, prioritizing the creation of maintainable and scalable code.",
            "Utilized AngularJS, Typescript and Bootstrap to develop front end pages with caching, no refresh rendering.",
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
    ]
    }
]