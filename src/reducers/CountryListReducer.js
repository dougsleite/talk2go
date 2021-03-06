import {
    COUNTRIES_FETCH_SUCCESS,
    COUNTRIES_FILTER_UPDATED
} from '../actions/types';

const INITIAL_STATE = {
    data: {},
    filter: '',
    isLoading: true
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {        
         case COUNTRIES_FETCH_SUCCESS:
             return { ...state, isLoading: false, data: action.payload };
        case COUNTRIES_FILTER_UPDATED:
            return { ...state, filter: action.payload.text };
        default:
            return state;
    }
};
