import { client } from '$lib/utils/client'
import getQueryProgram from '$lib/queries/program'
import {loadingState} from '$lib/stores/program'

export const load = async () => {
    loadingState.set(true)
    const queryProgram = getQueryProgram()

    const data = await client({ query: queryProgram, fetch: fetch, endpoint: import.meta.env.VITE_HYPGRAPH_ENDPOINT })

    console.log('[1] server side data fetching')
    return {
        ...data.program
    }
}
