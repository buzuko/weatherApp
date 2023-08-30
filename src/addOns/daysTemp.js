import sunny from "./sunny.png"
import partly_cloudy from "./partly_cloudy.png"
import rain_s_cloudy from "./sunny.png"
import rainbow from "./rainbow.png"

// בדיקה: איזה לוגו צריך להיות ביום
export function LogoIcon(data, num) {
    //console.log(data)
    const tempEve = data.daily[num].temp.eve - 273.15
    const tempMax = data.daily[num].temp.max - 273.15
    const temp = Math.round((tempEve + tempMax) / 2)

    let logo;
    if (data.daily[num].temp.day - 273.15 > 29) {
        logo = sunny
    } else if (data.daily[num].clouds > 20) {
        logo = partly_cloudy
    } else if (data.daily[num].pop > 0.4) {
        logo = rain_s_cloudy
    } else {
        logo = rainbow
    }

    return { temp, logo }
}

// בדיקה: איזה צבע היום צריך להיות
export function weatherColor(data) {
    let color = 0;
    (data.feels_like.day - data.temp.day > 1) && color++
    (data.feels_like.eve - data.temp.eve > 1) && color++
    (data.feels_like.morn - data.temp.morn > 1) && color++
    (data.feels_like.night - data.temp.night > 1) && color++

    if (color === 1) {
        return "rgba(128, 128, 128, 0.3)" // gray
    } else if (color === 2) {
        return "rgba(255, 166, 0, 0.1)" // orange
    } else {
        return "rgba(255, 0, 0, 0.1)" // red
    }
}