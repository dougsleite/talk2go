import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View } from 'react-native';
import CountryItem from './CountryItem';
import HeaderEmbeddedSearchBar from './HeaderEmbeddedSearchBar';
import { Spinner } from './common';
import { 
    countriesFetch, 
    updateCountriesFilter,
    changeHomeCountry, 
    fetchIconUri
} from '../actions';

class CountryList extends Component {

    componentWillMount() {
        this.props.countriesFetch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    onSearchChangeText(text) {
        this.props.updateCountriesFilter(text);
    }

    //FIX-ME
    onSettingsPress() {
        this.setUSAsDefault();
    }

    setUSAsDefault() {
        const homeCountry = _.find(this.props.countries, _.matchesProperty('uid', 210));
        const { uid, icon } = homeCountry;
        this.props.fetchIconUri({ uid, icon });        
        this.props.changeHomeCountry(homeCountry);        
    }

    createDataSource({ countries }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(countries);
    }    

    renderRow(country) {
        return (
            <CountryItem country={country} />
        );
    }

    render() {
        if (this.props.countries.length === 0) {
            return <Spinner size="large" />;
        }
        return (
            <View style={{ flex: 1 }}>
                <HeaderEmbeddedSearchBar
                    headerText='Talk2Go'
                    onSearchChangeText={this.onSearchChangeText.bind(this)}
                    onRightIconPress={this.onSettingsPress.bind(this)}
                    textColor='white'
                    backgroundColor='#1f94d0'
                />
                <ListView 
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />
            </View>        
        );
    }
}

const mapStateToProps = (state) => {
    const { filter } = state.countries;
    const countries = _.map(state.countries.data, (val, uid) => {
        return { ...val, uid };
    });
    
    if (filter) {
        return { countries: countries.filter(c => c.name.startsWith(filter)) };
    }   
    return { countries };
};

export default connect(mapStateToProps, { 
    countriesFetch, 
    updateCountriesFilter,
    changeHomeCountry,
    fetchIconUri
})(CountryList);
