import React from 'react'

class Pigfo extends React.Component{

  render(){
    return(
      <div className="moreDetails" visibility={this.props.handleClick}>
        <p>specialty: {this.props.pig.specialty}</p>
        <p>greased: {this.props.pig.greased ? "Yes":"No"}</p>
        <p>weight vs. fridge: {this.props.pig.fridgeWeight}</p>
        <p>highest medal achieved: {this.props.pig['highest medal achieved']}</p>
      </div>
    )
  }
}

export default Pigfo
