import React, { Component } from 'react';
import logo from './../public/snax_logo.png';
import './App.css';
import { Route } from 'react-router-dom';

// Navbar Components
import Navbar from './Components/Navbar/Navbar';
import Menu from './Components/Menu/Menu';
import History from './Components/History/History';
import Discounts from './Components/Discounts/Discounts';
import Connect from './Components/Connect/Connect';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to SNAX</h2>
          <h3>WIP</h3>
        </div>
        <div>
          <Navbar />
          <Route path='/' exact component={Menu} />
          <Route path='/menu' component={Menu} /> 
          <Route path='/history' component={History} />
          <Route path='/discounts' component={Discounts} />
          <Route path='/connect' component={Connect} />
        </div>
        <p className="App-intro">
          <h2>Please check back for updates</h2>
        </p>
      </div>
    );
  }
}

export default App;
