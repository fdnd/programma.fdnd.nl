export const headersGitHub = {
    authorization: 'token ' + import.meta.env.VITE_GITHUB_PERSONAL_ACCESS_TOKEN
}

export function getQueryTasks(slug) {
    return `
    query Tasks {
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