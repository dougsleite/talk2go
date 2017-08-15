import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import CountryList from './components/CountryList';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key="main">
                <Scene 
                    key="countryList"
                    component={CountryList}
                    title="Countries"
                    initial
                />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
