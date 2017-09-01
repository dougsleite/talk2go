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

    createDataSource({ countries }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(countries);
    }    

    renderRow(country) {
        if (country.uid === this.props.homeCountry.uid) {
            return <CountryItem country={country} selected />;
        }
        return <CountryItem country={country} />;
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
                    onRightIconPress={() => console.log('settings pressed')}
                    textColor='white'
                    backgroundColor='#1f94d0'
                />
                <ListView 
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow.bind(this)}
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
    
    const homeCountry = isEmpty(state.homeCountry) ? countries.find(c => c.name === 'United States of America') : state.homeCountry;

    if (filter) {
        return { countries: countries.filter(c => c.name.startsWith(filter)), homeCountry };
    }   
    
    return { countries, homeCountry };
};

const isEmpty = (obj) => {
    return !Object.keys(obj).length;
};

export default connect(mapStateToProps, { 
    countriesFetch, 
    updateCountriesFilter,
    changeHomeCountry,
    fetchIconUri
})(CountryList);
