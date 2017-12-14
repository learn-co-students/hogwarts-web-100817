import React, { Component } from 'react';
import './App.css';
import HogTiles from './HogTiles';
import Nav from '../Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <HogTiles />
      </div>
    )
  }
}

export default App;
