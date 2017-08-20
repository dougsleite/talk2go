import {
    SEARCH_ENABLED,
    SEARCH_DISABLED,
    SEARCH_TEXT_CHANGED,
    CLEAR_ICON_PRESSED
} from './types';

export const enableSearchMode = () => {
    return {
        type: SEARCH_ENABLED
    };
};

export const disableSearchMode = () => {
    return {
        type: SEARCH_DISABLED  
    };
};

export const searchTextChanged = (text) => {
    return {
        type: SEARCH_TEXT_CHANGED,
        payload: text
    };
};

export const clearIconPressed = () => {
    return {
        type: CLEAR_ICON_PRESSED
    };
};
