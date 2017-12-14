import React from 'react';

class Filter extends React.Component {
  constructor() {
    super()

    this.state = {
      filters: 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water',
      checked: false
    }
  }

  handleChange =(event) => {
    this.setState({filters: event.target.value})
    this.props.getFilter(event.target.value)
  }

  handleChecked = (event) => {
    console.log(this.state.checked)
    let prevState = this.state.checked
    this.setState({checked: !prevState})
    this.props.greasedAnimals(!prevState)
  }

  render(){
    console.log(this.state)
    return (
      <form>
      <select value={this.state.filters} onChange={this.handleChange}>
      <option value="weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water">weight</option>
      <option value="name">name</option>
      </select><br/>
      <label> Greased </label>
      <input type="checkbox" checked={this.state.checked} onClick={this.handleChecked}></input><br/>
      </form>
    )
  }

}

export default Filter;
