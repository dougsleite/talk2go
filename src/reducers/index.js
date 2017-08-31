import { combineReducers } from 'redux';
import CountryListReducer from './CountryListReducer';
import HeaderEmbbededSearchBarReducer from './HeaderEmbbededSearchBarReducer';
import HomeCountryReducer from './HomeCountryReducer';

export default combineReducers({
    countries: CountryListReducer,
    headerEmbbedded: HeaderEmbbededSearchBarReducer,
    homeCountry: HomeCountryReducer
});
