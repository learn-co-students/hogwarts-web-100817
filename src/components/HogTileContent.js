import React from "react";
import HogTileOverlay from "./HogTileOverlay";

const HogTileContent = ({ hog, mouseOver, overlay, toggleDisplay }) => {
  const { name, specialty, greased } = hog;
  const weight =
    hog[
      "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
    ];
  const medal = hog["highest medal achieved"];
  const slug = name.toLowerCase().replace(/\s/g, "_");

  const image = require(`../hog-imgs/${slug}.jpg`);
  return (
    <div
      className="card_wrapper"
      onMouseOver={mouseOver}
      onMouseLeave={mouseOver}
    >
      <div className="ui card">
        <div className="image">
          <img src={image} alt={name} />
        </div>
        <div className="content">
          <a className="header">{name}</a>
          <div className="meta">
            <span className="date">Specialty: {specialty}</span>
          </div>
          <div className="description">
            <p>Greased: {greased ? "True" : "False"}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          <a>Medal: {medal}</a>
        </div>
      </div>
      {overlay ? (
        <HogTileOverlay toggleDisplay={toggleDisplay} name={name} />
      ) : null}
    </div>
  );
};

export default HogTileContent;
