import { client }     from '$lib/utils/client'
import { responseInit } from '$lib/utils/responseInit'
import getQuerySprint from '$lib/queries/sprint'

export async function GET ({params: {sprint}}){
    const querySprint = getQuerySprint(sprint)
    
    const dataSprint = await client({ 
        query: querySprint, 
        variables: { slug: sprint }, 
        fetch: fetch, 
        endpoint: import.meta.env.VITE_HYPGRAPH_ENDPOINT 
        })

    const data = formatCriteria(dataSprint.sprint)

    return new Response(JSON.stringify(data), responseInit)
}

function formatCriteria (sprint) {
    return {
        slug:sprint.slug,
        sprintNUmber: sprint.sprintNumber,
        title: sprint.title,
        startdate: sprint.startdate,
        content: sprint.content.html,
        semester: sprint.semester,
        weekPlans: sprint.weekPlans,
        topics: sprint.topics,
        behavioralCriteria: sprint.indicators
    }
}