import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { HeaderNav } from './common';
import TranslationCard from './TranslationCard';

class CountryDetail extends Component {

    render() {
        const { 
            name, 
            languages, 
            text,
            iconUri
        } = this.props.country;
        const { homeCountry } = this.props;
        const lang = languages[0];
        return (
            <View>
                <HeaderNav
                    headerText={name}
                    subText={`English to ${lang.name} (${lang.nativeName})`}
                    backgroundColor='#1f94d0'
                    textColor='white'
                    iconColor='white'
                    onBackPress={() => Actions.countryList({ type: 'reset' })}
                />
                <TranslationCard
                    toIconUri={iconUri}
                    fromIconUri={homeCountry.iconUri}
                    fromTranslationText={homeCountry.text.greetings}
                >
                    {text.greetings}
                </TranslationCard>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { homeCountry } = state;
    return { homeCountry };
};

export default connect(mapStateToProps)(CountryDetail);
