import moment from 'moment';


const baseUrl = `https://api.iev.aero/api/flights/${moment().format(
	'DD-MM-YYYY'
)}`;

export const FetchFlyght = () => {
	return fetch(baseUrl).then((response) => {
		if (response.ok) return response.json();
		throw new Error();
	});
};
