import createClient from '../../lib/prismicClient'

export async function load({ fetch, params }) {
  const client = createClient(fetch)
  const { uid } = params
  const sprint = await client.getByUID('sprint', uid)
  
  if (sprint) {
    return { sprint }
  }
  
  throw error(400, 'not found');
}