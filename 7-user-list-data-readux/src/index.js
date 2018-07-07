import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/user';
import StoreUser from './store';

ReactDOM.render(
    <Provider store={StoreUser}>
        <App />
    </Provider>
, document.getElementById('root'));

