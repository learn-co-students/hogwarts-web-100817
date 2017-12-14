import React from 'react';

class Filtered extends React.Component {

  onGreased = (event) => {
    let target = event.target
    this.props.changeFilter(target.checked)
    }

    sorted = (event) => {
      let target = event.target
      this.props.sortedArray(target.value)
    }


  render() {
    const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    
    return (
      <div>
      <form>
        <input id="checkbox" type="checkbox" onChange={this.onGreased} checked={this.props.greased}></input>
        <label for="checkbox"> Is she greased?! </label>
        <select value={this.props.sort} onChange={this.sorted}>
        <option value="all">All</option>
          <option value={weight}>Weight</option>
          <option value="name">Name</option>
        </select>
      </form>
      </div>
    )
  }
}


export default Filtered;
