import moment from 'moment';

export const ListTodayDeparture = (state) => {
    return state.head.list.body !== undefined ? state.head.list.body.departure.filter(
		(i) =>
			moment().format(`YYYY-MMMM-DD`) ===
			moment(i.timeDepShedule).format(`YYYY-MMMM-DD`)
	).sort((a, b) =>{ if (b.timeToStand > a.timeToStand) {return -1} }) : []
};

export const ListTomorrowDeparture = (state) => {
    return state.head.list.body !== undefined ? state.head.list.body.departure.filter(
		(plane) =>
			moment().add(1, 'days').format(`YYYY-MMMM-DD`) ===
			moment(plane.timeDepShedule).format(`YYYY-MMMM-DD`)
	).sort((a, b) =>{ if (b.timeToStand > a.timeToStand) {return -1} }) : []
};

export const ListYesterdayDeparture = (state) => {
    return state.head.list.body !== undefined ? state.head.list.body.departure.filter(
		(plane) =>
			moment().add(-1, 'days').format(`YYYY-MMMM-DD`) ===
			moment(plane.timeDepShedule).format(`YYYY-MMMM-DD`)
	).sort((a, b) =>{ if (b.timeToStand > a.timeToStand) {return -1} }) : []
};

export const ListTodayArrivel= (state) => {
    return state.head.list.body !== undefined ? state.head.list.body.arrival.filter(
		(plane) =>
			moment().format(`YYYY-MMMM-DD`) ===
			moment(plane.timeArrShedule).format(`YYYY-MMMM-DD`)
	).sort((a, b) =>{ if (b.timeToStand > a.timeToStand) {return -1} }) : []
};

export const ListTomorrowArrivel = (state) => {
    return state.head.list.body !== undefined ? state.head.list.body.arrival.filter(
		(i) =>
			moment().add(1, 'days').format(`YYYY-MMMM-DD`) ===
			moment(i.timeArrShedule).format(`YYYY-MMMM-DD`)
	).sort((a, b) =>{ if (b.timeToStand > a.timeToStand) {return -1} }) : []
};

export const ListYesterdayArrivel= (state) => {
    return state.head.list.body !== undefined ? state.head.list.body.arrival.filter(
		(i) =>
			moment().add(-1, 'days').format(`YYYY-MMMM-DD`) ===
			moment(i.timeArrShedule).format(`YYYY-MMMM-DD`)
	).sort((a, b) =>{ if (b.timeToStand > a.timeToStand) {return -1} }) : []
};