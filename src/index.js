import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import store from './redux/state';

let rerenderTree = (state) => {
    console.log('index.js Render');
    ReactDOM.render(<App 
    state={state} 
    addPost={store.addPost.bind(store)} 
    updateTextPost={store.updateTextPost.bind(store)}     
    />, document.getElementById('root'));
}

rerenderTree(store.getState());

store.subscribe(rerenderTree);