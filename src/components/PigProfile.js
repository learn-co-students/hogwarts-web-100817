import React from 'react';

var GphApiClient = require('giphy-js-sdk-core')
let client = GphApiClient("BUzkFARZTfgoCOSqxaRNYkfgZlP5nf6I")
class PigProfile extends React.Component {
  state = {
    url: ''
  }

  componentWillMount(){
    this.getPigGIF()
  }

  getPigGIF = () => {client.random('gifs', {'tag': 'pig'})
  .then(response => this.setState({url: response.data.images.fixed_height_downsampled.gif_url}))
  }

  render(){
    console.log(this.state.url)
    return (
      <div>
      <h1>{this.props.hog.name}</h1>
      <img id={this.props.hog.name} src={require('../hog-imgs/'+ this.props.convertName(this.props.hog.name)+  '.jpg')}>
      </img>
        <div className="moreInfo">
        <h4> {this.props.hog.specialty} </h4>
        <p> {this.props.hog['highest medal achieved']} </p>
        </div>
        <img src={this.state.url}></img>
      </div>
    )
  }
}

export default PigProfile;
