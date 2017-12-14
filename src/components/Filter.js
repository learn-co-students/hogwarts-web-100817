import React from "react";

const Filter = ({ filterHandler, showAll, disabled }) => {
  return (
    <div id="filter">
      <select onChange={filterHandler} className="ui dropdown">
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
      <button className={`ui basic button ${disabled}`} onClick={showAll}>Show All Hogs</button>
      <div className="ui toggle checkbox">
        <input type="checkbox" value="greased" onChange={filterHandler} />
        <label>Greased</label>
      </div>
    </div>
  );
};

export default Filter;
