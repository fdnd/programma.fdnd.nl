export const headersGitHub = {
    authorization: 'token ' + import.meta.env.VITE_GITHUB_PERSONAL_ACCESS_TOKEN
}
export function getQueryTasks(slug) {
    return `{
      search(first: 100, type: REPOSITORY, query: "topic:${slug} org:fdnd-task") {
        pageInfo {
          hasNextPage
          endCursor
        }
        repos: edges {
          repo: node {
            ... on Repository {
              name
              description
              url
              forkCount
              forks(orderBy: {field: STARGAZERS, direction: DESC}, first: 100) {
                nodes {
                  stargazerCount
                  name
                  owner {
                    id
                    login
                    url
                    avatarUrl
                  }
                  homepageUrl
                }
              }
              repositoryTopics(first: 100) {
                edges {
                  node {
                    topic {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }`
}