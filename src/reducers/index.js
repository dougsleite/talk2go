import { combineReducers } from 'redux';
import CountryListReducer from './CountryListReducer';
import HeaderEmbbededSearchBarReducer from './HeaderEmbbededSearchBarReducer';

export default combineReducers({
    countries: CountryListReducer,
    headerEmbbedded: HeaderEmbbededSearchBarReducer
});
