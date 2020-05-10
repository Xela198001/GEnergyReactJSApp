/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import Header from './components/Headers/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="contaner">
          <Header />
          <Main />
          <Footer />
          </div>
      </div>
    </div>
  );
}

export default App;
