import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
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
    
    onLongPress() {
        this.props.changeHomeCountry(this.props.country);
    }

    render() {
        const { country, selected } = this.props;

        return (
            <TouchableHighlight 
                onPress={() => Actions.translationPannel({ country: this.props.country })}
                onLongPress={this.onLongPress.bind(this)}
            >
                <View>
                    <CardSection 
                        style={[{ alignItems: 'center', paddingLeft: 15 }, selected && styles.selected]}
                    >                                            
                        <FlagIcon flagUri={country.iconUri} />
                        <Text style={styles.titleStyle}>
                            {country.name}
                        </Text>
                    </CardSection>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    },
    selected: {
        backgroundColor: '#b4e1ff'
    }
};

export default connect(null, { 
    fetchIconUri, 
    changeHomeCountry 
})(CountryItem);
