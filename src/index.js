import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
// import express { Router }from 'express'
import allReducers from '../src/reducers/index'
import * as serviceWorker from './serviceWorker';
import App from './App';
import './index.css';



const store = createStore(
    allReducers, 
    {
    products: ["RZA", "GZA", "ODB", "Mef", "Math", "Cap"],
    another: "Off to the 36th chamber"
    },
    //This is what makes the dev tools show up correctly.
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,

    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();