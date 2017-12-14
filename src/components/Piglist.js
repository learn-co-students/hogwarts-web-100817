import React from 'react';
import Pigrow from './Pigrow.js'

class Piglist extends React.Component{

  render(){
    const pigList = this.props.pigs.map( (pig) => (
      <Pigrow pig={pig}/>
    ));
    return(
      <div>
      {pigList}
      </div>
    )
  }
}

export default Piglist;
