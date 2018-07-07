import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createPromise from 'redux-promise-middleware';
import userReducers from './reducers/user';

const logger = createLogger();
const promise = createPromise();
const middleware  = applyMiddleware(logger, promise);

export default createStore(userReducers,middleware);