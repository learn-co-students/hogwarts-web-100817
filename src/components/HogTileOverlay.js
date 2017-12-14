import React from "react";

const HogTileOverlay = ({ toggleDisplay, name }) => (
  <div className="hover_content">
    <div className="hover_background" />
    <button className="ui inverted basic button" onClick={toggleDisplay} value={name}>Hide Me</button>
  </div>
);

export default HogTileOverlay;
