import {PersistGate} from 'redux-persist/integration/react';
import {persist, store} from './core/store/store';
import Initializer from './Initializer';
import {Provider} from 'react-redux';
import './assets/styles/main.scss';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persist}>
                <Initializer>
                    <App/>
                </Initializer>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
