import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
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
        height: 32,
        width: 32,
        borderWidth: 1,
        borderRadius: 16
    }
};

export default connect(null, { fetchIconUri })(CountryItem);
