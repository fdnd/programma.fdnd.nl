import { client }     from '$lib/utils/client'
import getQuerySprint from '$lib/queries/sprint'
import {headersGitHub, getQueryTasks}  from '$lib/queries/tasks'

export const load= async ({ params }) => {
	const querySprint = getQuerySprint(params.slug)
  const queryTasks  = getQueryTasks(params.slug)

	const dataSprint = await client({ query: querySprint, variables: { slug: params.slug }, fetch: fetch, endpoint: import.meta.env.VITE_HYPGRAPH_ENDPOINT })
  const dataTasks  = await client({ query: queryTasks, variables: { slug: params.slug }, fetch: fetch, endpoint: import.meta.env.VITE_GITHUB_ENDPOINT, headers: headersGitHub })

  const tasks = clean(dataTasks)

  return { ...dataSprint.sprint, tasks:tasks }
}

function clean(dataTasks){
  return dataTasks.search.repos.map(task => {
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
}