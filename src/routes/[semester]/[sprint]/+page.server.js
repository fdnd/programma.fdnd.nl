import { client }     from '$lib/utils/client'
import getQuerySprint from '$lib/queries/sprint'
import getQuerySprintNavigation from '$lib/queries/sprintNavigation'
import { headersGitHub, getQueryTasks }  from '$lib/queries/tasks'

let prefix

export const load = async ({params: {sprint}}) => {
    prefix = sprint

    const querySprint = getQuerySprint(sprint)
    const queryTasks  = getQueryTasks(sprint)

    const dataSprint = await client({ query: querySprint, variables: { slug: sprint }, fetch: fetch, endpoint: import.meta.env.VITE_HYPGRAPH_ENDPOINT })
    const dataTasks  = await client({ query: queryTasks, variables: { slug: sprint }, fetch: fetch, endpoint: import.meta.env.VITE_GITHUB_ENDPOINT, headers: headersGitHub })
    
    const sprintNumber = dataSprint.sprint.sprintNumber

    const { prevSprint, nextSprint } = await getSprintNavigation(sprintNumber)

    dataSprint.sprint.prevSprint = prevSprint
    dataSprint.sprint.nextSprint = nextSprint

    if (dataTasks) {
        const tasks = formatTasks(dataTasks, sprint)
        return { ...dataSprint.sprint, tasks:tasks }
    }
    
    return { ...dataSprint.sprint }
}

async function getSprintNavigation (sprintNumber) {
    const prevSprintNumber = sprintNumber - 1;
    const nextSprintNumber = sprintNumber + 1;

    const prevSprintQuery = getQuerySprintNavigation(prevSprintNumber);
    const nextSprintQuery = getQuerySprintNavigation(nextSprintNumber);


    const prevSprintData = prevSprintNumber > 0 && await client({ query: prevSprintQuery, fetch: fetch, endpoint: import.meta.env.VITE_HYPGRAPH_ENDPOINT }) || null;
    const nextSprintData = nextSprintNumber < 21 && await client({ query: nextSprintQuery, fetch: fetch, endpoint: import.meta.env.VITE_HYPGRAPH_ENDPOINT }) || null;

    const prevSprint = prevSprintData?.sprint || null;
    const nextSprint = nextSprintData?.sprint || null;

    return { prevSprint, nextSprint };
}

function formatTasks({search: {repos}}){
    return repos.filter(repo => repo != null).map(({repo}) => {
        
        const topics = repo.repositoryTopics.edges
                            .map(topic => topic.node.topic.name)
                            .filter(topic => topic == 'task' || topic == 'subtask')
        
        return {
            name: formatName(repo.name),
            description: repo.description,
            url: repo.url,
            forkCount: repo.forkCount,
            topic: topics[0]
        }
    })
}

function formatName (name) {
    if(prefix) {
        return name.split(`${prefix}-`).pop().replace(/-/g, " ")
    }
    else {
        return name.replace(/-/g, " ")
    }
}



