import { client }     from '$lib/utils/client'
import getQuerySemester from '$lib/queries/semester'

export const load = async ({params: {semester}}) => {
    const querySemester = getQuerySemester(semester)
    
    const dataSemester = await client({ 
        query: querySemester, 
        variables: { slug: semester }, 
        fetch: fetch, 
        endpoint: import.meta.env.VITE_HYPGRAPH_ENDPOINT 
    })

    return { ...dataSemester.semester }
}
