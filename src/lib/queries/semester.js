export default function getQuerySprint(slug) {
    return `
    query Semester {
        semester(where: {slug: "${slug}"}) {
          title
          slug
          goal {
            html
          }
          content {
            html
          }
          sprints (first:20) {
              title
              slug
              sprintNumber
              startdate
          }
        }
    }`
}