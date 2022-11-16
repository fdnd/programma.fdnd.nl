export function prettyDate(rawDate) {
    const date = new Date(rawDate)
    let day = date.getDate()
    let month = date.getMonth() + 1

    if (day.toString().length < 2) day = `0${day}`
    if (month.toString().length < 2) month = `0${month}`

    return `${day}/${month}`
}

export function longDate(rawDate) {
    const date = new Date(rawDate)
    let year = date.getFullYear()
    return `${prettyDate(rawDate)}/${year}`
} 