import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import CountryList from './components/CountryList';
import CountryDetail from './components/CountryDetail';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key="main">
                <Scene 
                    key="countryList"
                    component={CountryList}
                    initial
                    hideNavBar
                />
                <Scene
                    key="countryDetail"
                    component={CountryDetail}
                    hideNavBar
                />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
