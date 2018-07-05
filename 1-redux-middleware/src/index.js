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
      break;
    case 'MINUS':
      nextState.count = state.count - 1
      break;
    case 'RESET':
      nextState.count = 0
      break;
    default:
      return nextState;
  }
  return nextState;
}
const logger = createLogger();
const middleware  = applyMiddleware(logger);
const store = createStore(counterReducer,middleware );
//Class render
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
    store.subscribe(() => {
       console.log("store changed", store.getState())
       this.setState({count: store.getState().count});
    })
  }
  render(){
    return (
      <div className="container">
        <h1>{ this.state.count }</h1>
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
