import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/user';
import UsersStore from './store';

ReactDOM.render(
    <Provider store={ UsersStore }>
        <App />
    </Provider>
    , document.getElementById('root'));
