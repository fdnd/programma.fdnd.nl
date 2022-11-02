import { client } from '$lib/utils/client'

export const load = async () => {
	const query = `
    query Programs {
        program(where: {id: "cl9pm4is9l9xu0atdbqxnd710"}) {
            title
            subtitle
            content {
                html
            }
            semesters {
                title
                slug
                sprints {
                    title
                    slug
                    sprintNumber
                    startdate
                }
            }
        }
    }`

    const data = await client({ query, fetch: fetch });

    return {
        ...data.program
    }
}
