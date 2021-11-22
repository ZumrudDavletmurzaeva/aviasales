/* eslint-disable react/jsx-filename-extension */
import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware,  compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import App from "./components/app/app";
import reducer from './reducer';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));



ReactDOM.render(
  <Provider store={store}>
<App />
</Provider>,
 document.getElementById("root"));