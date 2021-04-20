import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import {createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import heroReducer from './reducers/heroReducers'



let store = createStore(heroReducer, composeWithDevTools(applyMiddleware(thunk)))


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

