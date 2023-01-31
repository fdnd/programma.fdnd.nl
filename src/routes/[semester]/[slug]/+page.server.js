import { client }     from '$lib/utils/client'
import getQuerySprint from '$lib/queries/sprint'
import {headersGitHub, getQueryTasks}  from '$lib/queries/tasks'

let prefix

export const load = async ({params: {slug}}) => {
    prefix = slug
    const querySprint = getQuerySprint(slug)
    const queryTasks  = getQueryTasks(slug)

    const dataSprint = await client({ query: querySprint, variables: { slug: slug }, fetch: fetch, endpoint: import.meta.env.VITE_HYPGRAPH_ENDPOINT })
    const dataTasks  = await client({ query: queryTasks, variables: { slug: slug }, fetch: fetch, endpoint: import.meta.env.VITE_GITHUB_ENDPOINT, headers: headersGitHub })

    const tasks = formatTasks(dataTasks, slug)

    return { ...dataSprint.sprint, tasks:tasks }
}

function formatTasks({search: {repos}}){
    return repos.map(({repo}) => {
      const topics = repo.repositoryTopics.edges
                        .map(topic => topic.node.topic.name)
                        .filter(topic => topic == 'task' || topic == 'subtask')
      
      return {
        name: formatName(repo.name),
        description:repo.description,
        url:repo.url,
        forkCount:repo.forkCount,
        forks:formatForks(repo),
        topic:topics[0]
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

function formatForks({forks}) {
    const ghBaseUrl = 'https://github.com'
    const ghPagesBaseURL = 'github.io'
    
    return forks.nodes.filter(node => {
        return node.stargazerCount > 0
    }).map(fork => {



        return {
            title: formatName(fork.name),
            name: fork.name,
            stargazerCount:fork.stargazerCount,
            owner:fork.owner.login,
            ownerUrl:fork.owner.url,
            avatarUrl:fork.owner.avatarUrl,
            url:`${ghBaseUrl}/${fork.owner.login}/${fork.name}`,
            pagesUrl:`https://${fork.owner.login}.${ghPagesBaseURL}/${fork.name}`,
            homepageUrl: fork.homepageUrl
        }        
    }) 

    function formatHomepageUrl(url) {
        if(url && url.length === 0) return undefined

        return url.includes('https://') ? url : `https://${url}`
    }
}

