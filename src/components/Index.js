// create an index displaying all hog tiles
// render each hog name and picture in a tile, and show the hog's details upon a user's click
import React from 'react';
import Photo from './Photo.js'
import PigProfile from './PigProfile.js'

class Index extends React.Component {

  getHogData = () => {
    console.log(this.props)
    return this.props.hogs.map(hog => {
      if (this.props.clicked === hog.name) {
        return <PigProfile convertName={this.convertName}  hog={hog}/>
      } else if (this.props.hidden.includes(hog.name)) {
        return <div><button className='ui button' onClick={this.unHide} id={hog.name}>Unhide {hog.name}</button></div>
      } else {
       return <Photo handleHidden={this.handleHidden} handleClick={this.handleClick} convertName={this.convertName} hog={hog}/>
     }
    })
  }

  unHide = (event) => {
    this.props.handleUnhide(event.target.id)
  }


  handleClick = (name) => {
    this.props.handleClick(name)
  }

  convertName = (name) => {
    return name.toLowerCase().split(" ").join("_")
  }

  handleHidden = (name) => {
    this.props.handleHidden(name)
  }

  render(){
    let hog = this.getHogData()
    return (
      <div className= "ui link cards">
        {hog}
      </div>
    )
  }
}
export default Index;
