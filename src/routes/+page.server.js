import createClient from '../lib/prismicClient'

export async function load({ fetch }) {
  const client = createClient({ fetch })
  const page = await client.getSingle('program')
  console.log(page)
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

  if (page) {
    return {
      page,
      semesters,
    }
  }
  
  throw error(400, 'not found!!!');
}
