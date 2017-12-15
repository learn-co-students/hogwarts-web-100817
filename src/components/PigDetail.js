import React from 'react';

const PigDetail = props => {
  const weight =
    'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water';
  return (
    <div className="ui centered card">
      <div className="image" onClick={props.showDetail}>
        <img
          src={require('../hog-imgs/' + props.convertName() + '.jpg')}
          alt="a sturdy pig"
        />
      </div>
      <div className="content">
        <p>Specialty: {props.pigs.specialty}</p>
        <p>Highest Medal Achieved: {props.pigs['highest medal achieved']}</p>
        <p>Is He Greasy? {props.pigs.greased === true ? 'Yes' : 'No'}</p>
        <p>{props.pigs[weight]} times heavier than a fridge</p>
        <p />
      </div>
      <button onClick={props.toggleCard} className="bottom attached button">
        <i className="remove icon" />
      </button>
    </div>
  );
};

export default PigDetail;
