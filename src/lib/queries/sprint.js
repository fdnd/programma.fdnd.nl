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
          weekPlans(first:100) {
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
          topics {
            name
          }
        }
    }`
}