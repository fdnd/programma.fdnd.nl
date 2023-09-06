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


export const datesBetween = (startDate, stopDate) => {
    const dateArray = [];
    let currentDate = new Date(startDate);
    const endDate = new Date(stopDate);
    for (let date = currentDate; date <= endDate; date.setDate(date.getDate() + 1)) {
        if (currentDate.getDay() !== 6 && currentDate.getDay() !== 0) {
            const day = currentDate.getDate()
            const month = currentDate.getMonth() + 1
            dateArray.push({ day, month, prettyDate: prettyDate(currentDate) });
        }
    }
    return dateArray;
}
export const daysBetween = (startDate, stopDate) => {
    let days = 0
    let currentDate = new Date(startDate);
    const endDate = new Date(stopDate);
    for (let date = currentDate; date <= endDate; date.setDate(date.getDate() + 1)) {
        if (currentDate.getDay() !== 6 && currentDate.getDay() !== 0) {
            days = days + 1
        }
    }
    return days;
}


const prettyMonthNames = [
    'Januari',
    'Februari',
    'Maart',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Augustus',
    'September',
    'Oktober',
    'November',
    'December'
]

export const formatMonths = (startDate, stopDate) => {
    let currentDate = new Date(startDate);
    let counter = 0
    let lastMonth = currentDate.getMonth()
    let m = [{
        month: lastMonth + 1,
        startsAt: counter,
        prettyName: prettyMonthNames[lastMonth]
    }]
    const endDate = new Date(stopDate);
    for (let date = currentDate; date <= endDate; date.setDate(date.getDate() + 1)) {
        if (date.getMonth() !== lastMonth) {
            lastMonth = date.getMonth()
            m.push({
                month: lastMonth + 1,
                startsAt: counter,
                prettyName: prettyMonthNames[lastMonth]
            })
        }
        if (currentDate.getDay() !== 6 && currentDate.getDay() !== 0) {
            counter = counter + 1
        }
    }
    const months = m.map((month, i) => {
        if (m[i + 1]) {
            month.width = m[i + 1].startsAt - month.startsAt 
        } else {
            month.width = 0
        }
        return month
    })
    return months;
}
