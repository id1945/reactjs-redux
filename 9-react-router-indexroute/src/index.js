import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/user';
import Home from './components/home';
import StoreUser from './store';
import { Router,Route, hashHistory, IndexRoute} from 'react-router';

ReactDOM.render(
    <Provider store={StoreUser}>
        <Router history={hashHistory}>
            <Router path="/" componen="{App}">
                <IndexRoute component={Home}/>
                <Route path='users' component={App}/>
            </Router>
        </Router>
    </Provider>
, document.getElementById('root'));