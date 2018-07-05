import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'

// REDCUER
function counterReducer(state = { count: 0 }, action) {
  var nextState = {
    count: state.count
  }

  switch (action.type) {
    case 'ADD':
      nextState.count = state.count + 1
      return nextState
      break;
    case 'MINUS':
      nextState.count = state.count - 1
      return nextState
      break;
    case 'RESET':
      nextState.count = 0
      return nextState
      break;
    default:
      return state
  }
}

const logger = createLogger();
const middleware  = applyMiddleware(logger);
const store = createStore(counterReducer,middleware );

store.subscribe(() => {
 console.log("store changed", store.getState())
})

class MyApp extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div className="container">
        <h1 id="counter"></h1>
        <button className='btn btn-success mr-1' onClick={this.handleAdd}>Add</button>
        <button className='btn btn-info mr-1' onClick={this.handleMinus}>Minus</button>
        <button className='btn btn-danger' onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
  handleAdd = (e) => {
    store.dispatch({ type: 'ADD' })
  }
  handleMinus = (e) => {
    store.dispatch({ type: 'MINUS' })
  }
  handleReset = (e) => {
    store.dispatch({ type: 'RESET' })
  }
}

ReactDOM.render(<MyApp />, document.getElementById('root'));
registerServiceWorker();
