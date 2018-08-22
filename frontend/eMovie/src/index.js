import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import App from './App';

import configureStore from './store/configureStore';

const {store,persistor} = configureStore();

ReactDOM.render(
    // Je déclare mon store à l'aide de configuration store => <Provider store={store}>
    // Je persist mes donnée à l'aide de configuration store => <PersistGate loading={null} persistor={persistor}>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);
