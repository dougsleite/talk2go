import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';
import { fetchIconUri, changeHomeCountry } from '../actions';
import FlagIcon from './FlagIcon';

class CountryItem extends Component {

    componentWillMount() {
        const { uid, icon } = this.props.country;
        this.props.fetchIconUri({ uid, icon });
    }
    
    setHomeCountry() {
        console.log('set as home');
        this.props.changeHomeCountry(this.props.country);        
    }

    render() {
        const { country } = this.props;

        return (
            <TouchableWithoutFeedback 
                onPress={() => Actions.countryDetail({ country: this.props.country })}
                onLongPress={() => this.setHomeCountry()}
            >
                <View>
                    <CardSection 
                        style={{ alignItems: 'center', paddingLeft: 15 }}
                    >                                            
                        <FlagIcon flagUri={country.iconUri} />
                        <Text style={styles.titleStyle}>
                            {country.name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

export default connect(null, { 
    fetchIconUri, 
    changeHomeCountry 
})(CountryItem);
