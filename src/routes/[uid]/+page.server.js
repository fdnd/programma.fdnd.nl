import createClient from '$lib/vendor/prismicio'
import { error } from '@sveltejs/kit'

export async function load ({ fetch, params }) {
  const client = createClient({ fetch, params })
  const sprint = await client.getByUID('sprint', params.uid)

  if (sprint) {
    return sprint
  }

  throw error(404, 'Not found')
}