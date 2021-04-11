import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {storeReducer} from './store.reducer';
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

const persistConfig = {
    key: 'store',
    storage,
};

const persistedReducer = persistReducer(persistConfig, storeReducer);

const store = createStore(persistedReducer, composeWithDevTools());

const persist = persistStore(store);

export {store, persist};



