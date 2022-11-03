import { client } from '$lib/utils/client'

export const load= async ({ params }) => {
	const querySprint = `
    query Sprint {
        sprint(where: {slug: "${params.slug}"}) {
          slug
          sprintNumber
          title
          startdate
          content {
            html
          }
          criteria {
            html
          }
          weekPlans {
            weekNumber
            mondayDate
            monday {
              html
            }
            tuesdayDate
            tuesday {
              html
            }
            wednesdayDate
            wednesday {
              html
            }
            thursdayDate
            thursday {
              html
            }
            fridayDate
            friday {
              html
            }
          }
          
        }
    }`

  const headersGitHub = {
    authorization: 'token ' + import.meta.env.VITE_GITHUB_PERSONAL_ACCESS_TOKEN
  }

  const queryTasks = `
    query Tasks {
      search(first: 100, type: REPOSITORY, query: "topic:${params.slug} org:fdnd-task") {
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

	const dataSprint = await client({ query:querySprint, variables: { slug: params.slug }, fetch: fetch, endpoint: import.meta.env.VITE_HYPGRAPH_ENDPOINT })
  const dataTasks = await client({ query:queryTasks, variables: { slug: params.slug }, fetch: fetch, endpoint: import.meta.env.VITE_GITHUB_ENDPOINT, headers: headersGitHub })

  const tasks = dataTasks.search.repos.map(task => {
    const topics = task.repo.repositoryTopics.edges
                          .map(topic => topic.node.topic.name)
                          .filter(topic => topic == 'task' || topic == 'subtask')
        
    return {
      name: task.repo.name,
      description:task.repo.description,
      url:task.repo.url,
      forks:task.repo.forkCount,
      topic:topics[0]
    }
  })

  return { ...dataSprint.sprint, tasks:tasks }
};