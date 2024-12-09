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

    const data = dataSprint.sprint

    return new Response(JSON.stringify(data), responseInit)
}