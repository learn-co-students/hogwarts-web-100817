import React from 'react';

export default class PigFace extends React.Component {
  render() {
    return (
      <div className="ui centered card">
        <div className="image" onClick={this.props.showDetail}>
          <img
            src={require('../hog-imgs/' + this.props.convertName() + '.jpg')}
            alt="a sturdy pig"
          />
        </div>
        <div className="content">
          <a className="header">{this.props.pigs.name}</a>
        </div>
        <button
          onClick={this.props.toggleCard}
          className="bottom attached button"
        >
          <i className="remove icon" />
        </button>
      </div>
    );
  }
}
