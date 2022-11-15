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
          topics {
            name
          }
        }
    }`
}