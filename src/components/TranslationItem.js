import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';
import FlagIcon from './FlagIcon';

class TranslationItem extends Component {
    render() {
        const { data, fromIconUri, toIconUri } = this.props;
        const { innerRowStyle, textStyle } = styles;
        return (
            <CardSection style={{ flexDirection: 'column' }}>
                <CardSection style={innerRowStyle}>
                    <FlagIcon flagUri={fromIconUri} />
                    <Text style={textStyle}>{data.from}</Text>
                </CardSection>
                <CardSection style={innerRowStyle}>
                    <FlagIcon flagUri={toIconUri} />
                    <Text style={textStyle}>{data.to}</Text>
                </CardSection>
            </CardSection>
                 
        );
    }
}

const styles = {
    innerRowStyle: {
        borderBottomWidth: 0, 
        alignItems: 'center'
    },
    textStyle: {
        paddingLeft: 15
    }
};

export default TranslationItem;
