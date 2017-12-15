import React from 'react';

export default class PigFilter extends React.Component {
  render() {
    return (
      <div>
        <form action="">
          <h4>This is the filter</h4>
          <div className="field">
            Greasy pigs?
          <input
            onChange={this.props.filterGreasy}
            type="checkbox"
            value={this.props.isGreasy}
            className="ui checkbox"
          />
          </div>
          <br/>
          <select onChange={this.props.changeFilter} className="ui compact selection dropdown">
            <option value="name">By Name</option>
            <option value="weight">By Weight</option>
          </select>
        </form>
      </div>
    );
  }
}
