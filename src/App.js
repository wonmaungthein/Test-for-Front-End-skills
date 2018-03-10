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
          <div className="App-intro">
            <CakeList />
            <UserSeletedCakes />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
