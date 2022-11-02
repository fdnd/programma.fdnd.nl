export async function client({ query, variables, fetch}){
	const response = await fetch(import.meta.env.VITE_HYPGRAPH_ENDPOINT, {
		method: 'POST',
		body: JSON.stringify({ query, variables })
	})

	const { data } = await response.json()

	return data
}