import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import store from './redux/redux-store';
import { Provider } from 'react-redux';

let rerenderTree = () => {
    ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
}

rerenderTree();

store.subscribe(() => {
    let state = store.getState();
    rerenderTree(state);
});