import React from 'react';

class Hog extends React.Component {
  onViewChange = () => {
    let myHog = this.props.hog
    // console.log({...myHog});
    myHog.view = (myHog.view === 'name' ? 'full' : 'name')
    // console.log({...myHog});
    this.props.changeView(myHog)
  }

  render() {
    const hog = this.props.hog
    if (hog.view === 'name') {
      return <div><h1>{hog.name}</h1><button onClick={this.onViewChange}>Get to Know the Hog</button></div>
    }else{
      return <div><h1>{hog.name}</h1><button onClick={this.onViewChange}>Shoo Hog</button>
      <h3>{hog.specialty}</h3>
      <h4>{hog.greased ? "Greased" : "Not greased" }</h4>
      <h5>{hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</h5><br /></div>
    }
  }
}

export default Hog;
