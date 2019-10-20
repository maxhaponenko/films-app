import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';

import store from './redux/store';


let reRenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App  state={state}/>
            </Provider>
        </BrowserRouter>, document.getElementById('root'));
}

reRenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    reRenderEntireTree(state)
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
