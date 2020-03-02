import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {addPost, updateTextPost} from './redux/state';


export let rerenderTree = (state) => {
    ReactDOM.render(<App state={state} addPost={addPost} updateTextPost={updateTextPost}  />, document.getElementById('root'));
}

