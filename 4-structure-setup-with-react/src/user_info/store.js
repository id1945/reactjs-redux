import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createPromise from 'redux-promise-middleware';
import userReducer from './reducers/userReducer';

const logger = createLogger();
const promise = createPromise();
const middleware  = applyMiddleware(logger, promise);

export default createStore(userReducer,middleware);