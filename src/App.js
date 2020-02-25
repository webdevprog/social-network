import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header /> 
      <Technologies />
    </div>
  );
}

const Header = () => {
  return (
    <nav>
      <ul>
        <li><a href="">item-1</a></li>
        <li><a href="">item-2</a></li>
        <li><a href="">item-3</a></li>
      </ul>
    </nav>
  )
}

const Technologies = () => {
  return (
    <div>
      <ul>
        <li>html</li>
        <li>css</li>
        <li>js</li>
        <li>node.js</li>
      </ul>
    </div>
  )
}

export default App;
