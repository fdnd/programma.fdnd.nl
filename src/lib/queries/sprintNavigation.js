export default function getQuerySprintNavigation(sprintNumber) {
  return `
  query sprintSlug {
    sprint(where: {sprintNumber: ${sprintNumber}}) {
      title
      slug
      semester {
        slug
      }
    }
  }`
}