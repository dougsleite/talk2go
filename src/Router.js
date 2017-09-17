import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import CountryList from './components/CountryList';
import TranslationPannel from './components/TranslationPannel';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="main">
                <Scene 
                    key="countryList"
                    component={CountryList}
                    initial
                    hideNavBar
                />
                <Scene
                    key="translationPannel"
                    component={TranslationPannel}
                    hideNavBar
                />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
