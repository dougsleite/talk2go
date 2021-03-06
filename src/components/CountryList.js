import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, Text } from 'react-native';
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
        this.setHomeCountry(nextProps);
    }

    onSearchChangeText(text) {
        this.props.updateCountriesFilter(text);
    }

    setHomeCountry(nextProps) {
        const { countries, homeCountry } = nextProps;
        if (isEmpty(homeCountry)) {
            const us = countries.find(c => c.name === 'United States of America');
            this.props.changeHomeCountry(us);
        }
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
        if (this.props.isLoading) {
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
                <View style={styles.fromViewStyle}>
                    <Text style={styles.fromTextStyle}>
                        I'm from {this.props.homeCountry.name}
                    </Text>
                </View>
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
    const { filter, isLoading } = state.countries;
    const countries = _.map(state.countries.data, (val, uid) => {
        return { ...val, uid };
    });

    if (filter) {
        return { 
            countries: countries.filter(c => c.name.startsWith(filter)), 
            homeCountry: state.homeCountry 
        };
    }   
    return { countries, isLoading, homeCountry: state.homeCountry };
};

const isEmpty = (obj) => {
    return !Object.keys(obj).length;
};

const styles = {
	fromViewStyle: {
		//backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'flex-start',
		height: 40,
        paddingLeft: 5,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	},
	fromTextStyle: {
        fontSize: 16,
        color: '#1f94d0',
        fontWeight: '500'
	}
};

export default connect(mapStateToProps, { 
    countriesFetch, 
    updateCountriesFilter,
    changeHomeCountry,
    fetchIconUri
})(CountryList);
