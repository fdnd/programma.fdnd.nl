import * as helpers from '@prismicio/helpers'

export function prettyDate(rawDate) {
    const date = helpers.asDate(rawDate)
    let day = date.getDate()
    let month = date.getMonth() + 1

    if (day.toString().length < 2) day = `0${day}`
    if (month.toString().length < 2) month = `0${month}`

    return `${day}/${month}`
}

export function longDate(rawDate) {
    const date = helpers.asDate(rawDate)
    let year = date.getFullYear()
    return `${prettyDate(rawDate)}/${year}`
} 