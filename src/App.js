import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

// use signInAnonymously() to get a token
// we can use a spinner in the begining
// once logged, move to the main screen
class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyC0bF9fRzbdUrVFnpFwnL2GponZ55v9CFk',
            authDomain: 'talk2go-acfdf.firebaseapp.com',
            databaseURL: 'https://talk2go-acfdf.firebaseio.com',
            projectId: 'talk2go-acfdf',
            storageBucket: 'talk2go-acfdf.appspot.com',
            messagingSenderId: '733998307714'
        };
        firebase.initializeApp(config);    
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
