import {
    SEARCH_ENABLED,
    SEARCH_DISABLED,
    SEARCH_TEXT_CHANGED,
    CLEAR_ICON_PRESSED
} from '../actions/types';

const INITIAL_STATE = {
    searchActive: false,
    searchInputText: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SEARCH_ENABLED:
            return { ...state, searchActive: true };
        case SEARCH_DISABLED:
            return { ...state, ...INITIAL_STATE };
        case SEARCH_TEXT_CHANGED:
            return { ...state, searchInputText: action.payload };
        case CLEAR_ICON_PRESSED:
            return { ...state, searchInputText: '' };
        default:
            return state;
    }
};
