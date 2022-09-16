import createClient from '../lib/prismicClient'

export async function get({ fetch }) {
  const client = createClient({ fetch })
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

  if (page)
    return {
      body: {
        page,
        semesters,
      },
    }

  return {
    status: 404,
  }
}
