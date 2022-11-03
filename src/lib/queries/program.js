export default function getQueryProgram(){
    return `
    query Program {
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
}