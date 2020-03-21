import {
	NUMBER_FLYGHT,
	SEARCH_TEXT,
	LIST_FLYGHT
} from './fly.actions.js';
import qs from 'qs';

let delimited = qs.parse(window.location.search, {
	ignoreQueryPrefix: true
});
const initialState = {
	text:
		delimited.search !== undefined ? delimited.search : '',
	search:
		delimited.search !== undefined ? delimited.search : '',
	list: [],
};

const headReducer = (state = initialState, action) => {
	switch (action.type) {
		case NUMBER_FLYGHT:
			return {
				...state,
				text: action.payload.string
			};
		case SEARCH_TEXT:
			return {
				...state,
				search: action.payload.string
			};
		case LIST_FLYGHT:
			return {
				...state,
				list: action.payload.list
			};
		default:
			return state;
	}
};

export default headReducer;
