import React from 'react';
import Hog from './hog.js'


class List extends React.Component {

listHogs = () => {
  const hogs = this.props.hogs.map( (element) => {
    return <Hog changeView={this.props.changeView} hog={element} />
  })
  return hogs
}



  render() {
    return (
      <div>{this.listHogs()}</div>

    )
  }
}

export default List
