import firebase from 'firebase';
import {
    COUNTRIES_FETCH_SUCCESS,
    COUNTRIES_FILTER_UPDATED
} from './types';

export const countriesFetch = () => {
    return (dispatch) => {
        firebase.database().ref('/countries')
        .on('value', snapshot => {
            dispatch({ type: COUNTRIES_FETCH_SUCCESS, payload: snapshot.val() });
        });
    };
};

export const fetchIconUri = ({ uid, icon }) => {
    return () => {
        firebase.storage().ref(`/images/${icon}`)
        .getDownloadURL()
        .then(uri => {
            firebase.database().ref(`/countries/${uid}`)
            .update({ iconUri: uri });
        });
    };
};

export const updateCountriesFilter = (text) => {
    return {
        type: COUNTRIES_FILTER_UPDATED,
        payload: { text }
    };
};
