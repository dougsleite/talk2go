import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View } from 'react-native';
import { HeaderEmbeddedSearchBar } from './common';
import { countriesFetch, updateCountriesFilter } from '../actions';
import CountryItem from './CountryItem';

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
        return (
            <CountryItem country={country} />
        );
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <HeaderEmbeddedSearchBar
                    headerText='Talk2Go'
                    onSearchChangeText={this.onSearchChangeText.bind(this)}
                    onRightIconPress={() => console.log('settings')}
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
    updateCountriesFilter 
})(CountryList);
