import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { HeaderNav } from './common';

class CountryDetail extends Component {
    render() {
        const { name } = this.props.country;
        return (
            <View>
                <HeaderNav
                    headerText={name}
                    subText='English to Language...'
                    backgroundColor='#1f94d0'
                    textColor='white'
                    iconColor='white'
                    onBackPress={() => Actions.countryList()}
                />
                <View>
                    <Text>{name}</Text>
                </View>
            </View>
        );
    }
}

export default CountryDetail;
