import moment from 'moment';
export function departer(time, listToday, listTomorrow, listYesterday) {
    if (time === moment().format('DD-MM-YYYY')) return listToday
    if (time === moment().add(1, 'days').format('DD-MM-YYYY')) return listTomorrow
    if (time === moment().add(-1, 'days').format('DD-MM-YYYY')) return listYesterday
}

export function arrivel(time, listToday, listTomorrow, listYesterday) {
    if (time === moment().format('DD-MM-YYYY')) return listToday
    if (time === moment().add(1, 'days').format('DD-MM-YYYY')) return listTomorrow
    if (time === moment().add(-1, 'days').format('DD-MM-YYYY')) return listYesterday
}