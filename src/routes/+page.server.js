import { client } from '$lib/utils/client'
import {loadingState} from '$lib/stores/program'
import getQueryProgram from '$lib/queries/program'

export const load = async () => {
    loadingState.set(true)
	const queryProgram = getQueryProgram()
    const data = await client({ query: queryProgram, fetch: fetch, endpoint: import.meta.env.VITE_HYPGRAPH_ENDPOINT });

    return {
        ...data.program
    }
}
