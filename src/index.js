import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import state from './redux/state';
import {addPost, updateTextPost, subscribe} from './redux/state';

let rerenderTree = (state) => {
    ReactDOM.render(<App state={state} addPost={addPost} updateTextPost={updateTextPost}  />, document.getElementById('root'));
}

rerenderTree(state);

subscribe(state);