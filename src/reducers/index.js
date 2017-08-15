import { combineReducers } from 'redux';
import CountryListReducer from './CountryListReducer';

export default combineReducers({
    countries: CountryListReducer
});
