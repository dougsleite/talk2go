import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { HeaderNav } from './common';
import TranslationList from './TranslationList';

class TranslationPannel extends Component {

    render() {
        const { 
            name, 
            languages, 
            text,
            iconUri
        } = this.props.country;
        const lang = languages[0];

        const { homeCountry } = this.props;

        return (
            <View style={{ flex: 1 }}>
                <HeaderNav
                    headerTitle={name}
                    subTitle={`${homeCountry.languages[0].name} to ${lang.name} (${lang.nativeName})`}
                    backgroundColor='#1f94d0'
                    textColor='white'
                    iconColor='white'
                    onBackPress={() => Actions.countryList({ type: 'reset' })}
                />
                <TranslationList
                    toIconUri={iconUri}
                    fromIconUri={homeCountry.iconUri}
                    fromTranslationText={homeCountry.text.greetings}
                >
                    {text.greetings}
                </TranslationList>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { homeCountry } = state;
    return { homeCountry };
};

export default connect(mapStateToProps)(TranslationPannel);
