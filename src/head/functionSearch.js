import moment from 'moment';
export function functionCreateSearch (text, time, unc) {
    return  text == '' ?  `data=${time !== undefined
           ? time
           : moment().format('DD-MM-YYYY')}` : unc
}
   