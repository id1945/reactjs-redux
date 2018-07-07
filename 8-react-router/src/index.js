import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/user';
import StoreUser from './store';
import { Router,Route, hashHistory } from 'react-router';

ReactDOM.render(
    <Provider store={StoreUser}>
        <Router history={hashHistory}>
            <Route path='/users' component={App}/>
        </Router>
    </Provider>
, document.getElementById('root'));

