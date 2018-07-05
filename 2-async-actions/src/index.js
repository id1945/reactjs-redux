import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

const logger = createLogger();
const middleware  = applyMiddleware(logger, thunk);
const store = createStore(userReducer,middleware);

class MyApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {status: '', statusClass: '', name: '', email: '', gender:''}
    store.subscribe(() => {
      const state = store.getState();
      this.setState({name: state.user && state.user.name});
      this.setState({email: state.user && state.user.email});
      this.setState({gender: state.user && state.user.gender});
      this.setState({status: state.status});
      this.setState({statusClass: state.statusClass});
    })
  }
  render() {
    return (
      <div className="container">
        <button className='btn btn-info' onClick={ this.handleGetUser }>New Random User</button>
        <h2 className={ this.state.statusClass }>{ this.state.status }</h2>       
        <h2>{ this.state.name }</h2>
        <h2>{ this.state.email }</h2>
        <h2>{ this.state.gender }</h2>
      </div>
    );
  }
  handleGetUser = (e) => {
      store.dispatch(dispatch => {
        dispatch({type: 'GET_USER'});
        // ASYNC ACTION
        axios.get('https://randomuser.me/api').then(response => {
          dispatch({type: 'USER_RECIEVED', payload: response.data.results})
        }).catch(error => {
          dispatch({ type: 'ERROR', payload: error})
        })
        dispatch({type: 'AFTER ASYNC ACTION'});
      });
  }
}
// REDCUER
function userReducer(state = {}, action) {
  const user = {
    name: '',
    email: '',
    gender: ''
  };
  switch (action.type) {
    case 'GET_USER':
      state = {...state, status: 'Pending...', statusClass: 'text-info'}
      break;
    case 'USER_RECIEVED':
      user.name = `${action.payload[0].name.first} ${action.payload[0].name.last}`
      user.email = action.payload[0].email;
      user.gender = action.payload[0].gender;
      state = {...state,  user, status: 'User Recieved', statusClass: 'text-success'}
      break;
    case 'ERROR':
      state = {...state, status: `${action.payload.message}`, statusClass: 'text-danger'}
      break;
    default:
      return state;
  }
  return state;
}

ReactDOM.render(<MyApp />, document.getElementById('root'));
registerServiceWorker();
