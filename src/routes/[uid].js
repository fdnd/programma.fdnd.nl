import createClient from '../lib/prismicClient'

export async function get({ fetch, params }) {
  const client = createClient(fetch)
  const { uid } = params
  const sprint = await client.getByUID('sprint', uid)
  
  if (sprint) {
    return {
      body: { sprint }
    }
  }
  return {
    status: 404
  }
}