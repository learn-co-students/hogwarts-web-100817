import React from 'react';
import Pigfo from './Pigfo'

class Pigrow extends React.Component{
  state = {
    showDescription: false
  }

  pullPhotos = () => {
    let pigName = this.props.pig.name
    pigName = pigName.toLowerCase().replace(" ","_")
    this.props.pig.imgUrl = `${pigName}.jpg`
    let pigUrl = '../hog-imgs/'+ this.props.pig.imgUrl
    return pigUrl
  }

  handleClick = (event) => {
    this.setState({showDescription: !this.state.showDescription})
  }

  render(){
    var divStyle = {
      background: "#eee",
      padding: "20px",
      margin: "20px",
      "text-align": "left"
    }

    var pigDisplay = this.state.showDescription ?  <Pigfo pig={this.props.pig} />  : null
    //
    // if (this.state.showDescription){
    //   pigDisplay = <Pigfo pig={this.props.pig} />
    // } else {
    //   pigDisplay = null
    // }

    return(
      <div style={divStyle} className={this.props.pig.name} onClick={this.handleClick}>
        <p>name: {this.props.pig.name}</p>
        <img
          src={this.pullPhotos(this.props.pig)}
          alt='hog'
          >
        </img>
        {pigDisplay}
      </div>
    )
  }
}


export default Pigrow;
