import React from 'react';

class Photo extends React.Component {
  handlePhoto = () => this.props.handleClick(this.props.hog.name)
  handleHidden = () => this.props.handleHidden(this.props.hog.name)
  render(){

    return (
      <div className="card">
      <h1>{this.props.hog.name}</h1>
      <div className="image">
        <img onClick={this.handlePhoto} id={this.props.hog.name} src={require('../hog-imgs/'+ this.props.convertName(this.props.hog.name)+  '.jpg')}/>
      </div>
      <button className='ui button' onClick={this.handleHidden} id={this.props.hog.name}>Hide</button>
      </div>
    )
  }

}
export default Photo;
