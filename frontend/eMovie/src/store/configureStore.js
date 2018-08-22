import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from '../reducers';

// Je configure mon store et persist mes données
const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// j'exporte mon store et mes données
export default function configureStore(initialState) {
    // Création du store => objet store.
    let store = createStore(persistedReducer,initialState, applyMiddleware(thunk));
    let persistor = persistStore(store);
    return { store, persistor }
}