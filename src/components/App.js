import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data.js'
import Index from './Index.js'
import Filter from './Filter.js'

class App extends Component {
  constructor(){
    let weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    super()
    this.state = {
      filter: weight,
      clicked: '',
      hidden: [],

      filteredHogs: hogs.sort(function(a,b) {
      if(a[weight] <b[weight]) {
        return -1
      } else if (a[weight] > b[weight]) {
        return 1;
      }
      return 0;
    })
    }
  }

  handleUnhide = (name) => {
    let hidden = this.state.hidden.slice()
    let index = hidden.indexOf(name)
    hidden.splice(index, 1)
    console.log(hidden)
    this.setState({
      hidden: hidden
    })
  }

  handleHidden =(name) => {
    this.setState({hidden: [...this.state.hidden,name]})
  }
  handleClick =(name) => {
    console.log(name)
    this.setState({clicked: name})
  }

  getFilter = (value) => {
    console.log(value)
    this.setState({filter: value, filteredHogs:
      hogs.sort(function(a,b) {
      if(a[value] <b[value]) {
        return -1
      } else if (a[value] > b[value]) {
        return 1;
      }
      return 0;
    })})
  }


  greasedAnimals = (bool) => {
    if (bool === true) {
    this.setState({
      filteredHogs: this.state.filteredHogs.filter(hog => {
      return hog.greased === bool
    })})
  } else {
    this.getFilter(this.state.filter)
  }
  }

  render() {

    return (
      <div className="App">
          < Nav />
          <Filter getFilter={this.getFilter} greasedAnimals={this.greasedAnimals}/>
          <Index handleUnhide={this.handleUnhide} hidden={this.state.hidden} handleHidden={this.handleHidden} clicked={this.state.clicked} handleClick={this.handleClick} hogs={this.state.filteredHogs}/>
      </div>
    )
  }
}

export default App;
