import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';
import { fetchIconUri } from '../actions';

class CountryItem extends Component {

    componentWillMount() {
        const { uid, icon } = this.props.country;
        this.props.fetchIconUri({ uid, icon });
    }
    
    render() {
        const { country } = this.props;

        return (
            <TouchableWithoutFeedback 
                onPress={() => Actions.countryDetail({ country: this.props.country })}
            >
                <View>
                    <CardSection>                       
                            <View style={styles.thumbnailContainerStyle}>
                                <Image 
                                    style={styles.thumbnailStyle}
                                    source={{ uri: country.iconUri }}
                                    resizeMode="cover"
                                />
                            </View>
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
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    thumbnailStyle: {
        height: 48,
        width: 48,
        borderWidth: 0,
        borderRadius: 24
    }
};

export default connect(null, { fetchIconUri })(CountryItem);
