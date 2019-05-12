import React, { Component } from 'react';
import logo from './../public/snax_logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to SNAX</h2>
          <h3>WIP</h3>
        </div>
        <p className="App-intro">
          <h2>Please check back for updates</h2>
        </p>
      </div>
    );
  }
}

export default App;
