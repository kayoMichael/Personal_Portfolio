import type {
  GitHubUserContributionsCollection,
  GitHubUserContributionsResponse,
} from '@/src/utils/github'

const GITHUB_USER_API_URL = `https://api.github.com/users/kayoMichael`
const GITHUB_USER_GRAPHQL_URL = 'https://api.github.com/graphql'
const PERSONAL_ACCESS_TOKEN = process.env.GITHUB_PERSONAL_ACCESS_TOKEN

const GITHUB_USER_QUERY = `query($username: String!) {
  user(login: $username) {
    contributionsCollection {
      contributionCalendar {
        colors
        totalContributions
        months {
          firstDay
          name
          totalWeeks
        }
        weeks {
          contributionDays {
            color
            contributionCount
            date
          }
          firstDay
        }
      }
    }
  }
}`

export const getGitHubUser = async (): Promise<{ followers: number, public_repos: number }> => {
  const data = await fetch(GITHUB_USER_API_URL, {
    headers: {
      Authorization: `Bearer ${PERSONAL_ACCESS_TOKEN}`,
    },
    next: { revalidate: 600 },
  }).then(async (res) => await res.json())
  return data;
}

export const getContributions = async (): Promise<
  GitHubUserContributionsCollection | undefined
> => {
  const response = await fetch(
    GITHUB_USER_GRAPHQL_URL,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${PERSONAL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        query: GITHUB_USER_QUERY,
        variables: {
          username: 'kayoMichael',
        },
      }),
    },
  ).then(async (res) => await res.json()) as GitHubUserContributionsResponse

  return response?.data?.user
}