import { client } from '$lib/utils/client'

export const load= async ({ params }) => {
	const query = `
    query Sprint {
        sprint(where: {slug: "${params.slug}"}) {
          slug
          sprintNumber
          title
          startdate
          content {
            html
          }
          criteria {
            html
          }
          tasks {
            html
          }
          weekPlans {
            weekNumber
            mondayDate
            monday {
              html
            }
            tuesdayDate
            tuesday {
              html
            }
            wednesdayDate
            wednesday {
              html
            }
            thursdayDate
            thursday {
              html
            }
            fridayDate
            friday {
              html
            }
          }
          
        }
      }`;

	const data = await client({ query, variables: { slug: params.slug }, fetch: fetch });

	return { ...data.sprint };
};