import React from "react";
import HogTileContent from "../HogTileContent";

class HogTile extends React.Component {
  state = {
    overlay: false
  };

  mouseOverHandler = e => {
    if (e.type === "mouseover") {
      this.setState(prevState => {
        return {
          ...prevState,
          overlay: true
        };
      });
    } else if (e.type === "mouseleave") {
      this.setState(prevState => {
        return {
          ...prevState,
          overlay: false
        };
      });
    }
  };

  render() {
    return (
      <div className="ui eight wide column">
        <HogTileContent
          hog={this.props.hog}
          mouseOver={this.mouseOverHandler}
          overlay={this.state.overlay}
          toggleDisplay={this.props.toggleDisplay}
        />
      </div>
    );
  }
}

export default HogTile;
