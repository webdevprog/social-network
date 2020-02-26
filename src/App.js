import React from 'react';
import Technologies from './technologies';
import './App.css';
import Footer from './Footer';
import Header from './Header';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Technologies />
      <Footer />
    </div>
  );
}

export default App;
