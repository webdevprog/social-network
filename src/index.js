import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import store from './redux/state';

let rerenderTree = (state) => {
    ReactDOM.render(<App 
    state={state} 
    dispatch={store.dispatch.bind(store)}  
    />, document.getElementById('root'));
}

rerenderTree(store.getState());

store.subscribe(rerenderTree);