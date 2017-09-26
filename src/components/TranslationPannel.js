import _ from 'lodash';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { HeaderNav } from './common';
import TranslationList from './TranslationList';

class TranslationPannel extends Component {

    render() {
        // Country Properties
        const { 
            name, 
            languages, 
            text,
            iconUri
        } = this.props.country;
        const lang = languages[0];

        // Home Country Properties
        const { homeCountry } = this.props;

        // 
        const homeCountryLang = homeCountry.languages[0].name;
        const countryLang = lang.name;

        return (
            <View style={{ flex: 1 }}>
                <HeaderNav
                    headerTitle={`Visiting ${name}`}
                    subTitle={`${homeCountryLang} to ${countryLang} (${lang.nativeName})`}
                    backgroundColor='#1f94d0'
                    textColor='white'
                    iconColor='white'
                    onBackPress={() => Actions.countryList({ type: 'reset' })}
                />
                <TranslationList
                    toIconUri={iconUri}
                    fromIconUri={homeCountry.iconUri}
                    fromTranslationText={
                        _.at(homeCountry.text.greetings, [_.lowerCase(homeCountryLang)])[0]
                    }
                >
                    {
                        _.at(text.greetings, [_.lowerCase(countryLang)])[0]
                    }
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
