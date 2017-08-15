import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { countriesFetch } from '../actions';
import CountryItem from './CountryItem';

class CountryList extends Component {

    componentWillMount() {
        this.props.countriesFetch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
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
            <ListView 
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = (state) => {
    const countries = _.map(state.countries, (val, uid) => {
        return { ...val, uid };
    });
    return { countries };
};

export default connect(mapStateToProps, { countriesFetch })(CountryList);
