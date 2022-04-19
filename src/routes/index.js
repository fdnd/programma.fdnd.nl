import createClient from '../lib/prismicClient'

export async function get({ fetch }) {
    const client = createClient({ fetch })
    const page = await client.getSingle('program')

    const semesters = await Promise.all(page.data.semesters.map(async (s) =>{
      const response = await client.getByUID('semester', s.semester.uid)
      
      const sprints = await Promise.all(response.data.sprints.map(async (s) =>{
        const response = await client.getByUID('sprint', s.sprint.uid)

        return response
      }))

      response.data.sprints = sprints

      return response
    }))

    if (page)
      return {
        body: {
          page,
          semesters
        }
      }
  
    return {
      status: 404,
    }
  }