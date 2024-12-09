import { client }     from '$lib/utils/client'
import { responseInit } from '$lib/utils/responseInit'
import getQuerySemester from '$lib/queries/semester'

export async function GET ({params: {semester}}){
    const querySemester = getQuerySemester(semester)
    
    const dataSemester = await client({ 
        query: querySemester, 
        variables: { slug: semester }, 
        fetch: fetch, 
        endpoint: import.meta.env.VITE_HYPGRAPH_ENDPOINT 
    })

    const data = dataSemester.semester

    return new Response(JSON.stringify(data), responseInit)
}