import React, { Component, Fragment } from 'react';
import './App.css';
import CakeList from './Components/CakeList';
import UserSeletedCakes from '../src/Components/UserSeletedCakes';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">We are cake lovers</h1>
          </header>
          <p className="App-intro">
            <CakeList />
            <UserSeletedCakes />
          </p>
        </div>
      </Fragment>
    );
  }
}

export default App;
