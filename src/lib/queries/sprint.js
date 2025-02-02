export default function getQuerySprint(slug) {
    return `
    query Sprint {
        sprint(where: {slug: "${slug}"}) {
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
          semester {
            slug
            title
          }
          weekPlans(first:100) {
            weekNumber
            mondayDate
            monday {
              html
            }
            tuesday {
              html
            }
            wednesday {
              html
            }
            thursday {
              html
            }
            friday {
              html
            }
          }
          topics {
            name
          }
        }
    }`
}