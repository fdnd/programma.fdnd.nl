export async function client({ query, variables, fetch, endpoint, headers = {}}){
	const response = await fetch(endpoint, {
		method: 'POST',
		body: JSON.stringify({ query, variables }), 
		headers: headers
	})

	const { data } = await response.json()

	return data
}