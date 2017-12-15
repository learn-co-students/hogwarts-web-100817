import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import PigFilter from './PigFilter';
import PigList from './PigList';
import hogs from '../porkers_data.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      filter: 'name',
      pigs: [...hogs],
      isGreasy: false
    };
  }

  handleGreasy = () => {
    this.setState(prevState => {
      return { isGreasy: !prevState.isGreasy };
    });
  };

  changeFilter = e => {
    this.setState({
      filter: e.target.value
    });
  };

  render() {
    const pigs = this.state.pigs;
    return (
      <div className="App">
        <Nav />
        <PigFilter
          isGreasy={this.state.isGreasy}
          filterGreasy={this.handleGreasy}
          changeFilter={this.changeFilter}
        />
        <PigList
          pigList={pigs}
          filterBy={this.state.filter}
          isGreasy={this.state.isGreasy}
        />
      </div>
    );
  }
}

export default App;
