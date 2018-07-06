import { createStore } from 'redux'
import { usersReducer } from './reducers/user';

export default createStore(
    usersReducer, [{name:"Ruby Love", age:1990}]
);