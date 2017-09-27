import _ from 'lodash';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';
import { connect } from 'react-redux';
import { HeaderNav } from './common';
import TranslationList from './TranslationList';

class TranslationPannel extends Component {

    render() {
        const { country } = this.props;
        const { homeCountry } = this.props;

        const homeCountryLang = homeCountry.languages[0].name;
        //const countryNativeLang = country.languages[0].nativeName;

        return (

            <View style={{ flex: 1 }}>
                <HeaderNav
                    headerTitle={`Visiting ${country.name}`}
                    //subTitle={`${homeCountryLang} to ${countryLang} (${countryNativeLang})`}
                    backgroundColor='#1f94d0'
                    textColor='white'
                    iconColor='white'
                    onBackPress={() => Actions.countryList({ type: 'reset' })}
                />
                <ScrollableTabView
                    renderTabBar={() => <ScrollableTabBar />}
                    ref={(tabView) => { this.tabView = tabView; }}
                    tabBarActiveTextColor='#1f94d0'
                    tabBarUnderlineStyle={{ backgroundColor: '#1f94d0' }}
                >
                {
                    country.languages.map(l => {
                        return (
                            <View tabLabel={l.name} key={l.name}>
                                <TranslationList
                                    toIconUri={country.iconUri}
                                    fromIconUri={homeCountry.iconUri}
                                    fromTranslationText={
                                        _.at(homeCountry.text.greetings, [_.lowerCase(homeCountryLang)])[0]
                                    }
                                >
                                    {
                                        _.at(country.text.greetings, [_.lowerCase(l.name)])[0]
                                    }
                                </TranslationList>     
                            </View>  
                        );
                    })
                }
                </ScrollableTabView>                
            </View>            
        );
    }
}

const mapStateToProps = (state) => {
    const { homeCountry } = state;
    return { homeCountry };
};

export default connect(mapStateToProps)(TranslationPannel);
