import createClient from '$lib/vendor/prismicio'
import { error } from '@sveltejs/kit'

export async function load({ fetch, request }) {
  const client = createClient({ fetch, request })
  const page = await client.getSingle('program')
  const semesters = await Promise.all(
    page.data.semesters.map(async (s) => {
      const semester = await client.getByUID('semester', s.semester.uid)
      const sprints = await Promise.all(
        semester.data.sprints.map(async (s) => {
          const sprint = await client.getByUID('sprint', s.sprint.uid)
          return sprint
        })
      )
      semester.data.sprints = sprints
      return semester
    })
  )

  if (page && semesters) {
    return {
        page,
        semesters
      } 
  }

  throw error(404, 'Not found')
}