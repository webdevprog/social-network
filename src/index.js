import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

let data = {
    posts: [
        { id: 1, message: "Hello, everyone", countLike: 3 },
        { id: 2, message: "Hello, everybody", countLike: 4 },
        { id: 3, message: "This is my code.", countLike: 8 },
    ],
    messages: [
        { message: "hi, Vasya", id: 1 },
        { message: "How are you?", id: 2 },
        { message: "What's up man.", id: 3 },
        { message: "Are you crazy?", id: 4 },
        { message: "no", id: 5 }
    ],
    diaologs: [
        { name: 'Vitaiy', id: 1 },
        { name: 'Sasha', id: 2 },
        { name: 'Peter', id: 3 },
        { name: 'Katya', id: 4 },
    ]
};

ReactDOM.render(<App data={data} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
