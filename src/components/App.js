import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import List from './list.js'
import hogs from '../porkers_data.js'
import Filtered from './filtered.js'

class App extends Component {

  state = {
    hogs: hogs.map((hog) => ({...hog, ...{view: 'name'}})),
    greased: false,
    filteredHogs: hogs.map((hog) => ({...hog, ...{view: 'name'}})),
    sorted: false
  }

  changeView = (changedHog) => {
    let hogIndex = this.state.hogs.findIndex((h) => h.name === changedHog.name)
    // hog.view = changedHog.view;
    this.setState(prevState => {
      let newHogs = [...prevState.hogs]
      newHogs[hogIndex] = changedHog
      return {hogs: newHogs}
    })
  }

  changeFilter = (newValue) => {
    this.setState({
      greased: newValue,
      filteredHogs: this.makeFilterArray(newValue)
    })
  }

  changeSort = (newValue) => {
    this.setState({
      sorted: newValue,
      filteredHogs: this.makeSortArray(newValue)
    })
  }

  makeSortArray = (newValue) => {
    if (newValue === "all") {
      return this.state.filteredHogs
    } else {
      return this.state.filteredHogs.sort( (a, b ) => {
        if (a[newValue] > b[newValue]) {
          return 1
        } else if (a[newValue] < b[newValue]) {
          return -1
        } else {
          return 0
        }
      })
      }
    }
    // if (newValue === "name") {
    //   return this.state.filteredHogs.sort( (a, b ) => {
    //     if (a.name > b.name) {
    //       return 1
    //     } else if (a.name < b.name) {
    //       return -1
    //     } else {
    //       return 0
    //     }
    //   })
    // }


  makeFilterArray = (bool) => {
    if (bool) {
      const filteredHogs = this.state.hogs.filter( (element) => {
        return element.greased
      })
      return filteredHogs
    } else {
      return this.state.hogs
    }
  }


  render() {
    console.log(this.state)
     return (
      <div className="App">
          < Nav />
        < Filtered changeFilter={this.changeFilter} greased={this.state.greased} sortedArray ={this.changeSort}/>
      < List changeView={this.changeView} hogs={this.state.filteredHogs} />

      </div>
    )
  }
}


export default App;
