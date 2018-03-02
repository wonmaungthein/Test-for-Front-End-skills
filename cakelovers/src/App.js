import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import CakeList from './Components/CakeList';
import UserSeletedCakes from '../src/Components/UserSeletedCakes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">We are cake lovers</h1>
        </header>
        <p className="App-intro">
          <CakeList />
          <UserSeletedCakes />
        </p>
      </div>
    );
  }
}

export default App;
