import { FetchFlyght } from '../flyght.gateway.js';

export const NUMBER_FLYGHT = 'NUMBER_FLYGHT';
export const SEARCH_TEXT = 'SEARCH_TEXT';
export const LIST_FLYGHT = 'LIST_FLYGHT';

export const numberFlyght = (string) => {
    return {
        type: NUMBER_FLYGHT,
        payload: {
            string
        }
    }
};

export const search = (string) => {
    return {
        type: SEARCH_TEXT,
        payload: {
            string
        }
    }
};

export const listFlyght = (list) => {
    return {
        type: LIST_FLYGHT,
        payload: {
            list
        }
    }
};

export function getList() {
    return function (dispatch) {
        FetchFlyght().then(res => dispatch(listFlyght(res)));
    }
}