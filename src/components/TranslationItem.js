import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';
import FlagIcon from './FlagIcon';

class TranslationItem extends Component {
    render() {
        const { data, fromIconUri, toIconUri } = this.props;
        return (
            <CardSection style={{ flexDirection: 'column' }}>
                <CardSection style={{ borderBottomWidth: 0 }}>
                    <FlagIcon flagUri={fromIconUri} />
                    <Text>{data.from}</Text>
                </CardSection>
                <CardSection style={{ borderBottomWidth: 0 }}>
                    <FlagIcon flagUri={toIconUri} />
                    <Text>{data.to}</Text>
                </CardSection>
            </CardSection>
                 
        );
    }
}

export default TranslationItem;
