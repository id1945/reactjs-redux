import React from 'react';
import ReactDOM from 'react-dom';
import Users from './containers/user';
import { Provider } from 'react-redux';
import UsersStore from './store';

ReactDOM.render(
    <Provider store={UsersStore}>
        <Users />
    </Provider>,
    document.getElementById('root'));
