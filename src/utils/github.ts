export type AccountType = 'personal' | 'work'

export interface GitHubAccount {
  username: string
  endpoint: string
  token?: string
  type: AccountType
  isActive: boolean
}

export interface ContributionCalendar {
  colors: string[]
  totalContributions: number
  months: Array<{
    firstDay: string
    name: string
    totalWeeks: number
  }>
  weeks: Array<{
    contributionDays: Array<{
      color: string
      contributionCount: number
      date: string
    }>
    firstDay: string
  }>
}

export interface GitHubUserContributionsCollection {
  contributionsCollection: {
    contributionCalendar: ContributionCalendar
  }
}

export interface GitHubUserContributionsResponse {
  data?: {
    user?: GitHubUserContributionsCollection
  }
}